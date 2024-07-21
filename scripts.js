document.addEventListener('DOMContentLoaded', (event) => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');

    noButton.addEventListener('mouseover', () => {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    });

    yesButton.addEventListener('click', () => {
        window.location.href = `https://www.youtube.com/watch?v=izGwDsrQ1eQ`;
    });
});
