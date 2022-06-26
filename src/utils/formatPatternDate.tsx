function formatPatternDate(data:any) {
  let date = new Date(data);
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");
  let year = date.getFullYear();
  return [year, month, day].join("-");
}

export default formatPatternDate;
