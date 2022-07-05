const displayContainer= document.querySelector('.display-container');
const form= document.getElementById('form');
const firstName= document.getElementById('firstName');
const lastName= document.getElementById('lastName');
const message= document.getElementById('message');
const F= document.getElementById('female');
const M= document.getElementById('male');


form.addEventListener('submit', e => 
{
    function gender()
    {
        if(F.checked=== true)
            return F.value;
        
        else if(M.checked=== true)
            return M.value;

        else
            return 'unknown gender';
    }
    

    let messageDisplay= document.createElement('div');
    let names= document.createElement('div');

    messageDisplay.innerText= `" ${message.value} "`;
    messageDisplay.className= 'message-display';

    names.innerText= `by ${firstName.value} ${lastName.value}, ${gender()}`;
    names.className= 'names';

    messageDisplay.appendChild(names);

    let deleteBtn= document.createElement('button');
    deleteBtn.className= 'delete-btn';
    deleteBtn.innerText= 'X';
    messageDisplay.appendChild(deleteBtn);

    displayContainer.appendChild(messageDisplay);

    e.preventDefault();

});

displayContainer.addEventListener('click', removeItem);

function removeItem(e)
{
    if(e.target.classList.contains('delete-btn'))
    {
        if(confirm('Are you sure you want to delete this message?'))
        {
            displayContainer.removeChild(e.target.parentElement);
        }

    }
}






