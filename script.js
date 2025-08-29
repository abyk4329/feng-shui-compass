// נתוני קואה עבור כל מספר
const kuaData = {
    1: {
        description: "קואה 1 — יסוד המים. אנשים בעלי אינטואיציה חזקה, רגישות רגשית ויכולת ליצור קשרים עמוקים. הם זורמים עם החיים, מתאימים לסביבות דינמיות ויוצרים הרמוניה. בעלי כישרון טבעי ליצירה, אמנות וטיפול באחרים. האנרגיה שלהם זורמת כמו מים - לפעמים רגועה, לפעמים סוערת, אבל תמיד מתחדשת.",
        personality: "אינטואיטיבי, רגיש, יצירתי, אמפתי, זורם",
        strengths: "יכולת אינטואיציה חזקה, יצירתיות, יכולת להבין רגשות של אחרים, גמישות מחשבתית",
        challenges: "רגישות יתר, קושי בקבלת החלטות, נטייה להימנע מקונפליקטים",
        career: "אמנות, טיפול, ייעוץ, כתיבה, מוזיקה, עבודה עם מים או נוזלים",
        goodDirections: ["דרום מזרח", "מזרח", "דרום", "צפון"],
        badDirections: ["דרום מערב", "צפון מערב", "צפון מזרח", "מערב"],
        directionEffects: {
            "דרום מזרח": "זוגיות והצלחה - מחזק קשרים רומנטיים, משפר יחסים חברתיים, מביא הזדמנויות עסקיות",
            "מזרח": "בריאות ומשפחה - תומך בבריאות כללית, מחזק קשרי משפחה, משפר אנרגיה פיזית",
            "דרום": "הצלחה והכרה - מביא הצלחה בקריירה, תהילה, הכרה ציבורית, מימוש שאיפות",
            "צפון": "קריירה וחוכמה - תומך בהתפתחות מקצועית, רכישת ידע, חוכמה פנימית"
        }
    },
    2: {
        description: "קואה 2 — יסוד האדמה. אנשים יציבים, תומכים ומחויבים שיוצרים בסיס איתן לחיים. הם מתחברים לטבע, אוהבים סדר ויציבות, ויש להם יכולת מיוחדת לתמוך באחרים. האנרגיה שלהם יציבה כמו אדמה - אמינה, נאמנה ומחזיקה את הכל יחד.",
        personality: "יציב, תומך, אמין, סבלני, מתחשב",
        strengths: "יכולת תמיכה באחרים, יציבות רגשית, יכולת ארגון, סבלנות, נאמנות",
        challenges: "קושי בביטוי רגשות, נטייה לשאת עול של אחרים, חשש משינויים",
        career: "חינוך, טיפול, ניהול, בנקאות, נדל״ן, עבודה עם אוכל או חקלאות",
        goodDirections: ["צפון מזרח", "מערב", "צפון מערב", "דרום מערב"],
        badDirections: ["מזרח", "דרום מזרח", "דרום", "צפון"],
        directionEffects: {
            "צפון מזרח": "ידע והשכלה - תומך בלמידה, השכלה, רכישת ידע חדש, התפתחות אינטלקטואלית",
            "מערב": "ילדים ויצירתיות - מחזק קשרים עם ילדים, מעודד יצירתיות, תומך בהורות",
            "צפון מערב": "נסיעות ותמיכה - מביא הזדמנויות לנסיעות, מחזק קשרים עם אנשים מבוגרים, תמיכה ממקורות חיצוניים",
            "דרום מערב": "אהבה וזוגיות - מחזק קשרים רומנטיים, יציבות רגשית, הרמוניה בבית"
        }
    },
    3: {
        description: "קואה 3 — יסוד העץ. אנשים יצירתיים, יזמיים ומלאי אנרגיה ששואפים לצמיחה מתמדת. הם בעלי חזון, נחישות ויכולת להפוך רעיונות למציאות. האנרגיה שלהם צומחת כמו עץ - כלפי מעלה, מתפשטת ומתחדשת ללא הרף.",
        personality: "יצירתי, יזמי, נחוש, חזוני, אנרגטי",
        strengths: "יצירתיות, יזמות, נחישות, יכולת חזון, אנרגיה חיובית",
        challenges: "חוסר סבלנות, נטייה להתפזר, קושי בריכוז ממושך",
        career: "עסקים, שיווק, אמנות, עיצוב, טכנולוגיה, יזמות",
        goodDirections: ["דרום", "צפון", "דרום מזרח", "מזרח"],
        badDirections: ["מערב", "צפון מערב", "דרום מערב", "צפון מזרח"],
        directionEffects: {
            "דרום": "הצלחה והכרה - מביא הצלחה בקריירה, תהילה, הכרה ציבורית, מימוש שאיפות",
            "צפון": "קריירה וחוכמה - תומך בהתפתחות מקצועית, רכישת ידע, חוכמה פנימית",
            "דרום מזרח": "זוגיות והצלחה - מחזק קשרים רומנטיים, משפר יחסים חברתיים, מביא הזדמנויות עסקיות",
            "מזרח": "בריאות ומשפחה - תומך בבריאות כללית, מחזק קשרי משפחה, משפר אנרגיה פיזית"
        }
    },
    4: {
        description: "קואה 4 — יסוד העץ הרוחני. אנשים רגישים, אמנותיים ורוחניים שמחוברים לעולם הרגשות והיצירה. הם בעלי יכולת עמוקה להבין את היופי בחיים ולהביע אותו. האנרגיה שלהם רכה וגמישה כמו עץ צעיר - מתפתחת לאט אבל בביטחון.",
        personality: "רגיש, אמנותי, רוחני, אינטואיטיבי, יצירתי",
        strengths: "רגישות רגשית, יכולת אמנותית, חיבור רוחני, הבנה עמוקה של יופי",
        challenges: "רגישות יתר, קושי בעולם המעשי, נטייה לבידוד",
        career: "אמנות, מוזיקה, כתיבה, ריפוי אלטרנטיבי, עיצוב, עבודה רוחנית",
        goodDirections: ["צפון", "דרום", "מזרח", "דרום מזרח"],
        badDirections: ["צפון מערב", "מערב", "צפון מזרח", "דרום מערב"],
        directionEffects: {
            "צפון": "קריירה וחוכמה - תומך בהתפתחות מקצועית, רכישת ידע, חוכמה פנימית",
            "דרום": "הצלחה והכרה - מביא הצלחה בקריירה, תהילה, הכרה ציבורית, מימוש שאיפות",
            "מזרח": "בריאות ומשפחה - תומך בבריאות כללית, מחזק קשרי משפחה, משפר אנרגיה פיזית",
            "דרום מזרח": "זוגיות והצלחה - מחזק קשרים רומנטיים, משפר יחסים חברתיים, מביא הזדמנויות עסקיות"
        }
    },
    6: {
        description: "קואה 6 — יסוד המתכת. אנשים בעלי כישורי מנהיגות טבעיים, סדר וארגון. הם מדויקים, אחראיים ומחפשים שלמות בכל דבר. האנרגיה שלהם חזקה ומובנית כמו מתכת - עמידה, יציבה ומבריקה.",
        personality: "מנהיג, מאורגן, מדויק, אחראי, מושלם",
        strengths: "כישורי מנהיגות, ארגון, דיוק, אחריות, יכולת השגת שלמות",
        challenges: "דרישות גבוהות מעצמם ומאחרים, קושי ברגשות, נוקשות",
        career: "מנהיגות, ניהול, משפטים, הנדסה, רפואה, בנקאות",
        goodDirections: ["מערב", "צפון מזרח", "דרום מערב", "צפון מערב"],
        badDirections: ["דרום מזרח", "מזרח", "צפון", "דרום"],
        directionEffects: {
            "מערב": "ילדים ויצירתיות - מחזק קשרים עם ילדים, מעודד יצירתיות, תומך בהורות",
            "צפון מזרח": "ידע והשכלה - תומך בלמידה, השכלה, רכישת ידע חדש, התפתחות אינטלקטואלית",
            "דרום מערב": "אהבה וזוגיות - מחזק קשרים רומנטיים, יציבות רגשית, הרמוניה בבית",
            "צפון מערב": "נסיעות ותמיכה - מביא הזדמנויות לנסיעות, מחזק קשרים עם אנשים מבוגרים, תמיכה ממקורות חיצוניים"
        }
    },
    7: {
        description: "קואה 7 — יסוד המתכת החברתי. אנשים כריזמטיים עם כישורי תקשורת מצוינים ויכולת ליצור קשרים. הם מושכים אנשים, יודעים להשפיע ולהוביל קבוצות. האנרגיה שלהם מבריקה ומשכנעת כמו מתכת מלוטשת.",
        personality: "כריזמטי, תקשורתי, מושך, משפיע, חברתי",
        strengths: "כישורי תקשורת, יכולת השפעה, כריזמה, יכולת מנהיגות קבוצתית",
        challenges: "צורך בתשומת לב, קושי בריכוז ממושך, תלות בדעת אחרים",
        career: "מכירות, שיווק, יחסי ציבור, פוליטיקה, הוראה, בידור",
        goodDirections: ["צפון מערב", "דרום מערב", "צפון מזרח", "מערב"],
        badDirections: ["מזרח", "דרום מזרח", "דרום", "צפון"],
        directionEffects: {
            "צפון מערב": "נסיעות ותמיכה - מביא הזדמנויות לנסיעות, מחזק קשרים עם אנשים מבוגרים, תמיכה ממקורות חיצוניים",
            "דרום מערב": "אהבה וזוגיות - מחזק קשרים רומנטיים, יציבות רגשית, הרמוניה בבית",
            "צפון מזרח": "ידע והשכלה - תומך בלמידה, השכלה, רכישת ידע חדש, התפתחות אינטלקטואלית",
            "מערב": "ילדים ויצירתיות - מחזק קשרים עם ילדים, מעודד יצירתיות, תומך בהורות"
        }
    },
    8: {
        description: "קואה 8 — יסוד האדמה השאפתני. אנשים מוכווני תוצאות, מעשיים ובעלי כושר ביצוע גבוה. הם יודעים לתכנן, לבנות ולהשיג מטרות. האנרגיה שלהם יציבה ומחזיקה כמו אדמה פורייה - תומכת בצמיחה ומפתחת פירות.",
        personality: "שאפתני, מעשי, מוכוון תוצאות, ביצועי, יציב",
        strengths: "כושר ביצוע, תכנון, התמדה, יכולת השגת מטרות, יציבות",
        challenges: "קושי ברגשות, נטייה לעבודה יתר, חוסר גמישות",
        career: "עסקים, ניהול, בנקאות, נדל״ן, יזמות, מקצועות טכניים",
        goodDirections: ["דרום מערב", "צפון מערב", "מערב", "צפון מזרח"],
        badDirections: ["דרום", "צפון", "דרום מזרח", "מזרח"],
        directionEffects: {
            "דרום מערב": "אהבה וזוגיות - מחזק קשרים רומנטיים, יציבות רגשית, הרמוניה בבית",
            "צפון מערב": "נסיעות ותמיכה - מביא הזדמנויות לנסיעות, מחזק קשרים עם אנשים מבוגרים, תמיכה ממקורות חיצוניים",
            "מערב": "ילדים ויצירתיות - מחזק קשרים עם ילדים, מעודד יצירתיות, תומך בהורות",
            "צפון מזרח": "ידע והשכלה - תומך בלמידה, השכלה, רכישת ידע חדש, התפתחות אינטלקטואלית"
        }
    },
    9: {
        description: "קואה 9 — יסוד האש. אנשים כריזמטיים, תשוקתיים ומלאי השראה שיודעים להדליק את האש באחרים. הם בעלי חזון, יכולת השפעה ומימוש עצמי. האנרגיה שלהם לוהטת ומעוררת כמו אש - מחממת, מאירה ומעוררת שינוי.",
        personality: "כריזמטי, תשוקתי, משפיע, חזוני, מעורר",
        strengths: "כריזמה, יכולת השפעה, חזון, תשוקה, יכולת מימוש עצמי",
        challenges: "חוסר סבלנות, נטייה לדרמה, קושי ברוגע",
        career: "מנהיגות, מוטיבציה, אמנות בימתית, שיווק, פוליטיקה, הוראה",
        goodDirections: ["מזרח", "דרום מזרח", "צפון", "דרום"],
        badDirections: ["דרום מערב", "צפון מזרח", "מערב", "צפון מערב"],
        directionEffects: {
            "מזרח": "בריאות ומשפחה - תומך בבריאות כללית, מחזק קשרי משפחה, משפר אנרגיה פיזית",
            "דרום מזרח": "זוגיות והצלחה - מחזק קשרים רומנטיים, משפר יחסים חברתיים, מביא הזדמנויות עסקיות",
            "צפון": "קריירה וחוכמה - תומך בהתפתחות מקצועית, רכישת ידע, חוכמה פנימית",
            "דרום": "הצלחה והכרה - מביא הצלחה בקריירה, תהילה, הכרה ציבורית, מימוש שאיפות"
        }
    }
};

