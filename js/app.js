




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




const showErrorAlert = () => {
     console.log(`This input can't be 0`);
}







// Functions for each percentage

const fivePercent = () => {

     // ======Calculations=====
     if (bill_input.value === '' || people_input.value === '') {

          bill_input.style.border = '2px solid var(--clr-error)';
          bill_input.style.borderRadius = '5px';

          people_input.style.border = '2px solid var(--clr-error)';
          people_input.style.borderRadius = '5px';
          showAlert();
     }

     else {
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
          console.log(totalTip);
          console.log(totalAmount);
          console.log(tip_per_person);
          console.log(total_per_person)
     }

}

tip_percentages[0].addEventListener('click', fivePercent);











const tenPercent = () => {

     // ======Calculations=====

     // Tip Amount Calculation
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
     console.log(totalTip);
     console.log(totalAmount);
     console.log(tip_per_person);
     console.log(total_per_person)
}

tip_percentages[1].addEventListener('click', tenPercent);









const fifteenPercent = () => {

     // ======Calculations=====

     // Tip Amount Calculation
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
     console.log(totalTip);
     console.log(totalAmount);
     console.log(tip_per_person);
     console.log(total_per_person)
}

tip_percentages[2].addEventListener('click', fifteenPercent);


















const twentyFivePercent = () => {

     // ======Calculations=====

     // Tip Amount Calculation
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
     console.log(totalTip);
     console.log(totalAmount);
     console.log(tip_per_person);
     console.log(total_per_person)
}

tip_percentages[3].addEventListener('click', twentyFivePercent);


















const fiftyPercent = () => {

     // ======Calculations=====

     // Tip Amount Calculation
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
     console.log(totalTip);
     console.log(totalAmount);
     console.log(tip_per_person);
     console.log(total_per_person)
}

tip_percentages[4].addEventListener('click', fiftyPercent);













// reset Function
const reset = () => {
     bill_input.value = '';
     people_input.value = '';

     tipAmount.innerText = '0.00';
     totalAmountPerson.innerText = '0.00';
}

btn.addEventListener('click', reset)




