const battleModel = require("../models/battle.schema");

const batlleController = {

    getAllBattlePlaces: async (req, res, next) => {
        try {
            const battlePlaces = await battleModel.aggregate([
                {
                    $match: {
                        location: { $exists: true, $ne: "" },
                    },
                },
                {
                    $group: {
                        _id: "$location",
                    },
                },
            ]);

            const places = battlePlaces.map((place) => {
                return place._id;
            });

            return res.status(200).json({
                message: "Battle Places",
                data: places,
            });
        } catch (err) {
            return res.status(err.status || 500).json({
                message: err.message || "Something Went Wrong !",
            });
        }
    },

    getBattleCount: async (req, res, next) => {
        try {
            const battles = await battleModel.find();
            return res.status(200).json({
                message: "Battle Counts",
                data: battles.length,
            });
        } catch (err) {
            return res.status(err.status || 500).json({
                message: err.message || "Something Went Wrong !",
            });
        }
    },

    handleSearchBattle: async (req, res, next) => {
        try {
            const battles = await battleModel.aggregate([
                {
                    $match: {
                        $or: req.query.king
                            ? [
                                  {
                                      attacker_king: req.query.king,
                                  },
                                  {
                                      defender_king: req.query.king,
                                  },
                              ]
                            : [{}],
                        location: req.query.location
                            ? req.query.location
                            : { $exists: true, $ne: "" },
                        battle_type: req.query.type
                            ? req.query.type
                            : { $exists: true, $ne: "" },
                    },
                },
            ]);

            return res.status(200).json({
                message: "Battle Counts",
                data: battles,
            });
        } catch (err) {
            return res.status(err.status || 500).json({
                message: err.message || "Something Went Wrong !",
            });
        }
    },
    
};

module.exports = batlleController;
