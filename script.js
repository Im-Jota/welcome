const steps = [
    document.getElementById('welcome'),
    document.getElementById('step-login'),
    document.getElementById('step-import-bookmarks'),
    document.getElementById('step-theme'),
    document.getElementById('step-finished')
];

let currentStepIndex = 0;


// Botones de cada paso
const nextWelcomeBtn = document.getElementById('next-welcome');
const nextLoginBtn = document.getElementById('next-login');
const startBrowsingBtn = document.getElementById('start-browsing');


const back = document.getElementById('back');
const next = document.getElementById('next');


// Puntos de progreso
const item1 = document.getElementById('item-1');
const item2 = document.getElementById('item-2');
const item3 = document.getElementById('item-3');
const item4 = document.getElementById('item-4');


const footerMain = document.getElementById('footer-main');

// Función para mostrar un paso y ocultar los demás
function showStep(index) {
    /*
    document.querySelectorAll('.step').forEach(s => s.style.display = 'none');
    step.style.display = 'block';
    */
   const currentStep = document.querySelector('.card.step.active');
   const nextStep = steps[index];
    
    const animate = () => {
        if (currentStep) {
            currentStep.classList.remove('active');
        }
        nextStep.classList.add('active');
    };

    if ('startViewTransition' in document) {
        document.startViewTransition(animate);
    } else {
        animate(); // fallback si no hay soporte
    }
    /*
    currentStepIndex = index;
    updateProgress(index + 1);
    */
}

// Función para actualizar los puntos de progreso
function updateProgress(stepNumber) {
    // Limpiar todos los puntos
    item1.classList.remove('active', 'completed');
    item2.classList.remove('active', 'completed');
    item3.classList.remove('active', 'completed');
    item4.classList.remove('active', 'completed');

    // Activar puntos según el paso actual
    if (stepNumber >= 0) item1.classList.add('completed');
    if (stepNumber >= 1) item2.classList.add('completed');
    if (stepNumber >= 2) item3.classList.add('completed');
    if (stepNumber >= 3) item4.classList.add('completed');

    // Marcar el punto actual como activo
    if (stepNumber === 0) item1.classList.add('active');
    if (stepNumber === 1) item2.classList.add('active');
    if (stepNumber === 2) item3.classList.add('active');
    if (stepNumber === 3) item4.classList.add('active');
}

function footer() {
    if(currentStepIndex >= 1 && currentStepIndex <= 3) {
        footerMain.classList.remove('disabled')
    } else {
        footerMain.classList.add('disabled')
    }
}

// Paso 1: Bienvenida
nextWelcomeBtn.addEventListener('click', () => {
    nextStepButton()
});

// Paso 2: Inicio de sesión
nextLoginBtn.addEventListener('click', () => {
    nextStepButton()
});

// Paso 5: Configuración finalizada
startBrowsingBtn.addEventListener('click', () => {
    alert('¡Ahora puedes empezar a navegar!');
    // Redirigir a la página principal o abrir nueva pestaña
    window.location.href = '/home'; // Cambiar por la URL principal de la aplicación
});

back.addEventListener('click', () => {
    currentStepIndex = currentStepIndex - 1;
    showStep(currentStepIndex)
    footer()
})

next.addEventListener('click', () => {
    nextStepButton()
})

function nextStepButton() {
    currentStepIndex = currentStepIndex + 1;
    showStep(currentStepIndex)
    updateProgress(currentStepIndex);
    footer()
}