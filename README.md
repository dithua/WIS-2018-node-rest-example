# WIS-2018-node-rest-example
Example of a REST API using nodejs and mongo during Web Information System Lab


### clone this repo
```bash
git clone https://github.com/dithua/WIS-2018-node-rest-example 
```

### install the dependencies
```bash
npm install
```


### fix the MONGODB_URL in file ./db/mongoose.js

### run the server
```bash
node server.js
```

### test POST /posts with sample data
```json
{
"title": "first title",
"body": "first body"
}
```
#### use postman and send json as raw body with JSON(application/json) selected

### test GET /posts
