function generateNumbers() {
    var numbers = [];
    for (var i = 0; i < 6; i++) {
      numbers.push(Math.floor(Math.random() * 49) + 1);
    }
    return numbers;
  }
  