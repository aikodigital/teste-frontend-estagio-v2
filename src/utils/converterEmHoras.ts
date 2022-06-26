

export const converterEmHoras = (dataInicial: Date, dataFinal: Date) => {
	
	const subtrairDatas = Math.abs(dataInicial.getTime() - dataFinal.getTime())  
	const diferencaEmHoras = subtrairDatas  / 1000 / 3600

	return diferencaEmHoras
}

export const converterEmHorasArray = (dataInicial: Date[], dataFinal: Date[]) => {
	
	let subtrairDatas = 0
	let diferencaEmHoras = 0

	for(let index = 0; index < dataFinal.length; index++) {
		subtrairDatas = subtrairDatas + Math.abs(dataInicial[index].getTime() - dataFinal[index].getTime())  
		diferencaEmHoras = subtrairDatas  / 1000 / 3600
	} 

	return diferencaEmHoras
}