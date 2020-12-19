let detik = 0;
let menit = 0;
let jam = 0;

let timer;

let btn_start = document.getElementById('btn-start');
let btn_stop = document.getElementById('btn-stop');
let btn_reset = document.getElementById('btn-reset');

btn_start.addEventListener("click", ()=>{
	setSecond();
	btn_stop.disabled = false;
	btn_reset.disabled = false;
})

btn_stop.addEventListener("click", ()=>{
	clearTimeout(timer);
	document.getElementsByTagName('h3')[0].innerHTML = "Continue Timer";
})

btn_reset.addEventListener("click", ()=>{
	detik = menit = jam = 0;
	document.getElementsByTagName('h2')[0].innerHTML = "00";
	document.getElementsByTagName('h2')[2].innerHTML = "00";
	document.getElementsByTagName('h2')[4].innerHTML = "00";

	clearTimeout(timer);
	document.getElementsByTagName('h3')[0].innerHTML = "Start Timer";
	btn_stop.disabled = true;
	btn_reset.disabled = true;
})

function setSecond(){
	timer = setInterval(()=>{
		if (detik < 10) {
			document.getElementsByTagName('h2')[4].innerHTML = "0" + detik.toString();
			detik++;
		}
		else if (detik < 60){
			document.getElementsByTagName('h2')[4].innerHTML = detik.toString();
			detik++;
		}
		else{
			detik = 1;
			document.getElementsByTagName('h2')[4].innerHTML = "00";
			menit++;
			setMinute();
		}
	}, 1000)
}

function setMinute(){
	if(menit < 10){
		document.getElementsByTagName('h2')[2].innerHTML = "0" + menit.toString();
	}
	else if(menit < 60){
		document.getElementsByTagName('h2')[2].innerHTML = menit.toString();
	}
	else{
		menit = 1;
		document.getElementsByTagName('h2')[2].innerHTML = "00";
		jam++;
		setHour();
	}
}

function setHour(){
	if(jam < 10){
		document.getElementsByTagName('h2')[0].innerHTML = "0" + jam.toString();
	}
	else{
		document.getElementsByTagName('h2')[0].innerHTML = jam.toString();
	}
}