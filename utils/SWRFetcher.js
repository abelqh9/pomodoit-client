async function SWRFetcher(url) {
    return fetch(url, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
    }).then(res =>  res.ok ? res.json() : Promise.reject(res))
}

export default SWRFetcher