module.exports = function toReadable (number) {
  const numberString = String(number);
  const lengthString = String(number).length;
  result = '';
  
  let hundreds = numberString[lengthString - 3];
  let hundredsResult = '';
  
  switch (hundreds) {
    case '1': hundredsResult = 'one' + ' hundred';
      break;
    case '2': hundredsResult = 'two' + ' hundred';
      break;
    case '3': hundredsResult = 'three' + ' hundred';
      break;
    case '4': hundredsResult = 'four' + ' hundred';
      break;
    case '5': hundredsResult = 'five' + ' hundred';
      break;
    case '6': hundredsResult = 'six' + ' hundred';
      break;
    case '7': hundredsResult = 'seven' + ' hundred';
      break;
    case '8': hundredsResult = 'eight' + ' hundred';
      break;
    case '9': hundredsResult = 'nine' + ' hundred';
      break;
    default: hundredsResult = ''
  }



  let elevenNineteen = numberString.slice(-2);
  let elevenNineteenResult = '';
  
  switch (elevenNineteen) {
    case '10': elevenNineteenResult = 'ten';
      break;
    case '11': elevenNineteenResult = 'eleven';
      break;
    case '12': elevenNineteenResult = 'twelve';
      break;
    case '13': elevenNineteenResult = 'thirteen';
      break;
    case '14': elevenNineteenResult = 'fourteen';
      break;
    case '15': elevenNineteenResult = 'fifteen';
      break;
    case '16': elevenNineteenResult = 'sixteen';
      break;
    case '17': elevenNineteenResult = 'seventeen';
      break;
    case '18': elevenNineteenResult = 'eighteen';
      break;
    case '19': elevenNineteenResult = 'nineteen';
      break;
    default: elevenNineteenResult = ''
  }

  let dozens = numberString[lengthString - 2];
  let dozensResult = '';

  switch (dozens) {
    case '1': dozensResult = '';
      break;
    case '2': dozensResult = 'twenty';
      break;
    case '3': dozensResult = 'thirty';
      break;
    case '4': dozensResult = 'forty';
      break;
    case '5': dozensResult = 'fifty';
      break;
    case '6': dozensResult = 'sixty';
      break;
    case '7': dozensResult = 'seventy';
      break;
    case '8': dozensResult = 'eighty';
      break;
    case '9': dozensResult = 'ninety';
      break;
    default: dozensResult = ''
  }

  let units = numberString[lengthString - 1];
  let unitsResult = '';

  if (numberString[lengthString - 2] === '1'){
    result += '';
  } else {
    switch (units) {
      case '0': unitsResult = 'zero';
        break;
      case '1': unitsResult = 'one';
        break;
      case '2': unitsResult = 'two';
      break;
      case '3': unitsResult = 'three';
        break;
      case '4': unitsResult = 'four';
        break;
      case '5': unitsResult = 'five';
        break;
      case '6': unitsResult = 'six';
        break;
      case '7': unitsResult = 'seven';
        break;
      case '8': unitsResult = 'eight';
        break;
      case '9': unitsResult = 'nine';
        break;
      default: unitsResult = ''
    }
  }

  
  if (hundredsResult === '') {
    result += ''
  } else
   result += hundredsResult;

   if (elevenNineteenResult === '') {
    result += ''
  } else
   result += ' ' + elevenNineteenResult;

   if (dozensResult === '') {
    result += ''
  } else if (numberString[lengthString - 2] === '0') {
    result += '';
  } else
   result += ' ' + dozensResult;

   if ((unitsResult === '') || (numberString[lengthString - 2] === '1')) {
    result += ''
  } else if (numberString[lengthString - 1] === '0') {
    result += ''
  } else
   result += ' ' + unitsResult;


  if (lengthString === 1 && numberString[lengthString - 1] === '0') {
    result += 'zero'
  }

  return result.trim()
}
