"use strict";
//Get days in year
const getDaysInYear = (year) => {
  let date = new Date(year, 2);
  let numberDay = 0;
  date.setDate(0);
  const n = date.getDate();
  n === 28 ? (numberDay = 365) : (numberDay = 366);
  document.getElementById("outputCountDay").value = numberDay;
};

//Get day of a year
const getDayNumber = (date) => {
  let newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();
  let numberDay = 0;
  for (let i = 0; i < month; i++) {
    let newDate = new Date(year, i + 1, 0);
    const newDay = newDate.getDate();
    numberDay += newDay;
  }
  numberDay += day;
  document.getElementById("outputNumber").value = numberDay;
};

//Get fiscal quarters
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let getQuarters = (date) => {
  date = new Date(date);
  const month = date.getMonth();
  const day = date.getDate();
  let quarter = "";
  console.log(month);
  month >= 0 && month <= 2
    ? (quarter = "I quarter")
    : month >= 3 && month <= 5
    ? (quarter = "II quarter")
    : month >= 6 && month <= 8
    ? (quarter = "III quarter")
    : month >= 9 && month <= 11
    ? (quarter = "IV quarter")
    : (quarter = "Error");
  console.log(quarter);
  const getQuarter = `${months[month]} ${day} is ${quarter}`;
  document.getElementById("outputQuarter").value = getQuarter;
};

//A function to calculate date diff 
const map = new Map();

let calcDateDiff = (startDate, endDate) => {
  let diffDate = "";
  startDate = new Date(startDate);
  endDate = new Date(endDate);
  const startYear = startDate.getFullYear();
  const endYear = endDate.getFullYear();
  const startMonth = startDate.getMonth();
  const endMonth = endDate.getMonth();
  const startDay = startDate.getDate();
  const endDay = endDate.getDate();
  const startHours = startDate.getHours();
  const endHours = endDate.getHours();
  const startMinutes = startDate.getMinutes();
  const endMinutes = endDate.getMinutes();

  if (endYear > startYear) {
    endMonth < startMonth
      ? (diffDate = `${endYear - startYear - 1} years`)
      : (diffDate = `${endYear - startYear} years`);
  }
  if (endYear < startYear) {
    diffDate = "Wrong first date";
  }
  if (endYear === startYear) {
    if (endMonth > startMonth) {
      endDay < startDay
        ? (diffDate = `${endMonth - startMonth - 1} months`)
        : (diffDate = `${endMonth - startMonth} months`);
    }
    if (endMonth < startMonth) {
      diffDate = "Wrong first date";
    }
    if (endMonth === startMonth) {
      if (endDay > startDay) {
        endHours < startHours
          ? (diffDate = `${endDay - startDay - 1} days`)
          : (diffDate = `${endDay - startDay} days`);
      }
      if (endDay < startDay) {
        diffDate = "Wrong first date";
      }
      if (endDay === startDay) {
        if (endHours > startHours) {
          endMinutes < startMinutes
            ? (diffDate = `${endHours - startHours - 1} hours ${
                60 - startMinutes + endMinutes
              } minutes`)
            : (diffDate = `${endHours - startHours} hours ${
                endMinutes - startMinutes
              } minutes`);
        }
        if (endHours < startHours) {
          diffDate = "Wrong first date";
        }
        if (endHours === startHours) {
          endMinutes > startMinutes
            ? (diffDate = `${endMinutes - startMinutes} minutes`)
            : (diffDate = "Wrong first date");
        }
      }
    }
  }
  return diffDate;
};

//A cache for calcDateDiff
const cacheFormat = (startDate, endDate) => {
  let result;
  if (map.has(startDate + endDate)) {
    result = map.get(startDate + endDate);
  } else {
    result = calcDateDiff(startDate, endDate);
    map.set(startDate + endDate, result);
  }
  console.log(result);
  console.log(map);
  document.getElementById("outputDateDiff").value = result;
};

//Create a map
const array = [
  { id: 1, value: 1, date: "2022-02-15" },
  { id: 2, value: 1242, date: "2023-02-15" },
  { id: 3, value: 3342, date: "2021-02-15" },
  { id: 4, value: 5634, date: "2020-02-15" },
  { id: 5, value: 38842, date: "2019-02-15" },
  { id: 6, value: 12333, date: "2018-02-15" },
  { id: 7, value: 7342, date: "2017-02-15" },
  { id: 8, value: 3232, date: "2016-02-15" },
  { id: 9, value: 9342, date: "2015-02-15" },
  { id: 15, value: 8342, date: "2014-02-15" },
];
const createMap = (arr) => {
  const map = new Map(Object.entries(arr));
  const newMap = new Map();
  for (let item of map) {
    item[0] = item[1].id;
    newMap.set(item[0], item[1]);
  }
  return console.log(newMap);
};
createMap(array);
