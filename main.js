
// Defining button 
let btn = document.querySelector(".btn");

// Perform create function when button is clicked
btn.onclick = create;


function create(){
 // Creating the new checkbox 
  var x = document.createElement("input");
   x.setAttribute("type", "checkbox");
   x.setAttribute("id", "myCheck");
  document.getElementById("row").appendChild(x);
    
    
    // getting the input field value 
    var inputText = document.getElementById("field").value;
    var label  = document.createElement("p");
    label.innerHTML = inputText;
    document.getElementById("row").appendChild(label);

      // creating delete button
      var button = document. createElement("button");
      button.innerHTML = "Delete";
      button.setAttribute('id',"delete");
    document.getElementById("row").appendChild(button);

    // When checkbox is checked 
   if( document.getElementById("myCheck").checked == true) {
          // Change style of checkbox
    label.style.decoration = "line-through";

   }
   else{
    label.style.decoration = "none"; 
   }
    }

    var deletebtn = document.getElementById("delete");
    deletebtn.onclick = destroy;
    function destroy(){
    
        document.getElementById('container').remove();
    }


  



    
    
    
    