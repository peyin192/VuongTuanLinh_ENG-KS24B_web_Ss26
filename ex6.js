function formatDates(strings) {
    return strings.map(str => {
        let date = new Date(str);
        if (!isNaN(date.getTime())) {
            let day = String(date.getDate()).padStart(2, '0');
            let month = String(date.getMonth() + 1).padStart(2, '0');
            let year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }
        return null;
    }).filter(date => date !== null);
}

let inputArray = ["2024-03-12", "2023-07-25", "invalid-date", "2022-01-01"];
let formattedDates = formatDates(inputArray);
console.log(formattedDates);
