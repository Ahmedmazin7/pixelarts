
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