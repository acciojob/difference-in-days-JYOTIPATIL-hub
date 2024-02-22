var dateDiffInDays = function (date1, date2) {
  //   write your code here
	// A function that takes two dates as inputs and returns the difference in days between them
function dateDiffInDays(date1, date2) {
  // Convert the input dates to the number of milliseconds since the UTC epoch
  let date1_ms = Date.UTC(date1.slice(0, 4), date1.slice(5, 7) - 1, date1.slice(8, 10));
  let date2_ms = Date.UTC(date2.slice(0, 4), date2.slice(5, 7) - 1, date2.slice(8, 10));

  // Calculate the difference in milliseconds between the two dates
  let diff_ms = date2_ms - date1_ms;

  // Convert the difference to days by dividing by the number of milliseconds in a day
  let diff_days = diff_ms / (1000 * 60 * 60 * 24);

  // Return the difference in days
  return diff_days;
}

};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));

