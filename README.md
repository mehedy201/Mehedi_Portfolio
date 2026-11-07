# Mehedi — Portfolio (Full-Stack & WordPress Developer)

কীভাবে চালাবেন: `index.html` ডাবল-ক্লিক করে ব্রাউজারে খুলুন (ইন্টারনেট লাগবে: ফন্ট, GSAP, Lenis ও আপনার ছবি অনলাইন থেকে আসে)।
লাইভ করতে পুরো ফোল্ডারটি যেকোনো হোস্টিং-এ (Netlify, Vercel, cPanel) আপলোড করুন।

## ফোল্ডার ও কোথায় কী আছে

| ফাইল | কী কাজ করে |
|---|---|
| `index.html` | পেজের লেখা ও কাঠামো। হিরো, About, Services, Process, Contact, Footer-এর লেখা এখানে বদলান |
| `css/settings.css` | **রঙ, ফন্ট, সাইজ** (হেডলাইন, আইকন, মেনু, ছবি) এক জায়গায় |
| `css/base.css` | রিসেট, সাধারণ বাটন |
| `css/navigation.css` | ওপরের বার, স্ক্রলে কাচের (liquid glass) বার, ফুল-স্ক্রিন মেনু |
| `css/hero.css` | প্রথম স্ক্রিন: অ্যানিমেটেড ব্যাকগ্রাউন্ড, ভাসমান আইকন, হিরো লেখা, Upwork/Freelancer ব্যাজ, ছবি, About |
| `css/marquee.css` | About-এর পরের অসীম লেখার স্লাইডার |
| `css/services.css` | লাল "Our Services" সেকশন |
| `css/work.css` | "Our Work": হোভারে খোলা সারি |
| `css/process.css` | "How I work": ৫ ধাপের টাইমলাইন |
| `css/reviews.css` | রিভিউ: গভীর নীলচে-সবুজ সেকশন, ব্যাজ, দুই সারির কার্ড |
| `css/contact.css`, `css/footer.css` | Contact সেকশন, ফুটার |
| `css/cursor.css` | কাস্টম কার্সার ও টেক্সটের ওপর কাচের লেন্স |
| `css/responsive.css` | ট্যাবলেট ও মোবাইলে প্রথম স্ক্রিনের সমন্বয় |
| `js/data.js` | **আপনার কনটেন্ট:** প্রজেক্ট, Upwork রিভিউ, স্লাইডারের লেখা |
| `js/config.js` | আচরণের সেটিং: আইকনের জায়গা, তারার সংখ্যা, গতি, দূরত্ব |
| `js/icons.js` | আসল ব্র্যান্ড লোগো (SVG) |
| `js/build.js` | ডাটা থেকে আইকন, প্রজেক্ট সারি, রিভিউ কার্ড ও ব্যাজ তৈরি করে |
| `js/menu.js` | মেনু খোলা-বন্ধ ও নরম স্ক্রল-লিংক |
| `js/work.js` | প্রজেক্ট সারি হোভার/ট্যাপে খোলার যুক্তি |
| `js/nav.js` | স্ক্রলে বারের কাচ আসা-যাওয়া, গাঢ় সেকশনে রঙ বদল |
| `js/cursor.js` | কার্সার, লেন্স, আইকন সরে যাওয়া |
| `js/hero.js` | প্রথম স্ক্রিনের শুরুর অ্যানিমেশন ও ঘুরন্ত হেডলাইন |
| `js/scene.js` | স্ক্রলে ছবি, ব্যাজ ও আইকনের চলাচল এবং About-এ আসা |
| `js/marquee.js`, `js/process.js`, `js/reveals.js` | স্লাইডার, প্রসেস টাইমলাইন ও বাকি সেকশনের স্ক্রল-অ্যানিমেশন |
| `js/main.js` | সব কিছু সঠিক ক্রমে চালু করে (বদলানোর দরকার নেই) |
| `images/` | প্রজেক্টের স্ক্রিনশট ও ছবির বিকল্প কপি (`photo.webp`) |

## সাধারণ পরিবর্তন
- **রিভিউ বসান:** `js/data.js`-এর `REVIEWS` তালিকায় `text`, `author`, `job`, `rating` লিখুন।
- **নতুন প্রজেক্ট:** `PROJECTS`-এর একটি ব্লক কপি করে বদলান, ছবি `images/` ফোল্ডারে রাখুন। Dream Records-এর লিংক পেলে `url:"#"` বদলান।
- **রঙ:** `css/settings.css`।
- **ইমেইল, ফোন, WhatsApp:** `index.html`-এ Contact ও Footer অংশ।

## ছবি (About)
ছবি GitHub-এর লিংক থেকে আসে। দ্রুত লোডের জন্য একবার ডাউনলোড করে `images/photo.jpg` নামে রাখুন এবং `index.html`-এর `<img src="...">` বদলে `images/photo.jpg` করুন। লিংক কাজ না করলে `images/photo.webp` দেখায়।

## লাইভ করার আগে
Upwork রিভিউ বসান, Dream Records-এর লিংক দিন, `<title>` ও meta description যোগ করুন, Lighthouse চালান, আসল ফোনে (iPhone/Android) ও Safari-তে দেখুন। লেন্সের জুম শুধু Chrome ও Edge-এ কাজ করে।