// חישוב מספר קואה
function calculateKua(birthDate, gender) {
    const year = birthDate.getFullYear();
    
    // חישוב לפי השנה הסינית (אם הולדה לפני פברואר, מחסירים שנה)
    const chineseNewYear = getChineseNewYear(year);
    let chineseYear = year;
    if (birthDate < chineseNewYear) {
        chineseYear = year - 1;
    }
    
    // חישוב הקואה הנכון
    const lastTwoDigits = chineseYear % 100;
    let sum = Math.floor(lastTwoDigits / 10) + (lastTwoDigits % 10);
    
    // אם הסכום גדול מ-9, נחבר את הספרות שוב
    while (sum > 9) {
        sum = Math.floor(sum / 10) + (sum % 10);
    }
    
    let kuaNumber;
    
    if (gender === 'male') {
        // עבור גברים שנולדו אחרי 2000: 9 - sum
        // עבור גברים שנולדו לפני 2000: 10 - sum
        if (chineseYear >= 2000) {
            kuaNumber = 9 - sum;
            if (kuaNumber <= 0) kuaNumber += 9;
        } else {
            kuaNumber = 10 - sum;
            if (kuaNumber <= 0) kuaNumber += 9;
        }
    } else {
        // עבור נשים שנולדו אחרי 2000: 6 + sum
        // עבור נשים שנולדו לפני 2000: 5 + sum
        if (chineseYear >= 2000) {
            kuaNumber = 6 + sum;
            if (kuaNumber > 9) kuaNumber -= 9;
        } else {
            kuaNumber = 5 + sum;
            if (kuaNumber > 9) kuaNumber -= 9;
        }
    }
    
    // קואה 5 לא קיימת - מחליפים אותה
    if (kuaNumber === 5) {
        kuaNumber = gender === 'male' ? 2 : 8;
    }
    
    return kuaNumber;
}

