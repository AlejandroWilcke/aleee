export async function getUserCommits(userName: string, repository: string){
    return await fetch(process.env.REACT_APP_BASE_API_GITHUB + `repos/${userName}/${repository}/commits`)
    .then( response => response.json() )
    .then( object => !object.message ? object : [] )
    .catch( error => error )
}