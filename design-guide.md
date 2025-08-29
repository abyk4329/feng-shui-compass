# 🎨 מדריך עיצוב - מצפן פנג שואי
## Design Guide - Feng Shui Compass

---

## 🌈 פלטת הצבעים (Color Palette)

```css
:root {
  --cinna: #CFB3A9;      /* ורוד פודרה עדין */
  --creme: #8B7355;      /* חום קרמי עמוק */
  --froth: #F1EEEB;      /* לבן שמנת */
  --latte: #A09086;      /* חום לאטה */
  --chai: #E4D8CB;       /* בז' חאי */
  --gold: #F7E7CE;       /* זהב שמפניה */
  --muted: var(--latte); /* צבע מושתק */
}
```

---

## 📝 פונטים (Fonts)

```css
/* פונט ראשי - עברית ואנגלית */
@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&display=swap');

/* פונט דקורטיבי - חתימות ונוי */
@import url('https://fonts.googleapis.com/css2?family=Hello+Paris+Script&display=swap');

/* שימוש בפונטים */
font-family: 'Assistant', sans-serif;        /* לטקסט רגיל */
font-family: 'Hello Paris Script', cursive;  /* לחתימות ונוי */
```

---

## 🎯 כללי שימוש בצבעים (Color Usage Guidelines)

### רקעים (Backgrounds)
```css
/* רקע ראשי - גרדיאנט */
background: linear-gradient(180deg, var(--froth) 0%, var(--chai) 60%);

/* רקע משני - קופסאות */
background: rgba(255,255,255,0.8);

/* רקע נקי */
background: var(--froth);
```

### טקסטים (Text Colors)
```css
/* כותרות ראשיות */
color: var(--creme);
font-weight: 700;

/* טקסט רגיל */
color: var(--latte);
font-weight: 400;

/* טקסט משני */
color: var(--chai);
font-weight: 500;
```

### כפתורים (Buttons)
```css
/* כפתור ראשי */
background: var(--gold);
color: #2b2b2b;
font-weight: 600;

/* כפתור משני */
background: var(--muted);
color: #fff;
font-weight: 500;

/* כפתור טוב (חיובי) */
background: var(--gold);
color: #2b2b2b;
border: 2px solid #d4af37;
box-shadow: 0 2px 8px rgba(247, 231, 206, 0.3);

/* כפתור רע (שלילי) */
background: var(--cinna);
color: #fff;
border: 2px solid #b8948a;
box-shadow: 0 2px 8px rgba(207, 179, 169, 0.3);
```

---

## 🔄 סכמת צבעים לסטטוסים (Status Color Scheme)

```css
/* חיובי/טוב */
.good, .positive, .success {
  background: var(--gold);
  color: #2b2b2b;
}

/* שלילי/רע */
.bad, .negative, .error {
  background: var(--cinna);
  color: #fff;
}

/* נייטרלי */
.neutral, .default {
  background: rgba(255,255,255,0.9);
  color: var(--creme);
}
```

---

## 📱 עיצוב רספונסיבי (Responsive Design)

```css
/* מובייל */
@media (max-width: 420px) {
  font-size: 14px;
  padding: 12px;
}

/* טאבלט */
@media (max-width: 820px) {
  font-size: 16px;
  padding: 16px;
}

/* דסקטופ */
@media (min-width: 821px) {
  font-size: 18px;
  padding: 20px;
}
```

---

## 🎨 אלמנטים נפוצים (Common Elements)

### קופסאות תוכן (Content Boxes)
```css
.content-box {
  background: rgba(255,255,255,0.8);
  border-radius: 16px;
  padding: 28px;
  margin: 18px 0;
  border: 1px solid rgba(0,0,0,0.03);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
```

### כותרות (Headings)
```css
h1 {
  font-size: 28px;
  color: var(--creme);
  font-weight: 700;
  font-family: 'Assistant', sans-serif;
}

h2 {
  font-size: 20px;
  color: var(--chai);
  font-weight: 600;
}

h3 {
  font-size: 16px;
  color: var(--creme);
  font-weight: 600;
}
```

