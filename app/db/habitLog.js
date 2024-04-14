const db = require('../db/sequelize');
const { DataTypes } = require('sequelize');
const { HABIT_STRING_KEYS, HABIT_STATUS_VALUES } = require('../../constants');
const { minuteDiff } = require('../../utils');

const Habit = db.define(
    'HabitLog',
    {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        habitId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        recordedDay: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        startTime: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        endTime: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM(HABIT_STRING_KEYS),
            allowNull: false,
        },
        statusValue: {
            type: DataTypes.INTEGER,
            set(value) {
                return HABIT_STATUS_VALUES[this.status];
            },
            allowNull: false,
        },
        durationMins: {
            type: DataTypes.INTEGER,
            allowNull: false,
            set(value) {
                if (value) {
                    return value;
                }
                return minuteDiff(this.startTime, this.endTime);
            },
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        },
        notes: {
            type: DataTypes.STRING,
        },
    },
    {
        // Other model options go here
    }
);

module.exports = Habit;
