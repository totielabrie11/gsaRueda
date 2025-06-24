const productos = [
  {
  "id": "compact8",
  "titulo": "Plataforma Tipo Tijera",
  "nombre": "Plataforma Elevadora Compact 8/14",
  "descripcion": "Elevador tipo tijera con altura de trabajo de 8,18 m a 14 m y capacidad de carga de 350 kg.",
  "imagen": "https://www.elevarteplataformas.com/wp-content/uploads/2022/07/Nuevas-Haulotte-Compact.jpg",
  "folleto": "documentos/tijeras.pdf",
  "caracteristicas": `<ul>
    <li>Altura máxima de trabajo: 14 metros</li>
    <li>Capacidad de carga: 350 kg</li>
    <li>Plataforma extensible para mayor alcance</li>
    <li>Tracción eléctrica silenciosa</li>
    <li>Diseño compacto ideal para interiores</li>
  </ul>`
},
{
  "id": "ha12ip",
  "titulo": "Brazo Articulado Eléctrico",
  "nombre": "Brazo Articulado HA 12 IP",
  "descripcion": "Plataforma articulada eléctrica con altura de trabajo de 12 m y alcance horizontal de 6,6 m.",
  "imagen": "https://www.elevacionesarchipielago.com/wp-content/uploads/2019/04/BEA12-II.jpg",
  "folleto": "documentos/brazos.pdf",
  "caracteristicas": `<ul>
    <li>Altura de trabajo: 12 metros</li>
    <li>Alcance horizontal: 6,6 metros</li>
    <li>Giro de torreta: 355°</li>
    <li>Tracción eléctrica sin emisiones</li>
    <li>Ideal para mantenimiento en interiores</li>
  </ul>`
},
{
  "id": "transporte",
  "titulo": "Logística Nacional",
  "nombre": "Servicios de Transporte Nacional",
  "descripcion": "Ofrecemos soluciones logísticas de transporte para maquinaria y equipos a lo largo y ancho del país.",
  "imagen": "https://gsarental.com.ar/wp-content/uploads/2017/02/1.png",
  "folleto": "documentos/servicios.pdf",
  "caracteristicas": `<ul>
    <li>Cobertura nacional</li>
    <li>Seguimiento satelital de las unidades</li>
    <li>Transporte especializado para maquinaria pesada</li>
    <li>Entregas puntuales y seguras</li>
    <li>Soporte logístico personalizado</li>
  </ul>`
},
{
  "id": "haulotte170",
  "titulo": "Manipulador Telescópico",
  "nombre": "Manipulador Telescópico Haulotte HTL 4017",
  "descripcion": "Equipo de elevación con altura de trabajo de 16,90 m.",
  "imagen": "./img/manipulador.png",
  "folleto": "documentos/manipuladores.pdf",
  "caracteristicas": `<ul>
    <li>Altura máxima de elevación: 16,9 metros</li>
    <li>Capacidad de carga: 200 kg</li>
    <li>Radio de giro reducido</li>
    <li>Brazo articulado con movimientos precisos</li>
    <li>Sistema de control intuitivo y ergonómico</li>
  </ul>
  <h4>HTL 4017 - Detalles Técnicos</h4>
  <ul>
    <li>Capacidad máxima: 4.000 kg</li>
    <li>Altura máxima: 16,7 m</li>
    <li>Peso total: 12.000 kg</li>
    <li>Motor: Perkins Tier III</li>
    <li>Potencia: 94 HP</li>
  </ul>`
},
{
  "id": "autoelevador_diesel_1500",
  "titulo": "Autoelevador Diésel",
  "nombre": "Autoelevador Diésel 2.500 kg",
  "descripcion": "Autoelevador (montacargas) diésel con capacidad de carga de 2.500 kg y mástil de hasta 4,80 m.",
  "imagen": "https://jacforklift.com.ar/web/uploads/products/10/principal/0-principal.webp?1637431626",
  "folleto": "documentos/autoelevadores.pdf",
  "caracteristicas": `<ul>
    <li>Capacidad de carga: 1.500 kg</li>
    <li>Altura de elevación (mástil extendido): 4,80 m</li>
    <li>Altura con mástil replegado: 1,63 m</li>
    <li>Propulsión diésel – ideal para trabajos en exteriores</li>
    <li>Diseño robusto para uso industrial pesado</li>
  </ul>`
},
{
  "id": "terex_rl4",
  "titulo": "Torre de Iluminación",
  "nombre": "Torre de Iluminación Terex RL4",
  "descripcion": "Torre de iluminación diesel con mástil de 7,13 m y 4 lámparas de halogenuro metálico de 4.000 W.",
  "imagen": "./img/iluminaria.png",
  "folleto": "documentos/iliminacion.pdf",
  "caracteristicas": `<ul>
    <li>Altura con mástil extendido: 7,13 m</li>
    <li>4 lámparas de halogenuro metálico, total 4.000 W</li>
    <li>Depósito de combustible: 170 l (≈ 90 h de autonomía)</li>
    <li>Propulsión diésel, ideal para uso externo</li>
    <li>Mástil retráctil para fácil transporte y almacenamiento</li>
  </ul>`
}
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
        <div class="product-image-container">
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <span class="zoom-icon">🔍</span>
        </div>
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
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = producto.folleto;
    link.download = `${producto.id}.pdf`;
    link.click();
  });

  // Acción del botón para ver características
  card.querySelector('.caract-btn').addEventListener('click', (e) => {
    e.stopPropagation();
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
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
  }
});

// Rotar carrusel
function rotate(direction) {
  currentAngle += angle * direction;
  carousel.style.transform = `rotateY(${currentAngle}deg)`;
  actualizarTituloProducto();
}

// Flechas del teclado para rotar
document.addEventListener('keydown', (event) => {
  const activeTag = document.activeElement.tagName.toLowerCase();
  const isInputActive = ['input', 'textarea', 'button'].includes(activeTag);
  if (!isInputActive) {
    if (event.key === 'ArrowLeft') rotate(-1);
    else if (event.key === 'ArrowRight') rotate(1);
  }
});

// Centrado automático
let userInteracted = false;
let recenterTimeout;
function centerCarousel() {
  carousel.style.transition = 'transform 1s';
  carousel.style.transform = `rotateY(${currentAngle}deg)`;
}
['touchstart', 'touchmove', 'wheel'].forEach(event => {
  window.addEventListener(event, () => {
    userInteracted = true;
    clearTimeout(recenterTimeout);
    recenterTimeout = setTimeout(() => {
      if (userInteracted) {
        centerCarousel();
        userInteracted = false;
      }
    }, 2000);
  });
});

// ✅ EFECTO LUPA EN LAS IMÁGENES
document.querySelectorAll('.product-image-container').forEach(container => {
  const img = container.querySelector('img');

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = 'scale(2)';
  });

  container.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
    img.style.transformOrigin = 'center center';
  });
});

function actualizarTituloProducto() {
  // Calculamos el índice actual visible según el ángulo
  const total = productos.length;
  let indexActual = ((Math.round(-currentAngle / angle) % total) + total) % total;
  const tituloActual = productos[indexActual].titulo;

  // Mostramos en el contenedor
  const contenedorTitulo = document.getElementById('producto-titulo');
  if (contenedorTitulo) contenedorTitulo.textContent = tituloActual;
}

actualizarTituloProducto();