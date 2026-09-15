<?php
/**
 * ============================================================================
 * LA CASA DE PAPEL - PROCESADOR DE CONTACTO Y DEVOLUCIONES (PHP)
 * Recibe y procesa comentarios, mejoras o devoluciones de la página.
 * ============================================================================
 */

// Encabezados de respuesta
header('Content-Type: application/json; charset=utf-8');

// Archivo de almacenamiento de mensajes (formato JSON)
$archivoMensajes = __DIR__ . '/mensajes.json';

// Responder únicamente a solicitudes POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // Si se accede directamente por GET desde el navegador
    http_response_code(405);
    echo json_encode([
        'status' => 'error',
        'titulo' => 'Método no permitido',
        'mensaje' => 'Solo se admiten transmisiones cifradas mediante método POST.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Obtener datos (compatible con application/x-www-form-urlencoded, multipart/form-data y application/json)
$inputRaw = file_get_contents('php://input');
$jsonData = json_decode($inputRaw, true);

$nombre  = isset($_POST['nombre'])  ? trim($_POST['nombre'])  : ($jsonData['nombre']  ?? '');
$email   = isset($_POST['email'])   ? trim($_POST['email'])   : ($jsonData['email']   ?? '');
$tipo    = isset($_POST['tipo'])    ? trim($_POST['tipo'])    : ($jsonData['tipo']    ?? 'Mejora');
$mensaje = isset($_POST['mensaje']) ? trim($_POST['mensaje']) : ($jsonData['mensaje'] ?? '');

// Sanitización de entradas
$nombre  = htmlspecialchars($nombre, ENT_QUOTES, 'UTF-8');
$email   = filter_var($email, FILTER_SANITIZE_EMAIL);
$tipo    = htmlspecialchars($tipo, ENT_QUOTES, 'UTF-8');
$mensaje = htmlspecialchars($mensaje, ENT_QUOTES, 'UTF-8');

// Validaciones básicas
$errores = [];

if (empty($nombre)) {
    $errores[] = 'El alias o nombre de la Resistencia es obligatorio.';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errores[] = 'Proporciona una dirección de correo electrónico válida para el canal seguro.';
}

if (empty($mensaje)) {
    $errores[] = 'El mensaje o detalle de la devolución no puede estar vacío.';
}

if (strlen($mensaje) < 5) {
    $errores[] = 'El mensaje debe contener al menos 5 caracteres.';
}

// Si hay errores, retornar respuesta de validación
if (!empty($errores)) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'titulo' => 'Alerta de Seguridad táctica',
        'errores' => $errores,
        'mensaje' => implode(' ', $errores)
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Estructurar el nuevo registro
$nuevoMensaje = [
    'id'         => 'MSG-' . strtoupper(substr(md5(uniqid(mt_rand(), true)), 0, 8)),
    'fecha'      => date('Y-m-d H:i:s'),
    'alias'      => $nombre,
    'email'      => $email,
    'tipo'       => $tipo,
    'mensaje'    => $mensaje,
    'ip_origen'  => $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1'
];

// Cargar mensajes existentes y agregar el nuevo
$mensajesGuardados = [];
if (file_exists($archivoMensajes)) {
    $contenido = file_get_contents($archivoMensajes);
    $decoded = json_decode($contenido, true);
    if (is_array($decoded)) {
        $mensajesGuardados = $decoded;
    }
}

$mensajesGuardados[] = $nuevoMensaje;

// Guardar en el archivo JSON
$guardado = @file_put_contents($archivoMensajes, json_encode($mensajesGuardados, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

// Si la petición proviene de un formulario HTML clásico (no AJAX fetch)
$esAjax = !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest'
       || (isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false);

if (!$esAjax && !isset($jsonData)) {
    // Renderizado visual HTML elegante si el usuario envió el form sin JS
    header('Content-Type: text/html; charset=utf-8');
    ?>
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Mensaje Recibido | La Resistencia</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
      <link rel="stylesheet" href="styles.css">
      <style>
        .confirm-wrapper {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .confirm-card {
          background: #131317;
          border: 2px solid #e50914;
          border-radius: 12px;
          padding: 3rem;
          max-width: 600px;
          text-align: center;
          box-shadow: 0 0 30px rgba(229, 9, 20, 0.4);
        }
      </style>
    </head>
    <body>
      <div class="confirm-wrapper">
        <div class="confirm-card">
          <i class="fa-solid fa-circle-check" style="font-size: 3.5rem; color: #e50914; margin-bottom: 1rem;"></i>
          <h1 style="font-family: 'Bebas Neue', sans-serif; font-size: 2.2rem; color: #fff; margin-bottom: 0.5rem;">
            ¡TRANSMISIÓN ENCRIPTADA ENVIADA!
          </h1>
          <p style="color: #a0a0ab; font-size: 0.95rem; margin-bottom: 1.5rem;">
            Gracias <strong><?= htmlspecialchars($nombre) ?></strong>. Tu devolución sobre <em>"<?= htmlspecialchars($tipo) ?>"</em> ha sido entregada al Profesor con el código <code><?= $nuevoMensaje['id'] ?></code>.
          </p>
          <a href="index.html" class="btn-primary" style="display: inline-flex; justify-content: center;">
            <i class="fa-solid fa-arrow-left"></i> Volver a la Base
          </a>
        </div>
      </div>
    </body>
    </html>
    <?php
    exit;
}

// Respuesta JSON para llamadas asíncronas
echo json_encode([
    'status'   => 'success',
    'codigo'   => $nuevoMensaje['id'],
    'titulo'   => 'Transmisión confirmada',
    'mensaje'  => '¡Tu devolución ha sido recibida con éxito en la guarida del Profesor!',
    'registro' => [
        'alias' => $nombre,
        'tipo'  => $tipo,
        'fecha' => $nuevoMensaje['fecha']
    ]
], JSON_UNESCAPED_UNICODE);
exit;
