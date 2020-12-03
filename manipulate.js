var updateStudent = function(){
	var data = {
		id: 1, name: "Abhishek", class: "BTech", technology: "REACT"
	};
	fetch("https://my-json-server.typicode.com/surabhijhingan/restAPI/students/1", {
		method: 'PUT',
		headers: {
			"Content-type":"application/json; charset=UTF-8"
		},
		body: JSON.stringify(data),
	}).then(response => response.json())
	.then(data => {
		console.log("SUCCESS:", data);
	})
	
}

var postStudent = function(){
	var data = {
		id: 10, name: "Abhishek", class: "BTech", technology: "REACT"
	};
	fetch("https://my-json-server.typicode.com/surabhijhingan/restAPI/students/", {
		method: 'POST',
		headers: {
			"Content-type":"application/json; charset=UTF-8"
		},
		body: JSON.stringify(data),
	}).then(response => response.json())
	.then(data => {
		console.log("SUCCESS:", data);
	})
	
}