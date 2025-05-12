
function locomotivejs(){
    gsap.registerPlugin(ScrollTrigger);


// --- SETUP START ---
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.defaults({ scroller: "#main" });
// --- SETUP END ---











// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotivejs();

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
    tl.from("#page1 h1,h2",{
        y:130,
        stagger:0.25,
    })
    tl.from("#page2 ",{
    
        opacity:0,
    },"-=2.5")
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

  let videoContainer = document.querySelector(".video-container");
  console.log(videoContainer);
  
  videoContainer.addEventListener("mousemove", function(dets) {
    gsap.to("#cursr", {
          x:dets.x,
          y:dets.y,
          overFlow:"hidden",
    })
  })