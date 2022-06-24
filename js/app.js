// // Math
// console.log(`rgb(${Math.floor(
//      (Math.random().
//      toFixed(3)
//      )
//      )
// }`
// );
// console.log(Math.floor(32.5678).toFixed(1))
// let x= 10.54321;
// let y = 5.4687;
// let z = Math.floor(x+y);
// console.log(z);

// console.log(`#f3f45${Math.random(Math.floor())}`)

// const random = (number)=>Math.floor(Math.random()*(number  + -1));
// console.log(random(255));


// const backgroundChange = ()=>{
//      let random_color = `rgb(${random(255)},${random(255)},${random(255)})`;
//      // let body = document.querySelector('body');
//      document.body.style.backgroundColor = random_color;
// }


// btn.addEventListener("mousemove",backgroundChange);


let btn = document.querySelector('.btn-primary');

/*
Total Tip = Bill amount * (Tip percentage / 100)
Total Amount = Bill amount + Tip Amount
Tip per person = Total tip / Number of people
Total per person = Total amount / Number of people  */


let billInput = document.querySelector('#bill-input');

let peopleAmount = document.querySelector('#people-amount');

let totalPerPerson = document.querySelector('#total-amount-person');

let tipAmount = document.querySelector('#tip-amount');

let percentages = document.querySelectorAll('.select-box');


const fivePercent = ()=>{
     let totalTip= (Math.round
     (parseInt(billInput.value) * (parseInt(percentages[0].textContent) / 100))).toFixed(2);


     
     let tipPerPerson = (totalTip / (parseInt(peopleAmount.value))).toFixed(2);



     let totalAmt = (parseInt(billInput.value) + parseInt(totalTip)).toFixed(2);

     totalPerPerson.textContent = `$ ${totalAmt / parseInt(peopleAmount.value).toFixed(2) }`

     tipAmount.textContent = `$ ${tipPerPerson.toString(5)}`;
}

percentages[0].addEventListener('click',fivePercent)






// Ten Percent Event
const tenPercent = ()=>{
     let totalTip= (Math.round
     (parseInt(billInput.value) * (parseInt(percentages[1].textContent) / 100))).toFixed(2);
     
     let tipPerPerson = (totalTip/ (parseInt(peopleAmount.value))).toFixed(2);

     let totalAmt = (parseInt(billInput.value) + parseInt(totalTip)).toFixed(2);

     totalPerPerson.textContent = `$ ${totalAmt / parseInt(peopleAmount.value).toFixed(2) }`

     tipAmount.textContent = `$ ${tipPerPerson.toString(10)}`;
}

percentages[1].addEventListener('click',tenPercent);






// Fifteen Percent Event

const fifteenPercent = ()=>{
     let totalTip= (Math.round
     (parseInt(billInput.value) * (parseInt(percentages[2].textContent) / 100))).toFixed(2);
     
     let tipPerPerson = (totalTip/ (parseInt(peopleAmount.value))).toFixed(2);

     let totalAmt = (parseInt(billInput.value) + parseInt(totalTip)).toFixed(2);

     totalPerPerson.textContent = `$ ${totalAmt / parseInt(peopleAmount.value).toFixed(2) }`

     tipAmount.textContent = `$ ${tipPerPerson.toString(10)}`;
}


percentages[2].addEventListener('click',fifteenPercent);





// Twenty-five Percent Event
const twentyFivePercent = ()=>{
     let totalTip= (Math.round
     (parseInt(billInput.value) * (parseInt(percentages[3].textContent) / 100))).toFixed(2);

     let totalAmt = (parseInt(billInput.value) + parseInt(totalTip)).toFixed(2);

     totalPerPerson.textContent = `$ ${totalAmt / parseInt(peopleAmount.value).toFixed(2) }`
     
     let tipPerPerson = (totalTip/ (parseInt(peopleAmount.value))).toFixed(2);

     tipAmount.textContent = `$ ${tipPerPerson.toString(10)}`;
}


percentages[3].addEventListener('click',twentyFivePercent);








// Fifty percent Event
const  fiftyPercent = ()=>{
     let totalTip= (Math.round
     (parseInt(billInput.value) * (parseInt(percentages[4].textContent) / 100))).toFixed(2);

     let totalAmt = (parseInt(billInput.value) + parseInt(totalTip)).toFixed(2);

     totalPerPerson.textContent = `$ ${totalAmt / parseInt(peopleAmount.value).toFixed(2) }`
     
     let tipPerPerson = (totalTip/ (parseInt(peopleAmount.value))).toFixed(2);
     
     tipAmount.textContent = `$ ${tipPerPerson.toString(9)}`;
}


percentages[4].addEventListener('click',fiftyPercent);






const getTotalTip = (e)=>{
}


billInput.addEventListener('keypress',getTotalTip)


// Algorithm
/*when the bill is inputed, multiply by the bill by the tip percentage / 100 */




const reset = ()=>{
     billInput.value = '';
     tipAmount.innerText = '$ 0';
     totalPerPerson.innerText = '$ 0';
     peopleAmount.value = '0';
}
let btnReset = document.querySelector('#btn-reset');
btnReset.addEventListener('click',reset);