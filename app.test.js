const app = require('./app');

test('finds initial grid', () => {
    var test_grid = [
        ["F", "E", "L", "L"],
        ["E", "U", "I", "H"],
        ["I", "J", "N", "L"],
        ["M", "K", "O", "P"]
    ];
    var test_letter = "H"

    expect(app.search_grid_for_start(test_grid, test_letter)).toEqual([["1", "3"]]);
});

test('find next point to search', () => {
    previous_point = [0,0]
    current_point = [1,1]

    expect(app.find_next_point_to_try(previous_point, current_point)).toEqual([2, 2]);
});

test('negative x coord is not a valid point', () => {
    var test_grid = [
        ["A", "A", "A"],
        ["A", "A", "A"],
        ["A", "A", "A"]
    ];
    starting_point = [0,0]
    point = [-1,0]

    expect(app.is_valid_adjacent_point(test_grid, point, starting_point)).toBeFalsy();
});

test('negative y cord is not a valid point', () => {
    var test_grid = [
        ["A", "A", "A"],
        ["A", "A", "A"],
        ["A", "A", "A"]
    ];
    starting_point = [0,0]
    point = [0,-1]

    expect(app.is_valid_adjacent_point(test_grid, point, starting_point)).toBeFalsy();
});

test('same cord is not a valid point', () => {
    var test_grid = [
        ["A", "A", "A"],
        ["A", "A", "A"],
        ["A", "A", "A"]
    ];
    starting_point = [0,0]
    point = [0,0]

    expect(app.is_valid_adjacent_point(test_grid, point, starting_point)).toBeFalsy();
});

test('x cord outside grid is not a valid point', () => {
    var test_grid = [
        ["A", "A", "A"],
        ["A", "A", "A"],
        ["A", "A", "A"]
    ];
    starting_point = [0,0]
    point = [3,0]

    expect(app.is_valid_adjacent_point(test_grid, point, starting_point)).toBeFalsy();
});

test('y cord outside grid is not a valid point', () => {
    var test_grid = [
        ["A", "A", "A"],
        ["A", "A", "A"],
        ["A", "A", "A"]
    ];
    starting_point = [0,0]
    point = [0,7]

    expect(app.is_valid_adjacent_point(test_grid, point, starting_point)).toBeFalsy();
});

test('valid point is a valid point', () => {
    var test_grid = [
        ["A", "A", "A"],
        ["A", "A", "A"],
        ["A", "A", "A"]
    ];
    starting_point = [0,0]
    point = [1,1]

    expect(app.is_valid_adjacent_point(test_grid, point, starting_point)).toBeTruthy();
});