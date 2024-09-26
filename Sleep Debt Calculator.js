const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 5;
    case 'thursday':
      return 6;
    case 'friday':
      return 8;
    case 'saturday':  // corrected typo from 'saterday'
      return 7;
    case 'sunday':
      return 8;
    default:
      return "Error!";
  }
};

const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

// just  test stuffs
//console.log(getSleepHours('monday'));
//console.log(getActualSleepHours());


const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You've got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You've got " + (actualSleepHours - idealSleepHours) + " more hours this week than needed.");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("You've had " + (idealSleepHours - actualSleepHours) + " hours less sleep than needed, get some more rest.");
  } else {
    console.log("Error! Something went wrong. Check your code.");
  }
};

// Test the function
calculateSleepDebt();
