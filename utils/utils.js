export const getPastData = (data, city, state) => {
  let m;
  if (city === "") {  //if haven't added a filter
    m = data.filter((ele) => {
      return new Date(ele.date) <= new Date();  //if data date is less than current date then that is past rides
    });
  } else {
    m = data.filter((ele) => {
      return (
        new Date(ele.date) <= new Date() &&
        ele.state === state &&
        ele.city === city
      );
    });
  }
  return m;
};

export const getUpcomingData = (data, city, state) => {
  let nextData;
  if (city === "") {
    nextData = data.filter((ele) => {
      return new Date(ele.date) > new Date(); //if data date is greater than current date then that is future rides
    });
  } else {
    nextData = data.filter((ele) => {
      return (
        new Date(ele.date) > new Date() &&
        ele.state === state && 
        ele.city === city
      );
    });
  }
  return nextData;
};


//find nearest data to given station distance and also calculate the distance
const findDistance = (arr, dis) => {
  let min = 100;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= dis && arr[i] <= dis + 5)
      min = Math.min(min, Math.abs(arr[i] - dis));
  }
  return min;
};

export const getNearestData = (data, distance) => {
  let filteredData = data
    .map((ele) => {
      let dis = findDistance(ele.station_path, distance);  //geting the nearest distance with distance from user station
      ele.dis = dis;
      if (dis !== 100) {
        return ele;
      }
    })
    .sort((a, b) => {
      return a.dis - b.dis;
    })  //sorting the data according to distance
    .filter((ele) => ele);  //removing undefined from data

  return filteredData; //returning the filterddata
};
