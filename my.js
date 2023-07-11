const form = document.getElementById('addForm');//get the form to apply on submit effects
const list = document.getElementById('items');//getting the list of items to addnew node later
form.addEventListener('submit', addItem);//while submit item add // function was called
function addItem(e) {
  e.preventDefault();
  const input = document.getElementById('item');//input of item 
  const description = document.getElementById('description');//input of description
  const inputValue = input.value;//getting the input item value
  const desval = description.value; // description value rcvd

  const li = document.createElement('li');//creating new list element single li tag
  li.className = 'list-group-item';//classname same as broiler plate list li tags
  li.appendChild(document.createTextNode(inputValue + ":" + desval));// adding user input of item & decription to new li tag

  //create delete button as demo code
  const btn = document.createElement('button');
  btn.className = 'btn btn-danger float-right delete';
  btn.appendChild(document.createTextNode('X'));
  li.appendChild(btn); //inserting to the li tag

  //creating edit button for new listitem
  const edtbtn = document.createElement('button');
  edtbtn.className = 'btn btn-primary mx-2 float-right edit';
  edtbtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(edtbtn);

  //ADDing new li tag with 
  //all the content to actual list
  list.appendChild(li);
}
//Deleting item
list.addEventListener('click', removeItem);
  function removeItem(e) {
    if (e.target.classList.contains('delete')) {
      if (confirm('Are You Sure?')) {
        var li = e.target.parentElement;//accessing li tag to delete that
        list.removeChild(li);
      }
    }
  }
//filter search 
const filter = document.getElementById('filter');
filter.addEventListener('keyup', filterElmnt);//every key will be checked on item des to search keyword
  function filterElmnt(e) {
    const text = e.target.value.toLowerCase();// converting the searching text to lowercase
    const items = list.getElementsByTagName('li');//array of all li tags in the list
    Array.from(items).forEach(function (item) {//making an array 
      const litext = item.firstChild.textContent;//getting text content of each li tag item +decription
      if (litext.toLowerCase().indexOf(text) != -1) {//for each letter in searchbox we are checking all the list 
        item.style.display = 'block';//matched show
      } else {
        item.style.display = 'none';//hide
      }
    })
  }
