const img = document.querySelector("#img");
const input = document.querySelector("#phone");

let KGpatterPhone = /^\+996$/;
let KGpatterPhoneFull = /^\+996\s\d{9}$/;
let RUpatterPhone = /^\+7$/;
let UZpatterPhone = /^\+998$/;
let UApatterPhone = /^\+380$/;

input.oninput = function () {
	if (KGpatterPhone.test(input.value)) {
		img.src = 'img/img-1.jpg';
		input.value += " ";
	} else if (KGpatterPhoneFull.test(input.value)) {
		console.log('');
	} else if (RUpatterPhone.test(input.value)) {
		img.src = 'img/img-2.jpg';
		input.value += " ";
	} else if (UZpatterPhone.test(input.value)) {
		img.src = "img/img-3.png";
		input.value += " ";
    } else if (UApatterPhone.test(input.value)) {
		img.src = "img/img-4.png";
		input.value += " ";
    };
};