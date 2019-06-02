var index = require("./root.js")

function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}


function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(holiday, days) {
  var holiday = temp
  var days = holiday
  var temp = days
  return "It's $(days) days until $(holiday)!"
}