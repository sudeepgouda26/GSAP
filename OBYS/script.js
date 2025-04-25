gsap.from("#loader h2",{
    y:160,
    opacity:0,
    duration: 1,
    stagger: 0.3,
})

let timer = document.querySelector("#line-part1 h5");
let grow =0;



let tl = gsap.timeline();
tl.from("#loader #line-part1,#now",{
    opacity:0,
    duration:1,
    delay:1.5,
 
   
    onStart:function () {
        setInterval(()=>{
            if(grow<100){
                grow++;
                timer.innerHTML= grow ;
            }else{
                grow=100;
                timer.innerHTML= grow ;
            }
            },35)
        
    }
})
tl.to("#loader",{
    opacity:0,
    duration:0.5,
    delay:4
})