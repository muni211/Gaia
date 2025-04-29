const AI = {
    respond: function(question) {
        // תשובות חכמות על שאלות נפוצות
        let responses = {
            "מה מזג האוויר היום?": "🌤 קשה לומר, אבל כדאי לבדוק בתחזית!",
            "איך אני בונה מערכת AI?": "🚀 למידה, קידוד, והתנסות – כך בונים את העתיד!",
            "מה השעה?": `⌚ השעה עכשיו היא ${new Date().toLocaleTimeString("he-IL")}.`,
            "מי יצר אותך?": "🔵 אני פותח על ידי Microsoft כ-Copilot, כדי לעזור למשתמשים!"
        };

        // בדיקה אם קיימת תשובה מוכנה
        if (responses[question]) {
            return responses[question];
        } else {
            return "🤖 אני עדיין לומד לענות על שאלות חדשות!";
        }
    }
};