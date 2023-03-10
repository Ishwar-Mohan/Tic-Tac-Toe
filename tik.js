flag = 1;

function fun1() {
    if (flag == 1) {
        document.getElementById("td1").innerHTML = "X";
        document.getElementById("td1").style.fontSize = "100px"
        document.getElementById("td1").style.backgroundColor = "white"
        document.getElementById("td1").style.pointerEvents = "none";
        flag = 0;
    }
    else {
        document.getElementById("td1").innerHTML = "0";
        document.getElementById("td1").style.fontSize = "100px"
        document.getElementById("td1").style.backgroundColor = "red"
        document.getElementById("td1").style.pointerEvents = "none";
        flag = 1;
    }
}

function fun2() {
    if (flag == 1) {
        document.getElementById("td2").innerHTML = "X";
        document.getElementById("td2").style.fontSize = "100px"
        document.getElementById("td2").style.backgroundColor = "white"
        document.getElementById("td2").style.pointerEvents = "none";
        flag = 0;
    }
    else {
        document.getElementById("td2").innerHTML = "0";
        document.getElementById("td2").style.fontSize = "100px"
        document.getElementById("td2").style.backgroundColor = "red"
        document.getElementById("td2").style.pointerEvents = "none";
        flag = 1;
    }
}

function fun3() {
    if (flag == 1) {
        document.getElementById("td3").innerHTML = "X";
        document.getElementById("td3").style.fontSize = "100px"
        document.getElementById("td3").style.backgroundColor = "white"
        document.getElementById("td3").style.pointerEvents = "none";
        flag = 0;
    }
    else {
        document.getElementById("td3").innerHTML = "0";
        document.getElementById("td3").style.fontSize = "100px"
        document.getElementById("td3").style.backgroundColor = "red"
        document.getElementById("td3").style.pointerEvents = "none";
        flag = 1;
    }
}

function fun4() {
    if (flag == 1) {
        document.getElementById("td4").innerHTML = "X";
        document.getElementById("td4").style.fontSize = "100px"
        document.getElementById("td4").style.backgroundColor = "white"
        document.getElementById("td4").style.pointerEvents = "none";
        flag = 0;
    }
    else {
        document.getElementById("td4").innerHTML = "0";
        document.getElementById("td4").style.fontSize = "100px"
        document.getElementById("td4").style.backgroundColor = "red"
        document.getElementById("td4").style.pointerEvents = "none";
        flag = 1;
    }
}

function fun5() {
    if (flag == 1) {
        document.getElementById("td5").innerHTML = "X";
        document.getElementById("td5").style.fontSize = "100px"
        document.getElementById("td5").style.backgroundColor = "white"
        document.getElementById("td5").style.pointerEvents = "none";
        flag = 0;
    }
    else {
        document.getElementById("td5").innerHTML = "0";
        document.getElementById("td5").style.fontSize = "100px"
        document.getElementById("td5").style.backgroundColor = "red"
        document.getElementById("td5").style.pointerEvents = "none";
        flag = 1;
    }
}

function fun6() {
    if (flag == 1) {
        document.getElementById("td6").innerHTML = "X";
        document.getElementById("td6").style.fontSize = "100px"
        document.getElementById("td6").style.backgroundColor = "white"
        document.getElementById("td6").style.pointerEvents = "none";
        flag = 0;
    }
    else {
        document.getElementById("td6").innerHTML = "0";
        document.getElementById("td6").style.fontSize = "100px"
        document.getElementById("td6").style.backgroundColor = "red"
        document.getElementById("td6").style.pointerEvents = "none";
        flag = 1;
    }
}

function fun7() {
    if (flag == 1) {
        document.getElementById("td7").innerHTML = "X";
        document.getElementById("td7").style.fontSize = "100px"
        document.getElementById("td7").style.backgroundColor = "white"
        document.getElementById("td7").style.pointerEvents = "none";
        flag = 0;
    }
    else {
        document.getElementById("td7").innerHTML = "0";
        document.getElementById("td7").style.fontSize = "100px"
        document.getElementById("td7").style.backgroundColor = "red"
        document.getElementById("td7").style.pointerEvents = "none";
        flag = 1;
    }
}

function fun8() {
    if (flag == 1) {
        document.getElementById("td8").innerHTML = "X";
        document.getElementById("td8").style.fontSize = "100px"
        document.getElementById("td8").style.backgroundColor = "white"
        document.getElementById("td8").style.pointerEvents = "none";
        flag = 0;
    }
    else {
        document.getElementById("td8").innerHTML = "0";
        document.getElementById("td8").style.fontSize = "100px"
        document.getElementById("td8").style.backgroundColor = "red"
        document.getElementById("td8").style.pointerEvents = "none";
        flag = 1;
    }
}

function fun9() {
    if (flag == 1) {
        document.getElementById("td9").innerHTML = "X";
        document.getElementById("td9").style.fontSize = "100px"
        document.getElementById("td9").style.backgroundColor = "white"
        document.getElementById("td9").style.pointerEvents = "none";
        flag = 0;
    }
    else {
        document.getElementById("td9").innerHTML = "0";
        document.getElementById("td9").style.fontSize = "100px"
        document.getElementById("td9").style.backgroundColor = "red"
        document.getElementById("td9").style.pointerEvents = "none";
        flag = 1;
    }
}

function sh(){
    document.querySelector('.div2').classList.add('show')
    document.querySelector('.img1').classList.add('showim')
}

