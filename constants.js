const _ = require('lodash');

const HABIT_EXCELLENT = 'Excellent';
const HABIT_GREAT = 'Great';
const HABIT_AVERAGE = 'Average';
const HABIT_IMPROVE = 'Improve';
const HABIT_BAD = 'BAD';
const HABIT_SKIP = 'SKIP';

const HABIT_STATUS_VALUES = {
    HABIT_SKIP: 0,
    HABIT_BAD: 1,
    HABIT_IMPROVE: 2,
    HABIT_AVERAGE: 3,
    HABIT_GREAT: 4,
    HABIT_EXCELLENT: 5,
};

const HABIT_STRING_KEYS = _.keys(HABIT_STATUS_VALUES);

module.exports = {
    HABIT_SKIP,
    HABIT_BAD,
    HABIT_IMPROVE,
    HABIT_AVERAGE,
    HABIT_GREAT,
    HABIT_EXCELLENT,
    HABIT_STATUS_VALUES,
    HABIT_STRING_KEYS,
};
