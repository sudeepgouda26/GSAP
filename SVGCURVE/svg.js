var path = `M 10 200 Q 100 200 1480 200`;
var FinalPath=`M 10 200 Q 100 200 1480 200`;


var string =document.getElementById("curve");

string.addEventListener("mousemove", function(dets){
    console.log(dets.x);
    path =`M 10 200 Q ${dets.x} ${dets.y} 1480 200`

    gsap.to("svg path",{
        attr:{
            d:path
        },
        duration:0.1,

    })
})
string.addEventListener("mouseleave", function(dets){
    console.log(dets.y);
     FinalPath=`M 10 200 Q 100 200 1480 200`;

    gsap.to("svg path",{
        attr:{
            d:FinalPath
        },
        duration:1.5,
        ease:"elastic.out(1,0.3)", 

    })
})