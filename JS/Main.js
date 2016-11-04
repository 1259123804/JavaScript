///**
// * Created by lixiaoguang on 16/11/4.
// */

var myHeading = document.querySelector("h1");
var button = document.querySelector("button");
var img = document.querySelector("img");

if(!localStorage.getItem("name")){

    setUserName();
}else{

    myHeading.innerHTML = "Welcome " + localStorage.getItem("name");
}



img.onclick = function imgClick (){

    var imgSrc = img.getAttribute("src");
    if(imgSrc === "../Resource/firefox-icon.png"){

        img.setAttribute("src", "../Resource/javaScriptTest.jpg");
    }else {

        img.setAttribute("src", "../Resource/firefox-icon.png");
    }
}
button.onclick = function btnClick() {

    setUserName();
};


function setUserName (){

    var name = prompt("please enter your name");
    if(name != null && name != ""){

        localStorage.setItem("name", name);
        myHeading.innerHTML = name;

    }else{

        alert("输入错误");
    }

}


