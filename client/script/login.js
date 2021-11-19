const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function confirmLogin(){
	
	const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/user", false);
    xhttp.send();
	
	let email = document.getElementById('email').value.trim();
	let password = document.getElementById('password').value.trim();
	let check = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const users = JSON.parse(xhttp.responseText);
    if (email === '' && password === '') {
		alert('Please fill the fields...');
	} else if(!check.test(email)){
		alert('Please enter valid email...');
	} else {
		for (let user of users) {
			// console.log(user);
		 	if(email === user.email && password === user.password) {
				if(email !== 'admin@example.com') {
					window.location.href = './book-list-cust.html';
				} else {
					window.location.href = './book-list.html';
				}
			}  
		}
	}

}