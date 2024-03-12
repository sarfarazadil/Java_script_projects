let text = document.getElementById("text");
let w = document.getElementById("word");
let ch = document.getElementById("char");

text.addEventListener('input' , function(){
    let char = this.value;
    ch.innerHTML = char.length;


    char = char.trim();
    let arr = char.split(" ");
    let newarr = arr.filter(function(el){
        // return elm! = "";
        if(el !=""){
            return el;
        }

        
    });
    w.innerHTML = newarr.length;
})
