$(document).ready(function() {


	var todayDo = _.template($("#todayTmpl").html(), todayToDos);
	var tomorrowDo = _.template($("#tomorrowTmpl").html(), tomorrowToDos);
	var CompletedDo = _.template($("#completeTmpl").html(), completedToDos);

	
	$(".duetodayul").append(todayDo);
	$(".duetomorrowul").append(tomorrowDo);
	$(".completeditems").append(CompletedDo);





	$("#todaytodoSubmit").submit (function(e) {
	e.preventDefault();
	
	var todayTask = $(".taskToday").val();

	var todayToDosObj = {

					todayDo: todayTask
	};

	todayToDos.unshift(todayToDosObj);

	var todayTaskString = _.template($("#todayTmpl").html(), todayToDos);

	$(".taskToday").val(" ");
	$(".duetodayul").html(todayTaskString);




	$('.thedoer').on('click', '.removeToDo', function(){
		$(this).closest("li").remove();

	});









	

});



});

