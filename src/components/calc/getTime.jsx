import commonPasswords from "./info.jsx";

function checkString(str) {
  var bool = commonPasswords.indexOf(str);
  return bool === -1 ? false : true;
}

export default (str, len) => {
  var time = [];
  var l = len || false;
  if (l < 11) {
    if (checkString(str)) return "less than one second";
    else {
      var chars = 94;
      var rate = 2800000000;

      var pos = Math.pow(chars, str.length);
      var speed = pos / rate;

      var decimalYears = speed / (3600 * 24 * 365.24219);
      var years = Math.floor(decimalYears);

      var decimalMonths = (decimalYears - years) * 12;
      var months = Math.floor(decimalMonths);

      var decimalDays = (decimalMonths - months) * 30;
      var days = Math.floor(decimalDays);

      var decimalHours = (decimalDays - days) * 24;
      var hours = Math.floor(decimalHours);

      var decimalMinutes = (decimalHours - hours) * 60;
      var minutes = Math.floor(decimalMinutes);

      var decimalSeconds = (decimalMinutes - minutes) * 60;
      var seconds = Math.floor(decimalSeconds);

      if (years > 0) {
        if (years === 1) time.push("1 year, ");
        else time.push(years + " years, ");
      }
      if (months > 0) {
        if (months === 1) time.push("1 month, ");
        else time.push(months + " months, ");
      }
      if (days > 0) {
        if (days === 1) time.push("1 day, ");
        else time.push(days + " days, ");
      }
      if (hours > 0) {
        if (hours === 1) time.push("1 hour, ");
        else time.push(hours + " hours, ");
      }
      if (minutes > 0) {
        if (minutes === 1) time.push("1 minute, ");
        else time.push(minutes + " minutes, ");
      }
      if (seconds > 0) {
        if (seconds === 1) time.push("1 second, ");
        else time.push(seconds + " seconds, ");
      }

      if (time.length <= 0) time = "less than one second, ";
      else if (time.length === 1) time = time[0];
      else time = time[0] + time[1];

      return time.substring(0, time.length - 2);
    }
  }
};
