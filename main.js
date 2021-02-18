const addButton = document.querySelector('#add-button');

addButton.addEventListener('click', () => {
    const input = document.querySelector('#input');
    const inputText = input.value;
    input.value = '';
    createIncompleteList(inputText);
    

})

const createIncompleteList = (text) => {
    const div = document.createElement('div');
    div.className = 'list';

    const li = document.createElement('li');
    li.innerText = text;

    const completeButton = document.createElement('button');
    completeButton.innerText = '完了';
    completeButton.addEventListener('click', () => {
        deleteFromIncompleteList(completeButton.parentNode);    
        const text = completeButton.parentNode.firstChild.innerText;
        
        const div = document.createElement('div');
        div.className = 'list';

        const li = document.createElement('li');
        li.innerText = text;

        const backButton = document.createElement('button');
        backButton.innerText = '戻る';
        backButton.addEventListener('click', () => {
            completeList.removeChild(backButton.parentNode);

            const text = backButton.parentNode.firstChild.innerText;
            createIncompleteList(text);
        })

        div.appendChild(li);
        div.appendChild(backButton);

        const completeList = document.querySelector('#complete-list');
        completeList.appendChild(div);
    })


    const deleteButton = document.createElement('button');
    deleteButton.innerText = '削除';
    deleteButton.addEventListener('click', () => {
        deleteFromIncompleteList(deleteButton.parentNode);
    })

    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    const incompleteList = document.querySelector('#incomplete-list');
    incompleteList.appendChild(div);
};

const deleteFromIncompleteList = (target) => {
    document.querySelector('#incomplete-list').removeChild(target);
};

