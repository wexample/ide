// Get dom object.
var showHtml = document.getElementById('show-html');

// Listen click event.
showHtml.addEventListener('click', function () {
  var codeInput = document.getElementById('code-input-html');
  var codePreview = document.getElementById('code-preview');

  codePreview.innerHTML = codeInput.value;
});
