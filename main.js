const {app, BrowserWindow} = require('electron')

app.on('ready',() =>{
    let mainWindwo = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true
        }
    })
    mainWindwo.loadFile('index.html')
    let secondWindow = new BrowserWindow({
        width:400,
        height:300,
        webPreferences:{
            nodeIntegration: true
        }
    })
})
