var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");
var card7 = document.getElementById("card7");
var card8 = document.getElementById("card8");
var card9 = document.getElementById("card9");
var dButton1 = document.getElementById("db1");
var dButton2 = document.getElementById("db2");
var dButton3 = document.getElementById("db3");
var dButton4 = document.getElementById("db4");
var dButton5 = document.getElementById("db5");
var dButton6 = document.getElementById("db6");
var dButton7 = document.getElementById("db7");
var dButton8 = document.getElementById("db8");
var dButton9 = document.getElementById("db9");


function AEL(ele){
  ele.addEventListener( "click", function(){
    cardFlip(ele)
  });
};

function buttonAEL(ele){
  ele.addEventListener( "click", function(){
    var eleParent = this.parentNode;
    eleParent.parentNode.removeChild(eleParent);
  });
};

function cardFlip(ele){
  if (ele.classList.contains('hidden')) {
    ele.classList.remove('hidden');
  } else {
    ele.classList.add('hidden');
  }
};

AEL(card1)
AEL(card2)
AEL(card3)
AEL(card4)
AEL(card5)
AEL(card6)
AEL(card7)
AEL(card8)
AEL(card9)
buttonAEL(dButton1)
buttonAEL(dButton2)
buttonAEL(dButton3)
buttonAEL(dButton4)
buttonAEL(dButton5)
buttonAEL(dButton6)
buttonAEL(dButton7)
buttonAEL(dButton8)
buttonAEL(dButton9)

// var element = document.createElement(tagName[, options]);

// var input = prompt(“Enter string: “);