const {app, BrowserWindow,ipcMain} = require('electron')

app.on('ready',() =>{
    // require('devtron').install()
    let mainWindwo = new BrowserWindow({
        width:1600,
        height:1200,
        webPreferences:{
            nodeIntegration:true
        }
    })
    mainWindwo.loadFile('index.html')
    ipcMain.on('message',(event,arg) =>{
       console.log(arg)
        event.reply('reply','hello from haha')
    })
    //打开插件
    mainWindwo.webContents.openDevTools()
    // let secondWindow = new BrowserWindow({
    //     width:400,
    //     height:300,
    //     webPreferences:{
    //         nodeIntegration: true
    //     },
    //     parent: mainWindwo
    // })
    // secondWindow.loadFile('seconde.html')
})
