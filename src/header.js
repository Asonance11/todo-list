import './header.css';

let headerCreation = function () {
	let header = document.createElement('header');
	let logo = document.createElement('h1');

	logo.textContent = 'WhatShouldIDo';

	header.appendChild(logo);

	return header;
};

export default headerCreation;
