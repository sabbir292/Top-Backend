const http = require('http')
const fs = require('fs')  //common js syntax, as import export es6 has not yet been implemented in the node js

// **********readFile*********

//methods for readfile is fs.readFile(file, callback)

// http.createServer((req, res) => {
//     fs.readFile('demo.html', (err, data) => {
//         // if(err) console.log(err)
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data)
//         res.end()
//     })
// }).listen(8080)

// **********createFile*********

//Methods: fs.appendFile(), fs.open(), fs.writeFile()


// the append file does not replace the file, instead append at the end of the file with the provided content
// fs.appendFile('createDemoFile2', 'This is createFile demo with appendFile method', (err) => {
//     if(err) throw err;
//     console.log('File created')
// })


// the open method opens file that you want to create for writing, it takes a second argument 'w' for writing. if there is no file it will create a new one.
// fs.open('createDemoFile2', 'w', (err, file) => {
//     if(err) throw err;
//     console.log('File created')
// })

// the writeFile method also create a file if it does not exist, in this example we will write in the file that was created by open since it is empty. writeFile method replaces the content.
// fs.writeFile('createDemoFile2', 'some content added', (err) => {
//     if (err) throw err
//     console.log('file saved')
// })


// **********updateFile*********|
// Update file has same methods as create file on fs.open is not there. writeFile and the appendFile works same as above, while writeFile replaces the file content the append adds them at the end.

// **********DeleteFile*********
// Methos: fs.unlink(filename, callback)

// fs.unlink('createDemoFile2', (err) => {
//     if (err) throw error
//     console.log('File deleted')  
// })


// **********RenameFile*********
// Methos: fs.rename(oldName, newName, callback)

fs.rename('createFileDemo1', 'createDemoFile1', (err) => {
    if (err) throw err
    console.log('File renamed')  
})