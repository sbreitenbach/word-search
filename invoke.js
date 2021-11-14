//https://medium.com/intrinsic-blog/advanced-node-js-lambda-function-concepts-ec8ad6c0b9aa

const handler = require('./app.js');

test_event = {
    "search_grid": [
        ["F", "E", "L", "L"],
        ["E", "U", "I", "H"],
        ["I", "J", "N", "L"],
        ["M", "K", "O", "P"]
    ],
    "words": ["HI", "FUN", "DOG"]
}

handler.handler(test_event, {}, (error, data) => {
    if (error) return console.error('FAILURE', error.message);
    console.log('SUCCESS', data);
});