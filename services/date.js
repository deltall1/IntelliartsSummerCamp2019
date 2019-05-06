// Checks format for date
exports.isDate = date => {
  var arrD = date.split("-");
  arrD[1] -= 1;
  var d = new Date(arrD[0], arrD[1], arrD[2]);
  if (
    d.getFullYear() == arrD[0] &&
    d.getMonth() == arrD[1] &&
    d.getDate() == arrD[2]
  ) {
    return true;
  } else {
    return false;
  }
};

// Checks format for year
exports.isYaer = year => {
  var d = new Date(year);
  if (d.getFullYear() == year) {
    return true
  } else {
    return false
  }
}
