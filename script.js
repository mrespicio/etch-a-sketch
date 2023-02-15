const gridContainer = document.getElementById('grid-container')

const cell = document.createElement('div');



function createGrid(dimension){
	gridContainer.style.setProperty('display', 'grid')
	gridContainer.style.setProperty('grid-template-columns', 'repeat(5, 100px)')
	gridContainer.style.setProperty('grid-auto-rows', '100px')
	for(i = 0; i < (Math.pow(dimension, 2)); i++){
		let item = document.createElement('div');
		item.style.border = 'solid 2px black'
		item.textContent = `div number ${i}`
		gridContainer.appendChild(item);
	}
	console.log(dimension)
}

createGrid(5);
