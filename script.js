var billInput=document.querySelector("#bill-input");
var billBtn=document.querySelector("#bill-verify");

var cashDiv=document.querySelector(".cash-div")
var cashInput=document.querySelector("#cash-input");
var cashBtn=document.querySelector("#cash-verify");

var messageDiv=document.querySelector(".main-message");
var message=document.querySelector("#output-short");

var outputDiv=document.querySelector(".main-output")
var noteQuantity=document.querySelectorAll(".note-quantity");

var availableCash=[2000,500,100,20,10,5,1];
function showCashDiv(){
    cashDiv.style.display="block";
}
function hideCashDiv(){
    cashDiv.style.display="none";
}
function showMessageDiv(){
    messageDiv.style.display="block";
}
function hideMessageDiv(){
    messageDiv.style.display="none";
}
function showOutputDiv(){
    outputDiv.style.display="block";
}
function hideOutputDiv(){
    outputDiv.style.display="none";
}
function showMessage(msg){
    showMessageDiv();
    message.innerText=msg;
}
function processor(amount){
    for(let i=0;i<availableCash.length;i++){
        var number=Math.trunc(amount/availableCash[i]);
        amount = amount%availableCash[i];
        noteQuantity[i].innerText=number;
    }    
}
function billHandler(){
    var billAmt=billInput.value;
    if(billAmt>0){
        billBtn.style.display="none";
        showCashDiv();
        hideMessageDiv();
    }else{
        showMessage("Please enter proper bill amount (negative values and empty values not allowed)");
    }
}
function cashHandler(){
    var cashAmt=Number(cashInput.value);
    var billAmt=Number(billInput.value);
    if(cashAmt>0 && billAmt>0){
        var finalAmt=parseInt(cashAmt-billAmt);
        if(finalAmt>0){
        showMessage(`The change returned is ${finalAmt}.See the table below for more info`);
        processor(finalAmt);
        showOutputDiv();       
    }else if(finalAmt===0){
        showMessage(`The change returned is ${finalAmt}.`)
        hideOutputDiv()
    }
    else{
        showMessage("Please enter cash amount atleast equal to the bill amount.Try again"); 
        hideOutputDiv();
    }
    }else{
        showMessage("Please enter proper bill amount (negative values and empty values not allowed)");
        hideOutputDiv();
    }
}
billBtn.addEventListener("click",billHandler);
cashBtn.addEventListener("click",cashHandler);