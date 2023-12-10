
function changes(){
document.getElementById("header").innerText = "hello js";
document.getElementById("aside").style.backgroundColor = "green";
let b = document.getElementById("body");
let p = document.createElement("p");
p.innerText = "This is new";
b.appendChild(p);}



function helloWorld(){
        document.getElementById("header").innerText = 'Hello JavaScript';
        document.getElementById("aside").style.backgroundColor = 'green';
        let b = document.getElementById("body");
        let p = document.createElement("p");
        p.innerText = "This is the brand spanking new paragraph";
        b.appendChild(p);
}