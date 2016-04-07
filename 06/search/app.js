console.log('app.js');

var template = document.getElementsByTagName('searchListTemplate').innerHTML;
var apikey = 'c60e089e4d7ff43ecdda949a441fb9da';
var q = '제주대';
var apiurl = 'https://apis.daum.net/search/web?q='+q+'&apikey='+apikey+'&output=json';

function render(wrap, template, data) {
  var html = tmpl(template, {list: data});
  wrap.innerHTML = html;
}

getJSON(apiurl , function(res) {
  console.log(res);
  render(wrap, template, res.data);
});
