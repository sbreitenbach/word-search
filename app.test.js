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