// קבלת תאריך השנה החדשה הסינית (משוער)
function getChineseNewYear(year) {
    // תאריכים מדויקים יותר של השנה החדשה הסינית
    const dates = {
        1980: new Date(1980, 0, 23), 1981: new Date(1981, 1, 5), 1982: new Date(1982, 0, 25),
        1983: new Date(1983, 1, 13), 1984: new Date(1984, 1, 2), 1985: new Date(1985, 1, 20),
        1986: new Date(1986, 1, 9), 1987: new Date(1987, 0, 29), 1988: new Date(1988, 1, 17),
        1989: new Date(1989, 1, 6), 1990: new Date(1990, 0, 27), 1991: new Date(1991, 1, 15),
        1992: new Date(1992, 1, 4), 1993: new Date(1993, 1, 23), 1994: new Date(1994, 1, 10),
        1995: new Date(1995, 0, 29), 1996: new Date(1996, 1, 17), 1997: new Date(1997, 1, 7),
        1998: new Date(1998, 1, 26), 1999: new Date(1999, 1, 16), 2000: new Date(2000, 1, 5),
        2001: new Date(2001, 0, 24), 2002: new Date(2002, 1, 12), 2003: new Date(2003, 1, 1),
        2004: new Date(2004, 0, 22), 2005: new Date(2005, 1, 9), 2006: new Date(2006, 0, 29),
        2007: new Date(2007, 1, 18), 2008: new Date(2008, 1, 7), 2009: new Date(2009, 0, 26),
        2010: new Date(2010, 1, 14), 2011: new Date(2011, 1, 3), 2012: new Date(2012, 0, 23),
        2013: new Date(2013, 1, 10), 2014: new Date(2014, 0, 31), 2015: new Date(2015, 1, 19),
        2016: new Date(2016, 1, 8), 2017: new Date(2017, 0, 28), 2018: new Date(2018, 1, 16),
        2019: new Date(2019, 1, 5), 2020: new Date(2020, 0, 25), 2021: new Date(2021, 1, 12),
        2022: new Date(2022, 1, 1), 2023: new Date(2023, 0, 22), 2024: new Date(2024, 1, 10),
        2025: new Date(2025, 0, 29), 2026: new Date(2026, 1, 17), 2027: new Date(2027, 1, 6),
        2028: new Date(2028, 0, 26), 2029: new Date(2029, 1, 13), 2030: new Date(2030, 1, 3)
    };
    
    return dates[year] || new Date(year, 1, 4); // ברירת מחדל
}

