const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = require("../config/database");
const Supporter = require("../models/supporter");

const supporters = [
	{
		uid: "SUP001",
		naam: "Liam Johnson",
		nationaliteit: "England",
		team: "England",
		basisrisico: 20,
		risicoscore: 20,
	},
	{
		uid: "SUP002",
		naam: "Noah Smith",
		nationaliteit: "Belgium",
		team: "Belgium",
		basisrisico: 15,
		risicoscore: 15,
	},
	{
		uid: "SUP003",
		naam: "Lucas Garcia",
		nationaliteit: "Spain",
		team: "Spain",
		basisrisico: 35,
		risicoscore: 35,
	},
	{
		uid: "SUP004",
		naam: "Ethan Brown",
		nationaliteit: "France",
		team: "France",
		basisrisico: 10,
		risicoscore: 10,
	},
	{
		uid: "SUP005",
		naam: "Oliver Davis",
		nationaliteit: "Germany",
		team: "Germany",
		basisrisico: 40,
		risicoscore: 40,
	},
	{
		uid: "SUP006",
		naam: "Mason Wilson",
		nationaliteit: "Portugal",
		team: "Portugal",
		basisrisico: 25,
		risicoscore: 25,
	},
	{
		uid: "SUP007",
		naam: "James Miller",
		nationaliteit: "Italy",
		team: "Italy",
		basisrisico: 30,
		risicoscore: 30,
	},
	{
		uid: "SUP008",
		naam: "Benjamin Moore",
		nationaliteit: "Netherlands",
		team: "Netherlands",
		basisrisico: 18,
		risicoscore: 18,
	},
	{
		uid: "SUP009",
		naam: "Elijah Taylor",
		nationaliteit: "Argentina",
		team: "Argentina",
		basisrisico: 45,
		risicoscore: 45,
	},
	{
		uid: "SUP010",
		naam: "Henry Anderson",
		nationaliteit: "Brazil",
		team: "Brazil",
		basisrisico: 22,
		risicoscore: 22,
	},
	{
		uid: "SUP011",
		naam: "Jack Thomas",
		nationaliteit: "Croatia",
		team: "Croatia",
		basisrisico: 28,
		risicoscore: 28,
	},
	{
		uid: "SUP012",
		naam: "Leo Martinez",
		nationaliteit: "Mexico",
		team: "Mexico",
		basisrisico: 12,
		risicoscore: 12,
	},
	{
		uid: "SUP013",
		naam: "Daniel White",
		nationaliteit: "USA",
		team: "USA",
		basisrisico: 17,
		risicoscore: 17,
	},
	{
		uid: "SUP014",
		naam: "Jacob Harris",
		nationaliteit: "Turkey",
		team: "Turkey",
		basisrisico: 32,
		risicoscore: 32,
	},
	{
		uid: "SUP015",
		naam: "Alexander Clark",
		nationaliteit: "Japan",
		team: "Japan",
		basisrisico: 14,
		risicoscore: 14,
	},
	{
		uid: "SUP016",
		naam: "Michael Lewis",
		nationaliteit: "South Korea",
		team: "South Korea",
		basisrisico: 19,
		risicoscore: 19,
	},
	{
		uid: "SUP017",
		naam: "William Walker",
		nationaliteit: "Morocco",
		team: "Morocco",
		basisrisico: 38,
		risicoscore: 38,
	},
	{
		uid: "SUP018",
		naam: "Samuel Hall",
		nationaliteit: "Switzerland",
		team: "Switzerland",
		basisrisico: 24,
		risicoscore: 24,
	},
	{
		uid: "SUP019",
		naam: "David Allen",
		nationaliteit: "Denmark",
		team: "Denmark",
		basisrisico: 16,
		risicoscore: 16,
	},
	{
		uid: "SUP020",
		naam: "Joseph Young",
		nationaliteit: "Canada",
		team: "Canada",
		basisrisico: 27,
		risicoscore: 27,
	},
];

const seedSupporters = async () => {
	try {
		await connectDatabase();

		await Supporter.deleteMany();
		await Supporter.insertMany(supporters);

		console.log("20 supporters toegevoegd.");
	} catch (error) {
		console.error("Fout bij het toevoegen van supporters.");
		console.error(error);
	} finally {
		await mongoose.connection.close();
	}
};

seedSupporters();
