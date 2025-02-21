import './style.css'

// MOBILE NAVBAR TOGGLE

const navToggle = document.getElementById('menu');
const menubar = document.getElementById('menubar');
const icon = document.getElementById('icon');
navToggle.addEventListener('click',()=>
{
menubar.classList.toggle('hidden');
menubar.classList.toggle('flex');
// Toggle the icon class
if (menubar.classList.contains('hidden')) {
    icon.classList.remove('ri-close-large-line');
    icon.classList.add('ri-menu-3-line');
} else {
    icon.classList.remove('ri-menu-3-line');
    icon.classList.add('ri-close-large-line');
}
});