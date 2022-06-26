function formatStringDate(data:any) {
    let date = new Date(data)
    return `${date.toLocaleDateString("pt-BR")} ${date.toLocaleTimeString("pt-BR")} `
}

export default formatStringDate;