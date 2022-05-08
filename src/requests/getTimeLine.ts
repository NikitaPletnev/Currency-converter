export const getTimeline = (firstVal: string, secondVal: string) => {
    const endDate = new Date().toLocaleDateString().split('.').reverse().join('-');
    const startDate = new Date(new Date().setFullYear(parseInt(endDate.split('-')[0]) - 1)).toLocaleDateString().split('.').reverse().join('-');
    const myHeaders = new Headers();
    myHeaders.append("apikey", "qSF4DiiV9xp760OzBIfyCALacWCbgXog");

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    return fetch(`https://api.apilayer.com/exchangerates_data/timeseries?start_date=${startDate}&end_date=${endDate}&base${firstVal}&symbols=${secondVal}`, requestOptions as any)
        .then(response => response.json()).then(result => {
            if (result.rates) {
                return result.rates
            }
        })
        .catch(error => console.log('error', error));
}
