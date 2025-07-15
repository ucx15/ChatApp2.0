// Node.js script to generate environment variables file

// ⚠️ Overrides existing .env files in Backend and Frontend directories ⚠️
// Run this script to create or update the .env files with necessary variables


import fs from 'fs';
import crypto from 'crypto';

function backend() {
	const envVariables = {
		BACKEND_PORT: 3000,
		REFRESH_TOKEN_SECRET: crypto.randomBytes(64).toString('hex'),
		ACCESS_TOKEN_SECRET: crypto.randomBytes(64).toString('hex'),
		ACCESS_TOKEN_EXPIRY: '1hr',
		REFRESH_TOKEN_EXPIRY: '7d',
	};

	const envContent = Object.entries(envVariables)
		.map(([key, value]) => `${key}=${value}`)
		.join('\n');

	fs.writeFileSync('Backend/.env', envContent);
}


function frontend() {
	const envVariables = {
		BACKEND_URI: 'http://localhost:3000',
	};

	const envContent = Object.entries(envVariables)
		.map(([key, value]) => `${key}=${value}`)
		.join('\n');

	fs.writeFileSync('Frontend/.env', envContent);
}

backend();
frontend();