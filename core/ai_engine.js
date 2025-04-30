// מערכת AI עם בסיס ידע ולמידת מכונה עמוקה
const AI = {
    knowledgeBase: {},  
    
    learn: function(question, answer) {
        this.knowledgeBase[question] = answer;  // שמירת תשובות ללמידה עמוקה
    },
    
    async respond(question) {
        // בדיקה אם קיימת תשובה בבסיס הידע
        if (this.knowledgeBase[question]) {
            return this.knowledgeBase[question];
        }

        // אם אין תשובה – חפש באינטרנט ושמור את המידע
        let answer = await fetchInternetSearch(question);
        this.learn(question, answer); // AI לומד לעתיד
        return answer;
    }
};

// פונקציה לחיפוש מידע באינטרנט
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

// בדיקת תגובת הכפתורים
window.onload = function() {
    // חיבור כפתורי חיפוש מידע
    document.getElementById("searchButton1").addEventListener("click", function() {
        alert("🔎 חיפוש מידע 1 נלחץ!");
    });

    document.getElementById("searchButton2").addEventListener("click", function() {
        alert("🔎 חיפוש מידע 2 נלחץ!");
    });

    document.getElementById("searchButton3").addEventListener("click", function() {
        alert("🔎 חיפוש מידע 3 נלחץ!");
    });

    // חיבור כפתור "שלח" לבדיקת תגובה
    document.getElementById("askButton").addEventListener("click", function() {
        alert("🚀 הכפתור 'שלח' נלחץ!");
    });

    // חיבור כפתור "שלח" לחיפוש בבסיס ידע או באינטרנט
    document.getElementById("askButton").addEventListener("click", async function() {
        let question = document.getElementById("user-question").value;
        let answer = await AI.respond(question);
        document.getElementById("answer").innerText = answer;
    });
};