### טפסים (Forms)
```css
input, select, textarea {
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.06);
  background: #fff;
  color: var(--muted);
  font-size: 15px;
  font-family: 'Assistant', sans-serif;
}

label {
  display: block;
  margin-bottom: 6px;
  color: var(--creme);
  font-weight: 500;
}
```

---

## ✨ אפקטים ואנימציות (Effects & Animations)

```css
/* הצללות עדינות */
box-shadow: 0 2px 8px rgba(0,0,0,0.1);
box-shadow: 0 4px 12px rgba(0,0,0,0.15);
box-shadow: 0 8px 24px rgba(0,0,0,0.2);

/* מעברים חלקים */
transition: all 0.3s ease;

/* הובר אפקטים */
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}
```

---

## 📋 דוגמה מלאה לקומפוננט (Full Component Example)

```css
.example-card {
  background: rgba(255,255,255,0.8);
  border-radius: 16px;
  padding: 24px;
  margin: 16px 0;
  border: 1px solid rgba(0,0,0,0.03);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  font-family: 'Assistant', sans-serif;
}

.example-card h3 {
  color: var(--creme);
  font-weight: 600;
  margin-bottom: 12px;
}

.example-card p {
  color: var(--latte);
  line-height: 1.6;
  margin-bottom: 16px;
}

.example-card .button {
  background: var(--gold);
  color: #2b2b2b;
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.example-card .button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(247, 231, 206, 0.4);
}
```

---

## 🌐 התאמות RTL (עברית) - RTL Adjustments

```css
body {
  direction: rtl;
  text-align: right;
}

/* התאמות RTL */
.rtl-content {
  text-align: right;
  direction: rtl;
}
```

---

## 🎯 טיפים לשימוש (Usage Tips)

### 1. **היררכיית צבעים (Color Hierarchy)**
- `var(--creme)` - לכותרות ראשיות
- `var(--latte)` - לטקסט רגיל
- `var(--chai)` - לטקסט משני
- `var(--gold)` - לכפתורים חיוביים
- `var(--cinna)` - לכפתורים שליליים

### 2. **פלטת צבעים אורגנית (Organic Palette)**
- כל הצבעים מבוססים על גוונים טבעיים
- מתאימים לעיצוב רגוע ומאוזן
- עובדים היטב עם טקסט שחור/לבן

### 3. **רספונסיביות (Responsiveness)**
- השתמש ביחידות `rem` או `%` לצורך גמישות
- הגדר breakpoints ברורים לכל מכשיר
- בדוק את העיצוב בכל גודל מסך

### 4. **נגישות (Accessibility)**
- וודא ניגודיות טובה בין טקסט לרקע
- השתמש ב-`rgba()` לשקיפויות
- הוסף `transition` למצבי hover

---

## 📁 קבצים נדרשים (Required Files)

לשימוש מלא בעיצוב זה, וודא שיש לך:

1. **Google Fonts** - Assistant & Hello Paris Script
2. **CSS Variables** - הגדר את כל המשתנים ב-`:root`
3. **RTL Support** - התאמות לכתיבה מימין לשמאל
4. **Responsive Breakpoints** - לפחות 3 breakpoints

---

## 🚀 שימוש מהיר (Quick Start)

העתק את הקוד הבא לתחילת קובץ ה-CSS שלך:

```css
@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Hello+Paris+Script&display=swap');

:root {
  --cinna: #CFB3A9;
  --creme: #8B7355;
  --froth: #F1EEEB;
  --latte: #A09086;
  --chai: #E4D8CB;
  --gold: #F7E7CE;
  --muted: var(--latte);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Assistant', sans-serif;
  background: linear-gradient(180deg, var(--froth) 0%, var(--chai) 60%);
  color: var(--latte);
  direction: rtl;
  text-align: center;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}
```

---

**עם המדריך הזה תוכלי ליצור כל עיצוב שתרצי עם בדיוק אותה אסתטיקה! 🎨✨**

**Created by:** Ksenia Chudnovskaya
**Date:** August 30, 2025
**Project:** Feng Shui Compass</content>
<parameter name="filePath">/Users/kseniachudnovskaya/Desktop/Feng Shui/design-guide.md
