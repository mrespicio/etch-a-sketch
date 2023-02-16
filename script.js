const gridContainer = document.getElementById('grid-container')

const smBtn = document.getElementById('small');
const mdBtn = document.getElementById('medium');
const lgBtn = document.getElementById('large');

let dimension;
smBtn.addEventListener('click', () => {
	resetGrid();
	createGrid(8)
});
mdBtn.addEventListener('click', () => createGrid(16))

// buttons
// each button has a dimension

function createGrid(dimension){
	gridContainer.style.setProperty('display', 'grid')
	gridContainer.style.setProperty('grid-template-columns', `repeat(${dimension}, 1fr)`)
	gridContainer.style.setProperty('grid-auto-rows', '1fr')

	// fill grid
	for(i = 0; i < (Math.pow(dimension, 2)); i++){
		let item = document.createElement('div');
		item.setAttribute('class', 'grid-item')
		item.addEventListener('mouseover', () => { item.classList.add('fill') });
		/*item.addEventListener('mouseover', () => { 
			if(item.classList.contains('fill')){
			item.classList.add('fill-2')}
		});
		item.addEventListener('mouseover', () => item.classList.add('fill')) */
		gridContainer.appendChild(item);
	}
}

// loop grid and remove nodes
// while child node exists, remove it
function resetGrid(){

}

// input
createGrid(16);