// light/dark mode part
const modeIcon = document.querySelector(".mode i");
const lightModeIcon = "fa-solid fa-moon";
const darkModeIcon = "fa-regular fa-sun";

function searchForOldMode(){
    if(localStorage.getItem("mode")==="DarkMode"){
        document.body.classList.replace("lightMode", "DarkMode");
        modeIcon.className = darkModeIcon;
    }
}

searchForOldMode();

document.querySelector(".mode").addEventListener("click", function() {
    if (document.body.classList.contains("lightMode")) {
        document.body.classList.replace("lightMode", "DarkMode");
        modeIcon.className = darkModeIcon;  
    } else {
        document.body.classList.replace("DarkMode", "lightMode");
        modeIcon.className = lightModeIcon;
    }
    localStorage.setItem("mode",document.body.className);
});

// testimonials part
const testimonials = [
    {
        img: "images/testimonial-01.jpg",
        testimonial: "I highly recommend younes company. It has been so important for us as we continue to grow our company.",
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
        if (index === 2) index = 0;
        else index++;
    },5000);
}

changeTestimonial();


