//El DOM   
//leccion #1
//de esta forma se accede a los elementos en html
var elem = document.getElementById("demo");
elem.innerHTML = "Holaaaa";  //esto hace que el contenido dentro del objeto con id demo cambie su contenido

var arr = document.getElementsByClassName("a");
for (let i = 0; i < arr.length; i++) {
    arr[i].innerHTML = "Hi There";  
}
var dem = document.getElementById("dem");
var dem = dem.childNodes;
for (let index = 0; index < dem.length; index++) {
    dem[index].innerHTML = "new text";
}
var myimg = document.getElementById("myimg");
myimg.src = "img/IMG_0626.JPG";

var link1 = document.getElementsByTagName("a");
link1[0].href = "http://www.sololearn.com";

var div2 = document.getElementById("demo1");
div2.style.color = "6600FF";
div2.style.width = "150px";
div2.style.backgroundColor = "red";
div2.style.borderRadius = "30px";
div2.style.textAlign = "center";
div2.style.position = "relative";
div2.style.left = "68.5%"
div2.style.fontSize = "300%";

//modulo 3
//creando elementos
var p = document.createElement("p")
var node = document.createTextNode("Some oder oder");
p.appendChild(node);

var div3 = document.getElementById("demo2");
div3.appendChild(p);

// segundoP

var p1 = document.createElement("p")

var node1 = document.createTextNode("Que bueno")
p1.appendChild(node1);

var bod = document.getElementsByTagName("body");
div3.appendChild(p1)

p1.style.fontSize = "50px"

// 3elem

var p2 = document.createElement("h1");
var nodep2 = document.createTextNode("header");
p2.appendChild(nodep2);
div3.appendChild(p2);

var p3 = document.createElement("div")
div3.appendChild(p3)
//reloj
function rel() {

    var hou = document.getElementById("hora");
    var min = document.getElementById("minutos");
    var seg = document.getElementById("segundos");
    var ampm = document.getElementById("AMPM")
    
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var hampm

    if (hour >= 12) {
        hour = hour - 12
        hampm = "PM"
    }
    else {
        hampm = "AM"
    }
    if (hour == 0) {
        hour = 12
    }
    
    hou.innerHTML = hour + " :";
    ampm.innerHTML = hampm;

    if (minutes < 10) {
        minutes = "0" + minutes
    }
    min.innerHTML = minutes + " :";

    if (seconds < 10) {
        seconds = "0" + seconds
    }
    seg.innerHTML = seconds

    
}
var callRel = setInterval(rel,1000)
/* practica
function person(name, age) {
    this.name = name,
    this.age = age,
    this.yearOfBirth = bornYear 
}
function bornYear() {
    return 2022 - this.age
}
var p = new person("Dario", 16);
document.write(p.yearOfBirth())

var person = []
person["name"] = "Dario"
person["age"] = 16;
person["favColor"] = "blue"

document.write(person["favColor"])

var color = [
    "Blue",
    "Red",
    "Yellow",
    "Green",
    "Gray",
    "Brown",
    "White",
    "Black",
    "Purple",
]
document.write(color[5])*/
var ab = document.getElementById("ho");
var ab = ab.childNodes
for (i = 0; i < ab.length; i++) {
    ab[i].innerHTML = "Sgte tema";
}
 //simple animation
var pos = 0
var rel = document.getElementById("reloj");
function move() {
    
    if (pos>=1080) {
        clearInterval(t);
    }
    else {
        pos += 1
        rel.style.left = pos + "px";
    }
    if (pos == 500) {
        rel.style.backgroundColor = "red";
    }
}
var t = setInterval(move, 10);

window.onload = function() {
    let btnUp = document.getElementById("up");
    let btnDown = document.getElementById("down");
    let btnLeft = document.getElementById("left");
    let btnRight = document.getElementById("right");

    let count = 0;

    
    let can = document.getElementById("canva");
    let con = can.getContext("2d");
    
    var x = 300;
    var y = 350;

    con.clearRect(0,0,600,400);
    con.beginPath();
    con.arc(x, y, 50,0,2 *Math.PI);
    con.fillStyle = "red";
    con.fill();
    con.stroke();

    con.font = "25px Arial";
    con.fillStyle = "white";
    con.fillText("Count:" + count, 20, 30);

    btnUp.onclick = function () {
        count += 1;
        y -= 25;
        if (y <= -50) {
            y = 450;
        }
    function draw() {

            con.clearRect(0,0,600,400);
            con.beginPath();
            con.arc(x, y, 50,0,2 *Math.PI);
            con.fillStyle = "red";
            con.fill();
            con.stroke();

            con.font = "25px Arial";
            con.fillStyle = "white";
            con.fillText("Count:" + count, 20, 30);
        }        
        
        window.requestAnimationFrame(draw)
        document.onkeydown = function() {
            count += 1;
            y -= 25;
        }
        document.ontouchstart = function() {
            count += 1;
            y -= 25;
        }
        
    }

    btnDown.onclick = function() {

        count += 1;
        y += 25;
        if (y == 450) {
            y = 0;
        }
    function draw() {

            con.clearRect(0,0,600,400)
            con.beginPath();
            con.arc(x, y, 50,0,2 *Math.PI);
            con.fillStyle = "red";
            con.fill();
            con.stroke();

            con.font = "25px Arial";
            con.fillStyle = "white";
            con.fillText("Count:" + count, 20, 30);
        }        
        window.requestAnimationFrame(draw);
        
        document.onkeydown = function() {
            count += 1;
            y += 25;
        }
        document.ontouchstart = function() {
            count += 1;
            y += 25;
        }
    }

    btnLeft.onclick = function() {

        count += 1;
        x -= 25;
        if (x <= -50) {
            x = 625;
        }
        function draw() {

            con.clearRect(0,0,600,400);
            con.beginPath();
            con.arc(x, y, 50,0,2 *Math.PI);
            con.fillStyle = "red";
            con.fill();
            con.stroke();

            con.font = "25px Arial";
            con.fillStyle = "white";
            con.fillText("Count:" + count, 20, 30);

            
        }        
        window.requestAnimationFrame(draw);
        
        document.onkeydown = function() {
            count += 1;
            x -= 25;
        }
        document.ontouchstart = function() {
            count += 1;
            x -= 25;
        }
    }

    btnRight.onclick = function() {
        
        count += 1;
        x += 25;
        if (x == 625) {
            x = -50;
        }
    
        function draw() {

            con.clearRect(0,0,600,400);
            con.beginPath();
            con.arc(x, y, 50,0,2 *Math.PI);
            con.fillStyle = "red";
            con.fill();
            con.stroke();

            con.font = "25px Arial";
            con.fillStyle = "white";
            con.fillText("Count:" + count, 20, 30);
        }        
        window.requestAnimationFrame(draw);
        
        document.onkeydown = function() {
            count += 1;
            x += 25;
        }
        document.ontouchstart = function() {
            count += 1;
            x += 25;   
        }
    }
}

var box1 = document.querySelector("#box");
function timeBox1Red() {

    box1.style.backgroundColor = "red";
}
setInterval(timeBox1Red,1000)

