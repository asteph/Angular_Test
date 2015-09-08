"use strict";

(function() {
    var app = angular.module("controllerTest", []);

    app.controller("CartController", function() {
        this.items = [ 
        { 
          name: 'apple', 
          price: 0.50,
          quantity: 1,
        }, 
        { 
          name: 'orange', 
          price: 0.75,
          quantity: 3,
        }, 
        { 
          name: 'banana', 
          price: 1.00,
          quantity: 1,
        }, 
        { 
          name: 'pineapple', 
          price: 2.50,
          quantity: 2,
        }, 
        ];
    });
})();