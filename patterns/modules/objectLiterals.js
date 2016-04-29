
// object literals do not need to be instantiated using the 'new' keyword

var myModule = {
  myProperty: "someValue",

  // object literals can contain properties and mehtods.
  // e.g. we can define a further object for module configuration
  myConfig: {
    useCaching: true,
    language: "en"
  },

  // a very basic method
  saySomething: function () {
    console.log( "Where in the world is Shawn Shaw today?" );
  },

  // output a value based on the current configuration
  reportMyConfig: function() {
    console.log( "Caching is: " + ( this.myConfig.useCaching ? "enabled" : "disabled") );
  },

  // override the current configuration
  updateMyConfig: function ( newConfig) {
    if (typeof newConfig === "object" ) {
      this.myConfig = newConfig;
      console.log( this.myConfig.language );
    }
  }
};


// Outputs: Where in the world is Shawn Shaw today?
myModule.saySomething();

// Outputs: Caching is: enabled
myModule.reportMyConfig();

myModule.updateMyConfig({
  useCaching: false,
  language: "fr"
});
 
// Outputs: Caching is: disabled
myModule.reportMyConfig();