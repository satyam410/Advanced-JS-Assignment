
function display(val){
    let x = document.getElementById('history').value.slice(-1);
    if (x >= 0 && x <= 9){
      document.getElementById('result').value += val
      document.getElementById('history').value += val
      return val;
    }

    else{
      document.getElementById('result').value = val
      document.getElementById('history').value += val
      return val;
    }
}

function solve(){
    let x = document.getElementById('history').value
    let y = eval(x);
    document.getElementById('result').value = y
    return y
}


function clearScreen(){
    document.getElementById('result').value = ''
    document.getElementById('history').value =''
}

function deleteText(){
    let x = document.getElementById('result').value.slice(0,-1)
    document.getElementById('result').value = x
}

function displayKeys(key){

    if( document.getElementById('history').value.slice(-1) === key)     {
      return;
     }
    else{
      document.getElementById('history').value += key
      return key;
    }

}