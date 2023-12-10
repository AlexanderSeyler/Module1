function calculation(){
    var n= parseInt(document.getElementById("num1").value);
    var m= parseInt(document.getElementById("num2").value);
    
    var sum = n+m;
if (n == m){
    let result = sum;
    document.getElementById("answer").innerText = result;
}
else{
    let result = sum/2;
    document.getElementById("answer").innerText = result;
}
}
