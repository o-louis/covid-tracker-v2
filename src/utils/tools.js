export const convertDate = (date) => {
    return new Date(date).toLocaleString('en-EN', {
        month: "2-digit",
        day  : "2-digit",
        year : "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
};

export const setReport = (report) => {
    return (report <= 0 ? "" : `+${report.toLocaleString("en-EN")}`);
}