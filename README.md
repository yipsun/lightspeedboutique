This project was developed for LightSpeed's technical test. This prototype was created from [Create React App](https://github.com/facebookincubator/create-react-app) for effeciency. The front end stack that it comes with, fulfilled the needs for this project to be completed with gulp added to it. 

## Table of Contents

- [Get the app up and running](#get-the-app-up-and-running)
- [Tools](#tools)
- [UI behaviour cases](#ui-behaviour-cases)
- [Thought process](#thought-process)
- [Next Steps](#next-steps)
- [Contact](#contact)

## Get the app up and running

Follow the instruction below:
`content in these quotes are to be executed in command line`

1. Clone this [repo's](https://github.com/yipsun/lightspeedboutique) master branch: `git clone https://github.com/yipsun/lightspeedboutique.git`
2. Install Node Modules preferably with yarn: `yarn` || `npm install`
3. Compile SCSS -> CSS by using gulp task manager: `./node_modules/.bin/gulp style`(local) || `gulp style`(global)
4. Start app: `yarn run start` || `npm run start`

At this point, you'll be able to view the application with Create React App's stack.

## Tools

After reading the criterias of the test, I've decided to take the plunge with Create React App, since it provides all the necessary basic stack to create a protoype application. Easy to use, less stack configuration and more coding! I've added gulp to the package.json since Create React App's philosphy is to include all resources directly in the components, while I'm just more comfortable writing my stylesheets seperately : more explicit structure by importing scss file in a specific order, sharing variables and mixins, etc. I've used Font Awesome for my icons, since it's practical with its CDN and easy use.

I've used BootStrap's breakpoint at they seem to fit the standards in the web industry.

## UI behaviour cases

* Adding all the remaining stock into your cart should disable the ADD TO CART button.
* Checkout out with no item in your cart should recommend you to shop.
* Clicking on the image of a product in the listing should open the detail view.
* In the code if you change the API prop of Boutique to make an error, the error view should appear in the app.


## Thoughts and process

In this case `App`, is basically the shell around the whole application, if the app had more component such as header, footer, related articles, etc., they could have been added at this level just like `Boutique`. `Boutique` is a class component, since it needs its state property to dictate the views to be rendered and handling the events of sub components, such as updating the cart, selecting a product for the detailed view and checking out. My sub components `Detail`, `Listing` and `Cart` are functional classes/stateless component as they do not require state management within itself. Managing the events was quite simple by passing callbacks from the parent component to the child, by attaching events attribute on the JSX to call the callback function and passing the required parameters. 

The fetch API was used to make the initial request to the dummy API, but if it needed to be be supported on older browser, we would switch the call with XHR. Fetch was more convenient as it returns a Promise. 

As we get our response, before storing the data in our state to render the `Listing`, I've transform the array of products into an object. Instead of fetching a product by the array index, I've set the product's id as the key of the product inside of the new object. 

```Javascript
var responseFromAPI = [ { title : "Nintendo Switch", id : "urururrkkkfii9393i" }, {...}, {...} ];
var products = {
  urururrkkkfii9393i : {
    title : "Nintendo Switch",
    id : "urururrkkkfii9393i"
  },
  iiifkfkgkgkkgkgkgk : { ... },
  fififiif9jl1l10l11 : { ... }
}
```

The purpose of this application is to update your cart as well as the remaining quantity of products and calculating the total amount, that requires to manipulate and fetch the products. Looping through an array to find your desired product can become quite costly perfomance wise, in this case we have about 30 products but in a real online store such as Amazon you have billions of items. 

Let's take calculating the total amount of your cart, if you have 4 items you would have to loop through your products 4 times before having the necessary data for your equation, while an object you can fetch directly your products just by storing you product ID. Manipulating items in an array can be risky as the index is not specific to an item, therefor if the index and/or length of the array starts to shift around, that index is not reliable.

## Next steps

Developing application it's always best to think about your mvp functionalities but also the potential growth of your component, so what's next ? 

The boutique component has a function `updateCart` which takes as parameters `(itemId, quantity)`, for now when we call this function we always pass by default `1` as its quantity. Eventually we can add an input(num) in the `Detail` component to specify the quantity we want to add into our cart instead of the default value. The logic behind quantity parameter has already been implemented, the only thing left to do is integrate the DOM. 

`Boutique`'s state has a `listingLimit` property which is passed as prop to `Listing`, with CTAs we can modify this value to allow more products to be shown, example at [Simons](https://www.simons.ca/en). With the eventuality to add sorting and filtering methods to the listing, this one could become a class component as it'll require state management. 

The cart property of the `Boutique`'s state only store the ID of the product as it's key and the quantity, this way there's no duplicate in our application and there's only one true data for a product. The success message to the checkout functionality list all the products bought and the quantity. The next step would actually be to have a cart management UI to remove items and update quantities. 

## Contact

If you have any questions, comments and/or constructive feedback on this technical test, please write me at [sonda.yip@gmail.com](mailto:sonda.yip@gmail.com)