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
async function fetchWikipediaSummary(query) {
    let url = `https://he.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
    
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data.extract || "🤖 לא נמצא מידע רלוונטי.";
    } catch (error) {
        return "⚠️ הייתה בעיה בגישה למידע.";
    }
}

const AI = {
    knowledgeBase: {}, 
    learn: function(question, answer) {
        this.knowledgeBase[question] = answer;
    },
    async respond(question) {
        if (this.knowledgeBase[question]) {
            return this.knowledgeBase[question];
        }
        return await fetchWikipediaSummary(question);
    }
};