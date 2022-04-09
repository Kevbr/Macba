
const op1  = document.querySelector(".op1");
const op2  = document.querySelector(".op2");
const op3  = document.querySelector(".op3");
const op4  = document.querySelector(".op4");

const servicio1 = document.querySelector(".info1");
const servicio2 = document.querySelector(".info2");
const servicio3 = document.querySelector(".info3");
const servicio4 = document.querySelector(".info4");


op1.addEventListener("click", () => {
    servicio1.style.display = "flex";
    servicio2.style.display = "none";
    servicio3.style.display = "none";
    servicio4.style.display = "none";
    op1.style.color = "#b5b5b5b5";
    op2.style.color = "#000000";
    op3.style.color = "#000000";
    op4.style.color = "#000000";
});

op2.addEventListener("click", () => {
    servicio2.style.display = "flex";
    servicio1.style.display = "none";
    servicio3.style.display = "none";
    servicio4.style.display = "none";
    op2.style.color = "#b5b5b5b5";
    op1.style.color = "#000000";
    op3.style.color = "#000000";
    op4.style.color = "#000000";
});

op3.addEventListener("click", () => {
    servicio3.style.display = "flex";
    servicio2.style.display = "none";
    servicio1.style.display = "none";
    servicio4.style.display = "none";
    op3.style.color = "#b5b5b5b5";
    op2.style.color = "#000000";
    op1.style.color = "#000000";
    op4.style.color = "#000000";
});

op4.addEventListener("click", () => {
    servicio4.style.display = "flex";
    servicio2.style.display = "none";
    servicio3.style.display = "none";
    servicio1.style.display = "none";
    op4.style.color = "#b5b5b5b5";
    op2.style.color = "#000000";
    op3.style.color = "#000000";
    op1.style.color = "#000000";
});

const navSlide = ()=> {
    const burger = document.querySelector(".res-menu");
    const nav = document.querySelector(".nav-link");

    burger.addEventListener("click", ()=>{
        nav.classList.toggle("res-active");
    });
}

navSlide();

const qrSlide = ()=> {
    const qr = document.querySelector(".qr");

    qr.addEventListener("click", ()=>{
        qr.classList.toggle("slide");
    });
}

qrSlide();
