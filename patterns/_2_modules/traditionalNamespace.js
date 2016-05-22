
// if the store object does not exist, create and empty object, if not use the current version of the store
var store = window.store || {};

// if the store doesn't contain a "basket" object as a child, create an empty "basket" child element
// this store["basket"] is using square backets syntax, which serves the same purpose as dot syntax (i.e. store.basket)
if ( !store["basket"] ) {
	store.basket = {};
}

// if the store's basket object does not contain a "core" object, create it
if ( !store.basket["core"] ) {
	store.basket.core = {};
}

store.basket.core = {
	// ...rest of our logic here
};