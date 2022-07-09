
function updateTextInput(val) {
    let bill = document.getElementById('bill').value;
    
    document.getElementById('amount').value=`${val}%`; 
    document.getElementById('tipAmt').value = Math.round((bill/100)       * val)*100 / 100;
    document.getElementById('billAmt').value = parseFloat(bill) +       parseFloat(document.getElementById('tipAmt').value)
 }