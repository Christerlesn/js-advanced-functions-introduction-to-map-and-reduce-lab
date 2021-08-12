function mapToNegativize(sourceArray){
    const negativizedArray = sourceArray.map(x => x * -1)
    return negativizedArray
}
function mapToNoChange(sourceArray){
    return sourceArray
}
function mapToDouble(sourceArray){
    const doubledArray = sourceArray.map(x => x * 2)
    return doubledArray
}
function mapToSquare(sourceArray){
    const squaredArray = sourceArray.map(x => x**2)
    return squaredArray
}

function reduceToTotal(sourceArray, startingPoint=0){
    let total = startingPoint; 
    for (const num of sourceArray) {
      total += num;
    };
    return total;
  };
  
  function reduceToAllTrue(sourceArray) {
    let trueOrFalse = true;
    for (const ele of sourceArray) {
      trueOrFalse = (trueOrFalse && !!ele)
    };
    return trueOrFalse;
  }; 
  
  function reduceToAnyTrue(sourceArray) {
    for (const ele of sourceArray) {
      if (!!ele) { return true }
    };
    return false
}