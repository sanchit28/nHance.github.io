
                             /*-----------------------------For loader animation------------------------- */
const spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load',() =>{
	spinnerWrapper.style.opacity = '0';
})
setTimeout(()=>{

	spinnerWrapper.style.display = 'none';
},200);

                                /*----------------------- To get data from api-------------------------*/
const addDataFields = document.querySelector('.data-fields');

const url = "https://jsonplaceholder.typicode.com/posts";


function getData() {
fetch(url )
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#data");
	let out = "";
	for(let product of products){
		out += `
			<tr>
    
        <td>${product.id}</td>
				<td>${product.userId}</td>
				
				<td>${product.title}</td>
				<td>${product.body}</td>
				
				
				
				
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});
}


                                  /*--------------------Create a new row-------------------------- */


// add an event listener to the add button to handle adding new data
document.getElementById("add-data").addEventListener("click", function() {
  // retrieve the values from the input fields
  const userid = document.getElementById("userid").value;
  const id = document.getElementById("id").value;
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  var table = document.getElementById('myTable ');

  // construct an object with the new data
  const newData = {
    userid: userid,
    id: id,
    title: title,
    body: body
  };



  // send a POST request to the API to add the new data
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newData)
  })
    .then(response => response.json())
    .then(addedData => {
      // handle the response from the API to confirm the data was added successfully
      console.log(addedData);
      // add a new row to the table with the new data
      const table = document.getElementById("myTable");

      const newRow = table.insertRow();

      const useridCell = newRow.insertCell();
      const idCell = newRow.insertCell();
      const titleCell = newRow.insertCell();
      const bodyCell = newRow.insertCell();

      useridCell.textContent = addedData.userid;
      idCell.textContent = addedData.id;
      titleCell.textContent = addedData.title;
      bodyCell.textContent = addedData.body;

      alert("Data added successfully");
      clearall();
    
    })
    .catch(error => {
      console.error(error);
    });
}) ;
                              /*-------------------------Clear the input fields----------------------- */
function clearall(){
  document.getElementById("id").value="";
document.getElementById("userid").value="";

document.getElementById("title").value="";
document.getElementById("body").value="";
}

                                    /*-----------------To Select data and put in input blocks--------------------- */
// const table = document.querySelector('#myTable tbody');

// table.addEventListener('click', (event) => {
//   if (event.target.classList.contains('select-data')) {
//     const selected_Row = event.target.closest('tr');
//     const textboxes = document.querySelectorAll('.element-names');
//     textboxes[0].value = selected_Row.cells[0].textContent;
//     textboxes[1].value = selected_Row.cells[1].textContent;
//     textboxes[2].value = selected_Row.cells[2].textContent;
//     textboxes[3].value = selected_Row.cells[3].textContent;

   
  
//   }
// });

               /*-----------------To update/select  data in a table row--------------------- */

// add an event listener to the table rows to listen for clicks
document.getElementById("myTable").addEventListener("click", function(event) {
  // check that a table row was clicked
  if (event.target.nodeName === "TD") {
    // get the table row that was clicked
    const row = event.target.parentNode;
    // get the data from the row's cells
    const id = row.cells[0].textContent;
    const userid = row.cells[1].textContent;
    
    const title = row.cells[2].textContent;
    const body = row.cells[3].textContent;
    

    // populate the input fields with the data from the clicked row
    document.getElementById("id").value = id;
    document.getElementById("userid").value = userid;
    
    document.getElementById("title").value = title;
    document.getElementById("body").value = body;
  }
});


                                    /*----------update row data---------- */

function updateDataInTable() {
  // Get table and input fields
  var table = document.getElementById('myTable');

  var id = document.getElementById("id").value;
  var userid = document.getElementById("userid").value;
  var title = document.getElementById("title").value;
  var body = document.getElementById("body").value;

  console.log(id,userid,title,body);

    // Send updated data to API
    var data = {
              id : id, userid : userid, title : title, body:body
  };

    console.log(data);

  

    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts/' + id ,
      type: 'PUT',
      data: data,
      success: function(response) {
        console.log(response);
      

        table.rows[id].cells[0].innerHTML = response.id;
        table.rows[id].cells[1].innerHTML = response.userid;
        table.rows[id].cells[2].innerHTML = response.title;
        table.rows[id].cells[3].innerHTML = response.body;
        
        alert("Data Updated Sucessfully..");
        clearall();

      },
       error: function(xhr, status, error){
          // console.log("Ajax request failed with status:" + status + "and error message:" + error);
          

          alert("Ajax request failed!! "  );

          if(xhr.status === 404){
            alert("Resource was not found. code is: " + xhr.status);

          }else if(xhr.status === 500){
            console.log("Internal server error.code is: " + xhr.status);

          }
          //retry to request again 
          setTimeout(function(){
            $.ajax(this);

          }.bind(this), 15000)
      }
    });
  }



                           

//                               /*-----------------To Delete data after clicked in a table row--------------------- */

//select the table and delete button elements from the HTML page
// const table = document.querySelector('#myTable tbody');

// const deleteButton = document.querySelector('#delete-data');

// // add a click event listener to the delete button
// deleteButton.addEventListener('click', () => {
//   // find the selected row and remove it from the table
//   const selectedRow = table.querySelector('tr.selected');
//   if (selectedRow) {
//     table.removeChild(selectedRow);

//     // get the data associated with the selected row
//     const userid = selectedRow.querySelector('td:first-child').textContent;
//     const id = selectedRow.querySelector('td:nth-child(2)').textContent;
//     const title = selectedRow.querySelector('td:nth-child(3)').textContent;
//     const body = selectedRow.querySelector('td:nth-child(4)').textContent;

//     alert("*Data Deleted successfully for ID: " + id + "\n Delete Carefully!!!");
//     clearall();

  
    
//     // send a delete request to the API to delete the data
//     fetch(`https://jsonplaceholder.typicode.com/posts?userid=${userid}&id=${id}&=${title}&body=${body}`, {
//       method: 'DELETE'
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to delete data');
        
//       }
//     })  
//     .catch(error => {
//       console.error(error);
//     });
//   }
// });

// // add a click event listener to each row of the table
// table.addEventListener('click', event => {
//   // remove the selected class from all rows
//   table.querySelectorAll('tr').forEach(row => {
//     row.classList.remove('selected');
//   });

//   // add the selected class to the clicked row
//   if (event.target.tagName === 'TD') {
//     const row = event.target.parentNode;
//     row.classList.add('selected');
//   }
// });

function deleteSelectedRow() {
  var table = document.getElementById('myTable');
  var selectedRow = table.querySelector('tr.selected');

  var id = document.getElementById("id").value;

  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts/' + id,
    type: 'DELETE',
    success: function(response) {
      console.log(response);

      table.deleteRow(id);

      alert("Data Deleted Successfully..");
      clearall();
    },
    error: function(xhr, status, error){
      alert("Ajax request failed!!");
      if(xhr.status === 404){
        alert("Resource was not found. code is: " + xhr.status);
      } else if(xhr.status === 500){
        console.log("Internal server error.code is: " + xhr.status);
      }
    }
  });
}
