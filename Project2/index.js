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