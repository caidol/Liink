


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


/*
document.addEventListener('DOMContentLoaded', () => {
    const occupiedChannels = document.querySelectorAll('.channel-occupied');

    console.log(`Selected ${occupiedChannels.length} occupied channels`);

    if (occupiedChannels.length === 0) {
        console.error('No occupied channels found. Check your HTML structure and class names.');
        return;
    }

    function onHover(event) {
        console.log('Hover detected on:', event.target.id);
        event.target.classList.
        element.classList.replace(".channel-occupied", ".channel-occupied.enlarged");
    }

    function onLeave(event) {
        console.log('Leave detected on:', event.target.id);
        element.classList.replace(".channel-occupied.enlarged", ".channel-occupied");
    }

    occupiedChannels.forEach((channel, index) => {
        console.log(`Adding listeners to channel ${index + 1} with id: ${channel.id}`);
        channel.addEventListener('onmouseover', onHover);
        channel.addEventListener('onmouseout', onLeave);
    });
});

*/

document.addEventListener('DOMContentLoaded', () => {
    const mainMenu = document.querySelector('.main-menu');

    if (!mainMenu) {
        console.error('Main menu not found');
        return;
    }

    function handleInteraction(event) {
        const channel = event.target.closest('.channel-occupied');
        if (!channel) return;

        console.log(`${event.type} detected on:`, channel.id);

        if (event.type === 'mouseenter') {
            channel.style.transform = 'scale(1.1)';
            channel.style.zIndex = '1';
        } else if (event.type === 'mouseleave') {
            channel.style.transform = 'scale(1)';
            channel.style.zIndex = 'auto';
        }
    }

    mainMenu.addEventListener('mouseenter', handleInteraction, true);
    mainMenu.addEventListener('mouseleave', handleInteraction, true);

    console.log('Event listeners added to main menu');
});