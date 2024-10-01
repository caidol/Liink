const images = ['../assets/channels/static1.png', '../assets/channels/static2.png', '../assets/channels/static3.png', '../assets/channels/static4.png'];
let currentIndex = 0;

function changeVacantChannelImage() {
    const elements = document.querySelectorAll('.channel .channel-vacant');
    
    elements.forEach(element => {
        element.style.setProperty('--background-image', `url(${images[currentIndex]})`);
    });
    
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeVacantChannelImage, 75); 

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

            addBorder(channel, getBorderColor(channel.id));
        } else if (event.type === 'mouseleave') {
            channel.style.transform = 'scale(1)';
            channel.style.zIndex = 'auto';
            removeBorder(channel);
        }
    }

    function getBorderColor(channelId) {

        const colorMap = {
            'disc': 'rgba(255, 0, 0, 0.7)',   
            'mii': 'rgba(0, 255, 0, 0.7)',    
            'photo': 'rgba(0, 0, 255, 0.7)',   
            'shop': 'rgba(255, 255, 0, 0.7)', 
            'news': 'rgba(255, 0, 255, 0.7)', 
            'forecast': 'rgba(0, 255, 255, 0.7)'
        };
        return colorMap[channelId] || 'rgba(255, 255, 255, 0.7)'; 
    }

    function addBorder(channel, color = 'rgba(255, 255, 255, 0.7)') {
        let border = channel.querySelector('.channel-border');
        if (!border) {
            border = document.createElement('div');
            border.className = 'channel-border';
            channel.appendChild(border);
        }
        
        border.style.position = 'absolute';
        border.style.top = '5px';
        border.style.left = '5px';
        border.style.right = '5px';
        border.style.bottom = '5px';
        border.style.border = `2px solid ${color}`;
        border.style.borderRadius = '15px';
        border.style.transition = 'all 0.3s ease';
        border.style.pointerEvents = 'none';
        

        border.offsetHeight;
        
        border.style.opacity = '1';
    }

    function removeBorder(channel) {
        const border = channel.querySelector('.channel-border');
        if (border) {
            border.style.opacity = '0';
        }
    }

    mainMenu.addEventListener('mouseenter', handleInteraction, true);
    mainMenu.addEventListener('mouseleave', handleInteraction, true);

    console.log('Event listeners added to main menu');
});

/* Occupied channel on hover event listener */
const channels = document.querySelectorAll(".channel .channel-occupied");
channels.forEach(channel => {
    channel.addEventListener('mouseover', () => {
        const channelInfo = channel.querySelector(".channel-info");
        // show info tag
        if (channelInfo){
            channelInfo.hidden = false;
        } 
    });

    channel.addEventListener('mouseout', () => {
        const channelInfo = channel.querySelector(".channel-info");
        // hide info tag
        if (channelInfo){
            channelInfo.hidden = true;
        } 
    });
});

/* Datetime functions */
function displayDateTime() {
    var timeInfo = document.getElementById("time");
    var dateInfo = document.getElementById("date");
    
    var monthNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    var weekDays = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

    var currDate = new Date();

    var weekDay = weekDays[currDate.getDay()];
    var month = monthNumbers[currDate.getMonth()];
    var monthDay = currDate.getDate();
    var time = (currDate.getUTCHours() - currDate.getTimezoneOffset()/60) + ":" + (currDate.getMinutes() < 10 ? '0' : '') + currDate.getMinutes();

    timeInfo.innerText = time;
    dateInfo.innerText = weekDay + " " + monthDay + "/" + month;
}

setInterval(displayDateTime, 2000);