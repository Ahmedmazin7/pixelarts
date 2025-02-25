

const toggleBtnOpen = document.querySelector('.toggle_btn i');
const navBlock = document.querySelector('.nav_block');
const toggleBtn = document.querySelector('.toggle_btn')


toggleBtn.addEventListener('click', () => {
  navBlock.classList.toggle('open')

  const isOpen = navBlock.classList.contains('open')

  toggleBtnOpen.classList = isOpen
  ?' fa-solid fa-xmark'
  : ' fa-solid fa-bars'
});

// form functions
const submit = document.querySelector('.submit-btn');

submit.addEventListener('click', () => {
  const email = document.querySelector('.js-email').value;
  const name = document.querySelector('.js-name').value;
  const message = document.querySelector('.js-message').value;
   email + name != "" ? console.log(email, name): alert("enter details");
})