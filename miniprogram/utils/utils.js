/**
 * 获取当前时间-格式YYYY-MM-DD
 */
function getNowDate() {
  let nowDate = new Date();
  let year = nowDate.getFullYear().toString();
  let month = nowDate.getMonth() + 1;
  let day = nowDate.getDate();
  day = day < 10 ? "0" + day : day;
  return `${year}-${month}-${day}`;
}

/**
 * 获取今日星期几
 */
function getWeekDay() {
  let weekArr = ["日","一", "二", "三", "四", "五", "六"];
  let weekDay = (new Date()).getDay();
  console.log(weekDay)
  return weekArr[weekDay];
}

module.exports = {
  getNowDate,
  getWeekDay,
}