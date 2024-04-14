const Habit = require('../db/habit');

const findById = async (id) => {
    return Habit.findByPk(id);
};

const create = async (habit) => {
    return Habit.create(habit);
};

const updateById = async (id, update) => {
    return findById(id).then((habit) => {
        return habit.update(update);
    });
};

module.exports = {
    findById,
    updateById,
    create,
};
