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

#to view the rendering options in chromle
# go to console in Opera or Chrome and hit escape key (Use paint flashing).

```

## Good to know


* React automatically handles DOM manipulation
* State is initialized in the constructor method and can be accessed by calling this.state.{KEY_VALUE}
* Props is a properties that can be transferred through parameters in component by calling <Header name={VALUE}/> and in Header component, you can simply use it as this.props.name
* use .bind(this) for function call to specify which component you are calling function from. 


## Instructions to run
1. Navigate to folder */1-basic-react*
2. *NPM install*
3. *NPM run dev*
4. Navigate to localhost:8080

## References
### REACT JS TUTORIAL #{1..7} from LearnCode.academy on YouTube



## Commits to follow...
### commit 2bb8a19b8194847c053f9f7ff54bbcdb6c2b0106 (REACT JS TUTORIAL #1)
### commit 57c5338989bd10593735559c0b3a9ae44f9f0ab2 (REACT JS TUTORIAL #2)
### commit 2bb8a19b8194847c053f9f7ff54bbcdb6c2b0106 (REACT JS TUTORIAL #3)
### commit 2f22485fb9513116d1ea46765086ab9723f034d9 (REACT JS TUTORIAL #4)
### commit  (REACT JS TUTORIAL #5)



## Definitions

###DOM
- The Document Object Model (DOM) is an application programming interface (API) for valid HTML and well-formed XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.
- In the DOM, documents have a logical structure which is very much like a tree; to be more precise, which is like a "forest" or "grove", which can contain more than one tree.
