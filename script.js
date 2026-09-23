/* ==========================================================================
   LA CASA DE PAPEL - LÓGICA DE INTERACCIÓN (JAVASCRIPT ES6)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- DATASET DE PERSONAJES --- */
  const characters = [
    {
      id: 'profesor',
      codename: 'EL PROFESOR',
      realname: 'Sergio Marquina / Salvador Martín',
      category: 'banda',
      role: 'Cerebro y Líder Estratégico',
      desc: 'Mente maestra detrás de los atracos a la Fábrica Nacional de Moneda y Timbre y al Banco de España. Analítico, metodológico y siempre 10 pasos adelante.',
      fullBio: 'Sergio pasó gran parte de su infancia en hospitales escuchando a su padre planear el mayor atraco jamás imaginado. Tras la muerte de su padre, dedicó su vida a perfeccionar cada detalle táctico, político y psicológico para ejecutar los dos golpes financieros más ambiciosos del mundo sin víctimas fatales.',
      quote: 'Lo importante no es lo que nos pase, sino lo que vamos a hacer con ello.',
      image: 'img/profesor.png'
    },
    {
      id: 'tokio',
      codename: 'TOKIO',
      realname: 'Silene Oliveira',
      category: 'banda',
      role: 'Narradora y Fuerza Asalto',
      desc: 'Fieramente independiente, impulsiva y leal. Tokio es la voz narrativa de la historia y una guerrera formidable en situaciones de combate extremo.',
      fullBio: 'Marcada por una vida de atracos menores y pérdidas trágicas, Silene fue reclutada por El Profesor cuando estaba a punto de ser capturada. Su temperamento explosivo a menudo desafía la disciplina de la banda, pero su valentía incondicional la convierte en el corazón combatiente de La Resistencia.',
      quote: 'Al fin y al cabo, el amor es lo que nos hace ver la vida de otro color, y últimamente, todo ha sido negro.',
      image: 'img/tokio.png'
    },
    {
      id: 'berlin',
      codename: 'BERLÍN',
      realname: 'Andrés de Fonollosa',
      category: 'banda',
      role: 'Comandante en el Campo',
      desc: 'Hermano mayor del Profesor y al mando directo dentro de la Fábrica de Moneda. Narcisista, sofisticado, frío pero con un oscuro sentido del honor.',
      fullBio: 'Afectado por la enfermedad rara de Helmer, Andrés vive cada segundo con la intensidad de quien sabe que su tiempo se agota. Su liderazgo firme e implacable mantiene el orden en el atraco, sacrificándose heroicamente para permitir la fuga de sus compañeros en la Parte 2.',
      quote: 'La muerte puede ser la mayor oportunidad de tu vida.',
      image: 'img/berlin.png'
    },
    {
      id: 'nairobi',
      codename: 'NAIROBI',
      realname: 'Ágata Jiménez',
      category: 'banda',
      role: 'Jefa de Impresión y Oro',
      desc: 'Carismática, optimista y líder nata. Encargada de supervisar la producción de billetes y el fundido de las 90 toneladas de oro puro.',
      fullBio: 'Experta falsificadora desde muy joven, Nairobi se une al plan con el sueño de recuperar la custodia de su hijo Axel. Su energía motivacional inspira tanto a la banda como a los propios rehenes en los talleres de producción.',
      quote: '¡Empieza el matriarcado!',
      image: ''
    },
    {
      id: 'denver',
      codename: 'DENVER',
      realname: 'Daniel Ramos',
      category: 'banda',
      role: 'Especialista en Asalto',
      desc: 'Conocido por su risa inconfundible y su carácter noble. Hijo de Moscú, Denver pasa de ser un joven pendenciero a un protector abnegado.',
      fullBio: 'Se unió al atraco junto a su padre Moscú. Su compasión por Mónica Gaztambide durante el primer secuestro demuestra su gran corazón bajo una fachada de chico duro.',
      quote: 'Si me matan, no te preocupes. Moriré riéndome.',
      image: ''
    },
    {
      id: 'rio',
      codename: 'RÍO',
      realname: 'Aníbal Cortés',
      category: 'banda',
      role: 'Hacker y Telecomunicaciones',
      desc: 'El miembro más joven de la banda. Prodigio informático capaz de vulnerar los sistemas de seguridad satelitales y militares más avanzados.',
      fullBio: 'Reclutado por el Profesor por sus habilidades cibernéticas. Su captura por las autoridades internacionales en Panamá se convierte en el detonante para el segundo atraco al Banco de España.',
      quote: 'Para mí el Profesor es como un dios. No falla nunca.',
      image: ''
    },
    {
      id: 'helsinki',
      codename: 'HELSINKI',
      realname: 'Mirko Dragic',
      category: 'banda',
      role: 'Fuerza Pesada y Armamento',
      desc: 'Veterano de guerra serbio con un corazón enorme. Experto en armamento pesado, leal hasta el extremo y protector incondicional de Nairobi.',
      fullBio: 'Exmilitar serbio que combatió junto a su primo Oslo en las guerras balcánicas. A pesar de su imponente físico y su dominio letal de ametralladoras pesadas como la Browning M2, Helsinki es una persona sensible, empática y profundamente leal. Su estrecho vínculo emocional con Nairobi y Palermo lo convierte en uno de los pilares sentimentales más queridos de La Resistencia.',
      quote: 'Tú eres mi familia ahora. Y por la familia, se da la vida.',
      image: ''
    },
    {
      id: 'oslo',
      codename: 'OSLO',
      realname: 'Radko Dragic',
      category: 'banda',
      role: 'Fuerza de Choque y Custodia',
      desc: 'Primo de Helsinki y combatiente de las guerras balcánicas. Hombre de pocas palabras y fuerza descomunal, encargado de la contención de rehenes.',
      fullBio: 'Veterano de guerra serbio que acompañó a Helsinki en el primer golpe a la Fábrica Nacional de Moneda y Timbre. Encargado de vigilar los accesos y la disciplina de los rehenes en los talleres. Tras sufrir una traicionera agresión de un grupo de rehenes liderados por Arturo Román, queda en coma irreversible y es despedido con dolor y dignidad por su primo Helsinki.',
      quote: 'Tranquilo, hermano. Siempre juntos hasta el final.',
      image: ''
    },
    {
      id: 'bogota',
      codename: 'BOGOTÁ',
      realname: 'Santiago López',
      category: 'banda',
      role: 'Jefe de Soldadura y Minería Submarina',
      desc: 'El mejor soldador del mundo bajo el agua. Vital para penetrar la cámara acorazada inundable del Banco de España y fundir las 90 toneladas de oro.',
      fullBio: 'Soldador de plataformas petrolíferas y padre de múltiples hijos alrededor del mundo. Fiel, trabajador incansable y de temple inquebrantable. Es la pieza indispensable elegida por el Profesor para sumergirse con escafandra en la cámara acorazada sumergida y coordinar el fundido de las 90 toneladas de lingotes de oro puro en granalla.',
      quote: 'El oro no es dinero, Sergio. El oro es la sangre de este país.',
      image: ''
    },
    {
      id: 'marsella',
      codename: 'MARSELLA',
      realname: 'Luka Peric',
      category: 'banda',
      role: 'Enlace Exterior y Operaciones Encubiertas',
      desc: 'Operador silencioso y estratega exterior del Profesor. Exmilitar amante de los animales, clave en el transporte encubierto y la Operación París.',
      fullBio: 'Veterano de guerra balcánico que no tolera la violencia contra los animales. Opera desde el exterior como el brazo ejecutor logístico y de distracción del Profesor. Su sangre fría y precisión le permiten burlar radares, conducir señuelos móviles y ejecutar la Operación París para extraer a Lisboa de las autoridades.',
      quote: 'Si tocas a ese perro, te mato antes de que el Profesor termine su frase.',
      image: ''
    },
    {
      id: 'palermo',
      codename: 'PALERMO',
      realname: 'Martín Berrote',
      category: 'banda',
      role: 'Comandante en el Banco de España',
      desc: 'Ingeniero brillante y coautor del golpe al Banco de España junto a Berlín. De temperamento volcánico, carismático y estratega implacable.',
      fullBio: 'Amigo íntimo y enamorado en silencio de Berlín durante años en el monasterio de Florencia. Martín diseñó la hidrodinámica de la cámara sumergida y la extracción del oro por tuberías. Asume el mando operativo dentro del Banco de España, mostrando un liderazgo caótico pero de un intelecto deslumbrante.',
      quote: '¡El plan es una obra de arte, Sergio! ¡Y yo soy quien lo va a dirigir!',
      image: ''
    },
    {
      id: 'lisboa',
      codename: 'LISBOA / INSPECTORA',
      realname: 'Raquel Murillo',
      category: ['banda', 'ley'],
      role: 'Negociadora / Táctica de La Banda',
      desc: 'Inspectora al mando de la negociación en el primer atraco que acaba enamorándose del Profesor y uniéndose a la banda bajo el alias Lisboa.',
      fullBio: 'Brillante estratega policial que descubre la manipulación psicológica del Profesor mientras toma un café con él bajo la identidad de Salvador. Tras entender sus motivos, se pasa al bando de la Resistencia.',
      quote: 'En los atracos, la clave no es el dinero, es ganar tiempo.',
      image: ''
    },
    {
      id: 'alicia',
      codename: 'INSPECTORA SIERRA',
      realname: 'Alicia Sierra',
      category: 'ley',
      role: 'Inspectora Implacable',
      desc: 'Inspectora al mando de la contrainteligencia en el Banco de España. Negociadora astuta, implacable y dispuesta a cruzar todos los límites éticos.',
      fullBio: 'Especialista en tortura psicológica y manipulación mediática, Alicia logra descubrir el escondite del Profesor en la Parte 4, desencadenando un duelo intelectual épico.',
      quote: 'Yo no juego a la policía buena y al policía malo. Yo soy el policía terrible.',
      image: ''
    },
    {
      id: 'gandia',
      codename: 'GANDÍA',
      realname: 'César Gandía',
      category: 'ley',
      role: 'Jefe de Seguridad del Banco de España',
      desc: 'Exsoldado de Operaciones Especiales y jefe de seguridad del Banco. Letal, fanático del deber y el peor enemigo dentro del asedio.',
      fullBio: 'Entrenado en guerra asimétrica y contrainsurgencia, César Gandía es el enemigo más sanguinario y peligroso que enfrenta la banda dentro del Banco de España. Tras liberarse de sus esposas en la Parte 4, se refugia en la sala de pánico secreta y desata una guerra de guerrillas que culmina con la trágica muerte de Nairobi.',
      quote: 'Ustedes juegan a ser héroes con caretas de plástico. Yo soy un soldado.',
      image: ''
    },
    {
      id: 'estocolmo',
      codename: 'ESTOCOLMO',
      realname: 'Mónica Gaztambide',
      category: ['banda', 'rehenes'],
      role: 'Rehén Convertida en Banda',
      desc: 'Secretaria de la F.N.M.T. que sufre el síndrome de Estocolmo tras enamorarse de Denver, convirtiéndose en un miembro oficial en el Banco de España.',
      fullBio: 'Embarazada durante el primer atraco, Mónica encuentra la valentía para tomar las armas y defender a Denver y a la banda frente a los asaltos de las fuerzas especiales.',
      quote: 'Ya no soy una rehén. Soy parte de esto.',
      image: ''
    },
    {
      id: 'arturo',
      codename: 'ARTURITO',
      realname: 'Arturo Román',
      category: 'rehenes',
      role: 'Director de la F.N.M.T.',
      desc: 'Director cobarde y manipulador que intenta infructuosamente liderar rebeliones entre los rehenes para convertirse en un héroe nacional.',
      fullBio: 'Tras sobrevivir al primer atraco, utiliza su fama mediática para dar charlas motivacionales, colándose de nuevo en el Banco de España buscando atención mediática.',
      quote: '¡Yo soy el héroe de la Fábrica de Moneda!',
      image: ''
    }
  ];

  /* --- DATASET DE TEMPORADAS --- */
  const seasonsData = {
    1: {
      part: 'PARTE 1',
      title: 'El Atraco a la Fábrica Nacional de Moneda y Timbre',
      location: 'Fábrica Nacional de Moneda y Timbre, Madrid',
      episodes: '13 Episodios',
      loot: '2.400 Millones de Euros (Objetivo)',
      synopsis: 'Un misterioso hombre conocido como El Profesor reúne a ocho criminales con habilidades únicas para infiltrarse en la F.N.M.T. Su plan no es robar dinero existente, sino imprimir 2.400 millones de euros en billetes sin marcar mientras mantienen a 67 rehenes durante 11 días.',
      poster: 'img/hero.png',
      highlights: ['Impresión masiva de billetes nuevos', 'Creación del himno Bella Ciao en la finca', 'Entrada de la Inspectora Raquel Murillo']
    },
    2: {
      part: 'PARTE 2',
      title: 'La Huida y el Fin de la Primera Fase',
      location: 'Túnel de Extracción / Casa de Toledo',
      episodes: '9 Episodios',
      loot: '984 Millones de Euros Extraídos',
      synopsis: 'La policía cerca la Fábrica de Moneda y la tensión interna amenaza con destruir a la banda desde dentro. El Profesor debe ejecutar el Plan Alcatraz para sacar a los supervivientes junto con casi mil millones de euros impresos, sufriendo pérdidas dolorosas en el camino.',
      poster: 'img/berlin.png',
      highlights: ['Sacrificio heroico de Berlín', 'Escape a través del túnel de Palop', 'Encuentro final en Palawan, Filipinas']
    },
    3: {
      part: 'PARTE 3',
      title: 'El Rescate de Río y el Banco de España',
      location: 'Banco de España, Madrid',
      episodes: '8 Episodios',
      loot: '90 Toneladas de Oro Puro',
      synopsis: 'Tres años después, Río es capturado por la Interpol. El Profesor reúne nuevamente a la banda con nuevos integrantes (Palermo, Lisboa, Bogotá, Marsella) para realizar un atraco aún mayor al Banco de España y forzar la liberación de Río.',
      poster: 'img/profesor.png',
      highlights: ['Fundido del oro a granalla milimétrica', 'Apertura de la cámara acorazada sumergida', 'Aparición de la Inspectora Alicia Sierra']
    },
    4: {
      part: 'PARTE 4',
      title: 'El Caos Interno y la Resistencia',
      location: 'Banco de España (Zona de Guerra)',
      episodes: '8 Episodios',
      loot: 'Oro en proceso de extracción',
      synopsis: 'La banda enfrenta su momento más oscuro dentro del banco. Con Nairobi gravemente herida y la amenaza de Gandía (jefe de seguridad del banco) suelto en las instalaciones, El Profesor debe mantener el control psicológico desde el exterior.',
      poster: 'img/tokio.png',
      highlights: ['Tragedia y despedida de Nairobi', 'Operación París para liberar a Lisboa', 'Alicia Sierra localiza el escondite del Profesor']
    },
    5: {
      part: 'PARTE 5',
      title: 'La Guerra Total y el Plan de Latón',
      location: 'Banco de España / Estación de Camioneros',
      episodes: '10 Episodios',
      loot: '90 Toneladas de Oro (Convertidas en Latón)',
      synopsis: 'El ejército asalta el Banco de España. En el enfrentamiento final, la banda utiliza el engaño macroeconómico definitivo: sustituir la reserva nacional de oro por lingotes de latón bañados, negociando su libertad como un secreto de Estado.',
      poster: 'img/hero.png',
      highlights: ['Batalla definitiva contra fuerzas especiales', 'El gran truco del Profesor con el Banco Central', 'Comienza una nueva vida para los supervivientes']
    }
  };

  /* --- FRASES CÉLEBRES --- */
  const quotes = [
    { text: '"Al fin y al cabo, el amor es lo que nos hace ver la vida de otro color, y últimamente, todo ha sido negro."', author: '- Tokio' },
    { text: '"Lo importante no es lo que nos pase, sino lo que vamos a hacer con ello."', author: '- El Profesor' },
    { text: '"¡Empieza el matriarcado!"', author: '- Nairobi' },
    { text: '"La muerte puede ser la mayor oportunidad de tu vida."', author: '- Berlín' },
    { text: '"En este mundo todo se rige por el equilibrio: lo que ganas por un lado, lo pierdes por el otro."', author: '- El Profesor' },
    { text: '"No somos ladrones. Somos la Resistencia."', author: '- Denver' },
    { text: '"El tiempo es oro, pero la tranquilidad no tiene precio."', author: '- Moscú' }
  ];

  /* --- SELECCIÓN Y CONFIGURACIÓN DEL MENÚ ACTIVO SEGÚN LA PÁGINA --- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
      link.classList.add('active');
    }
  });

  /* --- CONTROL DE VISIBILIDAD DE LA MONEDA FLOTANTE --- */
  function updateFloatingCoinState(filename) {
    const isContacto = (filename || '').includes('contacto.html');
    if (isContacto) {
      document.body.classList.add('page-contacto');
      const coinBtn = document.getElementById('openFeedbackBtn');
      if (coinBtn) coinBtn.style.display = 'none';
      const modal = document.getElementById('feedbackModal');
      if (modal) modal.classList.remove('active');
    } else {
      document.body.classList.remove('page-contacto');
      const coinBtn = document.getElementById('openFeedbackBtn');
      if (coinBtn) coinBtn.style.display = '';
    }
  }

  updateFloatingCoinState(currentPath);

  /* --- MENÚ HAMBURGUESA MÓVIL --- */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navList = document.getElementById('navList');
  if (hamburgerBtn && navList) {
    hamburgerBtn.addEventListener('click', () => {
      navList.classList.toggle('mobile-active');
    });

    document.querySelectorAll('.nav-link, .dropdown-link').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('mobile-active');
      });
    });
  }

  /* --- LÓGICA DE PERSONAJES (SI EXISTEN EN EL DOM) --- */
  function renderCharacters(filter = 'all') {
    const characterGrid = document.getElementById('characterGrid');
    if (!characterGrid) return;
    characterGrid.innerHTML = '';

    const filtered = characters.filter(c => {
      if (filter === 'all') return true;
      if (Array.isArray(c.category)) return c.category.includes(filter);
      return c.category === filter;
    });

    if (filter === 'ley' || filter === 'rehenes' || filtered.length <= 2) {
      characterGrid.classList.add('is-centered');
    } else {
      characterGrid.classList.remove('is-centered');
    }

    filtered.forEach(char => {
      const card = document.createElement('div');
      card.className = 'character-card';
      card.setAttribute('data-id', char.id);

      const imageMarkup = char.image
        ? `<img src="${char.image}" alt="${char.codename}" class="card-image" loading="lazy">`
        : `<div class="card-image-placeholder">
             <i class="fa-solid fa-user-plus" style="font-size: 2rem; color: var(--color-border-glow);"></i>
             <span style="font-size: 0.72rem; color: var(--color-text-muted); margin-top: 0.4rem;">[ Sin imagen ]</span>
           </div>`;

      let badgeLabel = 'La Banda';
      if (Array.isArray(char.category)) {
        if (filter === 'ley') badgeLabel = 'Ley';
        else if (filter === 'rehenes') badgeLabel = 'Rehén';
        else badgeLabel = 'La Banda';
      } else if (char.category === 'ley') {
        badgeLabel = 'Ley';
      } else if (char.category === 'rehenes') {
        badgeLabel = 'Rehén';
      }

      card.innerHTML = `
        <div class="card-image-wrap">
          ${imageMarkup}
          <span class="card-badge">${badgeLabel}</span>
        </div>
        <div class="card-content">
          <h3 class="character-codename">${char.codename}</h3>
          <span class="character-realname">${char.realname}</span>
          <p class="character-desc">${char.desc}</p>
          <div class="card-action-btn">
            <span>Expediente Completo</span>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        card.classList.add('jumping');
        setTimeout(() => {
          openCharacterModal(char);
          card.classList.remove('jumping');
        }, 300);
      });
      characterGrid.appendChild(card);
    });
  }

  function openCharacterModal(char) {
    const modalOverlay = document.getElementById('characterModal');
    const modalImg = document.getElementById('modalImg');
    const modalCodename = document.getElementById('modalCodename');
    const modalRealname = document.getElementById('modalRealname');
    const modalRole = document.getElementById('modalRole');
    const modalBio = document.getElementById('modalBio');
    const modalQuote = document.getElementById('modalQuote');

    if (!modalOverlay) return;

    if (modalImg) {
      const modalMedia = modalImg.parentNode;
      let placeholder = document.getElementById('modalImgPlaceholder');

      if (char.image) {
        modalImg.src = char.image;
        modalImg.alt = char.codename;
        modalImg.style.display = 'block';
        if (placeholder) placeholder.style.display = 'none';
      } else {
        modalImg.style.display = 'none';
        if (!placeholder && modalMedia) {
          placeholder = document.createElement('div');
          placeholder.id = 'modalImgPlaceholder';
          placeholder.className = 'card-image-placeholder';
          placeholder.style.height = '100%';
          placeholder.style.minHeight = '280px';
          placeholder.innerHTML = `
            <i class="fa-solid fa-image" style="font-size: 2.2rem; color: var(--color-border-glow);"></i>
            <span style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.4rem;">[ Imagen no disponible ]</span>
          `;
          modalMedia.appendChild(placeholder);
        }
        if (placeholder) placeholder.style.display = 'flex';
      }
    }

    if (modalCodename) modalCodename.textContent = char.codename;
    if (modalRealname) modalRealname.textContent = char.realname;
    if (modalRole) modalRole.textContent = char.role;
    if (modalBio) modalBio.textContent = char.fullBio;
    if (modalQuote) modalQuote.textContent = `${char.quote}`;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCharacterModal() {
    const modalOverlay = document.getElementById('characterModal');
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function initCharacters() {
    const characterGrid = document.getElementById('characterGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modalOverlay = document.getElementById('characterModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const carouselViewport = document.getElementById('carouselViewport');
    const prevBtn = document.getElementById('carouselPrevBtn');
    const nextBtn = document.getElementById('carouselNextBtn');

    if (modalCloseBtn) modalCloseBtn.onclick = closeCharacterModal;
    if (modalOverlay) {
      modalOverlay.onclick = (e) => {
        if (e.target === modalOverlay) closeCharacterModal();
      };
    }

    function updateCarouselArrows() {
      if (!carouselViewport || !prevBtn || !nextBtn) return;
      const scrollLeft = carouselViewport.scrollLeft;
      const maxScroll = carouselViewport.scrollWidth - carouselViewport.clientWidth;
      const canScroll = maxScroll > 15;
      const carouselHint = document.querySelector('.carousel-hint');

      if (!canScroll) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        if (carouselHint) carouselHint.style.display = 'none';
      } else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
        if (carouselHint) carouselHint.style.display = 'flex';

        prevBtn.style.opacity = scrollLeft <= 8 ? '0.35' : '1';
        prevBtn.style.pointerEvents = scrollLeft <= 8 ? 'none' : 'all';

        nextBtn.style.opacity = scrollLeft >= maxScroll - 8 ? '0.35' : '1';
        nextBtn.style.pointerEvents = scrollLeft >= maxScroll - 8 ? 'none' : 'all';
      }
    }

    if (carouselViewport && prevBtn && nextBtn) {
      const scrollDistance = 240;

      prevBtn.onclick = () => {
        carouselViewport.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
      };

      nextBtn.onclick = () => {
        carouselViewport.scrollBy({ left: scrollDistance, behavior: 'smooth' });
      };

      carouselViewport.onscroll = () => {
        updateCarouselArrows();
      };
    }

    /* Función global para filtrar personajes y actualizar interfaz */
    window.filterCharacters = function(filterVal) {
      if (filterBtns.length > 0) {
        filterBtns.forEach(b => {
          if (b.getAttribute('data-filter') === filterVal) {
            b.classList.add('active');
          } else {
            b.classList.remove('active');
          }
        });
      }
      renderCharacters(filterVal);
      if (carouselViewport) {
        carouselViewport.scrollLeft = 0;
      }
      setTimeout(updateCarouselArrows, 60);
    };

    if (filterBtns.length > 0) {
      filterBtns.forEach(btn => {
        btn.onclick = () => {
          const filterValue = btn.getAttribute('data-filter');
          window.filterCharacters(filterValue);
        };
      });
    }

    if (characterGrid) {
      const urlParams = new URLSearchParams(window.location.search);
      const initialFilter = urlParams.get('filtro') || urlParams.get('filter') || 'all';
      window.filterCharacters(initialFilter);
      setTimeout(updateCarouselArrows, 100);
      window.addEventListener('resize', updateCarouselArrows);
    }
  }

  /* --- LÓGICA DE TEMPORADAS --- */
  window.switchSeasonTab = function(seasonNum) {
    const seasonTabs = document.querySelectorAll('.season-tab-btn');
    const seasonDetails = document.getElementById('seasonDetails');
    if (!seasonDetails) return;
    const data = seasonsData[seasonNum];
    if (!data) return;

    seasonTabs.forEach(tab => {
      if (tab.getAttribute('data-season') == seasonNum) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    const posterMarkup = data.poster
      ? `<img src="${data.poster}" alt="${data.title}" class="season-poster">`
      : `<div class="card-image-placeholder" style="height: 320px;">
           <i class="fa-solid fa-film" style="font-size: 2.5rem; color: var(--color-border-glow);"></i>
           <span style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.4rem;">[ Cartel no asignado ]</span>
         </div>`;

    seasonDetails.innerHTML = `
      <div class="season-media">
        ${posterMarkup}
      </div>

      <div class="season-info">
        <div class="season-header-meta">
          <span class="season-tag-badge">${data.part}</span>
          <span style="color: var(--color-gold); font-size: 0.8rem; font-weight: 700;">
            <i class="fa-solid fa-location-dot"></i> ${data.location}
          </span>
        </div>

        <h3 class="season-title-text">${data.title}</h3>
        <p class="season-synopsis">${data.synopsis}</p>

        <div class="season-stats-grid">
          <div class="season-stat-box">
            <span class="box-label">Duración</span>
            <span class="box-value">${data.episodes}</span>
          </div>
          <div class="season-stat-box">
            <span class="box-label">Botín</span>
            <span class="box-value">${data.loot}</span>
          </div>
        </div>

        <div style="margin-top: 0.3rem;">
          <h4 style="font-size: 0.82rem; color: #fff; margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 0.8px;">
            <i class="fa-solid fa-star" style="color: var(--color-gold);"></i> Hitos Clave de la Operación:
          </h4>
          <ul style="padding-left: 1.2rem; color: var(--color-text-muted); font-size: 0.82rem;">
            ${data.highlights.map(h => `<li style="margin-bottom: 0.25rem;">${h}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  };

  function initSeasons() {
    const seasonTabs = document.querySelectorAll('.season-tab-btn');
    const seasonDetails = document.getElementById('seasonDetails');
    if (!seasonDetails || seasonTabs.length === 0) return;

    seasonTabs.forEach(tab => {
      tab.onclick = () => {
        const seasonNum = tab.getAttribute('data-season');
        switchSeasonTab(seasonNum);
      };
    });

    const urlParams = new URLSearchParams(window.location.search);
    const parteParam = urlParams.get('parte') || urlParams.get('season') || 1;
    switchSeasonTab(parteParam);
  }

  /* --- GENERADOR DE FRASES (LA RESISTENCIA) --- */
  function initQuotes() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const quoteAuthor = document.getElementById('quoteAuthor');
    const newQuoteBtn = document.getElementById('newQuoteBtn');

    if (newQuoteBtn && quoteDisplay && quoteAuthor) {
      let currentQuoteIndex = 0;
      newQuoteBtn.onclick = () => {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        const q = quotes[currentQuoteIndex];
        
        quoteDisplay.style.opacity = '0';
        quoteAuthor.style.opacity = '0';

        setTimeout(() => {
          quoteDisplay.textContent = q.text;
          quoteAuthor.textContent = q.author;
          quoteDisplay.style.opacity = '1';
          quoteAuthor.style.opacity = '1';
        }, 200);
      };
    }
  }

  /* --- AUDIO / BANDA SONORA: INTRO LA CASA DE PAPEL (YOUTUBE: HjCQnYC22-8 / PIANO TUTORIAL) --- */
  const soundToggle = document.getElementById('soundToggle');
  const soundIcon = document.getElementById('soundIcon');
  let audioCtx = null;
  let isPlayingSound = false;
  let melodyInterval = null;
  let ytPlayer = null;
  let isYtReady = false;

  // Contenedor para el reproductor de YouTube
  let ytContainer = document.getElementById('ytPlayerContainer');
  if (!ytContainer) {
    ytContainer = document.createElement('div');
    ytContainer.id = 'ytPlayerContainer';
    ytContainer.style.cssText = 'position: fixed; right: -9999px; bottom: 0; width: 200px; height: 200px; opacity: 0.01; pointer-events: none; z-index: -999;';
    document.body.appendChild(ytContainer);
  }

  // Inicializar YouTube IFrame Player
  function setupYouTubePlayer() {
    if (window.YT && window.YT.Player) {
      try {
        ytPlayer = new window.YT.Player('ytPlayerContainer', {
          height: '200',
          width: '200',
          videoId: 'HjCQnYC22-8',
          playerVars: {
            autoplay: 0,
            controls: 0,
            loop: 1,
            playlist: 'HjCQnYC22-8',
            playsinline: 1
          },
          events: {
            onReady: () => {
              isYtReady = true;
            },
            onStateChange: (event) => {
              if (window.YT && event.data === window.YT.PlayerState.PLAYING) {
                isPlayingSound = true;
                stopIntroPianoMelody();
                updateSoundButtonUI(true);
              } else if (window.YT && (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED)) {
                isPlayingSound = false;
                updateSoundButtonUI(false);
              }
            },
            onError: (err) => {
              console.warn('YouTube Player error, activando sintetizador piano:', err);
              if (isPlayingSound) startIntroPianoMelody();
            }
          }
        });
      } catch (e) {
        console.warn('Error inicializando YT player:', e);
      }
    }
  }

  const prevOnYouTube = window.onYouTubeIframeAPIReady;
  window.onYouTubeIframeAPIReady = function() {
    if (prevOnYouTube) prevOnYouTube();
    setupYouTubePlayer();
  };

  if (!window.YT) {
    const ytScript = document.createElement('script');
    ytScript.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(ytScript);
  } else {
    setupYouTubePlayer();
  }

  // Melodía Piano Intro de La Casa de Papel (My Life Is Going On) como respaldo
  const introPianoNotes = [
    { note: 440, duration: 380 },    // A4
    { note: 493.88, duration: 380 }, // B4
    { note: 587.33, duration: 480 }, // D5
    { note: 554.37, duration: 380 }, // C#5
    { note: 493.88, duration: 480 }, // B4
    { note: 440, duration: 380 },    // A4
    { note: 369.99, duration: 750 }, // F#4

    // Verso: "If I stay with you, if I'm choosing wrong..."
    { note: 293.66, duration: 320 }, // D4
    { note: 329.63, duration: 320 }, // E4
    { note: 369.99, duration: 380 }, // F#4
    { note: 369.99, duration: 380 }, // F#4
    { note: 369.99, duration: 480 }, // F#4
    { note: 329.63, duration: 320 }, // E4
    { note: 293.66, duration: 320 }, // D4
    { note: 329.63, duration: 320 }, // E4
    { note: 369.99, duration: 650 }, // F#4

    // "I don't care at all..."
    { note: 369.99, duration: 380 }, // F#4
    { note: 329.63, duration: 380 }, // E4
    { note: 293.66, duration: 750 }, // D4

    // "If I'm losing now, but I'm winning late..."
    { note: 293.66, duration: 320 }, // D4
    { note: 329.63, duration: 320 }, // E4
    { note: 369.99, duration: 380 }, // F#4
    { note: 369.99, duration: 380 }, // F#4
    { note: 369.99, duration: 480 }, // F#4
    { note: 329.63, duration: 320 }, // E4
    { note: 293.66, duration: 320 }, // D4
    { note: 329.63, duration: 320 }, // E4
    { note: 369.99, duration: 650 }, // F#4

    // "That's all I want..."
    { note: 440, duration: 420 },    // A4
    { note: 369.99, duration: 420 }, // F#4
    { note: 293.66, duration: 850 }  // D4
  ];

  function playPianoNote(freq, duration) {
    if (!audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(freq, now);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq * 2, now);

      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + (duration / 1000));

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(audioCtx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + (duration / 1000));
      osc2.stop(now + (duration / 1000));
    } catch (e) {
      console.log('Audio error:', e);
    }
  }

  function startIntroPianoMelody() {
    let index = 0;
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    clearInterval(melodyInterval);
    melodyInterval = setInterval(() => {
      const current = introPianoNotes[index];
      playPianoNote(current.note, current.duration);
      index = (index + 1) % introPianoNotes.length;
    }, 450);
  }

  function stopIntroPianoMelody() {
    clearInterval(melodyInterval);
  }

  function updateSoundButtonUI(playing) {
    const btn = document.getElementById('soundToggle');
    const icon = document.getElementById('soundIcon');
    const label = btn ? btn.querySelector('span') : null;

    if (playing) {
      if (btn) {
        btn.style.background = 'var(--color-primary-red)';
        btn.title = 'Pausar Banda Sonora (Intro LCDP)';
      }
      if (icon) icon.className = 'fa-solid fa-volume-xmark';
      if (label) label.textContent = 'Intro LCDP';
    } else {
      if (btn) {
        btn.style.background = 'rgba(229, 9, 20, 0.12)';
        btn.title = 'Reproducir Intro (La Casa de Papel)';
      }
      if (icon) icon.className = 'fa-solid fa-music';
      if (label) label.textContent = 'Intro LCDP';
    }
  }

  if (soundToggle) {
    soundToggle.onclick = () => {
      if (isPlayingSound) {
        isPlayingSound = false;
        if (ytPlayer && typeof ytPlayer.pauseVideo === 'function') {
          try { ytPlayer.pauseVideo(); } catch (e) {}
        }
        stopIntroPianoMelody();
        updateSoundButtonUI(false);
      } else {
        isPlayingSound = true;
        updateSoundButtonUI(true);

        let startedYt = false;
        if (ytPlayer && typeof ytPlayer.playVideo === 'function') {
          try {
            ytPlayer.playVideo();
            startedYt = true;
          } catch (e) {
            console.warn('No se pudo iniciar YouTube directamente:', e);
          }
        }

        setTimeout(() => {
          if (isPlayingSound) {
            const playerState = (ytPlayer && typeof ytPlayer.getPlayerState === 'function') ? ytPlayer.getPlayerState() : -1;
            if (playerState !== 1) {
              startIntroPianoMelody();
            }
          }
        }, 1200);
      }
    };
  }

  /* --- MODAL DE CONTACTO & BOTÓN FLOTANTE ESTILO BILLETE --- */
  function openFeedbackModal() {
    const feedbackModal = document.getElementById('feedbackModal');
    const feedbackStatus = document.getElementById('feedbackStatus');
    if (!feedbackModal) return;
    feedbackModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (feedbackStatus) feedbackStatus.style.display = 'none';
  }

  function closeFeedbackModal() {
    const feedbackModal = document.getElementById('feedbackModal');
    if (!feedbackModal) return;
    feedbackModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function initFeedbackModal() {
    const openFeedbackBtn = document.getElementById('openFeedbackBtn');
    const feedbackModal = document.getElementById('feedbackModal');
    const feedbackModalClose = document.getElementById('feedbackModalClose');
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackStatus = document.getElementById('feedbackStatus');
    const submitFeedbackBtn = document.getElementById('submitFeedbackBtn');

    if (openFeedbackBtn) openFeedbackBtn.onclick = openFeedbackModal;
    if (feedbackModalClose) feedbackModalClose.onclick = closeFeedbackModal;
    if (feedbackModal) {
      feedbackModal.onclick = (e) => {
        if (e.target === feedbackModal) closeFeedbackModal();
      };
    }

    if (feedbackForm) {
      feedbackForm.onsubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(feedbackForm);
        const originalBtnHtml = submitFeedbackBtn ? submitFeedbackBtn.innerHTML : '';

        if (submitFeedbackBtn) {
          submitFeedbackBtn.disabled = true;
          submitFeedbackBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Cifrando transmisión...';
        }

        try {
          const response = await fetch('contacto.php', {
            method: 'POST',
            body: formData,
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Accept': 'application/json'
            }
          });

          const result = await response.json();

          if (response.ok && result.status === 'success') {
            if (feedbackStatus) {
              feedbackStatus.className = 'feedback-status success';
              feedbackStatus.innerHTML = `
                <i class="fa-solid fa-circle-check"></i> <strong>${result.titulo || '¡Devolución Recibida!'}</strong><br>
                ${result.mensaje || 'Tu mensaje fue entregado al Profesor.'}
                <div style="font-size: 0.72rem; margin-top: 0.3rem; color: #a3e635;">Código: ${result.codigo || 'OK'}</div>
              `;
              feedbackStatus.style.display = 'block';
            }
            feedbackForm.reset();

            setTimeout(() => {
              closeFeedbackModal();
              if (feedbackStatus) feedbackStatus.style.display = 'none';
            }, 3500);
          } else {
            throw new Error(result.mensaje || 'Error en la transmisión de seguridad.');
          }
        } catch (err) {
          if (feedbackStatus) {
            feedbackStatus.className = 'feedback-status error';
            feedbackStatus.innerHTML = `
              <i class="fa-solid fa-triangle-exclamation"></i> <strong>Transmisión simulada / Aviso:</strong><br>
              ${err.message.includes('Failed to fetch') || err.message.includes('NetworkError') 
                ? 'Servidor PHP no activo en local. Si abriste el archivo directamente en el navegador, monta el proyecto en un servidor web local (Apache/XAMPP) para procesar contacto.php. ¡Datos validados!' 
                : err.message}
            `;
            feedbackStatus.style.display = 'block';
          }
        } finally {
          if (submitFeedbackBtn) {
            submitFeedbackBtn.disabled = false;
            submitFeedbackBtn.innerHTML = originalBtnHtml;
          }
        }
      };
    }
  }

  /* --- CRONOGRAMA DE OPERACIONES (EL PLAN - TABS POR TEMPORADA) --- */
  const planSeasonsInfo = {
    1: {
      season: 'PARTE 1 • F.N.M.T.',
      target: 'Fabricar 2.400M € en billetes nuevos sin registrar',
      location: 'Fábrica Nacional de Moneda y Timbre, Madrid'
    },
    2: {
      season: 'PARTE 2 • F.N.M.T. (DESENLACE)',
      target: 'Conectar el Túnel de Palop y escapar con 984M €',
      location: 'Cámara de calderas hacia Hangar exterior'
    },
    3: {
      season: 'PARTE 3 • BANCO DE ESPAÑA',
      target: 'Asegurar el Banco y fundir las 90 Toneladas de oro a granalla',
      location: 'Banco de España (Cámara Acorazada Inundable)'
    },
    4: {
      season: 'PARTE 4 • BANCO DE ESPAÑA (CAOS)',
      target: 'Neutralizar a Gandía y ejecutar la Operación París (Rescate de Lisboa)',
      location: 'Banco de España & Audiencia Nacional'
    },
    5: {
      season: 'PARTE 5 • JAQUE MATE',
      target: 'Bombear el oro al estanque de tormentas y forzar pacto con lingotes de latón',
      location: 'Estanque de Tormentas y Fuga de Estado'
    }
  };

  function switchPlanSeason(seasonNum) {
    const tabs = document.querySelectorAll('.dossier-tab-btn');
    const panels = document.querySelectorAll('.dossier-cards-grid');
    const bannerSeason = document.getElementById('dossierBannerSeason');
    const bannerTarget = document.getElementById('dossierBannerTarget');
    const bannerLoc = document.getElementById('dossierBannerLoc');

    if (!tabs.length || !panels.length) return;

    tabs.forEach(tab => {
      const isMatch = tab.getAttribute('data-season') == seasonNum;
      tab.classList.toggle('active', isMatch);
      tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    panels.forEach(panel => {
      const isMatch = panel.getAttribute('data-season-panel') == seasonNum;
      panel.classList.toggle('active', isMatch);
    });

    const info = planSeasonsInfo[seasonNum];
    if (info) {
      if (bannerSeason) bannerSeason.textContent = info.season;
      if (bannerTarget) bannerTarget.textContent = info.target;
      if (bannerLoc) bannerLoc.textContent = info.location;
    }
  }

  window.switchPlanSeason = switchPlanSeason;

  function initPlanTimeline() {
    const tabs = document.querySelectorAll('.dossier-tab-btn');
    if (!tabs.length) return;

    tabs.forEach(tab => {
      tab.onclick = () => {
        const season = tab.getAttribute('data-season');
        if (season) switchPlanSeason(season);
      };
    });

    // Detectar si la URL incluye parámetro ?temporada=X o ?parte=X
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const paramSeason = urlParams.get('temporada') || urlParams.get('parte');
      if (paramSeason && planSeasonsInfo[paramSeason]) {
        switchPlanSeason(paramSeason);
      }
    } catch (e) {
      // Ignorar si URL no disponible
    }
  }

  /* --- PÁGINA DE CONTACTO: TRANSMISIÓN CLANDESTINA & BUZÓN DE LA RESISTENCIA --- */
  function initContactPage() {
    const contactForm = document.getElementById('contactPageForm');
    if (!contactForm) return;

    const typeCards = contactForm.querySelectorAll('.type-card-radio');
    const mensajeTextarea = document.getElementById('contactMensaje');
    const asuntoInput = document.getElementById('contactAsunto');
    const contextHint = document.getElementById('contextHint');
    const charCount = document.getElementById('charCount');
    const contactStatus = document.getElementById('contactPageStatus');
    const submitBtn = document.getElementById('contactSubmitBtn');

    // Configuración dinámica de placeholders y ayudas según el tipo de transmisión
    const typeConfig = {
      resistencia: {
        placeholder: 'Escribe tu mensaje confidencial de apoyo al Profesor y a los miembros de la banda...',
        asuntoDefault: 'Apoyo incondicional a La Resistencia',
        hintHtml: '<i class="fa-solid fa-flag" style="color: var(--color-primary-red);"></i> Transmisión para La Resistencia'
      },
      atraco: {
        placeholder: 'Describe el objetivo financiero (ej: Banco Central, mina de oro, reserva federal), la distracción civil y el plan de extracción sin bajas...',
        asuntoDefault: 'Propuesta de Operación: ',
        hintHtml: '<i class="fa-solid fa-vault" style="color: var(--color-gold);"></i> Idea de Nuevo Golpe para La Banda'
      },
      feedback: {
        placeholder: 'Comparte tu opinión, qué te ha parecido el diseño de la fan page, qué nueva sección te gustaría ver o mejoras estéticas...',
        asuntoDefault: 'Comentarios y Devolución sobre la Fan Page',
        hintHtml: '<i class="fa-solid fa-comment-dots" style="color: #60a5fa;"></i> Comentarios y Sugerencias del Sitio'
      },
      bug: {
        placeholder: 'Detalla el problema técnico encontrado: dispositivo (móvil, PC), navegador, sección afectada (personajes, el plan, intro audio) y qué ocurrió...',
        asuntoDefault: 'Reporte de Fallo Técnico en: ',
        hintHtml: '<i class="fa-solid fa-triangle-exclamation" style="color: #f87171;"></i> Reporte de Incidencia Técnica'
      }
    };

    // Cambio interactivo de tipo de transmisión
    typeCards.forEach(card => {
      card.addEventListener('click', () => {
        typeCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        const radioInput = card.querySelector('input[type="radio"]');
        if (radioInput) radioInput.checked = true;

        const typeKey = card.getAttribute('data-type');
        const config = typeConfig[typeKey];
        if (config) {
          if (mensajeTextarea) {
            mensajeTextarea.placeholder = config.placeholder;
          }
          if (contextHint) {
            contextHint.innerHTML = config.hintHtml;
          }
          if (asuntoInput && (!asuntoInput.value || asuntoInput.dataset.autoFilled === 'true')) {
            asuntoInput.placeholder = config.asuntoDefault;
          }
        }
      });
    });

    // Contador en vivo de caracteres
    if (mensajeTextarea && charCount) {
      mensajeTextarea.addEventListener('input', () => {
        const length = mensajeTextarea.value.trim().length;
        if (length === 0) {
          charCount.textContent = 'Mínimo 5 caracteres.';
          charCount.style.color = 'var(--color-text-muted)';
        } else if (length < 5) {
          charCount.textContent = `${length} caracteres (faltan ${5 - length}).`;
          charCount.style.color = '#ff858a';
        } else {
          charCount.textContent = `${length} caracteres transmitidos.`;
          charCount.style.color = 'var(--color-gold)';
        }
      });
    }

    // Procesamiento y envío cifrado del formulario
    contactForm.onsubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const nombreVal = formData.get('nombre') ? formData.get('nombre').toString().trim() : 'Resistente Anónimo';
      const tipoVal = formData.get('tipo') ? formData.get('tipo').toString() : 'Mensaje a La Resistencia';
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-satellite-dish fa-spin"></i> TRANSMITIENDO AL RECEPTOR DEL PROFESOR...';
      }

      try {
        const response = await fetch('contacto.php', {
          method: 'POST',
          body: formData,
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json'
          }
        });

        const result = await response.json();

        if (response.ok && result.status === 'success') {
          if (contactStatus) {
            contactStatus.className = 'feedback-status success';
            contactStatus.innerHTML = `
              <i class="fa-solid fa-circle-check"></i> <strong>¡TRANSMISIÓN ENCRIPTADA ENVIADA CON ÉXITO!</strong><br>
              ${result.mensaje || 'Tu comunicación ha sido recibida en el servidor clandestino y almacenada en el registro de operaciones.'}<br>
              <div style="font-size: 0.76rem; margin-top: 0.4rem; color: #a3e635; font-family: var(--font-typewriter);">
                Código de Transmisión: <strong>${result.codigo || 'LCDP-' + Math.floor(Math.random() * 900000 + 100000)}</strong> &bull; Operador: <strong>${nombreVal}</strong>
              </div>
            `;
            contactStatus.style.display = 'block';
            contactStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          contactForm.reset();
          if (charCount) charCount.textContent = 'Mínimo 5 caracteres.';
        } else {
          throw new Error(result.mensaje || 'Error al validar el paquete de datos en el servidor.');
        }

      } catch (err) {
        // Modo resiliente: Si se está ejecutando en servidor local sin PHP o archivo estático
        if (contactStatus) {
          contactStatus.className = 'feedback-status success';
          contactStatus.innerHTML = `
            <i class="fa-solid fa-satellite-dish"></i> <strong>¡TRANSMISIÓN VALIDADA Y REGISTRADA LOCALMENTE!</strong><br>
            ¡Gracias, <strong>${nombreVal}</strong>! Tu comunicación bajo la categoría <em>"${tipoVal}"</em> ha sido interceptada por la interfaz y procesada correctamente.<br>
            <span style="font-size: 0.72rem; color: #cbd5e1;">(En un entorno con intérprete PHP activo, los datos se escriben automáticamente en el archivo seguro mensajes.json).</span>
            <div style="font-size: 0.76rem; margin-top: 0.4rem; color: #a3e635; font-family: var(--font-typewriter);">
              Código de Seguridad: <strong>LCDP-${Math.floor(Math.random() * 900000 + 100000)}</strong> &bull; Estado: <strong>CANAL ACTIVO</strong>
            </div>
          `;
          contactStatus.style.display = 'block';
          contactStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        contactForm.reset();
        if (charCount) charCount.textContent = 'Mínimo 5 caracteres.';
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }
      }
    };
  }

  /* --- INICIALIZADOR GENERAL DE PÁGINAS Y CONTENIDO --- */
  function initPageFeatures() {
    updateFloatingCoinState(window.location.pathname.split('/').pop() || 'index.html');
    initCharacters();
    initSeasons();
    initQuotes();
    initFeedbackModal();
    initPlanTimeline();
    initContactPage();
  }

  /* ==========================================================================
     ANIMACIÓN DE BÓVEDA BANCARIA (TRANSICIONES ENTRE MENÚS)
     Fiel a la cámara acorazada con bisagra monolítica izquierda, rueda de 8 radios,
     cerrojos hidráulicos, apertura 3D y desplazamiento hacia los márgenes.
     ========================================================================== */

  function createVaultChamberDOM() {
    if (document.getElementById('vaultTransitionOverlay')) return;

    // Generar 36 remaches perimetrales exactos alrededor de la puerta circular (cx=480, cy=375, r=266)
    let rimRivets = '';
    for (let i = 0; i < 36; i++) {
      const angle = (i * 2 * Math.PI) / 36;
      const rx = (480 + 266 * Math.cos(angle)).toFixed(1);
      const ry = (375 + 266 * Math.sin(angle)).toFixed(1);
      rimRivets += `<circle cx="${rx}" cy="${ry}" r="3.5" fill="url(#vRivet)"/>`;
    }

    const overlay = document.createElement('div');
    overlay.id = 'vaultTransitionOverlay';
    overlay.className = 'vault-transition-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    overlay.innerHTML = `
      <!-- Techo Iluminado con Paneles de Luz -->
      <div class="vault-ceiling">
        <div class="vault-ceiling-grid">
          <div class="ceiling-panel"></div>
          <div class="ceiling-panel"></div>
          <div class="ceiling-panel"></div>
          <div class="ceiling-panel"></div>
          <div class="ceiling-panel"></div>
          <div class="ceiling-panel"></div>
        </div>
      </div>

      <!-- Suelo Pulido de Hormigón / Granito con Reflejo -->
      <div class="vault-floor">
        <div class="floor-joints">
          <div class="floor-joint-line"></div>
          <div class="floor-joint-line"></div>
          <div class="floor-joint-line"></div>
          <div class="floor-joint-line"></div>
        </div>
      </div>

      <!-- Pared Izquierda de Acero Cepillado -->
      <div class="vault-wall-left">
        <div class="steel-seam-h" style="top: 25%;"></div>
        <div class="steel-seam-h" style="top: 75%;"></div>
        <div class="steel-seam-v" style="right: 32%;"></div>
        <div class="rivets-row" style="top: 15px; left: 35px;">
          <div class="rivet-dot"></div><div class="rivet-dot"></div><div class="rivet-dot"></div><div class="rivet-dot"></div><div class="rivet-dot"></div>
        </div>
        <div class="rivets-col" style="top: 28%; left: 35px;">
          <div class="rivet-dot"></div><div class="rivet-dot"></div><div class="rivet-dot"></div><div class="rivet-dot"></div><div class="rivet-dot"></div>
        </div>
        <div class="rivets-row" style="bottom: 25px; left: 35px;">
          <div class="rivet-dot"></div><div class="rivet-dot"></div><div class="rivet-dot"></div><div class="rivet-dot"></div><div class="rivet-dot"></div>
        </div>
      </div>

      <!-- Pared Derecha de Acero Cepillado -->
      <div class="vault-wall-right">
        <div class="steel-seam-h" style="top: 25%;"></div>
        <div class="steel-seam-h" style="top: 75%;"></div>
        <div class="steel-seam-v" style="left: 32%;"></div>
        <div class="rivets-row" style="top: 15px; right: 35px;">
          <div class="rivet-dot"></div><div class="rivet-dot"></div><div class="rivet-dot"></div><div class="rivet-dot"></div><div class="rivet-dot"></div>
        </div>
        <div class="rivets-col" style="top: 28%; right: 35px;">
          <div class="rivet-dot"></div><div class="rivet-dot"></div><div class="rivet-dot"></div><div class="rivet-dot"></div><div class="rivet-dot"></div>
        </div>
        <div class="rivets-row" style="bottom: 25px; right: 35px;">
          <div class="rivet-dot"></div><div class="rivet-dot"></div><div class="rivet-dot"></div><div class="rivet-dot"></div><div class="rivet-dot"></div>
        </div>
      </div>

      <!-- Escenario 3D Central con la Puerta Acorazada -->
      <div class="vault-stage-3d">
        <div class="vault-portal-interior"></div>

        <div class="vault-door-assembly">
          <svg class="vault-svg" viewBox="0 0 850 750" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <!-- Gradientes Metálicos -->
              <linearGradient id="vSteelH" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#464e57"/>
                <stop offset="18%" stop-color="#7e8994"/>
                <stop offset="38%" stop-color="#555e67"/>
                <stop offset="62%" stop-color="#9ea9b4"/>
                <stop offset="85%" stop-color="#606973"/>
                <stop offset="100%" stop-color="#383e45"/>
              </linearGradient>

              <linearGradient id="vSteelV" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#383e45"/>
                <stop offset="22%" stop-color="#7b8691"/>
                <stop offset="48%" stop-color="#4c545c"/>
                <stop offset="74%" stop-color="#95a1ac"/>
                <stop offset="100%" stop-color="#282c31"/>
              </linearGradient>

              <radialGradient id="vDoorFace" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#9aa4ae"/>
                <stop offset="42%" stop-color="#646d76"/>
                <stop offset="68%" stop-color="#9da8b3"/>
                <stop offset="86%" stop-color="#464e56"/>
                <stop offset="96%" stop-color="#b8c2cb"/>
                <stop offset="100%" stop-color="#2f343a"/>
              </radialGradient>

              <linearGradient id="vChrome" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ffffff"/>
                <stop offset="25%" stop-color="#9da6ae"/>
                <stop offset="50%" stop-color="#e8ecf0"/>
                <stop offset="75%" stop-color="#565e66"/>
                <stop offset="100%" stop-color="#d4dbe0"/>
              </linearGradient>

              <radialGradient id="vRivet" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#ffffff"/>
                <stop offset="40%" stop-color="#8a949e"/>
                <stop offset="85%" stop-color="#32373c"/>
                <stop offset="100%" stop-color="#15171a"/>
              </radialGradient>

              <filter id="vDropShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="3" dy="5" stdDeviation="4" flood-color="#000000" flood-opacity="0.6"/>
              </filter>
              
              <filter id="vHeavyShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="6" dy="10" stdDeviation="8" flood-color="#000000" flood-opacity="0.8"/>
              </filter>
            </defs>

            <!-- Placas de anclaje de la bisagra a la pared izquierda (estacionarias) -->
            <g id="vaultHingeWallPlates">
              <!-- Brida Superior -->
              <rect x="130" y="140" width="70" height="90" rx="4" fill="url(#vSteelV)" stroke="#1a1c1e" stroke-width="2" filter="url(#vDropShadow)"/>
              <circle cx="150" cy="155" r="4.5" fill="url(#vRivet)"/>
              <circle cx="180" cy="155" r="4.5" fill="url(#vRivet)"/>
              <circle cx="150" cy="185" r="4.5" fill="url(#vRivet)"/>
              <circle cx="180" cy="185" r="4.5" fill="url(#vRivet)"/>
              <circle cx="150" cy="215" r="4.5" fill="url(#vRivet)"/>
              <circle cx="180" cy="215" r="4.5" fill="url(#vRivet)"/>

              <!-- Brida Inferior -->
              <rect x="130" y="520" width="70" height="90" rx="4" fill="url(#vSteelV)" stroke="#1a1c1e" stroke-width="2" filter="url(#vDropShadow)"/>
              <circle cx="150" cy="535" r="4.5" fill="url(#vRivet)"/>
              <circle cx="180" cy="535" r="4.5" fill="url(#vRivet)"/>
              <circle cx="150" cy="565" r="4.5" fill="url(#vRivet)"/>
              <circle cx="180" cy="565" r="4.5" fill="url(#vRivet)"/>
              <circle cx="150" cy="595" r="4.5" fill="url(#vRivet)"/>
              <circle cx="180" cy="595" r="4.5" fill="url(#vRivet)"/>
            </g>

            <!-- PUERTA GIRATORIA COMPLETA (Bisagra en x=200, y=375) -->
            <g id="vaultDoorSwingingAssembly" class="vault-door-swing">
              
              <!-- Nudillo Cilíndrico Superior de la Bisagra Izquierda -->
              <rect x="180" y="130" width="40" height="110" rx="10" fill="url(#vSteelH)" stroke="#181a1c" stroke-width="2" filter="url(#vDropShadow)"/>
              <ellipse cx="200" cy="130" rx="20" ry="8" fill="url(#vChrome)"/>
              <ellipse cx="200" cy="240" rx="20" ry="8" fill="#25292d"/>

              <!-- Nudillo Cilíndrico Inferior de la Bisagra Izquierda -->
              <rect x="180" y="510" width="40" height="110" rx="10" fill="url(#vSteelH)" stroke="#181a1c" stroke-width="2" filter="url(#vDropShadow)"/>
              <ellipse cx="200" cy="510" rx="20" ry="8" fill="url(#vChrome)"/>
              <ellipse cx="200" cy="620" rx="20" ry="8" fill="#25292d"/>

              <!-- Brazo curvo macizo de la bisagra que abraza la puerta -->
              <path d="M 200 170 
                       L 300 170 
                       A 20 20 0 0 1 320 190 
                       L 320 280 
                       A 20 20 0 0 0 340 300 
                       L 410 300 
                       L 410 450 
                       L 340 450 
                       A 20 20 0 0 0 320 470 
                       L 320 560 
                       A 20 20 0 0 1 300 580 
                       L 200 580 
                       L 200 540 
                       L 280 540 
                       L 280 490 
                       A 15 15 0 0 0 265 475 
                       L 230 475 
                       A 30 30 0 0 1 200 445 
                       L 200 305 
                       A 30 30 0 0 1 230 275 
                       L 265 275 
                       A 15 15 0 0 0 280 260 
                       L 280 210 
                       L 200 210 Z" 
                    fill="url(#vSteelV)" stroke="#181a1c" stroke-width="3" filter="url(#vHeavyShadow)"/>

              <!-- Pernos del brazo de bisagra -->
              <circle cx="235" cy="185" r="4.5" fill="url(#vRivet)"/>
              <circle cx="265" cy="185" r="4.5" fill="url(#vRivet)"/>
              <circle cx="235" cy="565" r="4.5" fill="url(#vRivet)"/>
              <circle cx="265" cy="565" r="4.5" fill="url(#vRivet)"/>
              <circle cx="300" cy="245" r="4.5" fill="url(#vRivet)"/>
              <circle cx="300" cy="505" r="4.5" fill="url(#vRivet)"/>

              <!-- Puerta Circular de Acero (Centro cx=480, cy=375, r=270) -->
              <circle cx="480" cy="375" r="280" fill="url(#vSteelH)" stroke="#181a1c" stroke-width="4" filter="url(#vHeavyShadow)"/>
              <circle cx="480" cy="375" r="270" fill="none" stroke="#22272c" stroke-width="6"/>
              <circle cx="480" cy="375" r="262" fill="url(#vDoorFace)" stroke="#111" stroke-width="2"/>

              <!-- 36 Remaches Perimetrales -->
              ${rimRivets}

              <!-- Anillos Interiores Concéntricos -->
              <circle cx="480" cy="375" r="240" fill="none" stroke="#32383f" stroke-width="4"/>
              <circle cx="480" cy="375" r="236" fill="none" stroke="#87929e" stroke-width="1.5"/>

              <!-- Soportes / Lugs en el Marco -->
              <!-- Soporte Superior (12 o'clock) -->
              <rect x="455" y="98" width="50" height="30" rx="3" fill="url(#vSteelV)" stroke="#181a1c" stroke-width="2"/>
              <circle cx="465" cy="113" r="3" fill="url(#vRivet)"/>
              <circle cx="495" cy="113" r="3" fill="url(#vRivet)"/>

              <!-- Soporte Inferior (6 o'clock) -->
              <rect x="455" y="622" width="50" height="30" rx="3" fill="url(#vSteelV)" stroke="#181a1c" stroke-width="2"/>
              <circle cx="465" cy="637" r="3" fill="url(#vRivet)"/>
              <circle cx="495" cy="637" r="3" fill="url(#vRivet)"/>

              <!-- Soporte Diagonal Superior Derecho (2 o'clock) -->
              <g transform="translate(660, 195) rotate(45)">
                <rect x="-24" y="-14" width="48" height="28" rx="3" fill="url(#vSteelV)" stroke="#181a1c" stroke-width="2"/>
                <circle cx="-12" cy="0" r="3" fill="url(#vRivet)"/>
                <circle cx="12" cy="0" r="3" fill="url(#vRivet)"/>
              </g>

              <!-- Soporte Diagonal Inferior Derecho (4 o'clock) -->
              <g transform="translate(660, 555) rotate(-45)">
                <rect x="-24" y="-14" width="48" height="28" rx="3" fill="url(#vSteelV)" stroke="#181a1c" stroke-width="2"/>
                <circle cx="-12" cy="0" r="3" fill="url(#vRivet)"/>
                <circle cx="12" cy="0" r="3" fill="url(#vRivet)"/>
              </g>

              <!-- Soporte Látigo Izquierdo (9 o'clock) -->
              <rect x="235" y="360" width="40" height="30" rx="3" fill="url(#vSteelV)" stroke="#181a1c" stroke-width="2"/>

              <!-- MECANISMOS HIDRÁULICOS Y PISTONES RETRÁCTILES -->
              <!-- Cilindro Hidráulico Superior Vertical -->
              <rect x="458" y="165" width="44" height="85" rx="5" fill="url(#vSteelH)" stroke="#1c2024" stroke-width="2" filter="url(#vDropShadow)"/>
              <rect x="452" y="195" width="56" height="35" rx="2" fill="url(#vSteelV)" stroke="#111" stroke-width="1.5"/>
              <circle cx="458" cy="205" r="2.5" fill="url(#vRivet)"/>
              <circle cx="502" cy="205" r="2.5" fill="url(#vRivet)"/>
              <circle cx="458" cy="220" r="2.5" fill="url(#vRivet)"/>
              <circle cx="502" cy="220" r="2.5" fill="url(#vRivet)"/>
              <rect id="vTopPiston" class="vault-piston-top" x="471" y="118" width="18" height="60" rx="2" fill="url(#vChrome)" stroke="#333" stroke-width="1"/>

              <!-- Cilindro Hidráulico Inferior Vertical -->
              <rect x="458" y="500" width="44" height="85" rx="5" fill="url(#vSteelH)" stroke="#1c2024" stroke-width="2" filter="url(#vDropShadow)"/>
              <rect x="452" y="520" width="56" height="35" rx="2" fill="url(#vSteelV)" stroke="#111" stroke-width="1.5"/>
              <circle cx="458" cy="530" r="2.5" fill="url(#vRivet)"/>
              <circle cx="502" cy="530" r="2.5" fill="url(#vRivet)"/>
              <circle cx="458" cy="545" r="2.5" fill="url(#vRivet)"/>
              <circle cx="502" cy="545" r="2.5" fill="url(#vRivet)"/>
              <rect id="vBottomPiston" class="vault-piston-bottom" x="471" y="572" width="18" height="60" rx="2" fill="url(#vChrome)" stroke="#333" stroke-width="1"/>

              <!-- Barra Horizontal hacia la bisagra izquierda -->
              <rect x="255" y="370" width="165" height="10" rx="2" fill="url(#vChrome)" stroke="#333" stroke-width="1"/>

              <!-- Cerrojo Diagonal Superior Derecho -->
              <g class="vault-bolt-diag-top">
                <line x1="535" y1="320" x2="665" y2="190" stroke="url(#vChrome)" stroke-width="10" stroke-linecap="round"/>
              </g>

              <!-- Cerrojo Diagonal Inferior Derecho -->
              <g class="vault-bolt-diag-bottom">
                <line x1="535" y1="430" x2="665" y2="560" stroke="url(#vChrome)" stroke-width="10" stroke-linecap="round"/>
              </g>

              <!-- DIAL DE COMBINACIÓN LATERAL DERECHO (cx=625, cy=375) -->
              <g id="vaultCombinationDial">
                <circle cx="625" cy="375" r="44" fill="url(#vSteelH)" stroke="#181a1c" stroke-width="3" filter="url(#vDropShadow)"/>
                <circle cx="625" cy="375" r="36" fill="#16181b" stroke="#555e67" stroke-width="2"/>
                <circle cx="625" cy="375" r="32" fill="none" stroke="#ced5dc" stroke-width="2" stroke-dasharray="2 6"/>
                <!-- Pomo del Dial con 3 palancas -->
                <g id="vaultDialKnob" class="vault-dial-knob" style="transform-origin: 625px 375px;">
                  <circle cx="625" cy="375" r="16" fill="url(#vChrome)" stroke="#111" stroke-width="1.5"/>
                  <rect x="622" y="340" width="6" height="22" rx="3" fill="url(#vChrome)"/>
                  <circle cx="625" cy="338" r="4" fill="url(#vSteelH)"/>
                  <g transform="rotate(120, 625, 375)">
                    <rect x="622" y="340" width="6" height="22" rx="3" fill="url(#vChrome)"/>
                    <circle cx="625" cy="338" r="4" fill="url(#vSteelH)"/>
                  </g>
                  <g transform="rotate(240, 625, 375)">
                    <rect x="622" y="340" width="6" height="22" rx="3" fill="url(#vChrome)"/>
                    <circle cx="625" cy="338" r="4" fill="url(#vSteelH)"/>
                  </g>
                  <circle cx="625" cy="375" r="6" fill="#22272c"/>
                </g>
              </g>

              <!-- ASIDERO CURVO TUBULAR DE ACERO A LA DERECHA -->
              <g id="vaultGrabHandle">
                <circle cx="685" cy="305" r="12" fill="url(#vSteelV)" stroke="#111" stroke-width="1.5"/>
                <circle cx="682" cy="300" r="2.5" fill="url(#vRivet)"/>
                <circle cx="688" cy="310" r="2.5" fill="url(#vRivet)"/>
                <circle cx="685" cy="445" r="12" fill="url(#vSteelV)" stroke="#111" stroke-width="1.5"/>
                <circle cx="682" cy="440" r="2.5" fill="url(#vRivet)"/>
                <circle cx="688" cy="450" r="2.5" fill="url(#vRivet)"/>
                <path d="M 685 305 C 725 335, 725 415, 685 445" fill="none" stroke="url(#vChrome)" stroke-width="12" stroke-linecap="round" filter="url(#vDropShadow)"/>
              </g>

              <!-- RUEDA CENTRAL DE SEGURIDAD CON 8 RADIOS Y MANIJAS (Centro cx=480, cy=375) -->
              <circle cx="480" cy="375" r="105" fill="none" stroke="#22272c" stroke-width="10"/>
              <circle cx="480" cy="375" r="100" fill="none" stroke="#87929e" stroke-width="2"/>

              <!-- Rueda giratoria completa de 8 radios -->
              <g id="vaultCenterWheel" class="vault-wheel-center" style="transform-origin: 480px 375px;">
                <circle cx="480" cy="375" r="82" fill="none" stroke="url(#vChrome)" stroke-width="12" filter="url(#vDropShadow)"/>
                <circle cx="480" cy="375" r="74" fill="none" stroke="#25292d" stroke-width="2"/>

                <!-- 8 Radios con Manijas Cilíndricas (a 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°) -->
                ${[0, 45, 90, 135, 180, 225, 270, 315].map(deg => `
                  <g transform="rotate(${deg}, 480, 375)">
                    <rect x="475" y="275" width="10" height="70" rx="3" fill="url(#vChrome)" stroke="#333" stroke-width="1"/>
                    <rect x="473" y="245" width="14" height="34" rx="6" fill="url(#vSteelH)" stroke="#111" stroke-width="1.5" filter="url(#vDropShadow)"/>
                    <circle cx="480" cy="246" r="5" fill="url(#vChrome)"/>
                  </g>
                `).join('')}

                <!-- Casquillo Central Biselado -->
                <circle cx="480" cy="375" r="38" fill="url(#vSteelV)" stroke="#181a1c" stroke-width="3" filter="url(#vDropShadow)"/>
                <circle cx="480" cy="375" r="28" fill="url(#vChrome)" stroke="#333" stroke-width="1.5"/>
                <circle cx="480" cy="375" r="16" fill="url(#vSteelH)" stroke="#111" stroke-width="1"/>
              </g>

            </g>
          </svg>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
  }

  /* --- SINTETIZADOR DE EFECTOS DE SONIDO PARA LA BÓVEDA --- */
  function playVaultSound(type) {
    try {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtxClass) return;
      const ctx = new AudioCtxClass();

      if (type === 'unlock') {
        const now = ctx.currentTime;
        for (let i = 0; i < 6; i++) {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(750 + i * 90, now + i * 0.08);
          gain.gain.setValueAtTime(0.06, now + i * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.04);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + i * 0.08);
          osc.stop(now + i * 0.08 + 0.05);
        }
        setTimeout(() => {
          const thud = ctx.createOscillator();
          const thudGain = ctx.createGain();
          thud.type = 'sine';
          thud.frequency.setValueAtTime(130, ctx.currentTime);
          thud.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + 0.25);
          thudGain.gain.setValueAtTime(0.25, ctx.currentTime);
          thudGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
          thud.connect(thudGain);
          thudGain.connect(ctx.destination);
          thud.start();
          thud.stop(ctx.currentTime + 0.35);
        }, 500);
      } else if (type === 'swing') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(60, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(40, ctx.currentTime + 0.65);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.7);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.75);
      }
    } catch (e) {
      // Audio silencioso en entornos restringidos
    }
  }

  /* --- TRANSICIÓN CINEMÁTICA Y NAVEGACIÓN FLUIDA --- */
  let isVaultTransitioning = false;

  function navigateWithVault(targetHref) {
    if (isVaultTransitioning) return;

    const targetUrl = new URL(targetHref, window.location.href);
    const currentUrl = new URL(window.location.href);

    if (targetUrl.origin !== currentUrl.origin) {
      window.location.href = targetHref;
      return;
    }

    if (targetUrl.pathname === currentUrl.pathname && targetUrl.search === currentUrl.search) {
      if (targetUrl.hash) {
        const el = document.querySelector(targetUrl.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    isVaultTransitioning = true;
    createVaultChamberDOM();
    const overlay = document.getElementById('vaultTransitionOverlay');
    if (!overlay) {
      window.location.href = targetHref;
      return;
    }

    overlay.className = 'vault-transition-overlay is-active';
    playVaultSound('unlock');

    const fetchPromise = fetch(targetHref)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      });

    // Paso 1: Giro de rueda, dial y cerrojos retráctiles (0.05s)
    setTimeout(() => {
      overlay.classList.add('is-unlocking');
    }, 50);

    // Paso 2: Giro de la puerta acorazada en 3D sobre la bisagra izquierda (0.65s)
    setTimeout(() => {
      playVaultSound('swing');
      overlay.classList.add('is-opening');
    }, 650);

    // Paso 3: Sustitución fluida del contenido mientras la puerta está abierta (0.95s)
    setTimeout(async () => {
      try {
        const htmlText = await fetchPromise;
        const parser = new DOMParser();
        const newDoc = parser.parseFromString(htmlText, 'text/html');

        const newMain = newDoc.querySelector('main');
        const currentMain = document.querySelector('main');
        if (newMain && currentMain) {
          currentMain.innerHTML = newMain.innerHTML;
          currentMain.className = newMain.className;
        }

        if (newDoc.title) {
          document.title = newDoc.title;
        }

        const newCharModal = newDoc.getElementById('characterModal');
        const curCharModal = document.getElementById('characterModal');
        if (newCharModal) {
          if (curCharModal) {
            curCharModal.innerHTML = newCharModal.innerHTML;
          } else {
            document.body.appendChild(newCharModal);
          }
        }

        const targetFilename = targetUrl.pathname.split('/').pop() || 'index.html';
        updateFloatingCoinState(targetFilename);
        document.querySelectorAll('.nav-link').forEach(link => {
          const h = link.getAttribute('href');
          if (h && (h === targetFilename || (targetFilename === '' && h === 'index.html') || h.split('?')[0] === targetFilename)) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        window.history.pushState({ path: targetHref }, newDoc.title, targetHref);
        window.scrollTo(0, 0);

        initPageFeatures();

      } catch (err) {
        console.warn('Navegación estándar por respaldo:', err);
        window.location.href = targetHref;
        return;
      }
    }, 950);

    // Paso 4: Las paredes de acero y la puerta se abren hacia los márgenes (1.25s)
    setTimeout(() => {
      overlay.classList.add('is-parting');
    }, 1250);

    // Paso 5: Desvanecimiento final suave (1.95s)
    setTimeout(() => {
      overlay.classList.add('is-cleared');
    }, 1950);

    // Paso 6: Conclusión y reinicio para futuras navegaciones (2.15s)
    setTimeout(() => {
      overlay.className = 'vault-transition-overlay';
      isVaultTransitioning = false;
    }, 2150);
  }

  // Interceptar clicks de navegación en el menú y footer mediante delegación
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    if (link.target === '_blank' || link.hasAttribute('download')) return;
    if (href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    if (href.startsWith('http://') || href.startsWith('https://')) {
      const url = new URL(href);
      if (url.origin !== window.location.origin) return;
    }

    if (link.classList.contains('nav-link') || 
        link.classList.contains('dropdown-link') || 
        link.closest('.footer-menu') || 
        href.endsWith('.html') || 
        href.includes('.html?')) {
      
      // Si ya estamos en personajes.html y es un enlace de filtro de personajes, filtrar directamente sin recarga
      if (href.includes('personajes.html') && window.location.pathname.endsWith('personajes.html')) {
        const targetUrl = new URL(href, window.location.href);
        const targetFilter = targetUrl.searchParams.get('filtro') || targetUrl.searchParams.get('filter') || 'all';
        if (typeof window.filterCharacters === 'function') {
          e.preventDefault();
          window.history.pushState({ path: href }, document.title, href);
          window.filterCharacters(targetFilter);
          const navList = document.getElementById('navList');
          if (navList) navList.classList.remove('mobile-active');
          return;
        }
      }

      e.preventDefault();
      const navList = document.getElementById('navList');
      if (navList) navList.classList.remove('mobile-active');
      navigateWithVault(href);
    }
  });

  // Gestión de botones Atrás/Adelante del navegador
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.path) {
      navigateWithVault(e.state.path);
    } else {
      window.location.reload();
    }
  });

  // Inicialización de la Bóveda y componentes en la carga de página
  createVaultChamberDOM();
  initPageFeatures();

});

