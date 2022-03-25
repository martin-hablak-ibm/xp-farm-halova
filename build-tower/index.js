
function buildTower(floors) {
   let errors = hasErrors(floors);
   if (errors) {
       return errors
   }
   let tower = []
   const width = numberOfBricks(floors);
   for (let floor = 1; floor <= floors; floor++) {
     tower.push(buildFloor(width,floor));
   }
   return tower;
}

function buildFloor(width, floor) {
  let noBricks = numberOfBricks(floor);
  let offset = getOffset(width,noBricks);
  let bricks = "*".repeat(noBricks);
  let empty = " ".repeat(offset);
  return empty + bricks + empty;
}

function getOffset(width, bricks) {
    return (width - bricks) / 2
}

function numberOfBricks(floor) {
    return (2 * floor) - 1;
}

function hasErrors(floors) {
    if (!Number.isInteger(floors)) {
        return {message: 'Input is not a whole number'};
    }
    if (floors <=0){
        return {message: 'Input is not positive number'};
    }
    return undefined;
}

module.exports = { buildTower, hasErrors, numberOfBricks, getOffset };
