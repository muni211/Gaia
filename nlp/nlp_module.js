// מודול NLP שעושה עיבוד טקסט בסיסי – לדוגמה, ממיר את הטקסט לאותיות גדולות
const NLP = {
  process: function(text) {
    return text.toUpperCase();
  }
};