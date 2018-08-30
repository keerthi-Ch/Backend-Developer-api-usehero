// Using express: http://expressjs.com/
var express = require('express');
// Create the app
var app = express();
// File System for loading the list of words
var fs = require('fs');
var http = require('http');
// Cors for allowing "cross origin resources"
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
var cors = require('cors');
app.use(cors());



app.get('/getproduct/iWU4p9dJ9m',function(req,res){
    var product1 = {
        "type": "product-view",
        "merchant": "iWU4p9dJ9m",
        "user": "017f84ad-337f-4969-a85b-3d8b2de68138",
        "time": "2018-03-23T18:25:43.511Z",
        "data": {
        "product": {
        "sku_code": "220309"
                    },
        "location": "https://website.com/product/220309"
                }
    }

    res.json(product1);
})

app.get('/getproduct/YcxOCwj0jg',function(req,res){
    var product2 = {
        "type": "transaction",
        "merchant": "YcxOCwj0jg",
        "user": "44017eb2-fc82-4c8e-87ab-41a4c8a2aa6f",
        "time": "2018-03-23T18:30:43.511Z",
        "data": {
        "transaction": {
        "order_id": "xxxxx1",
        "subtotal": 50,
        "total": 55,
        "line_items": [{
                "product": {
                            "sku_code": "887447521318",
                            "price": 20
                            },
                            "quantity": 1,
                            "subtotal": 20
                                },
                            {
                                "product": {
                                "sku_code": "887447498139",
                                "price": 10
                                        },
                                    "quantity": 3,
                                    "subtotal": 30
                            }
                        ]
                }
        }
    }
    res.json(product2);
})

app.get('/getsummaryproducts',function(req,res){
        console.log('Recieved a get request for products');

        var allproducts = [
    
    	{
			"total_events": 2,
			"number_of_customers": 2,
			"events_summary": [{
						"type": "product-view",
						"total_events": 1,
						"number_of_customers": 1
					},
					{
						"type": "transaction",
						"total_events": 1,
						"number_of_customers": 1,
						"total_value": 55
					}
				]
		}
]

        res.json(allproducts);

        res.end();

})



app.use(express.static('public'));
// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(process.env.PORT || 3000, listen);

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  //const host = '127.0.0.1';
  var port = server.address().port;
  console.log('Keerthi app listening to http://' +host +':' + port);
}

