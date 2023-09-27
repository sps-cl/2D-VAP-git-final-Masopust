let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

//aktivace a deaktivace tlačítka add

input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
        addBtn.classList.add('active')
    }else {
        addBtn.classList.remove('active')


    }
})

//přidání nového úkolu

addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = ` 
        <p> ${input.value} </p>
        <div class="item-btn"></div>
        `
        
        tasks.appendChild(newItem);
        input.value = '';
    } else{
        alert('prosím zadejte úkol')
    }

})