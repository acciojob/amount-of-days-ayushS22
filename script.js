//your JS code here. If required.
function daysOfAYear(year) {
  // Leap year rules:
  // - Every year divisible by 4 is a leap year
  // - EXCEPT years divisible by 100, unless also divisible by 400
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366; // Leap year
  } else {
    return 365; // Regular year
  }
}