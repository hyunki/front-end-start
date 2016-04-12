console.log('app.js');

var apikey = 'c60e089e4d7ff43ecdda949a441fb9da';

var searchBtn = document.getElementById('searchBtn');
var template = document.getElementById('searchListTemplate').innerHTML;
var wrap = document.getElementById('wrap');
var wrapBottom = document.getElementById('wrapBottom');
var pageno = 1;
var listLen = 10;

function searchBtnClick(event){
	pageno = 1;
	listLen = 10;
	wrap.innerHTML = ' ';
	wrapBottom.innerHTML = ' ';

	var searchStr = document.getElementById('searchStr').value;
	var apiurl = 'https://apis.daum.net/search/web?q=' + searchStr + '&apikey=' + apikey 
				+ '&output=json&result=20&pageno=' + pageno;

	getJSON(apiurl , function(res) {
		console.log(res.channel);

		var html = ' ';

		for(var i = 0; i < listLen; i++) {
			html = tmpl(template, {list:res.channel.item[i]});
			wrap.innerHTML += html;
		}
		wrapBottom.innerHTML += '<button id=\"moreBtn\" onclick=\"moreBtnClick()\">more</button>';
	});
}

function moreBtnClick() {
	var oldListLen = listLen;
	var searchStr = document.getElementById('searchStr').value;
	var apiurl = 'https://apis.daum.net/search/web?q=' + searchStr + '&apikey=' + apikey 
				+ '&output=json&result=20&pageno=' + pageno;
	
	listLen += 10;

	getJSON(apiurl, function(res){
		console.log(res.channel);

		var html = ' ';

		for(var i = oldListLen; i < listLen; i++) {
			html = tmpl(template, {list:res.channel.item[i]});
			wrap.innerHTML += html;
		}
		
		if(listLen >= 20 ) {
			pageno++;
			listLen = 0;
			if(pageno > 3) {
				wrapBottom.innerHTML = ' ';
			}	
		}
	});
}

searchBtn.addEventListener('click', searchBtnClick);