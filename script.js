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
	const rainbowBtn = document.getElementById('rainbow');

	classicBtn.addEventListener('click', () => {
		styleHolder = 'classic'
		modernBtn.classList.remove('btn-selected');
		rainbowBtn.classList.remove('btn-selected');
		classicBtn.classList.add('btn-selected');
		// instead of resetting grid need to change properties of items
		resetGrid(sizeHolder, styleHolder) 
		//createGrid(sizeHolder, 'classic')

	});

	modernBtn.addEventListener('click', () => {
		styleHolder = 'modern'
		modernBtn.classList.add('btn-selected');
		rainbowBtn.classList.remove('btn-selected');
		classicBtn.classList.remove('btn-selected');
		resetGrid(sizeHolder, styleHolder) 
		//do not remove nodes - change properties of items instead
	});


	rainbowBtn.addEventListener('click', () =>{
		styleHolder = 'rainbow';
		rainbowBtn.classList.add('btn-selected');
		modernBtn.classList.remove('btn-selected');
		classicBtn.classList.remove('btn-selected');
		resetGrid(sizeHolder, styleHolder)
	});


	// clear button
	// when board clears, retain size and style
	const clearBtn = document.getElementById('clear');
	clearBtn.addEventListener('click', () => resetGrid(sizeHolder, styleHolder));
} // setButton



function resetGrid(sizeHolder, styleHolder){
	// current board should retain if changing styles
	while(gridContainer.lastElementChild) {
		gridContainer.removeChild(gridContainer.lastElementChild)
	}
	// recreate grid using previous size and style, applies to size change
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
		case 'rainbow':
			createRainbowGrid(dimension);
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

function createRainbowGrid(dimension){
	for(i = 0; i < (Math.pow(dimension, 2)); i++){
		let item = document.createElement('div');
		item.setAttribute('class', 'grid-item')
		item.addEventListener('mouseover', e => {
			let r = Math.floor(Math.random() * 256)
			let g = Math.floor(Math.random() * 256)
			let b = Math.floor(Math.random() * 256)
			let randomColor = 'rgb('+r+','+g+','+b+')';
			item.style.backgroundColor = randomColor //randomize color
		});
		gridContainer.appendChild(item);
	}
}


setButtons(sizeHolder, styleHolder);
createGrid(16, 'modern');
