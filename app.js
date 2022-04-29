// for phone function

// phone increase and decrease

//function

function updatePhoneNumber(ifIncreasing) {
    const phoneInput = document.getElementById('phone-number');
    let phoneNumber = phoneInput.value;

    if (ifIncreasing) {
        
        phoneNumber = parseInt(phoneNumber) + 1;
    }
    else if(phoneNumber>1) {
        
        phoneNumber = parseInt(phoneNumber) - 1;
    }

    phoneInput.value = phoneNumber;


    const phoneTotal = document.getElementById('phone-total');

    phoneTotal.innerText = phoneNumber * 1000;

    
    calculateTotal();
}






// phone plus


document.getElementById('phone-plus').addEventListener('click', function () {
    
    updatePhoneNumber(true);
    

    
});




// phone minus 

document.getElementById('phone-minus').addEventListener('click', function () {

    updatePhoneNumber(false);
    


});





//for case function


function updateCaseNuber(ifIncreasing) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;

    if(ifIncreasing) {

        caseNumber = parseInt(caseNumber) + 1;
    }
    else if(caseNumber>1){

        caseNumber = parseInt(caseNumber) - 1;
    }
    
    caseInput.value = caseNumber;

    //update case total

    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 50;
    
    calculateTotal();
    
}


// case increase and decrease


document.getElementById('case-plus').addEventListener('click', function () {

    updateCaseNuber(true);
});


document.getElementById('case-minus').addEventListener('click', function () {
    
    updateCaseNuber(false);
    

});




//for sub total and tax function


function calculateTotal() {
    // phone total

    const phoneInput = document.getElementById('phone-number');
    const phoneNumber = parseInt(phoneInput.value);
    const phoneTotal = phoneNumber * 1000;
    
// case total
    
    const caseInput = document.getElementById('case-number');
    const caseNumber = parseInt(caseInput.value);
    const caseTotal = caseNumber * 50;

    // total Prodact

    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalAmount = subTotal + tax;

    

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = totalAmount;

}
    
    
    


    






