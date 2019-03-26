// WED 06.MAR.2017 ************************************************************

// DOM (Document Object Model)



// Get an element by HTML tag
const titles = document.getElementsByTagName('h1');
console.log(titles);
console.log(titles.length);

for (let i = 0; i < titles.length; i++) {
    console.log(titles[i]);
}


// Get an element by its HTML class (note: add period)
const title = document.getElementsByClassName('.title');
console.log(title);



// Get an element by its HTML id (note: don't add hash)
const title2 = document.getElementById('title2');
console.log(title2);



// Use querySelector to select by HTML tag
const subtitles = document.querySelectorAll('h2');
console.log(subtitles);



// Use querySelector to select by HTML class (note: add period)
const subtitle = document.querySelector('.subtitle');
console.log(subtitle);



// Use querySelector to select by HTML id (note: add hash) */
const subtitle2 = document.querySelector('#subtitle2');
console.log(subtitle2);



// Loop through all titles
for (let i = 0; i < titles.length; i++) {

    // Add the class 'headers' to the existing classes of element
    titles[i].classList.add('headers');

    // Override existing classes of an element:
    // title.setAttribute('heading');
    // title.className = 'heading'; 

    // Override existing id of element with numbered id names
    titles[i].setAttribute('id', 'title' + (i+1));

    // alternate colors
    if (i % 2 === 0) {
        titles[i].style.color = 'green';
    }
    else {
        titles[i].style.color = 'red';
    } 
    
};
console.log(titles);


// create an h3 element, give it a text content, and add to the body of the document
const section1 = document.createElement('h3');
section1.textContent = 'Section 1';
document.body.appendChild(section1);


// use a loop to add several h3 elements
for (let i = 0; i < 3; i++) {
    section = document.createElement('h3');
    section.textContent = 'Section ' + (i + 2);
    document.body.appendChild(section);
}



// use a loop to add several h3 elements and give them names from an array
const sectionNames = ['Section 5', 'Section 6', 'Section 7'];
for (let i = 0; i < sectionNames.length; i++) {
    section = document.createElement('h3');
    section.textContent = sectionNames[i];
    document.body.appendChild(section);
}



// connect to input box and button from HTML document
const inputRadius = document.querySelector('#inputRadius');
const calculateAreaButton = document.querySelector('#calculateAreaButton');

// when the button is clicked, show the result of the calculation as an alert
/* calculateAreaButton.addEventListener('click', function() {
    alert(Math.PI * inputRadius.value * inputRadius.value);
}); */

// when the button is clicked, show the result in a p element with id 'calculateAreaResult'
calculateAreaButton.addEventListener('click', function() {
    calculateAreaResult.textContent = Math.PI * inputRadius.value * inputRadius.value;
});



// declare variables
const wrapper = document.querySelector('.wrapper');
let box;

// use a loop to create 10 divs, which are numbered 1-10, and also have alternating background colors;
for (let i = 0; i < 10; i++) {
    box = document.createElement('div');
    box.textContent = i;
    box.style.color = 'white';
    if (i % 2 === 0) {
        box.style.background = 'green';
    }
    else {
        box.style.background = 'red';
    }
    document.body.append(box);
}



// WED 13.MAR.2019 **********************************************************

// EVENT LISTENERS
// Most activities we do on a computer are events (click, type, etc)

/* const todos = ['Task 1', 'Task 2', 'Task 3'];
let todo;
const todosWrapper = document.querySelector('.todo-wrapper');
const addInput = document.querySelector('#add-input')
const addButton = document.querySelector('#add-button');

function displayTodos() {
    for (let i = 0; i < todos.length; i++) {
        todo = document.createElement('li');
        todo.textContent = todos[i];

        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        todo.appendChild(editButton);

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        todo.appendChild(deleteButton);
        deleteButton.addEventListener('click', function() {
            deleteTodo(i);
        });

        todosWrapper.appendChild(todo);
    }
};

displayTodos();

function addTodo(task) {
    todos.push(task);
    return todos;
};

addButton.addEventListener('click', function() {
    if (addInput.value != '') {
        todosWrapper.innerHTML = '';
        addTodo(addInput.value);
        displayTodos();
    }
});

document.body.addEventListener('keydown', function() {
    if (event.keyCode === 13 && addInput.value != '') {
        todosWrapper.innerHTML = '';
        addTodo(addInput.value);
        displayTodos();
    }
});

function deleteTodo(index) {
    todosWrapper.innerHTML = '';
    todos.splice(index, 1);
    console.log(todos);
    displayTodos();
}; */


/* document.addEventListener('mouseover', function() {
    console.log(event.pageX);
    console.log(event.pageY);
});

addInput.addEventListener('keypress', function() {
    console.log(event.target.value);
    console.log(event.keyCode);
});

addInput.addEventListener('keyup', function() {
    console.log(event.target.value);
}); */

function displayCurrentDateTime() {
    var currentDate = new Date();
    day = "00" + currentDate.getDate();
    day = day.substr(-2);
    month = "00" + (currentDate.getMonth() + 1);
    month = month.substr(-2);
    year = "0000" + currentDate.getFullYear();
    year = year.substr(-4);
    hour = "00" + currentDate.getHours();
    hour = hour.substr(-2);
    minute = "00" + currentDate.getMinutes();
    minute = minute.substr(-2);
    return `${day}/${month}/${year} ${hour}:${minute}`;
};

let charset = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
function taskIdGenerator(){
    let taskIdArray = [];
    for (i = 0; i < 8; i++) {
        let index = Math.floor(Math.random() * charset.length);
        taskIdArray.push(charset[index]);
    }
    let taskId = taskIdArray.join('');
    return taskId;
}



const todos = [
    {
        id: taskIdGenerator(),
        name: 'Task 1',
        date: displayCurrentDateTime(),
        completed: false
    },

    {
        id: taskIdGenerator(),
        name: 'Task 2',
        date: displayCurrentDateTime(),
        completed: false
    },
    
    {
        id: taskIdGenerator(),
        name: 'Task 3',
        date: displayCurrentDateTime(),
        completed: false
    },
];

let todo;
const todosWrapper = document.querySelector('.todo-wrapper');
const addInput = document.querySelector('#add-input')
const addButton = document.querySelector('#add-button');



function displayTodos() {
    for (let i = 0; i < todos.length; i++) {
        todo = document.createElement('li');
        todo.textContent = todos[i].name;

        let date = document.createElement('span');
        date.textContent = todos[i].date;
        todo.appendChild(date);

        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        todo.appendChild(editButton);

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        todo.appendChild(deleteButton);
        deleteButton.addEventListener('click', function() {
            deleteTodo(i);
        });

        todosWrapper.appendChild(todo);
    }
};

displayTodos();

function addTodo(task) {
    todos.push(task);
    return todos;
};

addButton.addEventListener('click', function() {
    if (addInput.value != '') {
        todosWrapper.innerHTML = '';
        addTodo(addInput.value);
        displayTodos();
    }
});

document.body.addEventListener('keydown', function() {
    if (event.keyCode === 13 && addInput.value != '') {
        todosWrapper.innerHTML = '';
        addTodo(addInput.value);
        displayTodos();
    }
});

function deleteTodo(index) {
    todosWrapper.innerHTML = '';
    todos.splice(index, 1);
    console.log(todos);
    displayTodos();
};


// content editable



/*  */