function loader(){
    gsap.from("#loader h2",{
        y:160,
        opacity:0,
        duration: 1,
        stagger: 0.3,
    })
    
    let timer = document.querySelector("#line-part1 h5");
    let grow =0;
    
    
    
    let tl = gsap.timeline();
    tl.from("#loader #line-part1",{
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
    
    tl.to("#now",{
        opacity:1,
        animationName: "anim"
    })
    tl.to("#loader",{
        opacity:0,
        duration:0.5,
        delay:3.7,
        onComplete: function() {
            document.querySelector("#loader").style.display = "none";
        }
    })
  
    tl.from("#page1", {
        y: 1900,
        duration: 1.5,
        
        opacity: 0,
    });
    tl.from("#nav",{
        opacity:0,
    })
    tl.from("#page1 h1",{
        y:130,
        stagger:0.25,
    })
}
loader();
document.addEventListener("mousemove", function(dets){
gsap.to("#cursor",{
    left: dets.x,
    top: dets.y ,
 
})
})

Shery.makeMagnet("#nav-part2 h4", {
    magnet :"#cursor",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });