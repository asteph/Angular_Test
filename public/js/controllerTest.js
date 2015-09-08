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
        this.newItem = {
        	quantity: 1
        };
        this.addItem = function(){
        	this.items.push(this.newItem);
        	this.newItem = {
        		quantity:1
        	};	
        };
        this.deleteItem = function($index){
        	this.items.splice($index, 1);
  			console.log($index);
        };
        this.subTotal = function(){
        	var subTotal = 0;
        	for(var i = 0 ; i < this.items.length; i++){
        		subTotal += this.items[i].price * this.items[i].quantity;
        	};
        	return subTotal;
        };
        this.shipping = function(){
        	var shipping = 0;
        	for(var i = 0 ; i < this.items.length; i++){
        		shipping += this.items[i].quantity * 1.25;
        	};
        	return shipping;
        };
    });
})();