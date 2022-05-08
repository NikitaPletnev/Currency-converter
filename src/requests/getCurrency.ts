export const getCurrency = (firstVal: string, secondVal: string) => {
    const myHeaders = new Headers();
    myHeaders.append("apikey", "qSF4DiiV9xp760OzBIfyCALacWCbgXog");

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    return fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${secondVal}&from=${firstVal}&amount=1`, requestOptions as any)
        .then(response => response.json()).then(result => {
            if (result.result) {
                return result.result
            }
        })
        .catch(error => console.log('error', error));
}
