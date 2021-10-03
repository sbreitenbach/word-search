function search_grid_for_start(grid, first_letter)
 {
    for (var x in grid) {
        var row = grid[x]
        for (var y in row) {
            var letter = row[y]
            if (letter == first_letter) { 
                //console.log(letter + x + y)
                return ([x,y])
             };
        }
    };
 };

var search_grid = [
    ["F", "B", "H", "D"],
    ["E", "U", "I", "H"],
    ["I", "J", "N", "L"],
    ["M", "N", "O", "P"]
];

var words = ["HI", "NO", "FUN"];

for (var i in words) {
    console.log(words[i])
    var word = words[i]
    var first_letter = word.charAt(0)
    var start = search_grid_for_start(search_grid,first_letter)
    console.log(start)
};
