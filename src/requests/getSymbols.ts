export const getSymbols = () => {
    const myHeaders = new Headers();
    myHeaders.append("apikey", "qSF4DiiV9xp760OzBIfyCALacWCbgXog");

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    return fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions as any)
        .then(response => response.json()).then(result => {
        if (result?.symbols) {
            return result.symbols
        }
    })
        .catch(error => console.log('error', error));
}
