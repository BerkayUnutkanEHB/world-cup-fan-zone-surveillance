const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = require("../config/database");
const Zone = require("../models/zone");

const zones = [
	{
		naam: "Fan Zone A",
		type: "fan-zone",
		capaciteit: 500,
		eerdereRiots: true,
	},
	{
		naam: "Ingang Noord",
		type: "entrance",
		capaciteit: 250,
		eerdereRiots: false,
	},
	{
		naam: "Metro Station",
		type: "metro",
		capaciteit: 400,
		eerdereRiots: true,
	},
	{
		naam: "Food Court",
		type: "foodstand",
		capaciteit: 200,
		eerdereRiots: false,
	},
	{
		naam: "Main Street",
		type: "street",
		capaciteit: 600,
		eerdereRiots: false,
	},
];

const seedZones = async () => {
	try {
		await connectDatabase();

		await Zone.deleteMany();
		await Zone.insertMany(zones);

		console.log("5 zones toegevoegd.");
	} catch (error) {
		console.error("Fout bij het toevoegen van de zones.");
		console.error(error);
	} finally {
		await mongoose.connection.close();
	}
};

seedZones();
