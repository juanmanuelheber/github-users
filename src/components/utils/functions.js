// Realiza un GET a la API
export const fetchData=(url,param)=>{
    return fetch(`${url}${param}`)
        .then(res=>res.json())
        .catch(error=>console.log(error.message))
}