// אלמנטים של הדום
const birthForm = document.getElementById('birth-form');
const kuaResultSection = document.getElementById('kua-result-section');
const compassSection = document.getElementById('compass-section');
const birthDateSection = document.getElementById('birth-date-section');
const kuaNumberElement = document.getElementById('kua-number');
const kuaDescription = document.getElementById('kua-description');
const goToCompassBtn = document.getElementById('go-to-compass');
const backToStartBtn = document.getElementById('back-to-start');
const goodDirectionsList = document.getElementById('good-directions-list');
const badDirectionsList = document.getElementById('bad-directions-list');
const formError = document.getElementById('form-error');

let currentKua = null;

// טיפול בטופס תאריך הלידה
birthForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const birthDateInput = document.getElementById('birth-date');
    const genderInput = document.getElementById('gender');
    
    if (!birthDateInput.value || !genderInput.value) {
        formError.textContent = 'אנא מלא/י את תאריך הלידה ובחר/י מין.';
        formError.style.display = 'block';
        return;
    } else {
        formError.textContent = '';
        formError.style.display = 'none';
    }
    
    const birthDate = new Date(birthDateInput.value);
    const gender = genderInput.value;
    
    // חישוב הקואה
    currentKua = calculateKua(birthDate, gender);
    
    // הצגת התוצאה
    showKuaResult(currentKua);
});

