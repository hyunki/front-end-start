console.log('open');

var apikey = 'c60e089e4d7ff43ecdda949a441fb9da';
var q = '제주대';
var apiurl = 'https://apis.daum.net/search/vclip?q='+q+'&apikey='+apikey+'&output=json';

console.log(apiurl);

getJSON(apiurl , function(res) {
  console.log(res);
});
