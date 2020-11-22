const { Schema, model } = require("mongoose");

const battleSchema = new Schema({
    name: {
        type: String,
        default: ""
    },
    year: {
        type: Number,
    },
    battle_number: {
        type: Number
    },
    attacker_king: {

    },
    defender_king: {
        type: String,
        default: ""
    },
    attacker_1: {
        type: String,
        default: ""
    },
    attacker_2: {
        type: String,
        default: ""
    },
    attacker_3: {
        type: String,
        default: ""
    },
    attacker_4: {
        type: String,
        default: ""
    },
    defender_1: {
        type: String,
        default: ""
    },
    defender_2: {
        type: String,
        default: ""
    },
    defender_3: {
        type: String,
        default: ""
    },
    defender_4: {
        type: String,
        default: ""
    },
    attacker_outcome: {
        type: String,
        default: ""
    },
    battle_type: {
        type: String,
        default: ""
    },
    major_death: {
        type: Number,
        default: 0
    },
    major_capture: {
        type: Number,
        default: 0
    },
    attacker_size: {
        type: Number,
        default: 0
    },
    defender_size: {
        type: Number,
        default: 0
    },
    attacker_commander: {
        type: String,
        default: ""
    },
    defender_commander: {
        type: String,
        default: ""
    },
    summer: {
        type: Number,
        default: ""
    },
    location: {
        type: String,
        default: ""
    },
    region: {
        type: String,
        default: ""
    },
    note: {
        type: String,
        default: ""
    },
});

const battleModel = model("battles", battleSchema);

module.exports = battleModel;