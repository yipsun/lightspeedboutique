import React,{ Component } from 'react';
import Listing from './Listing';
import Detail from './Detail';
import Cart from './Cart';

class Boutique extends Component {

    constructor(props) {
        super(props);
        
        // init state
        this.state = {
            selectedItem: null,
            cart: {},
            error: false,
            listingLimit: 5,
        };
        
        // init fetch call
		let apiCall = fetch(this.props.api).then( data => data.json());

        // set state after receiving response from API
        apiCall.then( (data) => {
            // parse initial data to make it more accessible array => object
            let products = data.reduce( (r,v,i) => {
                r[v._id] = v;
                return r;
            }, {});

            this.setState( (state,props) => { return {products}} );
        }).catch( error => {
            this.setState({error: true});
        });

        // Set the scope of this of class function
        this.setSelectedItem = this.setSelectedItem.bind(this);
        this.updateCart = this.updateCart.bind(this);
        this.submitCart = this.submitCart.bind(this);
    }

    // update state method(s)
    setSelectedItem(item) {
        this.setState({selectedItem : item });
    }

    updateCart(itemId, quantity = 1) {
        let item = this.state.products[itemId];

        // update products quantity and cart
        if(item.stock.remaining > 0) {
            this.setState( (state, props) => {
                let {products, cart} = state;
                products[itemId].stock.remaining -= quantity;
                cart[itemId] = cart[itemId] ? cart[itemId] + quantity : quantity;

                return { products : products, cart : cart};
            } );
        }else {
            // error handling
            alert("Unable to add item into cart, item is out of stock")
        }
    }

    submitCart(quantity) {
        if(quantity > 0) {
            // Reset and empty cart
            this.setState((state,props) => {
                
                // Construct confirmation message
                let {products, cart} = state;
                let message = Object.keys(cart).reduce((r,v,i) => {
                    return r + `(${cart[v]})\t${products[v].title} \n`
                }, `You have successfully purchased these items: \n`);
                alert(message);

                return {cart : {}, selectedItem : null};
            });
        }else {
            // Error handling
            alert("Cart is empty, start shopping!")
        }
    }

    // render method(s)
    productsNotLoaded() {

        let error = (
            <div className="error">
                <i className="far fa-times-circle"/>
                <p className="error__text">Error connecting to the database</p>
            </div>
        );

        let buffer = (
            <div className="buffer">
                <i className="fas fa-hourglass-start"></i>
                <p className="buffer__text">Loading</p>
            </div>
        );

        return this.state.error ? error : buffer;
    }

    productsReady() {
        let product = this.state.products[this.state.selectedItem];
        return (
            <div>
                { this.state.selectedItem && <Detail product={product} updateCart={this.updateCart} setSelectedItem={this.setSelectedItem} />}
                <Listing limit={this.state.listingLimit} products={this.state.products} selectedItem={this.setSelectedItem} updateCart={this.updateCart} />
            </div>
        );
    }

    render() {
        return (
            <div className="boutique">
                <Cart cart={this.state.cart} products={this.state.products} submitCart={this.submitCart}/>
                {this.state.products ? this.productsReady() : this.productsNotLoaded()}
            </div>
        );
    }
}

export default Boutique;