gsap.from("#loader h2",{
    y:160,
    opacity:0,
    duration: 1,
    stagger: 0.2,
})

let timer = document.querySelector("#line-part1 h5");
let grow =0;

setInterval(()=>{
if(grow<100){
    grow++;
    timer.innerHTML= grow ;
}else{
    grow=100;
    timer.innerHTML= grow ;
}
},35)