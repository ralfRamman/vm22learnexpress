
const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port =3000;

app.use(express.urlencoded({  
    extended:true
}))


nunjucks.configure('views', {
    autoescape:true,
    express:app,
})

app.get('/',(req,res) => {
    res.render('index.njk');
    console.log('1');
});


app.get('/page2',(req,res) => {
    res.render('page2.njk');
    console.log('2');

});


app.get('/form',(req,res) => {
    console.log(req.query);
    res.render('form.njk', req.query);
    

});

app.get('/circle',(req,res) => {
    res.render('circle.njk', req.query);
})

app.post('/circle', (req, res) => {
    let area = Math.PI * req.body.radius * req.body.radius;
    let diameter = 2 * Math.PI * req.body.radius;
    let volume = (4/3) * Math.PI * Math.pow(req.body.radius, 3);
    

    res.render('circleAnswer.njk', { r: req.body.radius, a: area, d: diameter, v: volume });
});




app.listen(port,() =>(
    console.log(`example app listening on port http://localhost:${port}`)
 ));