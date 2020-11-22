const batlleController = require("../controllers/battle");

const battleRouter = require("express").Router();

battleRouter.get("/list", batlleController.getAllBattlePlaces);
battleRouter.get("/count", batlleController.getBattleCount);

battleRouter.get("/search", batlleController.handleSearchBattle);

module.exports = battleRouter;