// הצגת תוצאת הקואה
function showKuaResult(kua) {
    const data = kuaData[kua];
    
    kuaNumberElement.textContent = kua;
    kuaDescription.textContent = data.description;
    
    // הצגת פרטים נוספים
    const personalityEl = document.getElementById('kua-personality');
    const strengthsEl = document.getElementById('kua-strengths');
    const challengesEl = document.getElementById('kua-challenges');
    const careerEl = document.getElementById('kua-career');
    
    if (personalityEl) personalityEl.textContent = data.personality || '';
    if (strengthsEl) strengthsEl.textContent = data.strengths || '';
    if (challengesEl) challengesEl.textContent = data.challenges || '';
    if (careerEl) careerEl.textContent = data.career || '';
    
    // מעבר לתוצאה
    switchSection(birthDateSection, kuaResultSection);
}

// מעבר למצפן
goToCompassBtn.addEventListener('click', function() {
    showCompass(currentKua);
});

// הצגת המצפן
function showCompass(kua) {
    const data = kuaData[kua];
    
    // עדכון הכיוונים במצפן
    updateCompassDirections(data);
    
    // עדכון משמעויות הכיוונים
    updateCompassMeanings(data);
    
    // עדכון רשימת הכיוונים
    updateDirectionsList(data);
    
    // מעבר למצפן
    switchSection(kuaResultSection, compassSection);
    
    // ברירת מחדל: הצבעה לכיוון הטוב הראשון
    setTimeout(() => {
        animateCompass(data.goodDirections[0]);
    }, 500);

    // הצעת הרשאה למצפן חי
    setupOrientationHandling();
}

