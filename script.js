//  navbar display...

let navbar_toggler = document.getElementById('navbar-toggler');
let nav = document.getElementById('nav');
let Close = document.getElementById('close');
navbar_toggler.addEventListener('click', () => {
	nav.classList.toggle('navbar-2');
})
Close.addEventListener('click', () => {
	nav.classList.toggle('navbar-2');
})


// Chnage image section 1 every 5 sec.

let Images = ['Images/chicken-qui.jpg', 'Images/cheese-onion-Desktop.jpg', 'Images/chicken-pie-desktop-1.jpg', 'Images/eid-blessings-Desktop.jpg', 'Images/Tehzeeb_Desktop.jpg'];
let Images2 = ['Images/chicken-qui-res.jpg', 'Images/cheese-onion-Responsive.jpg', 'Images/Tehzeeb-Responsive.jpg', 'Images/eid-blessings-Responsive.jpg', 'Images/Tehzeeb-Responsive-1.jpg'];
let counter = 0;
function changeImages() {
	document.getElementById('source1').srcset = Images[counter];
	document.getElementById('source2').srcset = Images2[counter];
	document.getElementById('images').src = Images[counter];
	counter++;
	if (counter >= Images.length) {
		counter = 0;
	}
	setTimeout(changeImages, 5000);
}
changeImages();


// footer dropdown......

let down_dropdown = document.querySelectorAll('.bi-chevron-down');
let up_dropdown = document.querySelectorAll('.bi-chevron-up');
let dropdown_menu = document.querySelectorAll('.dropdown-menus');



// down_dropdown[0].addEventListener('click',function(e) {
// 	down_dropdown[0].style.display = 'none';
// 	up_dropdown[0].style.display = 'block';
// })
// down_dropdown[1].addEventListener('click',function(e) {
// 	down_dropdown[1].style.display = 'none';
// 	up_dropdown[1].style.display = 'block';
// })

// down_dropdown[2].addEventListener('click',function(e) {
// 	down_dropdown[2].style.display = 'none';
// 	up_dropdown[2].style.display = 'block';
// })


// up_dropdown[0].addEventListener('click',function(e) {
// 	down_dropdown[0].style.display = 'block';
// 	up_dropdown[0].style.display = 'none';
// })
// up_dropdown[1].addEventListener('click',function(e) {
// 	down_dropdown[1].style.display = 'block';
// 	up_dropdown[1].style.display = 'none';
// })
// up_dropdown[2].addEventListener('click',function(e) {
// 	down_dropdown[2].style.display = 'block';
// 	up_dropdown[2].style.display = 'none';
// })

down_dropdown.forEach((element,index,array) => {
	element.addEventListener('click',() => {
		element.style.display = 'none';
		if(index == 0 )
		{
			up_dropdown[0].style.display = 'block';
			dropdown_menu[0].style.display = 'block';
		}
		else if(index == 1)
		{
			up_dropdown[1].style.display = 'block';
			dropdown_menu[1].style.display = 'block';
		}
		else if(index == 2)
		{
			up_dropdown[2].style.display = 'block';
			dropdown_menu[2].style.display = 'block';
		}
	})
});

up_dropdown.forEach((element,index,array) => {
	element.addEventListener('click',() => {
		element.style.display = 'none';
		if(index == 0 )
		{
			down_dropdown[0].style.display = 'block';
			dropdown_menu[0].style.display = 'none';
		}
		else if(index == 1)
		{
			down_dropdown[1].style.display = 'block';
			dropdown_menu[1].style.display = 'none';
		}
		else if(index == 2)
		{
			down_dropdown[2].style.display = 'block';
			dropdown_menu[2].style.display = 'none';
		}
	})
});







