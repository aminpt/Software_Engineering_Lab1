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


## پرسش ها

###  پوشه‌ی .git
پوشه‌ای است که تمام متادیتای نسخه‌ی پروژه را ذخیره می‌کند:
- تاریخچه commitها (درون objectها و refs)
- تنظیمات remote
- staging area (index)
- و فایل HEAD برای اشاره به branch جاری  
با دستور git init ساخته می‌شود.

---

### Atomic Commit / Pull Request
یعنی هر commit یا PR باید یک تغییر مستقل و کامل باشد که شکست نیمه‌کار ندارد.  
مثلا «افزودن یک قابلیت» یا «رفع یک باگ خاص» نه ترکیب چندین مورد نامرتبط.

---

### تفاوت‌های fetch, pull, merge, rebase, cherry-pick

| دستور | توضیح | نتیجه |
|-------|--------|--------|
| fetch | فقط تغییرات remote را در local می‌آورد، merge نمی‌کند | آپدیت remotes |
| pull | = fetch + merge | همگام‌سازی شاخه با remote |
| merge | ادغام دو شاخه و تاریخچه مجزا را حفظ می‌کند | merge commit |
| rebase | انتقال commitها روی شاخه‌ی مقصد (tidiest history) | تاریخچه‌ی خطی |
| cherry-pick | یک commit خاص را از شاخه‌ای دیگر اعمال می‌کند | commit تکی منتقل می‌شود |

---

### تفاوت‌های reset, revert, restore, switch, checkout

| دستور | کارکرد |
|-------|---------|
| reset | تاریخچه‌ی commit را به قبلی برمی‌گرداند (تغییر HEAD) |
| revert | commit معکوس می‌سازد (تاریخچه حفظ می‌شود) |
| restore | برای بازگردانی فایل‌ها در working directory/stage |
| switch | برای تغییر branch (نسخه مدرن‌تر نسبت به checkout) |
| checkout | کاربرد چندمنظوره: تغییر branch یا بازیابی فایل‌ها |

---

### Stage یا Index
بخشی موقتی بین working directory و commit است که فایل‌های آماده‌ی commit در آن قرار می‌گیرند.  
دستور git add فایل را به stage می‌برد.  
دستور git stash تغییرات فعلی را موقتا ذخیره می‌کند تا پوشه تمیز شود.

---

### Snapshot
هر commit در git، یک snapshot (عکس کامل وضعیت فایل‌ها) از پروژه است؛  
commitها به صورت زنجیره‌وار (hash chain) نگهداری می‌شوند.

---

### Local vs Remote Repository

| نوع | محل ذخیره | توضیح |
|------|------------|--------|
| Local | سیستم توسعه‌دهنده | روی دستگاه توسعه تست و commit انجام می‌شود |
| Remote | روی سرور GitHub یا GitLab | مخزن مرکزی برای همکاری و هم‌گام‌سازی تغییرات |

---