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
async function fetchInternetSearch(query) {
    let url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=AIzaSyAyzs2DrDKWB7IrFx9VPWUgMOPbzdFOWrU&cx=a16ea2a3c680c408c`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        return data.items ? data.items[0].snippet : "🤖 לא נמצא מידע רלוונטי.";
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
        return await fetchInternetSearch(question);
    }
};
async function fetchInternetSearch(query) {
    let url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=AIzaSyAyzs2DrDKWB7IrFx9VPWUgMOPbzdFOWrU&cx=a16ea2a3c680c408c`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        return data.items ? `${data.items[0].snippet} 🌐 [קרא עוד](${data.items[0].link})` : "🤖 לא נמצא מידע רלוונטי.";
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
        return await fetchInternetSearch(question);
    }
};
document.getElementById("searchButton").addEventListener("click", function() {
    console.log("🔎 הכפתור נלחץ!");
});
document.getElementById("searchButton").addEventListener("click", async function() {
    let query = document.getElementById("user-question").value; // קבלת השאלה שהמשתמש הכניס
    let result = await fetchInternetSearch(query); // חיפוש באינטרנט
    document.getElementById("answer").innerText = result; // הצגת התוצאה
});document.getElementById("searchButton").addEventListener("click", function() {
    document.getElementById("answer").innerText = "🔎 הכפתור עובד!";
});alert("✅ קובץ JavaScript נטען בהצלחה!");