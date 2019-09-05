var card1 = document.geteElementById("card1");
var card2 = document.geteElementById("card2");
var card3 = document.geteElementById("card3");
var card4 = document.geteElementById("card4");
var card5 = document.geteElementById("card5");
var card6 = document.geteElementById("card6");
var card7 = document.geteElementById("card7");
var card8 = document.geteElementById("card8");
var card9 = document.geteElementById("card9");


function AEL(eleID){
  eleID.addEventListener( "click", function(){
    cardNum = this.id;
  });
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

// var input = prompt(“Enter string: “);