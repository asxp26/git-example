const button = document.getElementById('changeText');
const heading = document.querySelector('h1');

button.addEventListener('click', () => {
    heading.textContent = 'Hello, JavaScript!';
});