// JavaScript to handle multi-step navigation
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const formSteps = document.querySelectorAll('.form-step');
let currentStep = 0;

nextBtns.forEach(button => {
    button.addEventListener('click', () => {
        changeStep(1);
    });
});

prevBtns.forEach(button => {
    button.addEventListener('click', () => {
        changeStep(-1);
    });
});

function changeStep(step) {
    formSteps[currentStep].classList.remove('active-step');
    currentStep += step;
    formSteps[currentStep].classList.add('active-step');
}
