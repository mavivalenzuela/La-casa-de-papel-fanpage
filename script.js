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
      id: 'lisboa',
      codename: 'LISBOA / INSPECTORA',
      realname: 'Raquel Murillo',
      category: 'ley',
      role: 'Negociadora / Táctica',
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
      id: 'estocolmo',
      codename: 'ESTOCOLMO',
      realname: 'Mónica Gaztambide',
      category: 'rehenes',
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
  const characterGrid = document.getElementById('characterGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modalOverlay = document.getElementById('characterModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImg = document.getElementById('modalImg');
  const modalCodename = document.getElementById('modalCodename');
  const modalRealname = document.getElementById('modalRealname');
  const modalRole = document.getElementById('modalRole');
  const modalBio = document.getElementById('modalBio');
  const modalQuote = document.getElementById('modalQuote');

  function renderCharacters(filter = 'all') {
    if (!characterGrid) return;
    characterGrid.innerHTML = '';

    const filtered = characters.filter(c => filter === 'all' || c.category === filter);

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

      card.innerHTML = `
        <div class="card-image-wrap">
          ${imageMarkup}
          <span class="card-badge">${char.category === 'banda' ? 'La Banda' : (char.category === 'ley' ? 'Ley' : 'Rehén')}</span>
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

      card.addEventListener('click', () => openCharacterModal(char));
      characterGrid.appendChild(card);
    });
  }

  function openCharacterModal(char) {
    if (!modalOverlay) return;
    const modalMedia = modalImg.parentNode;
    let placeholder = document.getElementById('modalImgPlaceholder');

    if (char.image) {
      modalImg.src = char.image;
      modalImg.alt = char.codename;
      modalImg.style.display = 'block';
      if (placeholder) placeholder.style.display = 'none';
    } else {
      modalImg.style.display = 'none';
      if (!placeholder) {
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
      placeholder.style.display = 'flex';
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
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCharacterModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeCharacterModal();
    });
  }

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.getAttribute('data-filter');
        renderCharacters(filterValue);
      });
    });
  }

  if (characterGrid) {
    renderCharacters('all');
  }

  /* --- LÓGICA DE TEMPORADAS (SI EXISTEN EN EL DOM) --- */
  const seasonTabs = document.querySelectorAll('.season-tab-btn');
  const seasonDetails = document.getElementById('seasonDetails');

  window.switchSeasonTab = function(seasonNum) {
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

  if (seasonTabs.length > 0) {
    seasonTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const seasonNum = tab.getAttribute('data-season');
        switchSeasonTab(seasonNum);
      });
    });

    // Detectar parámetro ?parte=X en la URL
    const urlParams = new URLSearchParams(window.location.search);
    const parteParam = urlParams.get('parte') || urlParams.get('season') || 1;
    switchSeasonTab(parteParam);
  }

  /* --- GENERADOR DE FRASES (LA RESISTENCIA) --- */
  const quoteDisplay = document.getElementById('quoteDisplay');
  const quoteAuthor = document.getElementById('quoteAuthor');
  const newQuoteBtn = document.getElementById('newQuoteBtn');

  if (newQuoteBtn && quoteDisplay && quoteAuthor) {
    let currentQuoteIndex = 0;
    newQuoteBtn.addEventListener('click', () => {
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
    });
  }

  /* --- AUDIO AMBIENTAL BELLA CIAO (SINTETIZADOR WEB AUDIO API) --- */
  const soundToggle = document.getElementById('soundToggle');
  const soundIcon = document.getElementById('soundIcon');
  let audioCtx = null;
  let isPlayingSound = false;
  let melodyInterval = null;

  const melodyNotes = [
    { note: 440, duration: 250 },
    { note: 523.25, duration: 250 },
    { note: 587.33, duration: 250 },
    { note: 659.25, duration: 500 },
    { note: 440, duration: 250 },
    { note: 523.25, duration: 250 },
    { note: 587.33, duration: 250 },
    { note: 659.25, duration: 500 },
    { note: 440, duration: 250 },
    { note: 523.25, duration: 250 },
    { note: 587.33, duration: 250 },
    { note: 659.25, duration: 350 },
    { note: 587.33, duration: 250 },
    { note: 523.25, duration: 250 },
    { note: 659.25, duration: 500 },
  ];

  function playBellaCiaoNote(freq, duration) {
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + (duration / 1000));
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + (duration / 1000));
    } catch (e) {
      console.log('Audio error:', e);
    }
  }

  function startBellaCiaoMelody() {
    let index = 0;
    isPlayingSound = true;
    if (soundToggle) soundToggle.style.background = 'var(--color-primary-red)';
    if (soundIcon) soundIcon.className = 'fa-solid fa-volume-xmark';

    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    melodyInterval = setInterval(() => {
      const current = melodyNotes[index];
      playBellaCiaoNote(current.note, current.duration);
      index = (index + 1) % melodyNotes.length;
    }, 380);
  }

  function stopBellaCiaoMelody() {
    isPlayingSound = false;
    clearInterval(melodyInterval);
    if (soundToggle) soundToggle.style.background = 'rgba(229, 9, 20, 0.12)';
    if (soundIcon) soundIcon.className = 'fa-solid fa-volume-high';
  }

  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      if (isPlayingSound) {
        stopBellaCiaoMelody();
      } else {
        startBellaCiaoMelody();
      }
    });
  }

  /* --- BOTÓN FLOTANTE ESTILO BILLETE & MODAL DE CONTACTO PHP --- */
  const openFeedbackBtn = document.getElementById('openFeedbackBtn');
  const feedbackModal = document.getElementById('feedbackModal');
  const feedbackModalClose = document.getElementById('feedbackModalClose');
  const feedbackForm = document.getElementById('feedbackForm');
  const feedbackStatus = document.getElementById('feedbackStatus');
  const submitFeedbackBtn = document.getElementById('submitFeedbackBtn');

  function openFeedbackModal() {
    if (!feedbackModal) return;
    feedbackModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (feedbackStatus) feedbackStatus.style.display = 'none';
  }

  function closeFeedbackModal() {
    if (!feedbackModal) return;
    feedbackModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (openFeedbackBtn) {
    openFeedbackBtn.addEventListener('click', openFeedbackModal);
  }

  if (feedbackModalClose) {
    feedbackModalClose.addEventListener('click', closeFeedbackModal);
  }

  if (feedbackModal) {
    feedbackModal.addEventListener('click', (e) => {
      if (e.target === feedbackModal) closeFeedbackModal();
    });
  }

  // Procesamiento del formulario de contacto / devoluciones hacia contacto.php
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', async (e) => {
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
        // En caso de que se ejecute en entorno sin servidor PHP (ej. file://) o falle
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
    });
  }

});
