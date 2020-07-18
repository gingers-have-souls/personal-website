document.write(`
<div class="container">
	<header>
		<a href="/">
			<svg alt="planet icon" class="logo" viewBox='0 0 512 512'><path d='M413.48,284.46c58.87,47.24,91.61,89,80.31,108.55-17.85,30.85-138.78-5.48-270.1-81.15S.37,149.84,18.21,119c11.16-19.28,62.58-12.32,131.64,14.09' style='fill:none;stroke-miterlimit:10;stroke-width:32px'/><circle cx='256' cy='256' r='160' style='fill:none;stroke-miterlimit:10;stroke-width:32px'/></svg>
		</a>

		<nav>
			<svg alt="Menu button" id="menu" class="hide-desktop" viewBox='0 0 512 512'><line x1='80' y1='160' x2='432' y2='160' style='fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px'/><line x1='80' y1='256' x2='432' y2='256' style='fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px'/><line x1='80' y1='352' x2='432' y2='352' style='fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px'/></svg>
			<ul class="menu-hide show-desktop" id="menulist">
				<li class="hide-desktop exit-btn">
					<svg alt="Exit menu" id="exit" viewBox='0 0 512 512'><line x1='368' y1='368' x2='144' y2='144' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><line x1='368' y1='144' x2='144' y2='368' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/></svg>
				</li>
				<li><a href="/">Home</a></li>
				<li><a href="/blog">Blog</a></li>
				<li><a href="/about">About</a></li>
				<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/gingers-have-souls/">GitHub</a></li>
			</ul>
		</nav>
	</header>
</div>
`)
