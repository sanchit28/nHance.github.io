/*-----------------trying to buld a text loader-------------------- */
// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }
/*------------------------------------- */
function getData() {
fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#data");
	let out = "";
	for(let product of products){
		out += `
			<tr>
				
				<td>${product.userId}</td>
				<td>${product.id}</td>
				<td>${product.title}</td>
				<td>${product.body}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});
}

/*Map method */

// fetch("https://jsonplaceholder.typicode.com/posts").then(data=>{
//     // console.log(data);
//     return data.json();

// }).then((objectData)=>{

//     console.log(objectData[0].title);
//     let tableData = "";
//     objectData.map((values)=>{
//         // tableData += '<h1>${values.title}</h1>'
//         tableData += `<tr>
//         <td >${values.userId}</td>
//         <td>${values.id}</td>
//         <td>${values.title}</td>
//         <td>${values.body}</td>
//     </tr> `;
//     });
//     document.getElementById("data");
//     innerHTML = tableData;
// })

// ------------------------
const spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load',() =>{
	spinnerWrapper.style.opacity = '0';
})
setTimeout(()=>{

	spinnerWrapper.style.display = 'none';
},200);

									

