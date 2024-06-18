import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express();

app.use(express.json())

// Option 1: Allow All Orgin with default cors(*)
app.use(cors())
// Option 2: Allow Custon Orgins
// app.use(
//     cors({
//         origin : 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT','DELETE'],
//         allowedHeaders: ['Content-Type'],

//     })
// )

app.get("/", (req, res) => {
	console.log(req);
	return res.status(234).send("Welcome To BOOKStore");
});

app.use('/books', booksRoute)

mongoose
	.connect(mongoDBURL)
	.then(() => {
		console.log("App connected to database");
		app.listen(PORT, () => {
			console.log(`App is listening on port: ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
