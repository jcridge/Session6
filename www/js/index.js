$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
	storeValue();
  });            
});            


function submitText() {
	var text = $('#textinput').val();
	alert(text);
}

function storeValue(key, value) {
	//add some code to store the key-value pair in persistant storage
		var key = "submitA";
		var value = $('#submitA').val;
		console.log("Writing to storage");
		window.localStorage.setItem( key, value );
}