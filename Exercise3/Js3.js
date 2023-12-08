
            function change1(){
                document.getElementById("column1").style.backgroundColor = "lightgreen";
                document.getElementById("column2").style.backgroundColor = "goldenrod";
                document.getElementById("heading1").innerText = document.getElementById("text1").value;
                document.getElementById("heading2").innerText = "World";
            }
            function change2(){
                document.getElementById("column2").style.backgroundColor ='lightblue';
                document.getElementById("column1").style.backgroundColor = "goldenrod";
                document.getElementById("heading2").innerText = document.getElementById("text2").value;
                document.getElementById("heading1").innerText = "Hello";
            }