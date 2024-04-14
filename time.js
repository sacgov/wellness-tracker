const dayjs = require('dayjs');

const minuteDiff = (startTime, endTime) => {
    const date1 = dayjs(startTime);
    const date2 = dayjs(endTime);
    return date2.diff(date1, 'minute');
};

module.exports = { minuteDiff };
