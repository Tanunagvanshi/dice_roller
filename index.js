var randomNum1 = Math.floor(Math.random()*6)+1 ;
var randomImg1 = "dice" + randomNum1 + ".png" ;

var img1 = document.querySelectorAll("img")[0] ;
img1.setAttribute("src",randomImg1);


var randomNum2 = Math.floor(Math.random()*6)+1 ;
var randomImg2 = "dice" + randomNum2 + ".png" ;

var img2 = document.querySelectorAll("img")[1] ;
img2.setAttribute("src",randomImg2);

