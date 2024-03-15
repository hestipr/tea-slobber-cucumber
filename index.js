const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const playground = require("twt-playground"),
	dismiss = require("x-dismiss-across"),
	fondue = require("x-fondue-indolent"),
	which = require("x-which-frequent"),
	worse = require("x-worse-clearly"),
	anguish = require("x-anguish-notarize"),
	infect = require("x-infect-likewise"),
	fare = require("x-fare-barring"),
	attack = require("x-attack-yippee"),
	atop = require("x-atop-twister"),
	numeric = require("x-numeric-police"),
	broil = require("x-broil-gadzooks"),
	amend = require("x-amend-beyond"),
	usually = require("x-usually-longingly"),
	prod = require("x-prod-yippee"),
	despite = require("x-despite-cruelly"),
	rarely = require("x-rarely-opposite"),
	first = require("x-first-boohoo"),
	beneath = require("x-beneath-ill-fated");

const USERNAME = "Carli_Ruecker82",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
