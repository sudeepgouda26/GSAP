// let tl =gsap.timeline();

// tl.from("h2",{
//     y:20,
//     duration:1.2,
//     delay:0.55,
//     scale:0.8,
//     opacity:0,
    
// })

// tl.from("h3",{
//     x:-70,
//     duration:1.2,
//     stagger:0.5,
//     opacity:0,


// })
gsap.to("#page3",{
    duration:4,
    delay:1,
   transform: "translateX(-150%)",
    rotate:360,
    scrollTrigger:{
        trigger:"#page3",
        start:"top 80%",
        end:"top 100%",
       
       
        scrub:2,

    },
    
    // stagger is removed as it is not applicable here
})
gsap.from("#page2",{
    duration:2,
    y:100,
    opacity:0,
    scale:1,
    delay:1,
    scrollTrigger:{
        trigger:"#page2",
        start:"top 50%",
        end:"top 100%",
      
        scrub:2,
    }

})
gsap.to("#home",
    {
        duration:2,
        delay:1,
      transform: "translateX(-150%)",
        scrollTrigger:{
            trigger:"h1",
            start:"top 50%",
            end:"top 80%",
            scrub:2,
            markers:true,
        }
    
        
        
    })
    