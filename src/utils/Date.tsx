export function parseDate( plainDate: string ){
    let d = new Date(plainDate);
    let year = d.getFullYear();
    let month = d.getMonth() < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
    let day = d.getDate();
    let hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
    let minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    let seconds = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
    return `${year}/${month}/${day}, ${hours}:${minutes}:${seconds}`
}