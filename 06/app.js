console.log('app.js')

var apiurl = "http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20150101&endDate=20160401&pageSize=2&pageNo=1"
var wrap = document.getElementsByTagName('wrap');
var template = document.getElementsByTagName('movieListTemplate').innerHTML;

//ajax(apiurl, function(responseText){
//  console.log(responseText);
//});
// var data = [
//   {
//     title:'aaa',
//     img:'aaa',
//     starRating:3,
//     link:'http://daum.net';
//   }
// ];

function render(wrap, template, data) {
  var html = tmpl(template, {list: data});
  wrap.innerHTML = html;
}

getJSON(apiurl , function(res) {
  console.log(res);

  render(wrap, template, res.data);
});
