
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
 let video = document.querySelector("#video");
 let flag  =0;
 videoContainer.addEventListener("click", function(){
    if(flag ==0){
        video.play();
       let cursor=  document.querySelector("#cursr");
       cursor.innerHTML = ` <i class="ri-pause-line"></i>`;
       flag=1;
       cursor.style.scale=0.7;
       video.style.opacity=1;
    }else{
         video.pause();
       let cursor=  document.querySelector("#cursr");
       cursor.innerHTML = `  <i class="ri-play-circle-fill"></i>`;
       flag=0;
       cursor.style.scale=1;
       video.style.opacity=0;

    }
    
 })
  
  videoContainer.addEventListener("mouseenter", function() {
  
      videoContainer.addEventListener("mousemove", function(dets) {
         gsap.to("#cursr", {
          x:dets.x -1250,
          y:dets.y ,
          overflow:"hidden",
          
    })

    
})
  })
   videoContainer.addEventListener("mouseleave", function() {

    
         gsap.to("#cursr", {
          x:"70%",
          y:"-18%",
          
          
    })

    

  })

  function sheryAnumation(){
    Shery.imageEffect(".image-div",{
        style:4,
      
        scale: 1.2,
        config:{"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7809770954565679},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":4.5,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2]},"discard_threshold":{"value":0.59,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.4,"range":[0,2]},"noise_scale":{"value":12.21,"range":[0,100]}}
        ,
        gooey:true,
    }) 
  }

    sheryAnumation();