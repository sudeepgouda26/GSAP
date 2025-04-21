let tl =gsap.timeline();

tl.from("#part1,#part2 i,h2,h4", {
    duration: 0.6,
    opacity: 0,
    y: -50,
    stagger: 0.2,
    ease: "power2.out",
});
tl.from("#part2 button",{
    y:-50,
    opacity:0,

})

tl.from("#leftpart #heading>h1",{
    duration:0.9,
    opacity:0,
    x :-100,
    stagger:0.2,
    ease:"power2.out"
})
tl.from("#leftpart :nth-child(2) ",{
    duration:0.9,
    opacity:0,
    x :100,
    stagger:0.2,
    ease:"power2.out"
})
tl.from("#leftpart :nth-child(3) ",{
    duration:0.9,
    opacity:0,
    y:100,
    stagger:0.2,
    ease:"power2.out"
},"-=0.5")

tl.from("#rightpart img",{
    duration:1,
    opacity:0,
    x:100,
    stagger:0.2,
    ease:"power2.out"
},"-=1.05")

tl.from("#companies img ",{
  
    scrollTrigger:{
        trigger:"#companies",
        scroller:"body",
        markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:1,
    },
    opacity:0,
    x:-100,

    stagger:0.3,
})
   
 