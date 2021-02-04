export default () => {
    const now = new Date();
    const month = new now.getMonth() + 1;
    const date = new now.getDate();
    const weekList = new Array("Sun", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Set.");
    const week = weekList[now.getDay()];
    const time = now.getTime();

    const dateInfo = {
        month,
        date,
        week,
        time
    };
    return dateInfo;
}