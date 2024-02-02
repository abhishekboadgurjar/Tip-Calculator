const btn=document.getElementById("calculate");
const inputbill=document.getElementById("bill");
const inputtip=document.getElementById("tip");
const totalspan=document.getElementById("total");

function calculateTotal(){
    const billvalue=inputbill.value;
    const tipvalue=inputtip.value;
    const totalvalue=billvalue * (1+tipvalue/100);
    totalspan.innerText=totalvalue.toFixed(2);
}
btn.addEventListener("click", calculateTotal);