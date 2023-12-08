function change1(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = a+b;
    if(a == 50 || b == 50 || c == 50){
        document.getElementById("Answer").innerText = "True";
    }
    else{
        document.getElementById("Answer").innerText = "False";
    }
}