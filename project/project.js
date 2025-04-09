var tl =gsap.timeline();

var menu =document.getElementById("menubar");
var closebtn =document.querySelector("#side");
tl.pause();

tl.to("#side",{
    x:"-80%",
    duration:0.5,
})
tl.to("#menubar",{
    opacity:0
})

tl.from("#side h2",{
    x:200,
    douration:0.5,
    stagger:0.4,
    opacity:0
})
tl.from("#side i",{
    opacity:0,
})

closebtn.addEventListener("click", function(){
    tl.reverse()
   
 
   
})

menu.addEventListener("click",function(){
    tl.play();
  

})


