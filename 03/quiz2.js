var board = document.getElementById("board");

for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
      if(j%2) {
        document.body.innerHTML += '<span class="black"></span>'
      } else {
        document.body.innerHTML += '<span class="white"></span>'
      }
        // TODO : 여기에 필요한 코드를 작성해주세요.
    }
}
