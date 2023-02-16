const gridContainer = document.getElementById('grid-container')

function createGrid(dimension){
	gridContainer.style.setProperty('display', 'grid')
	gridContainer.style.setProperty('grid-template-columns', `repeat(${dimension}, 40px)`)
	gridContainer.style.setProperty('grid-auto-rows', '40px')

	// fill grid
	for(i = 0; i < (Math.pow(dimension, 2)); i++){
		let item = document.createElement('div');
		item.setAttribute('class', 'grid-item')
		item.addEventListener('mouseover', () => item.classList.add('fill'))
		gridContainer.appendChild(item);
	}
	console.log(dimension)
}

// input

createGrid(10);

