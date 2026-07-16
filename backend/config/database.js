const mongoose = require("mongoose");

const connectDatabase = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);

		console.log("Verbonden met MongoDB.");
	} catch (error) {
		console.error("Verbinding met MongoDB mislukt.");
		console.error(error.message);

		process.exit(1);
	}
};

module.exports = connectDatabase;
