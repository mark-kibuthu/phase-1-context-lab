function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}


function createEmployeeRecords(arr) {
  return arr.map(createEmployeeRecord);
}

function createTimeInEvent(dateTimeString) {
  let [date, hour] = dateTimeString.split(" ");
  hour = parseInt(hour, 10);
  this.timeInEvents.push({ type: "TimeIn", date, hour });
  return this;
}


function createTimeOutEvent(dateTimeString) {
  let [date, hour] = dateTimeString.split(" ");
  hour = parseInt(hour, 10);
  this.timeOutEvents.push({ type: "TimeOut", date, hour });
  return this;
}

function hoursWorkedOnDate(date) {
  let timeInEvent = this.timeInEvents.find(event => event.date === date);
  let timeOutEvent = this.timeOutEvents.find(event => event.date === date);
  return (timeOutEvent.hour - timeInEvent.hour) / 100;
}

function wagesEarnedOnDate(date) {
  let hoursWorked = hoursWorkedOnDate.call(this, date);
  return hoursWorked * this.payPerHour;
}


function allWagesFor() {
  return this.timeInEvents.reduce((totalWages, timeInEvent) => {
    let date = timeInEvent.date;
    return totalWages + wagesEarnedOnDate.call(this, date);
  }, 0);
}


function calculatePayroll(employees) {
  return employees.reduce((totalPayroll, employee) => {
    return totalPayroll + allWagesFor.call(employee);
  }, 0);
}


function findEmployeeByFirstName(collection, firstName) {
  return collection.find(employee => employee.firstName === firstName);
}

module.exports = {
  createEmployeeRecord,
  createEmployeeRecords,
  createTimeInEvent,
  createTimeOutEvent,
  hoursWorkedOnDate,
  wagesEarnedOnDate,
  allWagesFor,
  calculatePayroll,
  findEmployeeByFirstName
};
