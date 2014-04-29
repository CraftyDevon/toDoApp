$(document).ready(function() {


	var todayDo = _.template($("#todayTmpl").html(), todayToDos);
	var tomorrowDo = _.template($("#tomorrowTmpl").html(), tomorrowToDos);
	
$(".duetodayul").append(todayDo);
	$(".duetomorrowul").append(tomorrowDo);




	$("#todaytodoSubmit").submit (function(e) {
	e.preventDefault();
	
	var todayTask = $(".taskToday").val();

	var todayToDosObj = {

					todayDo: todayTask
	};

	todayToDos.unshift(todayToDosObj);
	var todayTaskString = _.template($("#todayTmpl").html(), todayToDos);
	$(".duetodayul").html(todayTaskString);


	console.log(todayTask);
	});









	





});

