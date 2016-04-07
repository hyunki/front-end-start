//JS동적 삽입
var head = document.getElementsByTagName("head")[0];
script.type = 'text/javascript';
var script = document.createElement('script');
script.src = 'http://api.facebook.com/method/links.getStats?format=json&urls=http://daum.net&callback=complate';
head.appendChild(script);


function load(){
  var script = document.createElement('script');
  var head = document.getElementsByTagName("head")[0];

  script.type = 'text/javascript';
  script.src = 'hello.js'

  head.appendChild(script);
}

function dummyFunc(data) {
  debugger;
}

load();

// function helloAjax(){
//
//         var req = new XMLHttpRequest();
//
//         req.open('GET', 'dummy.json', true);
//
//         req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
//
//         req.onreadystatechange = function() {
//             if(req.readyState==4){
//                 if(req.status==200){
//
//                     // document.getElementById('debug').innerHTML = req.responseText ;
//                     //
//                     // var data = JSON.parse(req.responseText);
//
//                     console.log(req.responseText);
//                 }
//             }
//
//         }
//
//         // var obj = {
//         //     name : 'Ajax',
//         //     result : 'Hello'
//         // };
//
//         req.send();
// }
//
// helloAjax();
