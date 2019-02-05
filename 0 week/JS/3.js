let numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

const removeElement = (newArr) => {
  newArr.pop();
}

removeElement(concept);
console.log(concept);