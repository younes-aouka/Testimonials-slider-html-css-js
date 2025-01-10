// light/dark mode part
const changeModeButton = document.querySelector(".mode");
const modeIcon = document.querySelector(".mode i");
const lightModeIcon = "fa-solid fa-moon";
const darkModeIcon = "fa-regular fa-sun";
const modeSwitchSound = new Audio("sounds/modeSwitch.mp3");
modeSwitchSound.volume = 0.1;

function searchForOldMode(){
    if(localStorage.getItem("mode")==="DarkMode"){
        document.body.classList.replace("lightMode", "DarkMode");
        modeIcon.className = darkModeIcon;
    }
}
searchForOldMode();


changeModeButton.addEventListener("click",async function(){
    changeModeButton.disabled = true ;
    if (document.body.classList.contains("lightMode")) {
        document.body.classList.replace("lightMode", "DarkMode");
        modeIcon.className = darkModeIcon;  
    } else {
        document.body.classList.replace("DarkMode", "lightMode");
        modeIcon.className = lightModeIcon;
    }
    localStorage.setItem("mode",document.body.className);
    await modeSwitchSound.play();
    changeModeButton.disabled = false ;
});

// testimonials part

const testimonials = [
    {
        img: "images/testimonial-01.jpg",
        testimonial: "From the moment I engaged with Younes Company, I felt like more than just a client—I felt like part of an innovative family. After collaborating with their talented team, I discovered not just solutions, but inspired ideas that transformed my vision into reality" ,
        Name: "Walter"
    },
    {
        img: "images/testimonial-02.jpg",
        testimonial: "I have tried a few software of this kind and younes company is the best by far!",
        Name: "jhon"
    },
    {
        img: "images/testimonial-03.jpg",
        testimonial: "If you want to take your business to the next level, use younes company and don't look any further.",
        Name: "Carlos"
    }
];

const img = document.querySelector(".box img");
const text = document.querySelector(".box .text");
const Name = document.querySelector(".box .userName");

function changeTestimonial() {
    let index = 0;
    setInterval(() => {
        img.src = testimonials[index].img;
        text.textContent = testimonials[index].testimonial;
        Name.textContent = testimonials[index].Name;
        index= (index+1)%3 ;
    },5000);
}
changeTestimonial();


