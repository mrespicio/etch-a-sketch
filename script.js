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
		mdBtn.classList.remove('btn-selected');
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

function setStyleButtons(){

}

let dimension;
function createGrid(dimension, style){
	gridContainer.style.setProperty('display', 'grid')
	gridContainer.style.setProperty('grid-template-columns', `repeat(${dimension}, 1fr)`)
	gridContainer.style.setProperty('grid-auto-rows', '1fr')
	createClassicGrid(dimension);
}


function createClassicGrid(dimension){
	for(i = 0; i < (Math.pow(dimension, 2)); i++){
		let item = document.createElement('div');
		item.setAttribute('class', 'grid-item')
		item.addEventListener('mouseover', () => item.classList.add('fill')); // squares turn grey if gone over
		gridContainer.appendChild(item);
	}
}

function createModernGrid(dimension){
	
}
function resetGrid(){
	while(gridContainer.lastElementChild){
		gridContainer.removeChild(gridContainer.lastElementChild)
	}
}

// default grid
createGrid(16);
setSizeButtons();