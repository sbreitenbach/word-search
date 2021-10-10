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

var search_grid = [
    ["F", "B", "H", "D"],
    ["E", "U", "I", "H"],
    ["I", "J", "N", "L"],
    ["M", "N", "O", "P"]
];

function is_valid_adjacent_point(search_grid,point,starting_point)
{
    if (point[0] < 0 || point[1] < 0)
        {
            return false
        }
    else if (point[0] == starting_point[0] && point[1] == starting_point[1])
        {
            return false
        }
    //TODO this will only work with a square grid
    else if (point[0] >= search_grid.length || point[1] >= search_grid.length)
        {
            return false
        }
    else 
        {
            return true
        }
}

function find_adjacent_points(search_grid,starting_point)
{
    var adjustments = [-1,0,1]
    var adjacent_points = []
    for (var i in adjustments)
        {
            var x_adjustment = adjustments[i]
            for (var j in adjustments)
                {
                    var y_adjustment = adjustments[j]
                    new_x = parseInt(starting_point[0]) + parseInt(x_adjustment);
                    new_y = parseInt(starting_point[1]) + parseInt(y_adjustment);
                    new_point = [new_x,new_y]
                    if (is_valid_adjacent_point(search_grid,new_point,starting_point))
                        {
                            new_point = search_grid[new_x][new_y];
                            adjacent_points.push(new_point);
                        }
                }
        };
    return adjacent_points;
}

//can initially go up, down, left, right, and diagonal
//letters must be sequential (but can be spelled in reverse)
//all letters must follow the same direction
//cannot search outside the bounds of the grid or "jump" from the end of one side to the start of the other

var words = ["HI", "NO", "FUN"];

for (var i in words) {
    console.log(words[i])
    var word = words[i]
    var first_letter = word.charAt(0)
    var starts = search_grid_for_start(search_grid,first_letter)
    console.log(starts[0]);
    //TODO look in adjacent spot for matches
    for (var i in starts)
    {  
        var adjacent_points = find_adjacent_points(search_grid,starts[i])
            for (var j in adjacent_points)
             {
                 if (adjacent_points[j] = word.charAt(1))
                    {
                        console.log(adjacent_points[j])
                    }
             };

    }
};
