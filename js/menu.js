var menu = document.getElementById('menu');
var menulist = document.getElementById('menulist');
var exit = document.getElementById('exit');

menu.addEventListener('click', function(e) {
	menulist.classList.remove('menu-hide');
	menu.classList.add('menu-hide');
	e.preventDefault();
});

exit.addEventListener('click', function(e) {
	menulist.classList.add('menu-hide');
	menu.classList.remove('menu-hide');
	e.preventDefault();
});
