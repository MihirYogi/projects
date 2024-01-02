
// text animation 

const text = document.querySelector(".second-text");
        
            const textLoad = () =>  {
                    setTimeout(() => {
                        text.textContent = "Mihir";
                    }, 0);
                    setTimeout(() => {
                        text.textContent = "Web Developer";
                    }, 4000);
            }
            textLoad();
            setInterval(textLoad, 8000);


// responsive navigation bar 

const header = document.querySelector("header");
            window.addEventListener("scroll",function(){
                header.classList.toggle("sticky", window.scrollY > 120);
            });


//scroll animation

let sections = document.querySelectorAll(".ani");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animate');
        } else {
            entry.target.classList.remove('show-animate');
        }
    });
}, { threshold: 0.5 }); 

sections.forEach(section => {
    observer.observe(section);
});



