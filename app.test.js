const search_grid_for_start = require('./app');

test('finds initial grid', () => {
    var test_grid = [
        ["F", "E", "L", "L"],
        ["E", "U", "I", "H"],
        ["I", "J", "N", "L"],
        ["M", "K", "O", "P"]
    ];
    var test_letter = "H"

    expect(search_grid_for_start(test_grid, test_letter)).toStrictEqual([["1", "3"]]);
});