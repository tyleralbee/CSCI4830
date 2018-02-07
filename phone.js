
function openTab(evt, title) {
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
    document.getElementById(title).style.display = "block";
    evt.currentTarget.className += " active";

}

$('button').click(function(){
	var elementClass = $(this).attr('class');
	var elementId = $(this).attr('id');
	if (elementClass == "number") {
		document.getElementById('dialInput').value += elementId;
	} else if (elementClass == "clearButton"){
		document.getElementById('dialInput').value = "";
	}
});


var downX, downY, upX, upY;

$('#gestureAreaID').mousedown(function(event){
	downX = event.pageX;
	downY = event.pageY;
	document.getElementById('gestureOutputID').value = "mouse down";
});

$('#gestureAreaID').mouseup(function(event){
	upX = event.pageX;
	upY = event.pageY;

	var updown = Math.abs(upY - downY);
	var leftright = Math.abs(upX - downX);
	
	if(upX == downX && upY == downY){ 
		document.getElementById('gestureOutputID').value = "mouse up";
	} else if (updown > leftright){ 
		if (upY > downY){ 
			document.getElementById('gestureOutputID').value = "swipe down";
		} else if (upY < downY){ 
			document.getElementById('gestureOutputID').value = "swipe up";
		}
	} else if (updown < leftright) { 
		if(upX < downX){
			document.getElementById('gestureOutputID').value = "swipe left";
		} else if(upX > downX) { 
			document.getElementById('gestureOutputID').value = "swipe right";
		}
	} 
});
