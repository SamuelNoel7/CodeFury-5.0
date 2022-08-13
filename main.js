var wrapper;
var dropdown_menu;
var toggle_btn;


function declare()
{
    wrapper = document.querySelector(".wrapper");
    dropdown_menu = document.querySelector(".dropdown");
    toggle_btn = document.querySelector(".toggle-btn");
}

declare();


const main = document.querySelector("main");
let dark = false;
function toggleAnimation() {
    dark = !dark;
    let clone = wrapper.cloneNode(true);
    if(dark){
        clone.classList.remove("light");
        clone.classList.add("dark");
    }
    else{
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);
    clone.addEventListener("animationend",() =>{
        wrapper.remove();
        clone.classList.remove("copy");
        declare();
        events();
    })
}

function events()
{
    dropdown_menu.addEventListener("click",() =>{
        wrapper.classList.toggle("active");
    });
}


events();