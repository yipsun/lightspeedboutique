This project was developed for LightSpeed's technical test. This prototype was created from [Create React App](https://github.com/facebookincubator/create-react-app) for effeciency. The front end stack that it comes with, fulfilled the needs for this project to be completed with gulp added to it. 

## Table of Contents

- [Get the app up and running](#get-the-app-up-and-running)
- [Tools](#tools)
- [Thought process](#thought-process)

## Get the app up and running

Follow the instruction below:
`content in these quotes are to be executed in command line`

1. Clone this [repo's](https://github.com/yipsun/lightspeedboutique) master branch: `git clone https://github.com/yipsun/lightspeedboutique.git`
2. Install Node Modules preferably with yarn: `yarn` || `npm install`
3. Compile SCSS -> CSS by using gulp task manager: `./node_modules/.bin/gulp style`(local) || `gulp style`(global)
4. Start app: `yarn run start` || `npm run start`

At this point, you'll be able to view the application with Create React App's stack.

## Tools

After reading the criteria of the test, I've decided to take the plunge with Create React App, since it provides all the necessary basic stack to create a protoype application. Easy to use, less stack configuration and more coding! I've added gulp to the package.json since Create React App's philosphy is to include all resources directly in the components, while I'm just more comfortable writing my stylesheets seperately : more explicit structure by importing scss file in a specific order, sharing variables and mixins, etc. I've used Font Awesome for my icons, since it's practical with its CDN and easy use.

## Thoughts and process

In this case `App`, is basically the shell around the whole application, if the app had more component such as header, footer, related articles, etc., they could have been added at this level just like `Boutique`. `Boutique` is a class component, since it needs its state property to dictate the views to be rendered and handling the events of sub components, such as updating the cart, selecting a product for the detailed view and checking out. My sub components `Detail`, `Listing` and `Cart` are functional classes/stateless component as they do not require state management within itself. Managing the events was quite simple by passing callbacks from the parent component to the child, by attaching events attribute on the JSX to call the callback function and passing the required parameters. 

The fetch API was used to make the initial request to the dummy API, but if it needed to be be supported on older browser, we would switch the call with XHR. Fetch was more convenient as it returns a Promise. 

As we get our response, before storing data in our state to render the `Listing`, I've transform the array of products into an object. Instead of fetching a product by the array index, I've set the product's id as the key of the product inside of the new object. 

```Javascript
var responseFromAPI = [ { title : "Nintendo Switch", id : "urururrkkkfii9393i" } ];
var products = {
  urururrkkkfii9393i : {
    title : "Nintendo Switch",
    id : "urururrkkkfii9393i"
  }
}
```
