# 🎯 Static Frontend (React + Git Workflow + CI/CD)

این پروژه برای تمرین کار با git، شاخه‌ها، conflict و استقرار خودکار در GitHub Pages ایجاد شده است.

---

## 📂 آدرس GitHub Page:
🔗 https://github.com/aminpt/Software_Engineering_Lab1

---

## ✳️ ساختار شاخه‌ها

| Branch | Purpose |
|--------|----------|
| main | نسخه‌ی پایدار - protected |
| dev | شاخه‌ی توسعه‌ی اصلی |
| feature | ایجاد رابط کاربری و افزودن ویژگی هایی برای راحتی کار |

---

## 📜 Commit Log (نمونه)

| Commit ID | Message | توضیح |
|------------|----------|--------|
| 627b710 | all source files added | افزودن فایل های اصلی |
| 22dded8 | support the styling and clicking in TodoList.jsx | افزودن قابلیت حذف todo با کلیک بر روی آن |
| 106368a | remove Dw and add white block | خروجی ای به اشتباه به نام Dw اول todo ها وجود داشت و بجای آن یک بلاک سفید گذاشته شد |
| 16a85e3 | conflict resolved | در هنگام حذف کردن Dw از ابتدی todo ها یکی از ما بلاک سفید و دیگری خالی گذاشته بود که این conflict بر طرق شد و بلاک سفید گذاشته شد |

---

## ⚔️ Conflictها
در conflict اول امین پورتوانایی در شاخه ی dev فایل TodoList.jsx را تغییر داده بود و Dw آن را حذف کرده بود و داود کارشکی در شاخه ی feature فایل TodoList.jsx را تغییر داده بود و به جای Dw از بلاک سفید استفاده کرده بود. بعد از merge شدن شاخه ی dev در main تغییرات داود کارشکی، با conflict رو به رو شد. 

در conflict دوم همین اتفاق برای فایل App.css رخ داد و تغییر هم‌زمان رنگ background سبب ایجاد conflict شد.
---


