// RECURSSION

function check(){
	var logo1 = document.getElementsByClassName('css-901oao r-1awozwy r-18jsvk2 r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0');
	var logo2 = document.getElementsByClassName('r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp')
	if (logo1.length && logo2.length){
		logo2[0].remove()
		//var logo1 = document.getElementsByClassName('css-901oao r-1awozwy r-18jsvk2 r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0');
		let img = new Image();
		img.src = "https://pbs.twimg.com/media/F1_53-mXwAAUfxI?format=png&name=small";
		img.setAttribute("width", "35");
		img.setAttribute("height", "35");
		logo1[2].appendChild(img);
		return;
	}	
	setTimeout(() => {check()}, 10);
}


setTimeout(() => {check()}, 10);