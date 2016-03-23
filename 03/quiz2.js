var board = document.getElementById("board");
var str = ' ';

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
