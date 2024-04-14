const HabitLog = require('../db/habitLog');

const findById = async (id) => {
    return HabitLog.findByPk(id);
};

const create = async (habit) => {
    return HabitLog.create(habit);
};

const updateById = async (id, update) => {
    return findById(id).then((habit) => {
        return HabitLog.update(update);
    });
};

const addLogForTodau = async (habit) => {};

module.exports = {
    findById,
    updateById,
    create,
};
