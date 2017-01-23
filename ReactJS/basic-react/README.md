## Useful commands

```
$ npm install -S webpack-dev-server
$ npm install -g webpack-dev-server #globally install dev-server
$ webpack-dev-server --content-base src #set the root for localhost:8080
$ npm uninstall -g webpack-dev-server #and add the code below in package.json
#"scripts": {
#  "dev": "./node_modules/.bin/webpack-dev-server --content-base src --inline --hot",
#  "test": "echo \"Error: no test specified\" && exit 1"
#}


```


## Instructions to run
1. Navigate to folder */1-basic-react*
2. *NPM install*
3. *NPM run dev*
4. Navigate to localhost:8080

## Time stamps from [YouTube video](https://www.youtube.com/watch?v=MhkGQAoc7bc)
* 0:50 Babel overview
* 1:29 Webpack config
* 2:37 NPM install
* 3:13 Looking at client.js & breaking down React
* 5:45 Serving content from file
* 6:18 Live reload w/ npm install -S webpack-dev-server
* 7:10 webpack dev server --content-base src
* 7:55 --Inline --hot (live reload)
* 8:30 Creating a "dev" command in NPM
