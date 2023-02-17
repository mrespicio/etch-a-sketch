const gridContainer = document.getElementById('grid-container')

// default grid
let sizeHolder = 16;
let styleHolder = 'modern';

function setButtons(sizeHolder, styleHolder){
	// size buttons - board is cleared but style is retained
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

	//style buttons - clears board and changes style, size is retained
	const classicBtn = document.getElementById('classic');
	const modernBtn = document.getElementById('modern');
	const rainbowBtn = document.getElementById('rainbow');

	classicBtn.addEventListener('click', () => {
		styleHolder = 'classic'
		modernBtn.classList.remove('btn-selected');
		rainbowBtn.classList.remove('btn-selected');
		classicBtn.classList.add('btn-selected');
		resetGrid(sizeHolder, styleHolder) 
	});

	modernBtn.addEventListener('click', () => {
		styleHolder = 'modern'
		rainbowBtn.classList.remove('btn-selected');
		classicBtn.classList.remove('btn-selected');
		modernBtn.classList.add('btn-selected');
		resetGrid(sizeHolder, styleHolder) 
	});

	rainbowBtn.addEventListener('click', () =>{
		styleHolder = 'rainbow';
		modernBtn.classList.remove('btn-selected');
		classicBtn.classList.remove('btn-selected');
		rainbowBtn.classList.add('btn-selected');
		resetGrid(sizeHolder, styleHolder)
	});

	// clear button - when board clears, retain size and style
	const clearBtn = document.getElementById('clear');
	clearBtn.addEventListener('click', () => resetGrid(sizeHolder, styleHolder));
} // setButton()

function resetGrid(sizeHolder, styleHolder){
	while(gridContainer.lastElementChild) {
		gridContainer.removeChild(gridContainer.lastElementChild)
	}
	// recreate grid using previous size and style
	createGrid(sizeHolder, styleHolder);
}

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
		item.addEventListener('mouseover', () => item.style.backgroundColor = 'lightgray'); // squares turn grey if mouse passes
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
			let randomColor = 'rgb('+r+','+g+','+b+')'; //randomize color
			item.style.backgroundColor = randomColor 
		});
		gridContainer.appendChild(item);
	}
}

setButtons(sizeHolder, styleHolder);
createGrid(sizeHolder, styleHolder);