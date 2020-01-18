// https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript

// You need to write regex that will validate a password to make sure it meets the following criteria:
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

// My solution
function validate(password) {
  return /^(?!.*[\s])(?!.*[.;])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/.test(
    password
  );
}

validate('djI38D55');

// Other solutions
function validate2(password) {
  return (
    /^[A-Za-z0-9]{6,}$/.test(password) &&
    /[A-Z]+/.test(password) &&
    /[a-z]+/.test(password) &&
    /[0-9]+/.test(password)
  );
}

function validate3(password) {
  /**
   * positive lookahead is used here to ensure that at least one of each character set is available
   * you need to allow every character (.*) before your lookahead character set,
   * except you want to ensure the expression starts with i.e. a lowercase character.
   * Each lookahead basically says "Is there <anything> and 1 or more of <character set> in the following expression?"
   * The speciality here is that lookaheads wont touch the matching group so that you can check for 6 or more
   * characters afterwards. The 6 or more characters will simply not match if they don't fulfill every lookahead.
   * */
  return /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)[A-Za-z0-9]{6,}$/.test(password);
}
