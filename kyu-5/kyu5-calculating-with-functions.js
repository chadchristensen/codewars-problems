https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript


// My solution
function zero(...args) {
  if (args.length === 0) return 0;
  
  return args[0](0);
}

function one(...args) {
  if (args.length === 0) return 1;
  
  return args[0](1)
}

function two(...args) {
  if (args.length === 0) return 2;
  
  return args[0](2)
}

function three(...args) {
  if (args.length === 0) return 3;
  
  return args[0](3)
}
function four(...args) {
  if (args.length === 0) return 4;
  
  return args[0](4)
}
function five(...args) {
  if (args.length === 0) return 5;
  
  return args[0](5)
}
function six(...args) {
  if (args.length === 0) return 6;
  
  return args[0](6)
}
function seven(...args) {
  if (args.length === 0) return 7;
  
  return args[0](7)
}
function eight(...args) {
  if (args.length === 0) return 8;
  
  return args[0](8)
}
function nine(...args) {
  if (args.length === 0) return 9;
  
  return args[0](9)
}

function plus(rightOperand) {
  return function (leftOperand) {
    return leftOperand + rightOperand;
  }
}

function minus(rightOperand) {
 return function (leftOperand) {
    return leftOperand - rightOperand;
  }
}

function times(rightOperand) {
 return function (leftOperand) {
    return leftOperand * rightOperand;
  }
}

function dividedBy(rightOperand) {
 return function (leftOperand) {
    return Math.floor(leftOperand / rightOperand);
  }
}

// Other solutions

// More DRY and shorter
var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }

// Much shorter but less readable
const
  id = x => x,
  number = x => (f = id) => f(x),
  [zero, one, two, three, four, five, six, seven, eight, nine] =
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(number),
  plus = x => y => y + x,
  minus = x => y => y - x,
  times = x => y => y * x,
  dividedBy = x => y => y / x;