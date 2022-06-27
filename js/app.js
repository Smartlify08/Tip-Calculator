




/*
Total Tip = Bill amount * (Tip percentage / 100)
Total Amount = Bill amount + Tip Amount
Tip per person = Total tip / Number of people
Total per person = Total amount / Number of people  */

let btn = document.querySelector('.btn-primary');



// Getting the elements
let bill_input = document.querySelector('#bill-input');

let tip_percentages = document.querySelectorAll('.select-box');

let people_input = document.querySelector('#people-amount');

let tipAmount = document.querySelector('#tip-amount');

let totalAmountPerson = document.querySelector('#total-amount-person');

let error = document.querySelectorAll('.error');
let error_message = document.querySelectorAll('.error-message');



// Shows the error message under the input
const showErrorAlert = () => {
     console.log(`This input can't be 0`);
}





let timing = 0;
const doSomething = () => {
     console.log('A function')
}


// Shows the borders when the conditions met are true 
const showBorder = () => {


     // Check if the input for the bill and the input for the amount of people are empty
     if (bill_input.value === '' && people_input.value === '') {
          bill_input.style.border = '2px solid var(--clr-error)';
          people_input.style.border = '2px solid var(--clr-error)';
          error_message[0].innerText = `Input can't be zero`;
          error_message[1].innerText = `Input can't be zero`;
     }


     // Check if the bill_input is empty and the people_input is not empty and show the border on the one that is empty

     else if (bill_input.value === '' && people_input.value !== '') {
          bill_input.style.border = '2px solid var(--clr-error)';
          error_message[0].innerText = `Input can't be zero`;
     }


     // Checks if the people_input  is empty and the bill_input is not empty

     else if (people_input.value === '' && bill_input.value !== '') {
          people_input.style.border = '2px solid var(--clr-error)';
          error_message[1].innerText = `Input can't be zero`
     }

     // Check if the input is not a number and display an error (Still in progress )
     else if (isNaN(people_input.value) || isNan(bill_input.value)) {
          console.log('Inputs must be numbers :D');
     }


     console.log(error_message[0].textContent);
}



// Removes the border when there is no error
const borderNone = () => {
     bill_input.style.border = 'none';
     people_input.style.border = 'none';
}


// Removes the text content when there is no error
const removeTextContent = () => {
     error_message[0].innerText = ``;
     error_message[1].innerText = ``;
}
















// Functions for each percentage

const fivePercent = () => {

     // ======Calculations=====
     if (bill_input.value === '' || people_input.value === '') {
          showBorder();


          // Show error in console
          // console.log(`Input can't be zero `);
     }

     else {

          // remove the border and textcontent when  the condition is not met 
          borderNone();
          removeTextContent();

          // Output to console
          // console.log('valid');


          // Tip Amount Calculation
          let totalTip = (parseFloat(bill_input.value) * (parseFloat(tip_percentages[0].textContent) / 100)).toFixed(2);


          // Total Amount
          let totalAmount = (parseFloat(bill_input.value) + parseFloat(totalTip)).toFixed(2)


          // Tip Per Person 
          let tip_per_person = (parseFloat(totalTip) / parseFloat(people_input.value)).toFixed(2);


          // Total Amount Per Person 
          let total_per_person = (parseFloat(totalAmount) / parseFloat(people_input.value)).toFixed(2);


          // Set The Values in the Document

          tipAmount.innerText = ` ${tip_per_person}`;

          totalAmountPerson.innerText = ` ${total_per_person}`;
          // Check in console
          // console.log(totalTip);
          // console.log(totalAmount);
          // console.log(tip_per_person);
          // console.log(total_per_person)


     }

}

tip_percentages[0].addEventListener('click', fivePercent);























const tenPercent = () => {

     // ======Calculations=====

     if (bill_input.value === '' || people_input.value === '') {

          // Create a timeout for the borders to appear when the condition is true
          showBorder();


          // Show error in console
          // console.log(`Input can't be zero `);
     }

     else if (bill_input.value === '' && people_input.value !== '') {
          showBorder();
     }

     else if (people_input.value === '') {
          showBorder();
     }



     // Tip Amount Calculation
     else {
          let totalTip = (parseFloat(bill_input.value) * (parseFloat(tip_percentages[1].textContent) / 100)).toFixed(2);


          // Total Amount
          let totalAmount = (parseFloat(bill_input.value) + parseFloat(totalTip)).toFixed(2)


          // Tip Per Person 
          let tip_per_person = (parseFloat(totalTip) / parseFloat(people_input.value)).toFixed(2);


          // Total Amount Per Person 
          let total_per_person = (parseFloat(totalAmount) / parseFloat(people_input.value)).toFixed(2);


          // Set The Values in the Document

          tipAmount.innerText = `${tip_per_person}`;

          totalAmountPerson.innerText = `${total_per_person}`;
          // Check in console
          // console.log(totalTip);
          // console.log(totalAmount);
          // console.log(tip_per_person);
          // console.log(total_per_person)
     }
}

