export const formatDate = (args: Array<Object>) => {
    let formattedDate: string = '';
    Object.entries(args).forEach((entry, index) => {
        const [key, value]: any = entry
        if (index !== 2) {
            formattedDate = '-' + value.value +formattedDate
        }
        else {
            formattedDate =  value.value + formattedDate;
        }
        console.log(value.value)
    });
    console.log(formattedDate)
    return formattedDate
}