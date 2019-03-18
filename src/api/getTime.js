/* eslint-disable eol-last */
let formatTime = function formatTime(time) {
    let myTime = new Date(time);
    let year = myTime.getFullYear();
    let month = myTime.getMonth() + 1;
    let day = myTime.getDate();
    let hour = myTime.getHours();
    let second = myTime.getSeconds();

    return [year, month, day].map(formatNum).join('-') + ' ' + [hour, second].map(formatNum).join(':');
};

function formatNum(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
}

export default formatTime;