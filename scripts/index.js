const input = (num) => {
  document.getElementById('result').value = document.getElementById('result').value + num; 
}

const equal = () => {
    var inp = document.getElementById('result').value;
    if(inp){
        document.getElementById('result').value = eval(inp);
    }
}

const erase = () => {
  document.getElementById('result').value = "";
}

const back = () => {
    var inp = document.getElementById('result').value;
    document.getElementById('result').value = inp.substring(0,inp.length-1);
}


