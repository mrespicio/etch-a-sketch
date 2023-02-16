const gridContainer = document.getElementById('grid-container')



const smBtn = document.getElementById('small');
const mdBtn = document.getElementById('medium');
const lgBtn = document.getElementById('large');

smBtn.addEventListener('click', () => {
	lgBtn.classList.remove('btn-selected');
	mdBtn.classList.remove('btn-selected');
	smBtn.setAttribute('class', 'btn-selected');
	resetGrid();
	createGrid(8)
});
mdBtn.addEventListener('click', () => {
	smBtn.classList.remove('btn-selected');
	mdBtn.classList.remove('btn-selected');
	mdBtn.setAttribute('class', 'btn-selected');
	resetGrid();
	createGrid(16);
});
lgBtn.addEventListener('click', () => {
	smBtn.classList.remove('btn-selected');
	mdBtn.classList.remove('btn-selected');
	lgBtn.setAttribute('class', 'btn-selected');
	resetGrid();
	createGrid(32);
});


let dimension;
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

function resetGrid(){
	while(gridContainer.lastElementChild){
		gridContainer.removeChild(gridContainer.lastElementChild)
	}
}

// default grid
createGrid(16);