// פונקציה לסיבוב המצפן והמחט
function animateCompass(primaryDirection) {
    const compass = document.getElementById('compass');
    const needle = document.getElementById('compass-needle');
    
    // סיבוב המצפן
    compass.classList.add('rotating');
    
    // חישוב זווית המחט לפי הכיוון הטוב הראשון
    const directionAngles = {
        'צפון': 0,
        'צפון מזרח': 45,
        'מזרח': 90,
        'דרום מזרח': 135,
        'דרום': 180,
        'דרום מערב': 225,
        'מערב': 270,
        'צפון מערב': 315
    };
    
    const angle = directionAngles[primaryDirection] || 0;
    
    setTimeout(() => {
        needle.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
        compass.classList.remove('rotating');
    }, 1000);
}

// הרשאות וחיבור למצפן אמיתי
function setupOrientationHandling() {
    const btn = document.getElementById('enable-orientation');
    const statusEl = document.getElementById('orientation-status');
    if (!btn) return;

    let orientationHandler = null;

    const onHeading = (event) => {
        const needle = document.getElementById('compass-needle');
        if (!needle) return;
        
        // שימוש ב-alpha (כיוון מגנטי) עם התאמה ל-RTL
        let heading = event.alpha || 0;
        
        // התאמה למגנטיות (אם יש webkitCompassHeading)
        if (event.webkitCompassHeading) {
            heading = event.webkitCompassHeading;
        }
        
        // סיבוב המחט - הפיכת הכיוון למעלות
        needle.style.transform = `translate(-50%, -100%) rotate(${360 - heading}deg)`;
    };

    const enableCompass = async () => {
        try {
            // בדיקה אם זה iOS שדורש הרשאה מפורשת
            if (typeof DeviceOrientationEvent !== 'undefined' && 
                typeof DeviceOrientationEvent.requestPermission === 'function') {
                
                const permission = await DeviceOrientationEvent.requestPermission();
                
                if (permission === 'granted') {
                    orientationHandler = onHeading;
                    window.addEventListener('deviceorientation', orientationHandler);
                    if (statusEl) statusEl.textContent = '🧭 מצפן חי פעיל - סובב את המכשיר';
                    btn.style.display = 'none';
                } else {
                    if (statusEl) statusEl.textContent = '❌ ההרשאה נדחתה';
                }
            } 
            // אנדרואיד ודפדפנים אחרים
            else if (typeof DeviceOrientationEvent !== 'undefined') {
                // בדיקה אם האירוע זמין
                const testHandler = (e) => {
                    if (e.alpha !== null || e.beta !== null || e.gamma !== null) {
                        window.removeEventListener('deviceorientation', testHandler);
                        orientationHandler = onHeading;
                        window.addEventListener('deviceorientation', orientationHandler);
                        if (statusEl) statusEl.textContent = '🧭 מצפן חי פעיל - סובב את המכשיר';
                        btn.style.display = 'none';
                    } else {
                        window.removeEventListener('deviceorientation', testHandler);
                        if (statusEl) statusEl.textContent = '❌ המכשיר לא תומך במצפן';
                    }
                };
                
                window.addEventListener('deviceorientation', testHandler);
                setTimeout(() => {
                    window.removeEventListener('deviceorientation', testHandler);
                    if (statusEl && statusEl.textContent === '') {
                        statusEl.textContent = '❌ המכשיר לא תומך במצפן';
                    }
                }, 2000);
            } else {
                if (statusEl) statusEl.textContent = '❌ הדפדפן לא תומך במצפן חי';
            }
        } catch (error) {
            console.error('Compass error:', error);
            if (statusEl) statusEl.textContent = '❌ שגיאה בהפעלת המצפן';
        }
    };

    btn.addEventListener('click', enableCompass);
}

