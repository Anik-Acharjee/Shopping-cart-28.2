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
    
}


document.getElementById('case-plus').addEventListener('click', function () {

    updateCaseNuber(true);
});


document.getElementById('case-minus').addEventListener('click', function () {
    
    updateCaseNuber(false);
    

})