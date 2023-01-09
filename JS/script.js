let li = document.querySelectorAll("li");
let navbar = document.querySelector("#navbar");
let hide = document.querySelector("#hide");
let navbarBtn = document.querySelector("#navbarBtn");

li.forEach(items=>{
    items.addEventListener("click" , ()=>{
        li.forEach(remove=>{
            remove.classList.remove("active");
        })
        items.classList.add("active");
    })
});

navbarBtn.addEventListener("click" , ()=>{
    navbar.style.display = "grid";
})

hide.addEventListener("click" , ()=>{
    navbar.style.display = "none";
})


