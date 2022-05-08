export const prepareDataForDiagrams = (resource: any) => {
    const formattedDate = Object.entries(resource).map((Option) => {
        return [Option[0].split('-').splice(0, 2).reverse().join('.'), Option[1]]
    })
    return formattedDate.map((opt, index) => {
        if (parseInt(formattedDate[index + 1]?.[0] as string) !== parseInt(opt[0] as string)) {
            return [opt[0], Object.values(opt?.[1] as any)[0]]
        }
    }).filter((Option) => !!Option)
}
