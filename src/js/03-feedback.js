import throttle from require('lodash.throttle');

const STORAGE_KEY = 'feedback-form-state';


const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
    event.preventDefault();

    if (!event.target.email.vaule || !event.target.message.vaule) {
        alert('Заповніть усі поля форми');
        return;
    }
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

}

outputFromLocalStorage();

function outputFromLocalStorage() {
    const outputData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (outputData) {
        refs.email.vaule = outputData.email;
        refs.message.vaule = outputData.message;
    }
}