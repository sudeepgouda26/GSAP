 var main = document.getElementById("main");
 var cursor = document.getElementById("cursor");

 main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out(1.7)"
    })
 })