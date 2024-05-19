
const {app, BrowserWindow} = require("electron");

function ElectronMainMethod(){
	const launchWindow = new BrowserWindow({
		title: "Inventory Manager",
		width: 777,
		height: 444
	});

	const appURL = "http://localhost:8000";

	launchWindow.loadURL(appURL);
}

app.whenReady().then(ElectronMainMethod)