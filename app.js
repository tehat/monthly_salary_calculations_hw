$(document).ready(function(){
	$("#employeeinformation").submit(function(event){
		event.preventDefault();
// the even.prevenDefault() method stops  defaul action of an element from happening  

		var values = {};
		
		$("#employeeinformation").serializeArray();
		//The serializeArray() method creates an array of objects (name and value) by serializing form values.
		$.each($("#employeeinformation").serializeArray(), function(i, field){
			values[field.name] = field.value;
			//$.post(field.value);
		})
		$("#employeeinformation").find("input[type=text]").val("");
		employeeArray.push(values);  //push employeeinformation objects into array
		appendDom(values);
	});
});


 var employeeArray = [];

// var saleriesPerMonth = [];
// var totalMonthlyPayroll = [];

// for(var i = 0; i < employeeArray.length; i++) {
// 	saleriesPerMonth = employeeArray.pop();
// };
// console.log(saleriesPerMonth);

//   $("#employeeContainer").on('click', '.someButton', function() {
// +    //console.log($(this).parent().find('p').text());
// +    $(this).parent().remove();
// +  });


function appendDom(employee){
	
	($("#employeeContainer").append("<div class='employee'></div>"));
	var $el = $("#employeeContainer").children().last();

	$el.append("<p>" + employee.employeename + "</p>");
	$el.append("<p>" + employee.employeenumber + "</p>");
	$el.append("<p>" + employee.employeejobtitle + "</p>");
	$el.append("<p>" + employee.employeeyearlysalary + "</p>");
	$el.append("<button class='someButton'>Delete Employee</button>");
	};
	


 
