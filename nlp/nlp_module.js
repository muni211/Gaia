const NLP = {
    process: function(text) {
        // ניתוח סמנטי: פילוח המשפט למילים והסרת מילים חסרות חשיבות
        let stopWords = ["את", "האם", "של", "על", "זה", "עם"];
        let words = text.split(" ").filter(word => !stopWords.includes(word.toLowerCase()));
        return words.join(" ");
    }
};