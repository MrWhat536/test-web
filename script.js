var coin = localStorage.getItem('coin');
var count = 0;
var a = "голоса:"
count = coin;
var eng = 10000;
const button = document.getElementById('SyS')
document.getElementById("yo1").innerHTML =count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u202F");


function ClickB(el){
	count ++;
	document.getElementById("yo1").innerHTML =a+count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u202F");
	eng--;
	localStorage.setItem('coin', count);

	
}

