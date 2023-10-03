const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "`!@#$%^&*()_+?><";

// selectors
const passBox = document.getElementById("pass-box");
const totalchar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("number");
const symbolInput = document.getElementById("symbol");




const getrandomData = (data) => {
    return data[Math.floor(Math.random() * data.length)]
}

const generatePassword = (password = "") => {
    if(upperInput.checked){
        password += getrandomData(upperCase)
    }
    if(lowerInput.checked){
        password += getrandomData(lowerCase)
    }
    if(numberInput.checked){
        password += getrandomData(number)
    }
    if(symbolInput.checked){
        password += getrandomData(symbol)
    }
    if (password.length <= totalchar.value) {
        return generatePassword(password)
    }
    passBox.innerText = (truncateString(password,totalchar.value));
}

generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatePassword();
    }
)

function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
  }
