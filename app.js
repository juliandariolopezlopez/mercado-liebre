const express = require('express');

const path = require('path');

const app = express();

const PORT= process.env.PORT || 3000;

//const publicPath = path.resolve(__dirname, './public');
//app.use(express.static(publicFolderPath));

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})
 
app.get('/', (res, req) => {
    res.sendFile(path.resolve(__dirname, './css/styles.css'));
})
app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto' + PORT);
}); 