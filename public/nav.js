var prevScrollpos = window.pageYOffset;
if(prevScrollpos === 0){
  console.log("works");
  document.getElementById('navbar').style.backgroundColor = 'transparent';
}
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if(currentScrollPos === 0){
    document.getElementById('navbar').style.backgroundColor = 'transparent';
  } else{
    document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0.529)';
  }
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0';
  } else {
    document.getElementById('navbar').style.top = '-94px';
  }
  prevScrollpos = currentScrollPos;
};
