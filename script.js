/*=========================
AOS INITIALIZATION
=========================*/
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

/*=========================
TYPING EFFECT
=========================*/
new Typed("#typing", {
    strings: [
        "Full Stack Developer",
        "Java Developer",
        "Problem Solver",
        "AI Enthusiast"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

/*=========================
MOBILE MENU
=========================*/
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Close menu when a link is clicked */
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

/*=========================
ACTIVE NAVIGATION
=========================*/
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/*=========================
SMOOTH SCROLL
=========================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

/*=========================
PARTICLES.JS
=========================*/

particlesJS("particles-js", {

"particles":{

"number":{
"value":70,
"density":{
"enable":true,
"value_area":800
}
},

"color":{
"value":"#00d9ff"
},

"shape":{
"type":"circle"
},

"opacity":{
"value":0.5
},

"size":{
"value":3,
"random":true
},

"line_linked":{
"enable":true,
"distance":150,
"color":"#00d9ff",
"opacity":0.3,
"width":1
},

"move":{
"enable":true,
"speed":2
}

},

"interactivity":{

"detect_on":"canvas",

"events":{

"onhover":{
"enable":true,
"mode":"grab"
},

"onclick":{
"enable":true,
"mode":"push"
},

"resize":true

},

"modes":{

"grab":{
"distance":180,
"line_linked":{
"opacity":1
}
},

"push":{
"particles_nb":4
}

}

},

"retina_detect":true

});

/*=========================
NAVBAR SHADOW ON SCROLL
=========================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 5px 20px rgba(0,217,255,.2)";

}
else{

header.style.boxShadow="none";

}

});

/*=========================
SCROLL TO TOP BUTTON
=========================*/

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.cursor="pointer";
topBtn.style.background="#00d9ff";
topBtn.style.color="#000";
topBtn.style.fontSize="20px";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});