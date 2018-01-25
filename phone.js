$(document).ready(function() { // do this when the document is loaded
 $("#element").show(); // show the element with ID "element"
 $("#otherElement").hide(); // hide the element with ID "otherElement"
});

$("#button_id").click(function() { // when "button_id" is clicked
 $("#element").show(); // show element
 $("#other_element").hide(); // hide other element
});
