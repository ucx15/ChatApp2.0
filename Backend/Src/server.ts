import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();


app.get('/', (req, res) => {
	res.send('Welcome to the Backend Server!');
});

app.listen(PORT, () => {
	console.log(`Backend running on http://localhost:${PORT}`);
});
