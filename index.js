var div = document.querySelector('div');
div.onclick = function () {
  alert('哈哈哈哈哈');
};
var num = 0;
for (var i = 0; i < 100; i++) {
  for (var j = 0; j < 100; j++) {
    num = i * j;
    div.innerHTML = num;
  }
}
