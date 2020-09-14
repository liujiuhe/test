var div = document.querySelector('div');
div.onclick = function () {
  alert('哈哈哈哈哈');
};
for (var i = 0; i < 100; i++) {
  i = i * i;
  div.innerHTML = i
}
