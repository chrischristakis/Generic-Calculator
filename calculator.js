const numbers = document.getElementsByClassName("number");
const output = document.getElementById("output");
const equalBtn = document.getElementById("equal");
const clear = document.getElementById("clear");
const decimal = document.getElementById("decimal");

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
let oldNum = "0";

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

clear.addEventListener("click", () => {
  clearValues();
});

decimal.addEventListener("click", () => {
  if(firstNumber)
  {
    if(num1.indexOf('.') !== -1)
    {
      clearValues();
      output.value = "Invalid expression"
    }
    else
    {
      num1 += ".";
      output.value = num1;
    }
  }
  else
  {
    if(num2.indexOf('.') !== -1)
    {
      clearValues();
      output.value = "Invalid expression"
    }
    else
    {
      num2 += ".";
      output.value = num2;
    }
  }
});

function clearValues()
{
  num1 = "";
  num2 = "";
  output.value = "";
  firstNumber = true;
}

equalBtn.addEventListener("click", () => {
   if(num2 == "") num2 = oldNum; //if you repeat click '='
   if(num1.indexOf('.') == -1 && num2.indexOf('.') == -1) //Not a decimal.
   {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
   }
   else
   {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
   }
   let value = NaN;
   let nothing = false;
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
    default: //they only pressed equals without a num2 or expression
      console.log("EXPRESSION ERROR");
      value = num1;
      nothing = true;
   }
   output.value = value;
   num1 = value + "";
   oldNum = num2 + "";
   num2 = "";
   firstNumber = nothing;

 });
