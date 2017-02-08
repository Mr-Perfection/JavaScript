# Welcome to my ReactJS

## Are you new to React?

**Check out my LearnReact folder**

## Just want to build a simple React application?

**Check out my AnnyeongReact**

## coming soon...

## Definitions


**DOM**
* The Document Object Model (DOM) is an application programming interface (API) for valid HTML and well-formed XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.
* In the DOM, documents have a logical structure which is very much like a tree; to be more precise, which is like a "forest" or "grove", which can contain more than one tree.

**JSX**
* JSX is a preprocessor step that adds XML syntax to JavaScript. You can definitely use React without JSX but JSX makes React a lot more elegant. Just like XML, JSX tags have a tag name, attributes, and children. If an attribute value is enclosed in quotes, the value is a string.
* Simply put, JSX is JavaScript with XML.

**EventsSystem (Mediator or PubSub)**
* pubsub design pattern (publish/subscribe), which allows us to decouple our modules. Once integrated with our pubsub module, they can emit events and not have to worry about which modules depend on them. Modules can subscribe to events and be notified when any module publishes.

**React Flux**
* Flux is a system architecture that encourages single-directional data flow through your application
* components -> Actions -> Dispatcher -> Stores -> components
* Works similar to EventsSystem, and the only difference is that all the data should flow into the Stores through Actions. Similarly, the data flows out of the Stores via listeners. It promotes unidirectional data flow and you have a clear idea about how the data flows throughout your app.

## Q&A

**Question: how can you use class in html tags in JSX? Shouldn't it be className?**
* ```react-html-attrs``` transforms JSX class attributes into className and for attributes into htmlFor, allowing you to copy and paste HTML into your React components without having to manually edit these particular attributes each time
