const productos = [
  {
    "id": "compact8",
    "nombre": "Plataforma Elevadora Compact 8/14",
    "descripcion": "Elevador tipo tijera con altura de trabajo de 8,18 m a 14 m y capacidad de carga de 350 kg.",
    "imagen": "https://www.elevarteplataformas.com/wp-content/uploads/2022/07/Nuevas-Haulotte-Compact.jpg",
    "folleto": "documentos/Dossier de Presentación.pdf",
    "caracteristicas": `
      <ul>
        <li>Altura máxima de trabajo: 14 metros</li>
        <li>Capacidad de carga: 350 kg</li>
        <li>Plataforma extensible para mayor alcance</li>
        <li>Tracción eléctrica silenciosa</li>
        <li>Diseño compacto ideal para interiores</li>
      </ul>
    `
  },
  {
    "id": "ha12ip",
    "nombre": "Brazo Articulado HA 12 IP",
    "descripcion": "Plataforma articulada eléctrica con altura de trabajo de 12 m y alcance horizontal de 6,6 m.",
    "imagen": "https://www.elevacionesarchipielago.com/wp-content/uploads/2019/04/BEA12-II.jpg",
    "folleto": "documentos/ha12ip.pdf",
    "caracteristicas": `
      <ul>
        <li>Altura de trabajo: 12 metros</li>
        <li>Alcance horizontal: 6,6 metros</li>
        <li>Giro de torreta: 355°</li>
        <li>Tracción eléctrica sin emisiones</li>
        <li>Ideal para mantenimiento en interiores</li>
      </ul>
    `
  },
  {
    "id": "haulotte16x",
    "nombre": "Brazo Telescópico Haulotte HA 16 X",
    "descripcion": "Brazo telescópico diésel con altura de trabajo de 15,45 m y capacidad de carga de 230 kg.",
    "imagen": "./img/HA_16X.png",
    "folleto": "documentos/haulotte16x.pdf",
    "caracteristicas": `
      <ul>
        <li>Altura de trabajo: 15,45 metros</li>
        <li>Motor diésel de alto rendimiento</li>
        <li>Neumáticos todoterreno</li>
        <li>Estabilización automática en terrenos irregulares</li>
        <li>Sistema de seguridad anti-vuelco</li>
      </ul>
    `
  }, 
  {
    "id": "manitou170",
    "nombre": "Manipulador Telescópico Manitou 170 AETJ-C",
    "descripcion": "Equipo de elevación con altura de trabajo de 16,90 m y capacidad de carga de 200 kg.",
    "imagen": "https://img.archiexpo.es/images_ae/photo-m2/105869-16162626.jpg",
    "folleto": "documentos/manitou170.pdf",
    "caracteristicas": `
      <ul>
        <li>Altura máxima de elevación: 16,9 metros</li>
        <li>Capacidad de carga: 200 kg</li>
        <li>Radio de giro reducido</li>
        <li>Brazo articulado con movimientos precisos</li>
        <li>Sistema de control intuitivo y ergonómico</li>
      </ul>
    `
  },
  {
  "id": "autoelevador_diesel_1500",
  "nombre": "Autoelevador Diésel 2.500 kg",
  "descripcion": "Autoelevador (montacargas) diésel con capacidad de carga de 2.500 kg y mástil de hasta 4,80 m.",
  "imagen": "https://jacforklift.com.ar/web/uploads/products/10/principal/0-principal.webp?1637431626", // reemplazá con la URL correcta si tenés una
  "folleto": "documentos/autoelevador_1500.pdf",
  "caracteristicas": `
    <ul>
      <li>Capacidad de carga: 1.500 kg</li>
      <li>Altura de elevación (mástil extendido): 4,80 m</li>
      <li>Altura con mástil replegado: 1,63 m</li>
      <li>Propulsión diésel – ideal para trabajos en exteriores</li>
      <li>Diseño robusto para uso industrial pesado</li>
    </ul>
  `
},
{
  "id": "terex_rl4",
  "nombre": "Torre de Iluminación Terex RL4",
  "descripcion": "Torre de iluminación diesel con mástil de 7,13 m y 4 lámparas de halogenuro metálico de 4.000 W.",
  "imagen": "./img/iluminaria.png", // reemplazá si tenés URL directa
  "folleto": "documentos/terex_rl4.pdf",
  "caracteristicas": `
    <ul>
      <li>Altura con mástil extendido: 7,13 m</li>
      <li>4 lámparas de halogenuro metálico, total 4.000 W</li>
      <li>Depósito de combustible: 170 l (≈ 90 h de autonomía)</li>
      <li>Propulsión diésel, ideal para uso externo</li>
      <li>Mástil retráctil para fácil transporte y almacenamiento</li>
    </ul>
  `
},
];

const carousel = document.getElementById('carousel');
const angle = 360 / productos.length;
let currentAngle = 0;

// Referencias al modal
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');

productos.forEach((producto, i) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.transform = `rotateY(${i * angle}deg) translateZ(300px)`;

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
      </div>
      <div class="card-back">
        <button class="folleto-btn">📥 Descargar folleto</button>
        <button class="caract-btn">🔍 Ver características</button>
      </div>
    </div>
  `;

  // Gira solo si no se hace clic en los botones
  card.addEventListener('click', (e) => {
    if (!e.target.closest('button')) {
      card.classList.toggle('flipped');
    }
  });

  // Acción del botón para descargar folleto
  card.querySelector('.folleto-btn').addEventListener('click', (e) => {
    e.stopPropagation(); // Evita girar la carta
    const link = document.createElement('a');
    link.href = producto.folleto;
    link.download = `${producto.id}.pdf`;
    link.click();
  });

  // Acción del botón para ver características
  card.querySelector('.caract-btn').addEventListener('click', (e) => {
    e.stopPropagation(); // Evita girar la carta
    modalTitle.textContent = producto.nombre;
    modalBody.innerHTML = producto.caracteristicas;
    modal.classList.remove('hidden');
  });

  carousel.appendChild(card);
});

// Cerrar modal
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});
// Cerrar modal al presionar Esc
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
  }
});

// Rotar carrusel
function rotate(direction) {
  currentAngle += angle * direction;
  carousel.style.transform = `rotateY(${currentAngle}deg)`;
}

// ➕ EVENTO PARA LAS FLECHAS DEL TECLADO
// Escuchar flechas izquierda/derecha globalmente
document.addEventListener('keydown', (event) => {
  const activeTag = document.activeElement.tagName.toLowerCase();
  const isInputActive = ['input', 'textarea', 'button'].includes(activeTag);
  
  // Evitamos que se activen si estás escribiendo o enfocado en un input
  if (!isInputActive) {
    if (event.key === 'ArrowLeft') {
      rotate(-1);
    } else if (event.key === 'ArrowRight') {
      rotate(1);
    }
  }
});

let userInteracted = false;
let recenterTimeout;

// Centrar el carrusel (en este caso a la posición actual del ángulo)
function centerCarousel() {
  carousel.style.transition = 'transform 1s';
  carousel.style.transform = `rotateY(${currentAngle}deg)`;
}

// Detecta interacción del usuario en dispositivos móviles
['touchstart', 'touchmove', 'wheel'].forEach(event => {
  window.addEventListener(event, () => {
    userInteracted = true;
    clearTimeout(recenterTimeout);
    recenterTimeout = setTimeout(() => {
      if (userInteracted) {
        centerCarousel();
        userInteracted = false;
      }
    }, 2000); // Espera 2 segundos sin interacción
  });
});
