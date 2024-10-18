let myDiv = document.getElementById("container");
let img1 = document.getElementById("1");
let img2 = document.getElementById("2");
let img3 = document.getElementById("3");
let img4 = document.getElementById("4");
let img5 = document.getElementById("5");
let img6 = document.getElementById("6");



let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");
let a5 = document.getElementById("a5");
let a6 = document.getElementById("a6");






// let myH1 = document.getElementById("h1");
let myButton = document.querySelector("button");
myDiv.addEventListener("mousemove", function(e){
    let x =e.clientX;
    let y =e.clientY;
    // myButton.innerText = x;
    if((x<500)&&(x>400)){
        img1.style.display="block";
        // myH1.innerText = "1st image";
        a1.style.cssText=`background-color: black;`;
        a2.style.cssText=`background-color: rgb(216, 216, 216);`;

    }else if((x>500)&&(x<600)){
        img2.style.display="block";
        img1.style.display="none";
        // myH1.innerText = "2nd image";
        a2.style.cssText=`background-color: black;`;
        a3.style.cssText=`background-color: rgb(216, 216, 216);`;

        a1.style.cssText=`background-color: rgb(216, 216, 216);`;
    }
    else if((x>600)&&(x<700)){
        img3.style.display="block";
        img2.style.display="none";
        // myH1.innerText = "3rd image";
        a3.style.cssText=`background-color: black;`;
        a2.style.cssText=`background-color: rgb(216, 216, 216);`;
        a4.style.cssText=`background-color: rgb(216, 216, 216);`;

    }
    else if((x>700)&&(x<800)){
        img4.style.display="block";
        img3.style.display="none";
        // myH1.innerText = "4th image";
        a4.style.cssText=`background-color: black;`;
        a3.style.cssText=`background-color: rgb(216, 216, 216);`;
        a5.style.cssText=`background-color: rgb(216, 216, 216);`;

    }
    else if((x>800)&&(x<900)){
        img5.style.display="block";
        img4.style.display="none";
        // myH1.innerText = "5th image";
        a5.style.cssText=`background-color: black;`;
        a6.style.cssText=`background-color: rgb(216, 216, 216);`;
        a4.style.cssText=`background-color: rgb(216, 216, 216);`;
    }
    else if((x>900)&&(x<1000)){
        img6.style.display="block";
        img5.style.display="none";
        // myH1.innerText = "6th image";
        a6.style.cssText=`background-color: black;`;
        a5.style.cssText=`background-color: rgb(216, 216, 216);`;
    }
    else{
        // a2.style.cssText=`background-color: black;`;
        a6.style.cssText=`background-color: rgb(216, 216, 216);`;
        a1.style.cssText=`background-color: rgb(216, 216, 216);`;
    };   
});
