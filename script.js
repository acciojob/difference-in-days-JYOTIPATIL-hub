function dateDiffInDays(date1, date2) {
    const utcDate1 = Date.UTC(...date1.split('-').map(Number));
    const utcDate2 = Date.UTC(...date2.split('-').map(Number));

    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const differenceInDays = Math.floor((utcDate2 - utcDate1) / millisecondsPerDay);

    return differenceInDays;
}

// Example usage:
