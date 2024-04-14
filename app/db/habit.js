const db = require('../db/sequelize');
const { DataTypes } = require('sequelize');

const Habit = db.define(
    'Habit',
    {
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        endDate: {
            type: DataTypes.DATE,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        motivation: {
            type: DataTypes.STRING,
        },
    },
    {
        // Other model options go here
    }
);

module.exports = Habit;
