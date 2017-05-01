var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
 var  articleOne = {
             title: 'Article one',
             heading: 'Article-one',
             date:'Sep 5,2016',
             content: `<p>
                    This is the content of my first web page
                </p>`
          };
 function createTemplate(data){
     var title=data.title;
     var heading=data.heading;
     var date=data.date;
     var content=data.content;
     var htmlTemplate=` 
         <html>
            <head>
                  <title>
                     ${title}
                  </title>
        <link href="/ui/style.css" rel="stylesheet" />
            </head>
    <body>
        <div class="cont">
        <div>
            <a href="/">Home</a>
        </div>
        <br/>
        <h3>
           ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
         ${content}
        </div>
        </div>
    </body>
</html>
';
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/',function(req,res)
{ 
  res.send(createTemplate(articleOne));  
});
app.get('/article-two',function(req,res)
{
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req,res)
{
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 8080
app.listen(8080, function (){
  console.log(`IMAD course app listening on port ${port}!`);
});
