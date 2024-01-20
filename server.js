const express = require(´express´);
const app = express();
const port =3000;

app get (`/`,(req,res) => [
    res.sedfile(__dirname + `/page2.html`)
]);

app.listen(port,() =>(
    console.log(`example app listening on port http://localhost:$[port]`)
));