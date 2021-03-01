window.onscroll = function() {myFunction()};
function myFunction(){
// let headEl= document.getElementById("header");
// headEl.style.backgroundColor="#f6f5f5";
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // document.getElementById("header").style.fontSize = "15px";
    document.getElementById("header").style.backgroundColor = "#393e46";
    document.getElementById("header").style.transitionDuration = "300ms";
    // document.getElementById("aOne").style.color = "#98ded9";
    // document.getElementById("aTwo").style.color = "#98ded9";
    // document.getElementById("aThree").style.color = "#98ded9";
    // document.getElementById("aFour").style.color = "#98ded9";
  } else {
    // document.getElementById("header").style.fontSize = "20px";
    document.getElementById("header").style.backgroundColor = "";
    document.getElementById("header").style.transitionDuration = "300ms";
    document.getElementById("aOne").style.color = "white";
  }
}