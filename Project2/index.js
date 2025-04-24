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
      
        start:"top 80%",
        end:"top 70%",
        scrub:1,
    },
    opacity:0,
    x:-100,

    stagger:0.3,
})

tl.from("#info > :nth-child(1) > h3 ,:nth-child(2) > p ",{
    scrollTrigger:{
        trigger:"#info",
        scroller:"body",
        
        start:"top 80%",
        end:"top 73%",
        scrub:1,
    },
    opacity:0,
    x:100,

    stagger:0.3,
})


// tl.from("#info > :nth-child(2) > p ",{
//     scrollTrigger:{
//         trigger:"#info",
//         scroller:"body",
//         markers:true,
//         start:"top 80%",
//         end:"top 75%",
//         scrub:1,
//     },
//     opacity:0,
//     x:-100,

//     stagger:0.3,
// })

var tl2 = gsap.timeline({
    scrollTrigger:
    {
        trigger:"#container1,#container2",
        scroller:"body",
        start:"top 60%",
        end:"top 40%",
       
        scrub:2,
    }

})

tl2.from(".box.left1",{
    opacity:0,
    x:-100,
    duration:1,
   
},"animate1")
tl2.from(".box.right1",{
    opacity:0,
    x:100,
    duration:1,
   
},"animate1")

tl2.from(".box.left2",{
    opacity:0,
    x:-100,
    duration:1,
   
},"animate2")
tl2.from(".box.right2",{
    opacity:0,
    x:100,
    duration:1,
   
},"animate2")

   
 