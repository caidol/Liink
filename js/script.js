const images = ['../assets/channels/static1.png', '../assets/channels/static2.png', '../assets/channels/static3.png', '../assets/channels/static4.png'];
let currentIndex = 0;

function changeImage() {
    const elements = document.querySelectorAll('.channel .channel-vacant');
    
    elements.forEach(element => {
        // console.log(`Setting image ${images[currentIndex]}`);
        element.style.setProperty('--background-image', `url(${images[currentIndex]})`);
    });
    
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 75); 