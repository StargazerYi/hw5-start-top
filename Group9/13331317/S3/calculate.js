// Generated by LiveScript 1.3.1
var pan, count, answ, getRandomNumber, getNumbers, activation;
window.onload = function(){
  activation();
  getNumbers();
};
pan = 0;
count = 0;
answ = 0;
getRandomNumber = function(circle, flag, i){
  var buttons, lis, xmlHttpReg;
  buttons = document.getElementsByTagName("ul");
  lis = buttons[1].getElementsByTagName("li");
  xmlHttpReg = null;
  xmlHttpReg = new XMLHttpRequest();
  if (xmlHttpReg !== null) {
    xmlHttpReg.open("get", "/" + String(i), true);
    xmlHttpReg.send();
    xmlHttpReg.onreadystatechange = function(){
      var i$, i, buttons;
      if (xmlHttpReg.readyState === 4 && xmlHttpReg.status === 200) {
        circle.innerHTML = xmlHttpReg.responseText;
        for (i$ = 0; i$ <= 4; ++i$) {
          i = i$;
          lis[i].style.backgroundColor = "#234991";
        }
        count = count + 1;
        answ = answ + parseInt(circle.innerHTML);
        if (count === 5) {
          buttons = document.getElementsByTagName("ul");
          buttons[0].getElementsByTagName("li")[0].getElementsByTagName("span")[0].innerHTML = answ;
        }
      }
    };
  }
};
getNumbers = function(){
  var buttons, lis, ans, atplus, flag, isclicked, sum;
  buttons = document.getElementsByTagName("ul");
  lis = buttons[1].getElementsByTagName("li");
  ans = buttons[0].getElementsByTagName("li")[0];
  atplus = document.getElementById("button");
  flag = [];
  isclicked = [];
  sum = 0;
  atplus.onclick = function(){
    var i$, i, circle;
    for (i$ = 0; i$ <= 4; ++i$) {
      i = i$;
      lis[i].style.backgroundColor = "#234991";
      flag[i] = 1;
    }
    for (i$ = 0; i$ <= 4; ++i$) {
      i = i$;
      circle = lis[i].getElementsByTagName("span")[0];
      circle.style.display = "inline";
      circle.innerHTML = "...";
      getRandomNumber(circle, flag, i);
    }
  };
};
activation = function(){
  var buttons, area;
  buttons = document.getElementById("button");
  buttons.onmouseover = function(){
    document.getElementById("area").className = "at-plus-container-block";
    this.id = "button_hover";
  };
  area = document.getElementById("area");
  area.onmouseleave = function(){
    location.reload();
  };
  return area = document.getElementById("area");
};