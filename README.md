# word-search
 This app is primarily for me to learn the basics of node.js and experiment with AWS so it is fairly simple. 
 It takes in a grid of letters and a list of words and will perform a word search, returning the starting and ending point for any words it finds.

The function is deployable to AWS lambda and expects to use the AWS API Gateway, sample can be provided up request.

## Sample Request
```json
{
    "search_grid": [
        ["F", "E", "L", "L"],
        ["E", "U", "I", "H"],
        ["I", "J", "N", "L"],
        ["M", "K", "O", "P"]
    ],
    "words": ["HI", "FUN", "DOG"]
}
```

## Sample Response
```json
{
    "results": [
        {
            "word": "HI",
            "starting_grid": {
                "x": 1,
                "y": 3
            },
            "ending_grid": {
                "x": 1,
                "y": 2
            }
        },
        {
            "word": "FUN",
            "starting_grid": {
                "x": 0,
                "y": 0
            },
            "ending_grid": {
                "x": 2,
                "y": 2
            }
        }
    ]
}
```
