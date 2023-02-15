const gridContainer = document.getElementById('grid-container')

const cell = document.createElement('div');



function createGrid(dimension){
	gridContainer.style.setProperty('display', 'grid')
	gridContainer.style.setProperty('grid-template-columns', `repeat(${dimension}, 25px)`)
	gridContainer.style.setProperty('grid-auto-rows', '25px')
	for(i = 0; i < (Math.pow(dimension, 2)); i++){
		let item = document.createElement('div');
		item.style.border = 'solid 1px black'
		item.style.backgroundColor = 'white'
		//item.textContent = `div ${i}`
		gridContainer.appendChild(item);
	}
	console.log(dimension)
}

// input

createGrid(5);
