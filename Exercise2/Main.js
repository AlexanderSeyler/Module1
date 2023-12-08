<script>
            document.getElementById("Pageheading").style.color="green";
            function helloworld(){alert('Hello World!')}

            function changes(){
                document.getElementById("header").innerText = "hello js";
                document.getElementById("aside").style.backgroundColor = "green";
                let b = document.getElementById("body");
                let p = document.createElement("p");
                p.innerText = "This is new";
                b.appendChild(p);}
            let i=true;
        </script>


//let i = true;
function helloWorld(){
    if (i) {
        document.getElementById("header").innerText = 'Hello JavaScript';
        document.getElementById("aside").style.backgroundColor = 'green';
        i=false
    } else {
        document.getElementById("header").innerText = 'Header';
        document.getElementById("aside").style.backgroundColor = 'white';
        i=true
    }

let b = document.getElementById("body");
let p = document.createElement("p");
p.innerText = "This is the brand spanking new paragraph";
b.appendChild(p);
}