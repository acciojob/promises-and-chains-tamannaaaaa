//your JS code here. If required.
document.getElementById("userForm").addEventListener("submit", function(event){
	event.preventDefault();

const ageIn = document.getElementById("age").value;
const nameIn = document.getElementById("name").value;

if(!ageIn || !nameIn){
	alert("These are mandatory fields!!");
	return;
}

const age = parseInt(ageIn, 10);
const name = nameIn;

const promise = new Promise((resolve, reject) =>{
	setTimeout(() =>{
		if(age >= 18){
			resolve(`Welcome, ${name}. You can vote.`);
		}
		else{
			reject(`Oh sorry ${name}. You aren't old enough.`);
		}
	}, 4000);
});

promise
	.then((message) => {
		alert(message);
	})
	.catch((error) =>{
		alert(error);
	})
})