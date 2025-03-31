var cursor = document.getElementById("cursor");
var main =document.getElementById("main");
var imageDiv = document.getElementById("image");

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out(1.7)"
    })
 })
imageDiv.addEventListener("mouseenter",function(){
    cursor.textContent = `view more`
    gsap.to(cursor,{
        scale:2,
    })
})

imageDiv.addEventListener("mouseleave",function(){
      cursor.textContent = ``
    gsap.to(cursor,{
        scale:1,
    })
})