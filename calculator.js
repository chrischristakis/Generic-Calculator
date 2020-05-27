const numbers = document.getElementsByClassName("number");
const output = document.getElementById("output");
const equalBtn = document.getElementById("equal");

//Operators
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const div = document.getElementById("divide");
const mul = document.getElementById("mul");
const mod = document.getElementById("mod");

const Operation = {ADD:"add", SUB:"sub", MUL:"mul", DIV:"div", MOD:"mod"};
let operation;

let num1 = "", num2 = "";
let firstNumber = true;

for(const num of numbers)
{
  num.addEventListener("mousedown", function() {
    if(firstNumber)
    {
      num1 += num.innerText;
      output.value = num1;
    }
    else
    {
      num2 += num.innerText;
      output.value = num2;
    }
  });
}

add.addEventListener("click", () => {
  operation = Operation.ADD;
  firstNumber = false;
});
div.addEventListener("click", () => {
  operation = Operation.DIV;
  firstNumber = false;
});
sub.addEventListener("click", () => {
  operation = Operation.SUB;
  firstNumber = false;
});
mul.addEventListener("click", () => {
  operation = Operation.MUL;
  firstNumber = false;
});
mod.addEventListener("click", () => {
  operation = Operation.MOD;
  firstNumber = false;
});

equalBtn.addEventListener("click", () => {
   num1 = parseInt(num1);
   num2 = parseInt(num2);
   let value = NaN;
   switch(operation)
   {
    case Operation.ADD:
      value = num1 + num2;
      break;
    case Operation.SUB:
      value = num1 - num2;
      break;
    case Operation.MUL:
      value = num1 * num2;
      break;
    case Operation.DIV:
      value = num1 / num2;
      break;
    case Operation.MOD:
      value = num1 % num2;
      break;
    default:
      console.log("EXPRESSION ERROR");
      value = num1 + num2;
   }
   output.value = value;
   num1 = "";
   num2 = "";
   firstNumber = true;

 });
