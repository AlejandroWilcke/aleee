export default async function getIp(){
    return await fetch(process.env.REACT_APP_GET_IP_ENDPOINT)
                .then( response => response.json() )
                .then( dataObject => dataObject.ip )
                .catch( error => console.log(error) )
}