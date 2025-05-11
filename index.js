let bulb = document.querySelector('.bulb');
let flame = document.querySelector('.flame');
let button = document.querySelector('.button');
let button2 = document.querySelector('.button2');
let click = 1;


button.addEventListener('click' , ()=>{
    console.log("Button was clicked");
    click++;
    if(click%2==0){
        flame.style.background = "linear-gradient(315deg , yellow ,white)";
        bulb.style.background = "linear-gradient(315deg , blue ,red)";
        bulb.style.boxShadow = "5px 5px 10px red, -5px -5px 10px blue";
        button.style.filter ="drop-shadow(3px 3px 3px rgb(255, 255, 255))";
        button.style.background = "linear-gradient(315deg , yellow ,white)";
        button.style.backgroundSize = "cover";

//     flame.style.@keyframes PracAnimate{
//     0%{
//         transform: rotateX(20deg);
//     }
//     25%{
//         transform: rotateY(40deg);
//     }
//     50%{
//         transform: rotateZ(20deg);
//     }
//     75%{
//         transform: rotateX(40deg);
//     }
//     100%{
//         transform: rotateY(20deg);
//     }
// }
    }
    else{
        flame.style.background = "none";
        bulb.style.background = "none";
        bulb.style.boxShadow = "none";
        button.style.filter = "none";
        button.style.backgroundImage = "none";
    }
})


