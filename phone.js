$(document).ready(function() { // do this when the document is loaded
 $("#element").show(); // show the element with ID "element"
 $("#otherElement").hide(); // hide the element with ID "otherElement"
});

$("#button_id").click(function() { // when "button_id" is clicked
 $("#element").show(); // show element
 $("#other_element").hide(); // hide other element
});

function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
