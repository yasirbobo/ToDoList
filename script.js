const displayUserListOfItem = document.querySelector('.displayUserListOfItem')

const userInput = document.querySelector('#userInput');

const addlist = document.querySelector('.addList');

const displayError = document.querySelector('#displayError')

function createElement(){
    if(userInput.value !== ''){
          // Creating  Elements
    const userListAndDeleteUserList = document.createElement('div'); 
    const userList = document.createElement('p');
    const deleteUserList = document.createElement('button');
    const icon = document.createElement('i');
    const displayDate = document.createElement('p')

    // Setting Atributes
    userListAndDeleteUserList.setAttribute('class', 'userListCntainer');
    userList.setAttribute('class', 'userList');
    deleteUserList.setAttribute('class', 'deleteUserList');
    icon.setAttribute('class', 'far fa-trash-alt')
    displayDate.setAttribute('class', 'displaydate')
    // adding text to the button
    // deleteUserList.innerText = 'delete'
    userList.innerText = userInput.value;

    // Appending
    deleteUserList.append(icon)
    // userListAndDeleteUserList.append(displayDate)
    userListAndDeleteUserList.appendChild(displayDate);
    // adding event listener to the delete user list button
    deleteUserList.addEventListener('click', function(){
    userListAndDeleteUserList.remove()
    })
    userListAndDeleteUserList.append(userList,displayDate, deleteUserList);
    displayUserListOfItem.append(userListAndDeleteUserList)
    console.log(displayUserListOfItem);

    // Date

    let date = new Date()

    let getYear = date.getFullYear();
    let getMonth = date.getMonth();
    let getDate = date.getDate();
    let getHours = date.getHours();
    let getMinutes = date.getMinutes();
    displayDate.innerText = `${getYear}/ ${getMonth +1}/${getDate}/${getHours}:${getMinutes}`
    }
    else{
        displayError.innerText = 'Please enter a list';
        userInput.addEventListener('click', function(){
            displayError.innerText = '';
        })
    }

    
}
function eraseUserInput(){
    userInput.value = ''
}
addlist.addEventListener('click', function(){
    createElement()
    eraseUserInput()
})

