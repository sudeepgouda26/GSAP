var h1 = document.querySelector('h1');
var h1Text =h1.innerText;

 var h1TextArray = h1Text.split("");
 console.log(h1TextArray);

 var cutter ="";

 var halfArray = Math.floor(h1TextArray.length/2);

 h1TextArray.forEach(function(elem, idx){
   if(idx<halfArray){
    cutter += `<span class="FirstHalf">${elem}</span>`;
   }
   else{
    cutter += `<span class="SecondHalf">${elem}</span>`;
   }
 })
 

 h1.innerHTML = cutter;


 gsap.from(".FirstHalf",{
    y:100,
    duration:0.5,
    delay:0.3,
    stagger:0.14,
    opacity:0,
 })

 gsap.from(".SecondHalf",{
    y:100,
    duration:0.5,
    delay:0.3,
    stagger:-0.14,
    opacity:0,
 })