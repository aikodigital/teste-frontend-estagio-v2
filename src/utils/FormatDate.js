export const formatString = (date) => {
  let currentDate = new Date(date);
  let day = currentDate.getDate();
  day = day < 10 ? `0${day}` : day;
  let month = currentDate.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let year = currentDate.getFullYear();
  let hour = currentDate.getHours();
  hour = hour < 10 ? `0${hour}` : hour;
  let minutes = currentDate.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return ("Dia "+day+" do "+month+" de "+year+". As "+hour+"h"+minutes+"min"
  );
};

export const format = (date) => {
  let currentDate = new Date(date);
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();

  return day + "/" + month + "/" + year;
};
