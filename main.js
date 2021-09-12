// Arrays - variables that hold multiple values

const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

fruits.push('mangos');

fruits.unshift('strawberries');

fruits.pop();

console.log(Array.isArray('hello'));

console.log(fruits.indexOf('oranges'));

console.log(fruits);

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    adress: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA',
    }
}

const { firstName, lastName, adress: { city }} = person;   

console.log(city);

person.email ='john@gamail.com';

console.log(person);


const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true 
      },
    {
      id: 2,
      text: 'Meeting with boss',
      isCompleted: true 
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
        }
  ];

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For
for(let i = 0; i < todos.length; i++) {
   console.log(todos[i].text);
}

for(let todo of todos) {
    console.log(todo);
}

// While
let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

// forEach, map, filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);


const x = 9;

const color = 'green';

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;        
}

function addNums(num1 = 1, num2 = 1) {
     console.log(num1 + num2);
}
    
addNums(5,5);


// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1990');

console.log(person2.getFullName());
console.log(person1);


// Single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// Multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));


const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');       
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
       const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

       userList.appendChild(li);

       // clear fields
       nameInput.value = '';
       emailInput.value = '';
    }
}