function sh1(){
    document.querySelector('.div2').classList.add('show')

}

// wining condition

function win() {

    var a = document.getElementById('td1').innerText
    var b = document.getElementById('td2').innerText
    var c = document.getElementById('td3').innerText

    var d = document.getElementById('td4').innerText
    var e = document.getElementById('td5').innerText
    var f = document.getElementById('td6').innerText

    var g = document.getElementById('td7').innerText
    var h = document.getElementById('td8').innerText
    var i = document.getElementById('td9').innerText

    if (a == b && b == c && c != "" && a != " " && b != "") {
        sh()
        document.getElementById('td1').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('td2').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('td3').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('wins').innerHTML="Congratulations "+a+" Wins..!!"

        document.getElementById("td4").style.pointerEvents = "none";
        document.getElementById("td5").style.pointerEvents = "none";
        document.getElementById("td6").style.pointerEvents = "none";
        document.getElementById("td7").style.pointerEvents = "none";
        document.getElementById("td8").style.pointerEvents = "none";
        document.getElementById("td9").style.pointerEvents = "none";
        
    }else if(c == f && f==i && c != "" && f != " " && i != ""){
        sh()
        document.getElementById('td3').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('td6').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('td9').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('wins').innerHTML="Congratulations "+c+" Wins..!!"

        document.getElementById("td1").style.pointerEvents = "none";
        document.getElementById("td2").style.pointerEvents = "none";
        document.getElementById("td4").style.pointerEvents = "none";
        document.getElementById("td5").style.pointerEvents = "none";
        document.getElementById("td8").style.pointerEvents = "none";
        document.getElementById("td7").style.pointerEvents = "none";

    }else if(a == d && d==g && a != "" && d != " " && g != ""){
        sh()
        document.getElementById('td1').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('td4').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('td7').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('wins').innerHTML="Congratulations "+d+" Wins..!!"

        document.getElementById("td2").style.pointerEvents = "none";
        document.getElementById("td3").style.pointerEvents = "none";
        document.getElementById("td6").style.pointerEvents = "none";
        document.getElementById("td5").style.pointerEvents = "none";
        document.getElementById("td8").style.pointerEvents = "none";
        document.getElementById("td9").style.pointerEvents = "none";

    }else if(g == h && h==i && g != "" && h != " " && i != ""){
        sh()
        document.getElementById('td7').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('td8').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('td9').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('wins').innerHTML="Congratulations "+i+" Wins..!!"

        document.getElementById("td1").style.pointerEvents = "none";
        document.getElementById("td2").style.pointerEvents = "none";
        document.getElementById("td3").style.pointerEvents = "none";
        document.getElementById("td4").style.pointerEvents = "none";
        document.getElementById("td5").style.pointerEvents = "none";
        document.getElementById("td6").style.pointerEvents = "none";

    }else if(a == e && e==i && e != "" && a != " " && i != ""){
        sh()
        document.getElementById('td1').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('td5').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('td9').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('wins').innerHTML="Congratulations "+a+" Wins..!!"

        document.getElementById("td4").style.pointerEvents = "none";
        document.getElementById("td2").style.pointerEvents = "none";
        document.getElementById("td3").style.pointerEvents = "none";
        document.getElementById("td7").style.pointerEvents = "none";
        document.getElementById("td8").style.pointerEvents = "none";
        document.getElementById("td6").style.pointerEvents = "none";

    }else if(g == e && e==c && c != "" && e != " " && g != ""){
        sh()
        document.getElementById('td5').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('td7').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('td3').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('wins').innerHTML="Congratulations "+e+" Wins..!!"

        document.getElementById("td4").style.pointerEvents = "none";
        document.getElementById("td1").style.pointerEvents = "none";
        document.getElementById("td6").style.pointerEvents = "none";
        document.getElementById("td2").style.pointerEvents = "none";
        document.getElementById("td8").style.pointerEvents = "none";
        document.getElementById("td9").style.pointerEvents = "none";

    }else if(b == e && e==h && h != "" && e != " " && b != ""){
        sh()
        document.getElementById('td5').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('td2').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('td8').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('wins').innerHTML="Congratulations "+e+" Wins..!!"

        document.getElementById("td4").style.pointerEvents = "none";
        document.getElementById("td1").style.pointerEvents = "none";
        document.getElementById("td6").style.pointerEvents = "none";
        document.getElementById("td7").style.pointerEvents = "none";
        document.getElementById("td3").style.pointerEvents = "none";
        document.getElementById("td9").style.pointerEvents = "none";

    }else if(d == e && e==f && f != "" && e != " " && d != ""){
        sh()
        document.getElementById('td5').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('td4').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('td6').style.backgroundImage = "linear-gradient(to right, white, green)"
        document.getElementById('wins').innerHTML="Congratulations "+e+" Wins..!!"

        document.getElementById("td1").style.pointerEvents = "none";
        document.getElementById("td2").style.pointerEvents = "none";
        document.getElementById("td3").style.pointerEvents = "none";
        document.getElementById("td7").style.pointerEvents = "none";
        document.getElementById("td8").style.pointerEvents = "none";
        document.getElementById("td9").style.pointerEvents = "none";

    }else if(a!="" && b!="" && c!="" && d!="" && e!="" && f!="" && g!="" && h!="" && i!="" )
    {
        sh1()
        document.getElementById('wins').innerHTML="Draw!....... ";

    }
}

