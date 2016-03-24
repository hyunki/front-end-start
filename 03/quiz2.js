var board = document.getElementById("board");
var str = ' ';
var classColor = null;
var clickClass = null;

function mousedown(e) {
	if(e.target.className == "red") {
		e.target.className = "red";
	} else {
		if(clickClass != null){
<<<<<<< HEAD
			clickClass.target.className = classColor;
=======
			clickClass.target.className = classColor; 
>>>>>>> a5a761549b42d817433d088ec0426b34a60a3d7e
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
<<<<<<< HEAD
board.addEventListener("mousedown", mousedown);
=======
board.addEventListener("mousedown", mousedown);
>>>>>>> a5a761549b42d817433d088ec0426b34a60a3d7e
