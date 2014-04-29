$(document).ready(function() {


	var todayDo = _.template($("#todayTmpl").html(), todayToDos);
	var tomorrowDo = _.template($("#tomorrowTmpl").html(), tomorrowToDos);
	



	$("#todaytodoSubmit").on("submit", function(e) {
	e.preventDefault();
	var todayTask = $(".taskToday").val();

	var todayToDosObj = {

					todayDo: todayTask
	}

	todayToDos.unshift(todaysToDosObj);


	console.log(todayTask);
	});









	$(".duetoday").append(todayDo);





});

