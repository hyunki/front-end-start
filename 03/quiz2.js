var board = document.getElementById("board");
var str = ' ';
var classColor = null;
var clickClass = null;

function mousedown(e) {
	if(e.target.className == "red") {
		e.target.className = "red";
	} else {
		if(clickClass != null){
			clickClass.target.className = classColor; 
      	}
     	classColor = e.target.className;
      	clickClass = e;
      	e.target.className = "red";
    }
}

for(var i = 0; i < 4; i++){
	str += '<div class="line">';
    for(var j = 0; j < 4; j++){
     	if((j + i) % 2)
       		str += '<span class="black"></span>';
    	else
       		str += '<span class="white"></span>';
    }
    str += '</div>';
}

board.innerHTML = str;
board.addEventListener("mousedown", mousedown);