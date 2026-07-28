// ==============================
// SAFEON WEBSITE JAVASCRIPT
// ==============================

// Smooth scroll for navigation links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


// ==============================
// Sticky Navbar Shadow
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 50){

        header.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";

    }

    else{

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";

    }

});


// ==============================
// Hero Button
// ==============================

const exploreBtn = document.querySelector(".btn");

exploreBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    document.querySelector("#product").scrollIntoView({

        behavior:"smooth"

    });

});


// ==============================
// Fade-in Animation
// ==============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0px)";

        }

    });

},{
    threshold:0.2
});


sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition="all 0.8s ease";

    observer.observe(section);

});


// ==============================
// Welcome Message
// ==============================

window.onload=()=>{

    console.log("Welcome to SafeOn 🚀");

}