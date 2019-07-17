
const input = (num) => {
  if(document.getElementById('result').value === "0"){
    document.getElementById('result').value = "";  
    document.getElementById('result').value = document.getElementById('result').value + num;  
  }else{
    document.getElementById('result').value = document.getElementById('result').value + num;
  }
  return result;
}

const equal = () => {
    var inp = document.getElementById('result').value;
    if(inp){
        document.getElementById('result').value = eval(inp);
    }
}

const erase = () => {
  document.getElementById('result').value = "0";
}

const back = () => {
    var inp = document.getElementById('result').value;
    document.getElementById('result').value = inp.substring(0,inp.length-1);
}


