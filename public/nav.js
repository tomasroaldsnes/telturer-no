
var prevScrollpos = window.pageYOffset;
if (prevScrollpos === 0) {
  console.log('works');
  document.getElementById('navbar').style.backgroundColor = 'transparent';
}
window.onscroll = function () {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos === 0) {
      navbar.style.backgroundColor = 'transparent';
    } else {
      navbar.style.backgroundColor =
        'rgba(0, 0, 0, 0.529)';
    }
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = '0';
    } else {
      navbar.style.top = '-94px';
    }
    prevScrollpos = currentScrollPos;
  }
};
