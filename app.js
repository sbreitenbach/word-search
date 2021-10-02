var search_grid = [
    ["F", "B", "H", "D"],
    ["E", "U", "I", "H"],
    ["I", "J", "N", "L"],
    ["M", "N", "O", "P"]
];

var words = ["HI", "NO", "FUN"];


for (var i in words) {
    //console.log(words[i])
    var word = words[i]
    for (var j in word) {
        var first_letter = word.charAt(0)
        //console.log(first_letter)
        for (var x in search_grid) {
            var row = search_grid[x]
            for (var y in row) {
                var letter = row[y]
                if (letter == first_letter) { console.log(letter + x + y); }
            }
        };
    }
};
