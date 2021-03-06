function search_grid_for_start(grid, first_letter) {
    //TODO - this will return every starting point
    //Rework to find and test one at a time 
    var results = []
    for (var x in grid) {
        let row = grid[x]
        for (var y in row) {
            let letter = row[y]
            if (letter == first_letter) {
                x = parseInt(x)
                y = parseInt(y)
                results.push([x, y])
            }
        }
    }
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
        let x_adjustment = adjustments[i]
        for (var j in adjustments) {
            let y_adjustment = adjustments[j]
            let new_x = parseInt(starting_point[0]) + parseInt(x_adjustment)
            let new_y = parseInt(starting_point[1]) + parseInt(y_adjustment)
            let new_point = [new_x, new_y]
            if (is_valid_adjacent_point(search_grid, new_point, starting_point)) {
                adjacent_points.push(new_point)
            }
        }
    }
    return adjacent_points;
}

function next_point_is_match(current_point, next_point, letter, search_grid) {
    if (is_valid_adjacent_point(search_grid, next_point, current_point) && (letter == search_grid[next_point[0]][[next_point[1]]])) {
        return true
    }
    else return false
}

function find_next_point_to_try(previous_point, current_point) {
    let x_change = parseInt(previous_point[0]) - parseInt(current_point[0])
    let y_change = parseInt(previous_point[1]) - parseInt(current_point[1])
    let next_point_x = parseInt(current_point[0]) - x_change
    let next_point_y = parseInt(current_point[1]) - y_change
    let next_point = [next_point_x, next_point_y]
    return next_point
}

var glbl_previous_point;
var glbl_current_point;
//TODO rework this, messy use of global variables, may be good use of recursion
function check_for_match(search_grid, word, starting_point, current_point) {
    //TODO bug here
    if (word.length == 2) {
        let result = {
            "word": word,
            "starting_grid": {
                "x": starting_point[0],
                "y": starting_point[1]
            },
            "ending_grid": {
                "x": current_point[0],
                "y": current_point[1]
            }
        }
        return [true, result]
    }

    var glbl_previous_point = starting_point;
    var glbl_current_point = current_point;
    for (var i = 0; i < (word.length - 2); i++) {
        let next_point = find_next_point_to_try(glbl_previous_point, glbl_current_point)
        if (i + 3 == word.length && next_point_is_match(glbl_current_point, next_point, word.charAt(i + 2), search_grid)) {
            var result = {
                "word": word,
                "starting_grid": {
                    "x": starting_point[0],
                    "y": starting_point[1]
                },
                "ending_grid": {
                    "x": next_point[0],
                    "y": next_point[1]
                }
            }
            return [true, result]
        }

        else if (!next_point_is_match(glbl_current_point, next_point, word.charAt(i + 2), search_grid)) {
            return false
        }

        else {
            glbl_previous_point = current_point
            glbl_current_point = next_point
        }
    }
}

function main(search_grid, words) {
    //TODO arrays get messy, consider switching this to object
    var results = []
    for (var i in words) {
        let word = words[i]
        let first_letter = word.charAt(0)
        let starts = search_grid_for_start(search_grid, first_letter)
        for (var i in starts) {
            let adjacent_points = find_adjacent_points(search_grid, starts[i])
            for (var j in adjacent_points) {
                let current_point = adjacent_points[j]
                let current_letter = search_grid[current_point[0]][[current_point[1]]]
                if (current_letter == word.charAt(1)) {
                    let check = check_for_match(search_grid, word, starts[i], current_point);
                    if (check[0]) {
                        results.push(check[1])
                    }
                }
            }
        }
    }

    return {
        "results": results
    }
}

module.exports.search_grid_for_start = search_grid_for_start;
module.exports.find_next_point_to_try = find_next_point_to_try;
module.exports.is_valid_adjacent_point = is_valid_adjacent_point;
module.exports.next_point_is_match = next_point_is_match;
module.exports.find_adjacent_points = find_adjacent_points;
module.exports.find_next_point_to_try = find_next_point_to_try;
module.exports.main = main;

module.exports.handler = async (event) => {
    var search_grid = event.search_grid
    var words = event.words
    var result = main(search_grid, words)
    return result
}