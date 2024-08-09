const header = document.querySelector(".header");

document.addEventListener("scroll", ()=>{
    if(window.scrollY > 100) {
        header.classList.add("header-scrolled");
        console.log("class added")
    } else {
        header.classList.remove("header-scrolled");
    }
})

document.addEventListener("scroll", () => {
    console.log("Scroll Y:", window.scrollY); // Exibe o valor de scrollY no console
});
