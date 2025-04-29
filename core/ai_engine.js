const AI = {
  analyze: function(inputText) {
    return "🤖 תשובה חכמה: " + inputText.split("").reverse().join("");  // הופך את הטקסט לאחור לדוגמה
  }
};