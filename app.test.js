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
    var starting_point = [0,0]
    var point = [-1,0]

    expect(app.is_valid_adjacent_point(test_grid, point, starting_point)).toBeFalsy();
});

test('negative y cord is not a valid point', () => {
    var test_grid = [
        ["A", "A", "A"],
        ["A", "A", "A"],
        ["A", "A", "A"]
    ];
    var starting_point = [0,0]
    var point = [0,-1]

    expect(app.is_valid_adjacent_point(test_grid, point, starting_point)).toBeFalsy();
});

test('same cord is not a valid point', () => {
    var test_grid = [
        ["A", "A", "A"],
        ["A", "A", "A"],
        ["A", "A", "A"]
    ];
    var starting_point = [0,0]
    var point = [0,0]

    expect(app.is_valid_adjacent_point(test_grid, point, starting_point)).toBeFalsy();
});

test('x cord outside grid is not a valid point', () => {
    var test_grid = [
        ["A", "A", "A"],
        ["A", "A", "A"],
        ["A", "A", "A"]
    ];
    var starting_point = [0,0]
    var point = [3,0]

    expect(app.is_valid_adjacent_point(test_grid, point, starting_point)).toBeFalsy();
});

test('y cord outside grid is not a valid point', () => {
    var test_grid = [
        ["A", "A", "A"],
        ["A", "A", "A"],
        ["A", "A", "A"]
    ];
    var starting_point = [0,0]
    var point = [0,7]

    expect(app.is_valid_adjacent_point(test_grid, point, starting_point)).toBeFalsy();
});

test('valid point is a valid point', () => {
    var test_grid = [
        ["A", "A", "A"],
        ["A", "A", "A"],
        ["A", "A", "A"]
    ];
    var starting_point = [0,0]
    var point = [1,1]

    expect(app.is_valid_adjacent_point(test_grid, point, starting_point)).toBeTruthy();
});

test('valid next point with correct letter is a match', () => {
    var test_grid = [
        ["A", "B"],
        ["C", "D"]
    ];
    var current_point = [0,0]
    var next_point = [1,1]
    var letter = "D"

    expect(app.next_point_is_match(current_point, next_point, letter, test_grid)).toBeTruthy();
});

test('valid next point with wrong letter is not a match', () => {
    var test_grid = [
        ["A", "B"],
        ["C", "D"]
    ];
    var current_point = [0,0]
    var next_point = [1,1]
    var letter = "C"

    expect(app.next_point_is_match(current_point, next_point, letter, test_grid)).toBeFalsy();
});

test('not valid next point is not a match', () => {
    var test_grid = [
        ["A", "B"],
        ["C", "D"]
    ];
    var current_point = [0,0]
    var next_point = [2,2]
    var letter = "D"

    expect(app.next_point_is_match(current_point, next_point, letter, test_grid)).toBeFalsy();
});

test('find adjacent points', () => {
    var test_grid = [
        ["A", "B"],
        ["C", "D"]
    ];
    var starting_point = [0,0]

    expect(app.find_adjacent_points(test_grid,starting_point)).toEqual([[0,1],[1,0],[1,1]]);
});

test('find adjacent points', () => {
    var previous_point = [0,0]
    var current_point = [1,1]

    expect(app.find_next_point_to_try(previous_point,current_point)).toEqual([2,2]);
});