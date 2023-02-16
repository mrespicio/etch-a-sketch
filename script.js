const gridContainer = document.getElementById('grid-container')

function setSizeButtons(){
	const smBtn = document.getElementById('small');
	const mdBtn = document.getElementById('medium');
	const lgBtn = document.getElementById('large');

	smBtn.addEventListener('click', () => {
		lgBtn.classList.remove('btn-selected');
		mdBtn.classList.remove('btn-selected');
		smBtn.classList.add('btn-selected');
		resetGrid();
		createGrid(8)
	});
	mdBtn.addEventListener('click', () => {
		smBtn.classList.remove('btn-selected');
		lgBtn.classList.remove('btn-selected');
		mdBtn.classList.add('btn-selected');
		resetGrid();
		createGrid(16);
	});
	lgBtn.addEventListener('click', () => {
		smBtn.classList.remove('btn-selected');
		mdBtn.classList.remove('btn-selected');
		lgBtn.classList.add('btn-selected');
		resetGrid();
		createGrid(32);
	});
}

function setClearButton(currentSize){

}
// when button is selected pass in style to creategrid
// do not reset grid
function setStyleButtons(){

}

let style; 
let dimension;
function createGrid(dimension, style){
	gridContainer.style.setProperty('display', 'grid')
	gridContainer.style.setProperty('grid-template-columns', `repeat(${dimension}, 1fr)`)
	gridContainer.style.setProperty('grid-auto-rows', '1fr')
	//createClassicGrid(dimension);
	// if style is modern, create modern grid
	createModernGrid(dimension);
}

function createClassicGrid(dimension){
	for(i = 0; i < (Math.pow(dimension, 2)); i++){
		let item = document.createElement('div');
		item.setAttribute('class', 'grid-item')
		item.addEventListener('mouseover', () => item.classList.add('fill')); // squares turn grey if mouse passes
		gridContainer.appendChild(item);
	}
}

function createModernGrid(dimension){
	for(i = 0; i < (Math.pow(dimension, 2)); i++){
		let item = document.createElement('div');
		item.setAttribute('class', 'grid-item')
		item.addEventListener('mouseover', e => {
			if(!item.classList.contains('fill')) item.classList.add('fill');// squares turn grey if gone over
			else if(item.classList.contains('fill'))
				item.classList.add('fill-2');
		}); 
		gridContainer.appendChild(item);
	}
}

function resetGrid(){
	while(gridContainer.lastElementChild){
		gridContainer.removeChild(gridContainer.lastElementChild)
	}
}


createGrid(16, classic); // default grid
setSizeButtons();
// get current size and style
//setClearButton();