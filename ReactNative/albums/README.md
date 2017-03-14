# Albums React Native App

I built an Album application using random albums & artists.

## Components
* Header, CardSection, Card, CardSection, CardSection

## Hierarchy
* App(root), uses AppRegistry
* Header(child), exports itself

## Styling
* Use text, view, flexbox from react-native module

## Flexbox
* justifyContent(top -> down): 'flex-start','center','flex-end','space-around','space-between'
* alignItems (left -> right): 'flex-start','center','flex-end'
* flexDirection:
'column' (spacing vertical direction),'row' (spacing horizontal direction)

## Axios
* Promise based HTTP client for the browser and node.js

## Glossary
* Component: in react, it is a block of codes that can be reused throughout the application. Highly reusable and constructive.
* Props is a properties that can be transferred through parameters in component by calling <Header name={VALUE}/> and in Header component, you can simply use it as this.props.name
