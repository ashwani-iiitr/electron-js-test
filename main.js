const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

//init win
let win;

function createWindow(){
	//create browser window
	win = new BrowserWindow({width:800, height:600, icon:__dirname+'sysinfo.ico'})

//load index file
    win.loadURL(url.format({
    	pathname:path.join(__dirname, 'index.html'),
    	protocol:'file:',
    	slashes:true
    }));

//open dev tools
    win.webContents.openDevTools();

    win.on('closed', () => {
    	win=null;
    });
}

//run create window function
app.on('ready', createWindow);

//Quitting function
app.on('window-all-closed', () =>{
	if(process.platform != 'darwin'){
		app.quit();
	}
});

