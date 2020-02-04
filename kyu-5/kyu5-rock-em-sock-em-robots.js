// https://www.codewars.com/kata/566b490c8b164e03f8000002/train/javascript

// My solution
function determineOutcome(robot1, robot2) {
  if (robot1.health === robot2.health) return `The fight was a draw.`;
  if (robot1.health > robot2.health) return `${robot1.name} has won the fight.`;
  if (robot2.health > robot1.health) return `${robot2.name} has won the fight.`;
}

function determineFirstTurn(robot1, robot2) {
  return robot1.speed > robot2.speed || robot1.speed === robot2.speed
    ? robot1
    : robot2;
}

function hasHealth(robot) {
  return robot.health > 0;
}
function hasRemainingTactics(robot) {
  return robot.tactics.length > 0;
}

function fight(robot1, robot2, tactics) {
  // Determine which robot has the highest speed to go first
  let currentBot = determineFirstTurn(robot1, robot2);
  // Continue alternating attacks while both robots have health above zero
  while (
    hasHealth(robot1) &&
    hasHealth(robot2) &&
    (hasRemainingTactics(robot1) || hasRemainingTactics(robot2))
  ) {
    const opponentBot = currentBot === robot1 ? robot2 : robot1;

    if (hasRemainingTactics(currentBot)) {
      opponentBot.health -= tactics[currentBot.tactics.shift()];
    }

    // Switch player turn
    currentBot = currentBot === robot1 ? robot2 : robot1;
  }

  return determineOutcome(robot1, robot2);
}

// Other solutions

function fight(r1, r2, tactic) {
  if (r1.speed < r2.speed) [r1, r2] = [r2, r1];  
  while(r1.tactics.length || r2.tactics.length) {
    if (r1.tactics.length) r2.health -= tactic[r1.tactics.shift()];
    if (r2.health <= 0) break;
    if (r2.tactics.length) r1.health -= tactic[r2.tactics.shift()];
    if (r2.health <= 0) break;
  }
  if (r1.health == r2.health) return "The fight was a draw.";
  return `${(r1.health>r2.health)?r1.name:r2.name} has won the fight.`;
}