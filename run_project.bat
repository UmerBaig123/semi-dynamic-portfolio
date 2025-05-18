@echo off

REM Navigate to UI directory and start the frontend
cd UI
npm install
start cmd /k "npm run dev"

REM Navigate to API directory and start the backend
cd ../API
npm install
start cmd /k "npm start"