// עדכון הכיוונים במצפן
function updateCompassDirections(data) {
    const directions = document.querySelectorAll('.direction');
    
    directions.forEach(direction => {
        const directionName = getHebrewDirection(direction.dataset.direction);
        
        // הסרת כל המחלקות הקיימות
        direction.classList.remove('good', 'bad', 'neutral');
        
        if (data.goodDirections.includes(directionName)) {
            direction.classList.add('good');
        } else if (data.badDirections.includes(directionName)) {
            direction.classList.add('bad');
        } else {
            direction.classList.add('neutral');
        }
    });
}

// עדכון משמעויות הכיוונים במצפן
function updateCompassMeanings(data) {
    const directionMappings = {
        'north': 'north-meaning',
        'northeast': 'northeast-meaning',
        'east': 'east-meaning',
        'southeast': 'southeast-meaning',
        'south': 'south-meaning',
        'southwest': 'southwest-meaning',
        'west': 'west-meaning',
        'northwest': 'northwest-meaning'
    };
    
    // מיפוי כיוונים עבריים לאנגליים
    const hebrewToEnglish = {
        'צפון': 'north',
        'צפון מזרח': 'northeast',
        'מזרח': 'east',
        'דרום מזרח': 'southeast',
        'דרום': 'south',
        'דרום מערב': 'southwest',
        'מערב': 'west',
        'צפון מערב': 'northwest'
    };
    
    // עדכון כל הכיוונים
    Object.keys(directionMappings).forEach(englishDir => {
        const elementId = directionMappings[englishDir];
        const element = document.getElementById(elementId);
        
        if (element) {
            // מציאת הכיוון העברי המתאים
            const hebrewDir = Object.keys(hebrewToEnglish).find(key => hebrewToEnglish[key] === englishDir);
            
            if (hebrewDir && data.directionEffects && data.directionEffects[hebrewDir]) {
                const effect = data.directionEffects[hebrewDir];
                // קיצור המשמעות להצגה במצפן
                const shortEffect = effect.split(' - ')[0];
                element.textContent = shortEffect;
            } else {
                element.textContent = '';
            }
        }
    });
}

// עדכון רשימות הכיוונים
function updateDirectionsList(data) {
    // כיוונים טובים
    goodDirectionsList.innerHTML = '';
    data.goodDirections.forEach(direction => {
        const li = document.createElement('li');
        const effect = data.directionEffects ? data.directionEffects[direction] : '';
        li.innerHTML = `<strong>${direction}</strong><br><small>${effect}</small>`;
        goodDirectionsList.appendChild(li);
    });
    
    // כיוונים רעים
    badDirectionsList.innerHTML = '';
    data.badDirections.forEach(direction => {
        const li = document.createElement('li');
        li.textContent = direction;
        badDirectionsList.appendChild(li);
    });
}

// המרת כיוון מאנגלית לעברית
function getHebrewDirection(englishDirection) {
    const translations = {
        'north': 'צפון',
        'northeast': 'צפון מזרח',
        'east': 'מזרח',
        'southeast': 'דרום מזרח',
        'south': 'דרום',
        'southwest': 'דרום מערב',
        'west': 'מערב',
        'northwest': 'צפון מערב'
    };
    
    return translations[englishDirection] || englishDirection;
}

// חזרה לתחילת
backToStartBtn.addEventListener('click', function() {
    // איפוס הטופס
    birthForm.reset();
    currentKua = null;
    
    // חזרה למסך הראשון
    compassSection.classList.remove('active');
    kuaResultSection.classList.remove('active');
    birthDateSection.classList.add('active');
    birthDateSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// פונקציית עזר למעבר חלק בין חלקים
function switchSection(fromEl, toEl) {
    if (fromEl) {
        fromEl.classList.remove('active');
    }
    if (toEl) {
        toEl.classList.add('active');
        toEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// הוספת אפקט לכיוונים במצפן - יותר עדין
document.addEventListener('DOMContentLoaded', function() {
    // אנימציה חלקה לעמידה
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});
