let container = document.getElementById("container");
let color_section = document.getElementById("color_section");
let square_number = 1;

let btn_add = document.getElementById("btn-add");
let btn_remove = document.getElementById("btn-remove");
let btn_clear = document.getElementById("btn-clear");
let input_number = document.getElementById("square_num");

/*Add Title*/
let title = document.getElementsByTagName("h1")[0];
title.style.fontFamily = "monospace";
title.style.color = "white";
title.style.fontSize = "35px";
let title_text = document.createTextNode("DOM Practice");

title.appendChild(title_text);

/*Event when Add Item Button Clicked*/
btn_add.addEventListener("click", ()=>{

	let new_square = document.createElement("div");
	let new_p = document.createElement("p");

	new_p_text = document.createTextNode(square_number);
	new_p.style.textAlign = "center";
	new_p.style.color = "white";
	square_number++;

	new_p.appendChild(new_p_text);

	new_square.style.width = "50px";
	new_square.style.height = "50px";
	let getColor = getRandomColor();
	new_square.style.backgroundColor = "rgb(" + getColor.r +","+getColor.g+","+getColor.b+")";
	new_square.style.margin = "5px";
	new_square.classList.add("item")

	new_square.appendChild(new_p);

	color_section.appendChild(new_square);
});

/*Event when Remove Item Button Clicked*/
btn_remove.addEventListener("click", ()=>{
	if(square_number === 1){
		alert('Sorry there is no item exists');
	}
	else if(input_number.value > square_number){
		alert("Sorry there is no item number that you've input");
	}
	else{
		let getSquare = document.getElementsByClassName("item")[input_number.value-1];
		color_section.removeChild(getSquare);
		square_number--;
		let loop = 0;
		for (let i = input_number.value-1; i < square_number-1; i++) {
			let current_square = document.getElementsByClassName("item")[i];
			current_square.firstElementChild.innerHTML = "<p>" + (Number(input_number.value)+loop) + "</p>";
			loop++;
		}
	}

	input_number.value = "";
});

/*Event when Clear Item Button Clicked*/
btn_clear.addEventListener("click", ()=>{
	if (square_number === 1) {
		alert('Sorry there is no item exists');
	}
	else{
		square_number = 1;
		let lastChild = color_section.lastElementChild;
		while(lastChild){
			color_section.removeChild(lastChild);
			lastChild = color_section.lastElementChild;
		}
	}

});

/*Function To Get Random Color Based On RGB*/
function getRandomColor(){

	let min = 0;
	let max = 255;

	let obj = {
		r: Math.round(Math.random() * max + min),
		g: Math.round(Math.random() * max + min),
		b: Math.round(Math.random() * max + min)
	};

	return obj;

}
