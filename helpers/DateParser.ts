// Mon Sep 25 2023 18:17:44 GMT+0600 (Восточный Казахстан)

type Time = {
    hours: number,
    minutes: string
}

interface IDate {
    day: number,
    month: string,
    year: number,
    time: Time
}

const ParseMonths = (month: number): string => {
    switch (month) {
        case 0:
            return "January"
        case 1:
            return "February"
        case 2:
            return "March"
        case 3:
            return "April"
        case 4:
            return "May"
        case 5:
            return "June"
        case 6:
            return "July"
        case 7:
            return "August"
        case 8:
            return "September"
        case 9:
            return "October"
        case 10:
            return "November"
        case 11:
            return "December"
        default:
            return "Unknown"
    }
}

export const DateParser = (date: string) : IDate => {
    const d = new Date(date)
    const day = d.getDate()
    let month = ParseMonths(d.getMonth());
    const year = d.getFullYear()
    let minutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : `${d.getMinutes()}`
    const time: Time = {
        hours: d.getHours(),
        minutes: minutes
    }

    return {
        day: day,
        month: month,
        year: year,
        time: time
    }
}