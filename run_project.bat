@echo off

REM Navigate to UI directory and start the frontend
cd UI
start cmd /k "npm install && npm run dev"

REM Navigate to API directory and start the backend
cd ../API
start cmd /k "npm install && npm start"