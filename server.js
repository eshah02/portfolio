const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layout'); 

app.get('/', (req, res) => {
    res.render('index', { 
        title: "Home",
        name: "ESHAH FATIMA", 
        email: "eshahfatima4@gmail.com", 
        role: "Full Stack Enthusiast", 
        skills: ["HTML", "JavaScript", "React","PHP","Typescript","MSSQL","MongoDB", "Next.js", "Python",] // 
    });
});


app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));