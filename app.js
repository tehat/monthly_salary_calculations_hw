$(document).ready(function(){
	$("#employeeinformation").submit(function(event){
		event.preventDefault();
// the even.prevenDefault() method stops  defaul action of an element from happening  

		var values = {};
		
		console.log($("#employeeinformation").serializeArray());
		//The serializeArray() method creates an array of objects (name and value) by serializing form values.
		$.each($("employeeinformation").serializeArray(), function(i, field){
			values[field.name] = field.value;
			
			//$.post(field.value);
		})
		

		$("#employeeinformation").find("input[type=text]").val("");
		console.log(values);
		employeeArray.push(values);  //push employeeinformation objects into array
		appendDom(values);
		console.log(values);

	});
});
var employeeArray = [employeeName, employeeNumber, employeeJobTitle, employeeYearlySalary];
var saleriesPerMonth = 0;
var salaries = 0;





function appendDom(employee){
	
	console.log($("#employeeContainer").append("<div class='employee'></div>"));
	var $el = $("employeeContainer").children().last();

	$el.append("<p>" + employee.employeefirstlastname + "</p>");
	$el.append("<p>" + employee.employeenumber + "</p>");
	$el.append("<p>" + employee.employeejobtitle + "</p>");
	$el.append("<p>" + employee.employeeyearlysalary + "</p>");
	$el.append("<button class='someButton'>Delete Employee</button>");
	};
	


 
