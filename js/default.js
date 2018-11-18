//クッキー
function setCookie(c_name,value,expiredays) {
	// 有効期限の日付
	var extime = new Date().getTime();
	var citime = new Date(extime + (60*60*24*1000*expiredays));
	var exdate = citime.toUTCString();

	var s="";
	s += c_name + "=" + escape(value);
	s += "; path=" + location.pathname;
	if(expiredays){
		s += "; expires=" + exdate + "; ";
	}else{
		s += "; ";
	}
	//クッキーに保存
	document.cookie = s;
}

//クッキーの値を取得
function getCookie(c_name){
	var st = "";
	var ed = "";
	if(0 < document.cookie.length){
		//クッキーの値を取り出す
		st = document.cookie.indexOf(c_name + "=");
		if(st! = -1){
			st = st + c_name.length + 1;
			ed = document.cookie.indexOf(";", st);
			if(ed == 1)
				ed = document.cookie.length;

			//値をデコード
			return unescape(document.cookie.substring(st, ed));
		}
	}
	return "";
}


function getFileName(){
		return window.location.href.split('/').pop();
}

var filename = getFileName();
var opt;
if(filename === 'other.html'){
	opt = document.querySelector('option[value="other.html"]');
}else{
	opt = document.querySelector('option[value="index.html"]');
}
opt.selected = true;

document.getElementById('form').select.onchange = function(){
	location.href = document.getElementById('form').select.value;
}

var separate_time = function(time){
	var sec   = Math.floor((time / 1000) % 60);
	var min   = Math.floor((time / 1000 / 60) % 60);
	var hours = Math.floor((time / 1000 / 60 / 60) % 24);
	var days  = Math.floor( time / 1000 / 60 / 60 / 24);
	return [sec, min, hours, days];
}

var update = function(){
	var now = new Date();
	var target = new Date(2020,7,24,0,0,0,0);
	var diff = target.getTime() - now.getTime();
	var counter = separate_time(diff);
	document.getElementById('countdown').textContent = 
		'東京オリンピックまであと ' +
		counter[3] + '日' + 
		counter[2] + '時' + 
		counter[1] + '分' +
		counter[0] + '秒';
	refresh();
}

var refresh= function(){
	setTimeout(update, 1000);
}
update();
