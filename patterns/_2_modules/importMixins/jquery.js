// jquery import Mixin
// In the following example, a library function is defined which declares a new library 
// and automatically binds up the init function to document.ready when new libraries 
// (ie. modules) are created.

function library( module ) {
 
  $( function() {
    if ( module.init ) {
      module.init();
    }
  });
 
  return module;
}
 
var myLibrary = library(function () {
 
  return {
    init: function () {
      // module implementation
    }
  };
}());