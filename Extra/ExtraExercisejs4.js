
function calculation(){
let num = parseInt(document.getElementById("text1").value);
if (num<=13){
    var answer = num-13;
    document.getElementById("answer").innerText = answer;
}
else{
    var answer = num*2;
    document.getElementById("answer").innerText = answer;
}

}