tip_percentages[1].addEventListener('click', tenPercent);




















const fifteenPercent = () => {

     // ======Calculations=====

     if (bill_input.value === '' || people_input.value === '') {

          // Create a timeout for the borders to appear when the condition is true
          showBorder();


          // Show error in console
          // console.log(`Input can't be zero `);
     }

     // Tip Amount Calculation

     else {
          let totalTip = (parseFloat(bill_input.value) * (parseFloat(tip_percentages[2].textContent) / 100)).toFixed(2);


          // Total Amount
          let totalAmount = (parseFloat(bill_input.value) + parseFloat(totalTip)).toFixed(2)


          // Tip Per Person 
          let tip_per_person = (parseFloat(totalTip) / parseFloat(people_input.value)).toFixed(2);


          // Total Amount Per Person 
          let total_per_person = (parseFloat(totalAmount) / parseFloat(people_input.value)).toFixed(2);


          // Set The Values in the Document

          tipAmount.innerText = `${tip_per_person}`;

          totalAmountPerson.innerText = `${total_per_person}`;
          // Check in console
          // console.log(totalTip);
          // console.log(totalAmount);
          // console.log(tip_per_person);
          // console.log(total_per_person)
     }

}

tip_percentages[2].addEventListener('click', fifteenPercent);




























const twentyFivePercent = () => {

     if (bill_input.value === '' || people_input.value === '') {

          // Create a timeout for the borders to appear when the condition is true
          showBorder();


          // Show error in console
          // console.log(`Input can't be zero `);
     }

     // Tip Amount Calculation

     else {
          let totalTip = (parseFloat(bill_input.value) * (parseFloat(tip_percentages[3].textContent) / 100)).toFixed(2);


          // Total Amount
          let totalAmount = (parseFloat(bill_input.value) + parseFloat(totalTip)).toFixed(2)


          // Tip Per Person 
          let tip_per_person = (parseFloat(totalTip) / parseFloat(people_input.value)).toFixed(2);


          // Total Amount Per Person 
          let total_per_person = (parseFloat(totalAmount) / parseFloat(people_input.value)).toFixed(2);


          // Set The Values in the Document

          tipAmount.innerText = `${tip_per_person}`;

          totalAmountPerson.innerText = `${total_per_person}`;
          // Check in console
          // console.log(totalTip);
          // console.log(totalAmount);
          // console.log(tip_per_person);
          // console.log(total_per_person)
     }
}

tip_percentages[3].addEventListener('click', twentyFivePercent);



























const fiftyPercent = () => {

     if (bill_input.value === '' || people_input.value === '') {

          // Create a timeout for the borders to appear when the condition is true
          showBorder();


          // Show error in console
          // console.log(`Input can't be zero `);
     }

     // Tip Amount Calculation

     else {
          let totalTip = (parseFloat(bill_input.value) * (parseFloat(tip_percentages[4].textContent) / 100)).toFixed(2);


          // Total Amount
          let totalAmount = (parseFloat(bill_input.value) + parseFloat(totalTip)).toFixed(2)


          // Tip Per Person 
          let tip_per_person = (parseFloat(totalTip) / parseFloat(people_input.value)).toFixed(2);


          // Total Amount Per Person 
          let total_per_person = (parseFloat(totalAmount) / parseFloat(people_input.value)).toFixed(2);


          // Set The Values in the Document

          tipAmount.innerText = `${tip_per_person}`;

          totalAmountPerson.innerText = `${total_per_person}`;
          // Check in console
          // console.log(totalTip);
          // console.log(totalAmount);
          // console.log(tip_per_person);
          // console.log(total_per_person)
     }
}

tip_percentages[4].addEventListener('click', fiftyPercent);























// reset Function : Called when the user clicks reset

const reset = () => {
     bill_input.value = '';
     people_input.value = '';

     tipAmount.innerText = '0.00';
     totalAmountPerson.innerText = '0.00';
}

btn.addEventListener('click', reset)








setTimeout(doSomething, timing);