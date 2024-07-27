A repository for IOD Capstone Project - TravelAlert Application

Waka is a dynamic travel application designed to ease the daily commutes of individual as well as the business. App will users to view the closed roads in sorrunding and plan the journey accordingly

To locally run the application, ensure the following applications are installed:

MongoDB
A web browser (preferably Google Chrome)
VScode (preferrably)
Follow these steps for a smooth setup:


Clone the code from this GitHub repository and store it locally.

Inside the backend folder, create the .env file and configure it with the following information:

DB_URL "mongodb://localhost/travelAlert"
PORT=8080
---------------------------------------------------------------------------------------------
Get your own Google MAP Api from Googble Map Platfomr. Register the account and get API key
Goto forntend > src > components > Map > Map.jsx
Replace "My_API_KEY" in line 23 with yourown API KEY
---------------------------------------------------------------------------------------------

To install dependencies, run npm install in the VSC terminal of both the backend and frontend folders.

To run the application - backend part, in the VSC terminal of backend folder, and run "npm start".

To run the application - frontend part, in the VSC terminal of frontend folder, and run "npm run dev".

To access the application - Open your web browser and browse the locally hosted application at http://localhost:5173/.

This comprehensive guide ensures a smooth setup, allowing users to experience the Waka RideSharing Application seamlessly on their local machines.
