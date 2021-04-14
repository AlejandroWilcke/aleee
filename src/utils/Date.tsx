export function parseDate( plainDate: string ){
    let d = new Date(plainDate);
    return `${d.getFullYear()}/${d.getMonth()}/${d.getDate()}, ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
}