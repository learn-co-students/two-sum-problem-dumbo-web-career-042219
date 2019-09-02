function bruteForceTwoSum(arr, sum){
  let pairs = [];

  for (let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] === sum) pairs.push([arr[i], arr[j]])
    }
  }

  return pairs;
}

function binarySearchTwoSum(arr, sum){
  let pairs = [];

  arr.sort((a,b) => {
    if(a < b){
      return -1;
    } else if(a > b){
      return 1;
    } else {
      return 0;
    }
  });

  for(let i = 0; i < arr.length / 2; i++){
    let difference = sum - arr[i];
    if(binaryMatch(difference) && !pairs.flat().includes(difference)){
      pairs.push([arr[i], difference])
    }
  }

  return pairs;

}

function binaryMatch(arr, missingNum){
  
  let start = 0;
  let mid = arr.length / 2
  let end = arr.length - 1;
  
  while(start !== end){
    if (missingNum > arr[mid]){
      start = mid;
      mid = (start + end) / 2;
    } else if (missingNum < arr[mid]){
      end = mid;
      mid = (start + end) / 2;
    } else if (missingNum === arr[mid]) {
      return true;
    }
  }

  return false;
}

function hashTwoSum(arr, sum){
  let hash = {};
  let pairs = [];

  for(let i = 0; i < arr.length; i++){
    let difference = sum - arr[i];
    if(hash[difference]){
      pairs.push([difference, arr[i]])
    }
    hash[arr[i]] = true;
  }

  return pairs;
}