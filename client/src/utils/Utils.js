export default {
    formatDate: (date) => {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formatedDate = [month, day, year].join("-");
        return formatedDate;
    }
}
