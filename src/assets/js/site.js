// Scroll To Top Button 
const topButton = document.getElementById('toTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        if (!topButton.classList.contains('animate__zoomIn')) {
            topButton.classList.remove('animate__zoomOut');
            topButton.classList.add('animate__zoomIn');
            topButton.style.display = 'block';
        }
    } else {
        if (topButton.classList.contains('animate__zoomIn')) {
            topButton.classList.remove('animate__zoomIn');
            topButton.classList.add('animate__zoomOut');
            setTimeout(() => {
                topButton.style.display = 'none';
            }, 250);
        }
    }
}) 
topButton.addEventListener('click', (event) =>  {
    event.preventDefault();
    window.scroll({
        top:0,
        left:0,
        behavior: 'smooth'
    });
});