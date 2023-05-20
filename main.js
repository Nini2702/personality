function nextpage1(){
    window.location="login.html";
}
function add_user(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "pg1.html";
    
    }


    username = localStorage.getItem("user_name");
document.getElementById("username").innerHTML = "Welcome " + username + "!";
var points = 0;
var stats = 0;
function answer0() {
    var points = points+0;
    console.log(points);
    var stats = stats + 5;
    statusCheck();
}
function answer5() {
    var points = points + 5;
    console.log(points);
    var stats = stats + 5;
    statusCheck();
}
function answer10() {
    var points = points + 10;
    console.log(points);
    var stats = stats + 5;
    statusCheck();
}

function statusCheck(){
    if(stats<5){
        document.getElementById("question1").hidden = false;    
    }
    else if (stats == 5){
        const element = document.getElementById("question1");
        element.remove();
        document.getElementById("question2").hidden = false;
    }
    else if (stats == 10){
        const element = document.getElementById("question2");
        element.remove();
        document.getElementById("question3").hidden = false;
    }
    else if (stats == 15){
        const element = document.getElementById("question3");
        element.remove();
        document.getElementById("question4").hidden = false;
    }
    else if (stats == 20){
        const element = document.getElementById("question4");
        element.remove();
        document.getElementById("question5").hidden = false;
    }
    else if (stats == 25){
        const element = document.getElementById("question5");
        element.remove();
        document.getElementById("question6").hidden = false;
    }
    else if (stats == 30){
        const element = document.getElementById("question6");
        element.remove();
        document.getElementById("question7").hidden = false;
    }
    else if (stats == 35){
        const element = document.getElementById("question7");
        element.remove();
        document.getElementById("question8").hidden = false;
    }
    else if (stats == 40){
        const element = document.getElementById("question8");
        element.remove();
        document.getElementById("question9").hidden = false;
    }
    else if (stats == 45){
        const element = document.getElementById("question9");
        element.remove();
        document.getElementById("question10").hidden = false;
    }
    else{
        localStorage.setItem("points", points);  
    }
}



document.getElementById("username1").innerHTML = user_name + ", You are like:";

var points = localStorage.getItem(points);

function showResult(){
    console.log(points);

    if (points==0){
        document.getElementById("character").innerHTML = "Klee";
    }
    else if(points >= 5 && points <= 10){
        document.getElementById("character").innerHTML = "Bennett";
    }
    else if(points >= 15 && points <= 20){
        document.getElementById("character").innerHTML = "Kaedehara Kazuha";
    }
    else if(points >= 25 && points <= 30){
        document.getElementById("character").innerHTML = "Amber";
    }
    else if(points >= 35 && points <= 40){
        document.getElementById("character").innerHTML = "Xingqiu";
    }
    else if(points >= 45 && points <= 50){
        document.getElementById("character").innerHTML = "Tartaglia";
    }
    else if(points >= 55 && points <= 60){
        document.getElementById("character").innerHTML = "Diluc";
    }
    else if(points >= 65 && points <= 70){
        document.getElementById("character").innerHTML = "Ganyu";
    }
    else if(points >= 75 && points <= 80){
        document.getElementById("character").innerHTML = "Qiqi";
    }
    else if(points >= 85 && points <= 90){
        document.getElementById("character").innerHTML = "Albedo";
    }
    else {
        document.getElementById("character").innerHTML = "Zhongli";
    }
}
