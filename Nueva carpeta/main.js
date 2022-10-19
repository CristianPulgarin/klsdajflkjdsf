/*$(function(){
	$("#ejemplo").html("<b>HOLA</b>");
	$("#ejemplo").append("<p>ELEMENTO 2</p>");
	$("#ejemplo").prepend("<p>ELEMENTO 1</p>");
	$("#ejemplo").after("<p>AFTER</p>");
	$("#ejemplo").before("<p>BEFORE</p>");

});*/

$(function(){
	$("#btn-resultado").click(function(){
		let capt = $("#a").val();
		let elem = $("<li></li>").append(capt);
		$(elem).append("<button class='remove'><i class='btn btn-danger far fa-trash-alt'></i></button>")
		$("#lista ").append(elem);
		$(".remove").on("click",function(){

$(this).parent( ).remove()


		})
	})
});




