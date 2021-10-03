function search_grid_for_start(grid, first_letter)
 {  
    //TODO - this will return every starting point
    //Rework to find and test one at a time 
    var results = [];
    for (var x in grid) {
        var row = grid[x]
        for (var y in row) {
            var letter = row[y]
            if (letter == first_letter) { 
                results.push([x,y])
             };
        }
    };
    return results
 };

function check_for_match(word,start)
{
    //can initially go up, down, left, right, and diagonal
    //letters must be sequential (but can be spelled in reverse)
    //all letters must follow the same direction
    //cannot search outside the bounds of the grid or "jump" from the end of one side to the start of the other 
    return
}
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
    var starts = search_grid_for_start(search_grid,first_letter)
    //TODO look in adjacent spot for matches
};
