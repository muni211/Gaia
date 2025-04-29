const AI = {
    knowledgeBase: {},  // בסיס ידע ללמידת מכונה
    learn: function(question, answer) {
        this.knowledgeBase[question] = answer;  // שומר תשובות שניתנו
    },
    respond: function(question) {
        // אם יש תשובה קודמת לשאלה זו, החזר אותה
        if (this.knowledgeBase[question]) {
            return this.knowledgeBase[question];
        }
        return "🤖 אני עדיין לומד! רוצה ללמד אותי תשובה מתאימה?";
    }
};