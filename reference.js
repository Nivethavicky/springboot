
//sum of multi dimensional array, if object have any value we can try to add using the code below

for (let i = 0; i < flattenedArray.length; i++) {
  if (typeof flattenedArray[i] === 'boolean') {
      // Add 1 for true, 0 for false
      sum += flattenedArray[i] ? 1 : 0;
  } else if (!isNaN(flattenedArray[i])) {
      // If the element is a number
      sum += parseInt(flattenedArray[i]);
  } else if (typeof flattenedArray[i] === 'object' && 'value' in flattenedArray[i] && !isNaN(flattenedArray[i]['value'])) {
      // If the element is an object with a 'value' property
      sum += parseInt(flattenedArray[i]['value']);
  }
}

