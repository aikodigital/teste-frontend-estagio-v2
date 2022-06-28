const getMostRecentData = (positions) => {
    //console.log(positions)
    const actualDay = new Date().getUTCDate()
    const positionDayArray = positions.map(item => item.date.split('T')[0].substring(8,10))
    const closestDayNumber = positionDayArray.sort((a, b) => Math.abs(actualDay - a) - Math.abs(actualDay - b))[0];
    
    const actualHours = new Date().getHours();
    const positionHoursArray = positions.filter(item => item.date.split('T')[0] === `2021-02-${closestDayNumber}`)
    const closestHourNumber = positionHoursArray.sort((a, b) => Math.abs(actualHours - a) - Math.abs(actualHours - b))[0];

    return closestHourNumber
}

export default getMostRecentData