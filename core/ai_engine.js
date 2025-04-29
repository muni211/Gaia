const AI = {
    respond: function(question) {
        let responses = {
            "מה מזג האוויר היום?": "🌤 קשה לומר, אבל כדאי לבדוק תחזית!",
            "איך אני בונה מערכת AI?": "🚀 למידה, קידוד, והתנסות – כך בונים את העתיד!",
            "מה השעה?": `⌚ השעה עכשיו היא ${new Date().toLocaleTimeString("he-IL")}.`,
            "מי יצר אותך?": "🔵 מוני ספרא בעזרת copilot"
        };

        return responses[question] || "🤖 אני עדיין לומד לענות על זה!";
    }
};