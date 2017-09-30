//check off todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})

//The following code could be done just in one line, see above

// //if it is gray
// 	if($(this).css("color") ===  "rgb(128, 128, 128)"){
// 	 	//turn it black
// 	 $(this).css({
// 	 	color:"black",
// 	 	textDecoration: "none"
// 	 });
// 	}

// 	//if not then
// 	//turn it gray
// 	else{
// 		$(this).css({
// 		color: "gray",
// 		textDecoration: "line-through"
// 	  });
// 	}


//click on X to delete todos
$("ul").on("click", "span", function(event){
	//$(this).parent()-- select span   
	//fadeOut(500, function(){$(this).remove();-- select the "li" which is attached with span
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(evt){
	if (evt.which === 13) {
		//grabbing new todo text
		var todoText = ($(this).val());
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus-circle").click(function(){
	$("input[type='text'").fadeToggle();
})