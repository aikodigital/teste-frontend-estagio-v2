export function dateFormater(date, format) {
	const seconds = date.getSeconds()
	const minutes = date.getMinutes()
	const hours = date.getHours()
	const weekDay = date.getDay()
	const day = date.getDate()
	const month = date.getMonth()
	const year = date.getFullYear()

	if(format === "weekDay")
		return `${weekDayArray[weekDay]}, ${day} de ${monthArray[month]} de ${year}`

	return `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year} às ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
}

const weekDayArray = [ "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado" ]
const monthArray = [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ]