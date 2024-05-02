let taskElement = '\
<article class="task-entry">\
  <div class="checkbox">\
    <input type="checkbox">\
    <div class="checkmark"></div>\
  </div><input type="text" class="task-text">\
</article>';
const listElement = document.getElementById("list");

addbtn.addEventListener('click', () => {
    listElement.innerHTML += taskElement;
});

minusbtn.addEventListener('click', () => {
    listElement.lastChild.remove();
})

const checkbox = document.querySelectorAll('input[type="checkbox"]');
const textEntry = document.getElementsByClassName('task-text');

for(let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener('change', function() {
    if(checkbox[i].checked) {
      textEntry[i].classList.add('strikethrough');
    } else {
      textEntry[i].classList.remove('strikethrough');
    }
  })
}
