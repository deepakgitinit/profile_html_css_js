const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const hostname = '127.0.0.1';
const port = 3000;


app.use(express.static('/static'));
app.use('/css', express.static('static/css'));
app.use('/img', express.static('static/img'));
app.use('/js', express.static('static/js'));
app.use('/downloads', express.static('static/downloads'));



app.get('/', (req, res)=>{
    res.status(200).sendFile(__dirname + ('/views/index.html'));
});

app.get('/gallery', (req, res)=>{
    res.status(200).sendFile(__dirname + ('/views/gallery.html'));
});

app.get('/about', (req, res)=>{
    res.status(200).sendFile(__dirname + ('/views/about-me.html'));
});

app.get('/contact', (req, res)=>{
    res.status(200).sendFile(__dirname + ('/views/contact-me.html'));
});

app.get('*', (req, res)=>{
    res.status(404).sendFile(__dirname + ('/views/404_page.html'));
});



async function main(obj) {
    let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'deepakhomemail@gmail.com',
        pass: 'jygyolbzlsdlenos',
    },
    });

    await transporter.sendMail({
        from: `${obj.email}`,
        to: `deepakhomemail@gmail.com`,
        subject: `A new Message from ${obj.name} Recieved`,
        text: `Message:[${obj.message}] from ${obj.email}! ${obj.company}`
    });
};



app.post('/', urlencodedParser, (req, res)=>{

    const obj = JSON.parse(JSON.stringify(req.body));

    main(obj).catch(console.error);

    res.sendFile(__dirname + ('/views/contact-me-res.html'));
});

app.post('/gallery', urlencodedParser, (req, res)=>{

    const obj = JSON.parse(JSON.stringify(req.body));
    main(obj).catch(console.error);

    res.sendFile(__dirname + ('/views/contact-me-res.html'));
});

app.post('/about', urlencodedParser, (req, res)=>{

    const obj = JSON.parse(JSON.stringify(req.body));
    main(obj).catch(console.error);

    res.sendFile(__dirname + ('/views/contact-me-res.html'));
});

app.post('/contact', urlencodedParser, (req, res)=>{

    const obj = JSON.parse(JSON.stringify(req.body));
    main(obj).catch(console.error);

    res.sendFile(__dirname + ('/views/contact-me-res.html'));
});



app.listen(port, hostname, ()=>{
    console.log(`The App is Listening on Port '${port}' of Host '${hostname}'`);
});