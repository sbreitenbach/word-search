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
  for (var j in word){
      var letter = word[j]
      console.log(letter)
  }
};
