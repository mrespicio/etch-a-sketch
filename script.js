const gridContainer = document.getElementById('grid-container')

let sizeHolder = 16;
let styleHolder = 'modern';

function setButtons(sizeHolder, styleHolder){

	// size buttons
	// board is cleared but style is retained
	const smBtn = document.getElementById('small');
	const mdBtn = document.getElementById('medium');
	const lgBtn = document.getElementById('large');

	smBtn.addEventListener('click', () => {
		lgBtn.classList.remove('btn-selected');
		mdBtn.classList.remove('btn-selected');
		smBtn.classList.add('btn-selected');
		resetGrid();
		createGrid(8, styleHolder);
		sizeHolder = 8;
	});
	mdBtn.addEventListener('click', () => {
		smBtn.classList.remove('btn-selected');
		lgBtn.classList.remove('btn-selected');
		mdBtn.classList.add('btn-selected');
		resetGrid();
		createGrid(16, styleHolder);
		sizeHolder = 16;
	});
	lgBtn.addEventListener('click', () => {
		smBtn.classList.remove('btn-selected');
		mdBtn.classList.remove('btn-selected');
		lgBtn.classList.add('btn-selected');
		resetGrid();
		createGrid(32, styleHolder);
		sizeHolder = 32;
	});


	//style buttons
	const classicBtn = document.getElementById('classic');
	const modernBtn = document.getElementById('modern');

	classicBtn.addEventListener('click', () => {
		styleHolder = 'classic'
		modernBtn.classList.remove('btn-selected');
		classicBtn.classList.add('btn-selected');
		// instead of resetting grid need to change properties of items
		resetGrid(sizeHolder, styleHolder) 
		//createGrid(sizeHolder, 'classic')

	});

	modernBtn.addEventListener('click', () => {
		styleHolder = 'modern'
		modernBtn.classList.add('btn-selected');
		classicBtn.classList.remove('btn-selected');
		resetGrid(sizeHolder, styleHolder) 
		//do not remove nodes - change properties of items instead

		//createGrid(sizeHolder, 'modern')

	});


	// clear button
	// when board clears, retain size and style
	const clearBtn = document.getElementById('clear');
	clearBtn.addEventListener('click', () => {
		resetGrid(sizeHolder, styleHolder)
		//createGrid(dimension, style)
	})
}


// seems to be working for now
// only use for changing sizes, removes all nodes
// needs to be followed by another create grid function
function resetGrid(sizeHolder, styleHolder){
	while(gridContainer.lastElementChild) {
		gridContainer.removeChild(gridContainer.lastElementChild)
	}
	// recreate grid using previous size and style
	createGrid(sizeHolder, styleHolder);
}

let style; 
let dimension;
function createGrid(dimension, style){
	gridContainer.style.setProperty('display', 'grid')
	gridContainer.style.setProperty('grid-template-columns', `repeat(${dimension}, 1fr)`)
	gridContainer.style.setProperty('grid-auto-rows', '1fr')
	switch(style){
		case 'modern':
			createModernGrid(dimension);
			break;
		case 'classic':
			createClassicGrid(dimension);
			break;
		default:
			createClassicGrid(dimension);
	}
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
			item.style.backgroundColor = 'black'
			if(item.style.opacity <= 0.9) 
				item.style.opacity = +item.style.opacity+ 0.1
		});
		gridContainer.appendChild(item);
	}
}



//createGrid(16, classic); // default grid
//setSizeButtons('classic');
// get current size and style
//setClearButton(16, 'classic');
//setStyleButtons('classic');
setButtons(sizeHolder, styleHolder);
createGrid(16, 'modern');