var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();
var fs   = require('fs');
var jade = require('jade');
var data = {
    name: name,
    host: host,
    website: website,
    git: git,
    email: email,
    phone: phone,
    skills: skills,
    education: education,
    keywords: keywords,
    description: description,
    title: title,
    year: y,
    logo: logo,
    templates: templates,
    resume: resume
};

// Compile the template to a function string
var jsFunctionString = jade.compileFileClient('../../views/header.jade', data);

// Maybe you want to compile all of your templates to a templates.js file and serve it to the client
fs.writeFileSync("templates.js", jsFunctionString);

console.log(html)

//transporter.sendMail({
//    from: 'sajjad@withpulp.com',
//    to: 'sajjad@withpulp.com',
//    subject: 'hello',
//    text: 'hello world!',
//    html: '<b>Hello world ✔</b>'
//});

