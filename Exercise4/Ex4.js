function change1(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value); 
    let R = a+b;
    document.getElementById("Results").innerText = (R);
}
function change2(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value); 
    let R = a-b;
    document.getElementById("Results").innerText = (R);
}
function change3(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value); 
    let R = a/b;
    document.getElementById("Results").innerText = (R);
}
function change4(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value); 
    let R = a*b;
    document.getElementById("Results").innerText = (R);
}
function change5(){
    document.getElementById("helloname").innerText = "Hello " + document.getElementById("text1").value;
}