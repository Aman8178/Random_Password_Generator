const lowerSet="qwertyuioplkjhgfdsazxcvbnm";
const upperSet="QWERTYUIOPLKJHGFDSAZXCVBNM";
const numberSet="1234567890";
const symbolSet="!@#$%^&*()";

const getRandom = (dataSet) =>{
    return dataSet[Math.floor(Math.random()*dataSet.length)]
}

const passbox=document.getElementById('pass-box')
const totalchar=document.getElementById('total-char');
const upperinput=document.getElementById('upper-case');
const lowerinput=document.getElementById('lower-case');
const numbers=document.getElementById('numbers');
const symbols=document.getElementById('symbols');

const generatePassword = (password= " ") =>{
    if(upperinput.checked)
    {
        password+=getRandom(upperSet);
    }
    if(lowerinput.checked)
    {
        password+=getRandom(lowerSet);
    }
    if(numbers.checked)
    {
        password+=getRandom(numberSet);
    }
    if(symbols.checked)
    {
        password+=getRandom(symbolSet);
    }
    if(password.length<totalchar.value)
    {
        return generatePassword(password);
    }

    passbox.innerText=(truncateString(password, totalchar.value));
}

document.getElementById('btn').addEventListener('click', function(){
    return generatePassword();
})

function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) ;
    } else {
      return str;
    }
  }
