
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , fs = require('fs');

var app = module.exports = express.createServer();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes



app.get('/', routes.index);
app.post('/package',function(req, res){
  var postData = '';
  // 设置接收数据编码格式为 UTF-8
  req.setEncoding('utf-8');

  // 接收数据块并将其赋值给 postData
  req.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
  });

  req.addListener("end", function() {
      // 数据接收完毕，执行回调函数
      postData = postData.replace('retdata=','');
      postData = decodeURIComponent(postData)
      postData = JSON.parse(postData);
  
    

    var fs  = require('fs');
    var jsp = require("uglify-js").parser;
    var pro = require("uglify-js").uglify;
    function getCode(flieIn){

      var origCode = fs.readFileSync(flieIn, 'utf8');
     
      var ast = jsp.parse(origCode); // parse code and get the initial AST
      ast = pro.ast_mangle(ast); // get a new AST with mangled names
      ast = pro.ast_squeeze(ast); // get an AST with compression optimizations
      var finalCode = pro.gen_code(ast); // compressed code here
      var _RE = /(\s*\epub\.def\s*\()/g;
      var flag = false
      var u = finalCode.replace(_RE, function(word){
        flag = true;
        return "(";
        
      });
      if(flag){
        u = u+"()";
      }
      
      return "//"+flieIn+"\n;"+u+"";
    }
    var str = fs.realpathSync('../')+"/";
    
    var args = postData;
    
    var cordebase = args.cordebase;
    var list = args.list;
    var dataMain = args.dataMain;
        dataMain = dataMain.replace(cordebase,str);
    var ret = []
   
    for(var n in list){
        var val = list[n];
        var url = val.url;
        url = url.replace(cordebase,str)
        ret.push(getCode(url+".js"));
    }
    // ret.push(getCode(dataMain+".js"));
    
    var output = fs.readFileSync(dataMain+".js", 'utf8');

    var _RE = /(\s*\epub\.app\s*\(\s*function\s*\(\s*\)\s*\{)/g;
    var u = output.replace(_RE, function(word){
      return word+"\n"+ret.join('\n')+"\n"
      
    });
    fs.writeFileSync(dataMain+"-pc.js", u, 'utf8');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
    
  });
});
function getData(page,screen){
    var $page = page;
    var $screen = screen;
    var $time = new Date().getTime();
    var $arr = {
      'results':[
        { 
          "alt":"2012年现代设计重点项目",
          "src":"../public/works/01.jpg?v="+$screen+"_"+$time,
          "title":"1.2012年现代设计重点项目",
          "likes":916,
          "comments":0,
          "height":259,
          "direction":"vertical",
          "ul":[
            '../public/thumb_01.jpg?v='+$screen+'_'+$time,
            '../public/thumb_02.jpg?v='+$screen+'_'+$time,
            '../public/thumb_03.jpg?v='+$screen+'_'+$time,
          ],
          "foto":[
            '../public/foto2.jpg?v='+$screen+'_'+$time,
            '../public/foto2.jpg?v='+$screen+'_'+$time,
            '../public/foto2.jpg?v='+$screen+'_'+$time,
          ],
          "dt":'2012年现代设计重点项目',
          "dd":[
            '建筑地点：上海浦东陆家嘴金融贸易开发区的中心区',
            '总建筑面积（m<sup>2</sup>）：289500',
            '建筑高度（m）：420.5',
            '合作设计单位：芝加哥SOM公司'
          ]
        },
        {
          "alt":"2012年现代设计重点项目",
          "src":"../public/works/02.jpg?v="+$screen+"_"+$time,
          "title":"2.2012年现代设计重点项目",
          "likes":916,
          "comments":0,
          "height":154,
          "direction":"horizontal",
          "ul":[
            '../public/thumb_01.jpg?v='+$screen+'_'+$time,
            '../public/thumb_02.jpg?v='+$screen+'_'+$time,
            '../public/thumb_03.jpg?v='+$screen+'_'+$time,
          ],
          "foto":[
            '../public/foto.jpg?v='+$screen+'_'+$time,
            '../public/foto.jpg?v='+$screen+'_'+$time,
            '../public/foto.jpg?v='+$screen+'_'+$time,
          ],
          "dt":'2012年现代设计重点项目',
          "dd":[
            '建筑地点：上海浦东陆家嘴金融贸易开发区的中心区',
            '总建筑面积（m<sup>2</sup>）：289500',
            '建筑高度（m）：420.5',
            '合作设计单位：芝加哥SOM公司'
          ]
        },
        {
          "alt":"2012年现代设计重点项目",
          "src":"../public/works/03.jpg?v="+$screen+"_"+$time,
          "title":"3.2012年现代设计重点项目",
          "likes":916,
          "comments":0,
          "height":349,
          "direction":"vertical",
          "ul":[
            '../public/thumb_01.jpg?v='+$screen+'_'+$time,
            '../public/thumb_02.jpg?v='+$screen+'_'+$time,
            '../public/thumb_03.jpg?v='+$screen+'_'+$time,
          ],
          "foto":[
            '../public/foto2.jpg?v='+$screen+'_'+$time,
            '../public/foto2.jpg?v='+$screen+'_'+$time,
            '../public/foto2.jpg?v='+$screen+'_'+$time,
          ],
          "dt":'2012年现代设计重点项目',
          "dd":[
            '建筑地点：上海浦东陆家嘴金融贸易开发区的中心区',
            '总建筑面积（m<sup>2</sup>）：289500',
            '建筑高度（m）：420.5',
            '合作设计单位：芝加哥SOM公司'
          ]
        },
        {
          "alt":"2012年现代设计重点项目",
          "src":"../public/works/04.jpg?v="+$screen+"_"+$time,
          "title":"4.2012年现代设计重点项目",
          "likes":916,
          "comments":0,
          "height":320,
          "direction":"horizontal",
          "ul":[
            '../public/thumb_01.jpg?v='+$screen+'_'+$time,
            '../public/thumb_02.jpg?v='+$screen+'_'+$time,
            '../public/thumb_03.jpg?v='+$screen+'_'+$time,
          ],
          "foto":[
            '../public/foto.jpg?v='+$screen+'_'+$time,
            '../public/foto.jpg?v='+$screen+'_'+$time,
            '../public/foto.jpg?v='+$screen+'_'+$time,
          ],
          "dt":'2012年现代设计重点项目',
          "dd":[
            '建筑地点：上海浦东陆家嘴金融贸易开发区的中心区',
            '总建筑面积（m<sup>2</sup>）：289500',
            '建筑高度（m）：420.5',
            '合作设计单位：芝加哥SOM公司'
          ]
        },
        {
          "alt":"2012年现代设计重点项目",
          "src":"../public/works/05.jpg?v="+$screen+"_"+$time,
          "title":"5.2012年现代设计重点项目",
          "likes":916,
          "comments":0,
          "height":147,
          "direction":"vertical",
          "ul":[
            '../public/thumb_01.jpg?v='+$screen+'_'+$time,
            '../public/thumb_02.jpg?v='+$screen+'_'+$time,
            '../public/thumb_03.jpg?v='+$screen+'_'+$time,
          ],
          "foto":[
            '../public/foto2.jpg?v='+$screen+'_'+$time,
            '../public/foto2.jpg?v='+$screen+'_'+$time,
            '../public/foto2.jpg?v='+$screen+'_'+$time,
          ],
          "dt":'2012年现代设计重点项目',
          "dd":[
            '建筑地点：上海浦东陆家嘴金融贸易开发区的中心区',
            '总建筑面积（m<sup>2</sup>）：289500',
            '建筑高度（m）：420.5',
            '合作设计单位：芝加哥SOM公司'
          ]
        },
        {
          "alt":"2012年现代设计重点项目",
          "src":"../public/works/06.jpg?v="+$screen+"_"+$time,
          "title":"6.2012年现代设计重点项目",
          "likes":916,
          "comments":0,
          "height":154,
          "direction":"horizontal",
          "ul":[
            '../public/thumb_01.jpg?v='+$screen+'_'+$time,
            '../public/thumb_02.jpg?v='+$screen+'_'+$time,
            '../public/thumb_03.jpg?v='+$screen+'_'+$time,
          ],
          "foto":[
            '../public/foto.jpg?v='+$screen+'_'+$time,
            '../public/foto.jpg?v='+$screen+'_'+$time,
            '../public/foto.jpg?v='+$screen+'_'+$time,
          ],
          "dt":'2012年现代设计重点项目',
          "dd":[
            '建筑地点：上海浦东陆家嘴金融贸易开发区的中心区',
            '总建筑面积（m<sup>2</sup>）：289500',
            '建筑高度（m）：420.5',
            '合作设计单位：芝加哥SOM公司'
          ]
        },
        {
          "alt":"2012年现代设计重点项目",
          "src":"../public/works/07.jpg?v="+$screen+"_"+$time,
          "title":"7.2012年现代设计重点项目",
          "likes":916,
          "comments":0,
          "height":124,
          "direction":"vertical",
          "ul":[
            '../public/thumb_01.jpg?v='+$screen+'_'+$time,
            '../public/thumb_02.jpg?v='+$screen+'_'+$time,
            '../public/thumb_03.jpg?v='+$screen+'_'+$time,
          ],
          "foto":[
            '../public/foto2.jpg?v='+$screen+'_'+$time,
            '../public/foto2.jpg?v='+$screen+'_'+$time,
            '../public/foto2.jpg?v='+$screen+'_'+$time,
          ],
          "dt":'2012年现代设计重点项目',
          "dd":[
            '建筑地点：上海浦东陆家嘴金融贸易开发区的中心区',
            '总建筑面积（m<sup>2</sup>）：289500',
            '建筑高度（m）：420.5',
            '合作设计单位：芝加哥SOM公司'
          ]
        },
        {
          "alt":"2012年现代设计重点项目",
          "src":"../public/works/08.jpg?v="+$screen+"_"+$time,
          "title":"8.2012年现代设计重点项目",
          "likes":916,
          "comments":0,
          "height":154,
          "direction":"horizontal",
          "ul":[
            '../public/thumb_01.jpg?v='+$screen+'_'+$time,
            '../public/thumb_02.jpg?v='+$screen+'_'+$time,
            '../public/thumb_03.jpg?v='+$screen+'_'+$time,
          ],
          "foto":[
            '../public/foto.jpg?v='+$screen+'_'+$time,
            '../public/foto.jpg?v='+$screen+'_'+$time,
            '../public/foto.jpg?v='+$screen+'_'+$time,
          ],
          "dt":'2012年现代设计重点项目',
          "dd":[
            '建筑地点：上海浦东陆家嘴金融贸易开发区的中心区',
            '总建筑面积（m<sup>2</sup>）：289500',
            '建筑高度（m）：420.5',
            '合作设计单位：芝加哥SOM公司'
          ]
        },
        {
          "alt":"2012年现代设计重点项目",
          "src":"../public/works/09.jpg?v="+$screen+"_"+$time,
          "title":"9.2012年现代设计重点项目",
          "likes":916,
          "comments":0,
          "height":154,
          "direction":"vertical",
          "ul":[
            '../public/thumb_01.jpg?v='+$screen+'_'+$time,
            '../public/thumb_02.jpg?v='+$screen+'_'+$time,
            '../public/thumb_03.jpg?v='+$screen+'_'+$time,
          ],
          "foto":[
            '../public/foto2.jpg?v='+$screen+'_'+$time,
            '../public/foto2.jpg?v='+$screen+'_'+$time,
            '../public/foto2.jpg?v='+$screen+'_'+$time,
          ],
          "dt":'2012年现代设计重点项目',
          "dd":[
            '建筑地点：上海浦东陆家嘴金融贸易开发区的中心区',
            '总建筑面积（m<sup>2</sup>）：289500',
            '建筑高度（m）：420.5',
            '合作设计单位：芝加哥SOM公司'
          ]
        },
        {
          "alt":"2012年现代设计重点项目",
          "src":"../public/works/10.jpg?v="+$screen+"_"+$time,
          "title":"10.2012年现代设计重点项目",
          "likes":916,
          "comments":0,
          "height":275,
          "direction":"horizontal",
          "ul":[
            '../public/thumb_01.jpg?v='+$screen+'_'+$time,
            '../public/thumb_02.jpg?v='+$screen+'_'+$time,
            '../public/thumb_03.jpg?v='+$screen+'_'+$time,
          ],
          "foto":[
            '../public/foto.jpg?v='+$screen+'_'+$time,
            '../public/foto.jpg?v='+$screen+'_'+$time,
            '../public/foto.jpg?v='+$screen+'_'+$time,
          ],
          "dt":'2012年现代设计重点项目',
          "dd":[
            '建筑地点：上海浦东陆家嘴金融贸易开发区的中心区',
            '总建筑面积（m<sup>2</sup>）：289500',
            '建筑高度（m）：420.5',
            '合作设计单位：芝加哥SOM公司'
          ]
        }
    ]};
    if ($screen == 1) {
      $arr['totalScreens'] = 5;
      if ($page == 1) {
        $arr['totalPages'] = 10;
      }
    }
    return $arr;
  }
  // for(var n=1;n<=10;n++){
  //   for(var m=1;m<=5;m++){
  //      var data = getData(n,m);
  //      fs.writeFileSync("/Users/wagon/Documents/workspace/appserv/21epub/data/"+n+"-"+m+".json",JSON.stringify(data), 'utf8');
  //   }
  // }
app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
