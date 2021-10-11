function search_grid_for_start(grid, first_letter) {
    //TODO - this will return every starting point
    //Rework to find and test one at a time 
    var results = [];
    for (var x in grid) {
        var row = grid[x]
        for (var y in row) {
            var letter = row[y]
            if (letter == first_letter) {
                results.push([x, y])
            };
        }
    };
    return results
};

function is_valid_adjacent_point(search_grid, point, starting_point) {
    if (point[0] < 0 || point[1] < 0) {
        return false
    }
    else if (point[0] == starting_point[0] && point[1] == starting_point[1]) {
        return false
    }
    //TODO this will only work with a square grid
    //TODO crashing here
    else if (point[0] >= search_grid.length || point[1] >= search_grid.length) {
        return false
    }
    else {
        return true
    }
}

function find_adjacent_points(search_grid, starting_point) {
    var adjustments = [-1, 0, 1]
    var adjacent_points = []
    for (var i in adjustments) {
        var x_adjustment = adjustments[i]
        for (var j in adjustments) {
            var y_adjustment = adjustments[j]
            new_x = parseInt(starting_point[0]) + parseInt(x_adjustment);
            new_y = parseInt(starting_point[1]) + parseInt(y_adjustment);
            new_point = [new_x, new_y]
            if (is_valid_adjacent_point(search_grid, new_point, starting_point)) {
                adjacent_points.push(new_point);
            }
        }
    };
    return adjacent_points;
}

function next_point_is_match(current_point, next_point, letter, search_grid) {
    if (is_valid_adjacent_point(search_grid, next_point, current_point) && (letter == search_grid[next_point_x][next_point_y])) {
        return [true]
    }
    else return false;
}

function find_next_point_to_try(previous_point,current_point) {
    var x_change = parseInt(previous_point[0]) - parseInt(current_point[0]);
    var y_change = parseInt(previous_point[1]) - parseInt(current_point[1]);
    var next_point_x = parseInt(current_point[0]) - x_change
    var next_point_y = parseInt(current_point[1]) - y_change
    var next_point = [next_point_x, next_point_y]
    console.log(next_point)
    return next_point
}


function check_for_match(search_grid, word, starting_point, current_point) {
    //check for length of word and number of matches
    //if we have an equal number sequential of matches to the length of the word then return true
    //find direction to search by finding the difference from the second point to the starting point
    //apply same difference to search down the rest of the line
    //if down the line the next point isn't valid then return false
    //if the point is valid but doesn't match the character return false

    if (word.length == 2) {
        console.log("Found word " + word + " Starting at: " + starting_point + " Ending at: " + current_point)
        return true
    }
    
    var previous_point = starting_point
    for (var i = 0; i < (word.length - 2); i++) {
        var next_point = find_next_point_to_try(previous_point,current_point)
        if (i + 3 == word.length && next_point_is_match(next_point, previous_point, word.charAt(i + 3))) {
            return true
        }

        else if (!next_point_is_match(second_point, previous_point, word.charAt(i + 2))) {
            return false
        }
    };

    return false
}

var search_grid = [
    ["F", "B", "C", "D"],
    ["E", "U", "I", "H"],
    ["I", "J", "N", "L"],
    ["M", "K", "O", "P"]
];

var words = ["HI", "NO", "FUN"];

for (var i in words) {
    console.log(words[i])
    var word = words[i]
    var first_letter = word.charAt(0)
    var starts = search_grid_for_start(search_grid, first_letter)
    console.log(starts[0]);
    for (var i in starts) {
        //need to have grid here, not the letter
        var adjacent_points = find_adjacent_points(search_grid, starts[i])
        for (var j in adjacent_points) {
            current_point = adjacent_points[j]
            current_letter = search_grid[current_point[0]][[current_point[1]]]
            if (current_letter == word.charAt(1)) {
                console.log(check_for_match(search_grid, word, starts[i], current_point))
            }
        };

    }
};
