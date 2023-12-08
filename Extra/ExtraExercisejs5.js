function calculation(){
    let n= parseInt(document.getElementById("text1").value);
    let m= parseInt(document.getElementById("text2").value);
    let result = document.getElementById("answer");
    let sum = n+m;
if (n == m){
    result.textcontent = "Triple the sum: " + ((sum)*3);

}
else{
    result.textcontent = "Sum" + (sum);
}
}
