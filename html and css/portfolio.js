
// text animation 

const text = document.querySelector(".second-text");
        
            const textLoad = () =>  {
                    setTimeout(() => {
                        text.textContent = "Mihir";
                    }, 0);
                    setTimeout(() => {
                        text.textContent = "Web Developer";
                    }, 4300);
            }
            textLoad();
            setInterval(textLoad, 8000);


// navigation sticky scrolling
