var wrapper = document.querySelector(".wrapper");
var NoBtn = document.querySelector(".Nobtn");
var wrapperRect = wrapper.getBoundingClientRect();
var NoBtnRect = NoBtn.getBoundingClientRect();
 var yesbtn =document.querySelector('.yesbtn');
 var love = document.querySelector('.Question');
let storedLeft = 0;
let storedTop = 0;
yesbtn.addEventListener ('click' , () => {
 // alert ("we love you too (:");
 love.innerHTML = "we love you too :)";
})
NoBtn.addEventListener('mouseover', () => {
    var maxWidth =300  //wrapperRect.width - NoBtnRect.width;
    var maxHeight = 200// wrapperRect.height - NoBtnRect.height;

    var i = Math.floor(Math.random() *maxWidth );
    var j = Math.floor(Math.random() * maxHeight);

    storedLeft = i < 0 ? 0 : i;
    storedTop = j < 0 ? 0 : j;

    NoBtn.style.left = storedLeft + 'px';
    NoBtn.style.top = storedTop + 'px';
});

NoBtn.addEventListener('mouseout', () => {
    NoBtn.style.left = storedLeft + 'px';
    NoBtn.style.top = storedTop + 'px';
});


$(document).ready(function(){
    $(".Nobtn").draggable({
      revert: "invalid",
    });
 
    $(".wrapper").droppable({
      accept: ".Nobtn", // Use selector to match against id img1
      
    });
  });
