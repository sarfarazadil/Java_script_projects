let flag = 0;

function controller(x){
    // if(x ==1){
    //     flag= (flag + x)%4;
    // }
    // else if(x == -1){
    //     flag =flag +x;
    //     // flag = 4 +flag;
    //     if(flag== -1 ){
    //         flag =3;
    //     }
    // }
    flag = flag +x;
    slideshow(flag);
}
slideshow(flag);
function slideshow(num){
    let slides = document.getElementsByClassName("slide")
    // console.log(slide);
    if(num == slides.length){
        flag =0;
        num =0;
    }
    if(num == -1){
        flag = slides.length -1;
        num = flag;
    }

    for(let y of slides ){
        y.style.display = "none";
    }
    slides[num].style.display ="block";
}









