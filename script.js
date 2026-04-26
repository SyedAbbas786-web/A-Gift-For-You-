const yesBtn = document.querySelector('#yes-btn');
const noBtn = document.querySelector('#no-btn');
const question = document.querySelector('#question');
const subtext = document.querySelector('#subtext');
const mainGif = document.querySelector('#main-gif');

// Success logic
yesBtn.addEventListener('click', () => {
    question.innerHTML = "I knew it! You love me! 💖";
    subtext.innerHTML = "Best day ever!";
    mainGif.src = "cat2.gif"; // Uses your local file
    
    // Hide buttons smoothly
    document.querySelector('.btn-group').style.display = 'none';
});

// "No" button escaping logic
noBtn.addEventListener('mouseover', () => {
    // Calculate random position within the viewport
    const maxX = window.innerWidth - noBtn.clientWidth;
    const maxY = window.innerHeight - noBtn.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "fixed"; // Move relative to screen
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    // Update image to the 'thinking' cat
    mainGif.src = "cat3.gif"; 

    // Funny persuasive messages
    const messages = [
        "Please think again! 🥺",
        "Ek aur baar soch lo! 😉",
        "Man jao na! 😭",
        "Wrong button, try the other one!",
        "Are you sure?"
    ];
    
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    question.innerHTML = randomMsg;
});