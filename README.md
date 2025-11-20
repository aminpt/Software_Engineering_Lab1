# 🎯 Static Frontend (React + Git Workflow + CI/CD)

این پروژه برای تمرین کار با **`git`**، شاخه‌ها، **`conflict`** و استقرار خودکار در **`GitHub Pages`** ایجاد شده است.


## 📂 آدرس GitHub Page:
🔗 https://github.com/aminpt/Software_Engineering_Lab1


## ساختار شاخه‌ها

<table dir="rtl" style="width:100%; text-align:right;">
    <thead>
        <tr>
            <th style="width:30%; text-align:right;">Branch</th>
            <th style="width:70%; text-align:right;">Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align:right;">main</td>
            <td style="text-align:right;">نسخه‌ی پایدار - protected</td>
        </tr>
        <tr>
            <td style="text-align:right;">dev</td>
            <td style="text-align:right;">شاخه‌ی توسعه‌ی اصلی</td>
        </tr>
        <tr>
            <td style="text-align:right;">feature</td>
            <td style="text-align:right;">ایجاد رابط کاربری و افزودن ویژگی هایی برای راحتی کار</td>
        </tr>
    </tbody>
</table>

## 📜 Commit Log (نمونه)

<table dir="rtl" style="width:100%; text-align:right;">
    <thead>
        <tr>
            <th style="width:20%; text-align:right;">Commit ID</th>
            <th style="width:40%; text-align:right;">Message</th>
            <th style="width:40%; text-align:right;">توضیح</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align:right;">627b710</td>
            <td style="text-align:right;">all source files added</td>
            <td style="text-align:right;">افزودن فایل های اصلی</td>
        </tr>
        <tr>
            <td style="text-align:right;">22dded8</td>
            <td style="text-align:right;">support the styling and clicking in TodoList.jsx</td>
            <td style="text-align:right;">افزودن قابلیت حذف todo با کلیک بر روی آن</td>
        </tr>
        <tr>
            <td style="text-align:right;">106368a</td>
            <td style="text-align:right;">remove Dw and add white block</td>
            <td style="text-align:right;">خروجی ای به اشتباه به نام Dw اول todo ها وجود داشت و بجای آن یک بلاک سفید گذاشته شد</td>
        </tr>
        <tr>
            <td style="text-align:right;">16a85e3</td>
            <td style="text-align:right;">conflict resolved</td>
            <td style="text-align:right;">در هنگام حذف کردن Dw از ابتدی todo ها یکی از ما بلاک سفید و دیگری خالی گذاشته بود که این conflict بر طرق شد و بلاک سفید گذاشته شد</td>
        </tr>
    </tbody>
</table>

## Conflicts

در **`conflict`** اول، امین پورتوانایی در شاخه‌ی **`dev`** فایل **`TodoList.jsx`** را تغییر داده بود و **`Dw`** آن را حذف کرده بود و داود کارشکی در شاخه‌ی **`feature`** فایل **`TodoList.jsx`** را تغییر داده بود و به جای **`Dw`** از بلاک سفید استفاده کرده بود. بعد از **`merge`** شدن شاخه‌ی **`dev`** در **`main`** تغییرات داود کارشکی، با **`conflict`** رو به رو شد. 

در **`conflict`** دوم همین اتفاق برای فایل **`App.css`** رخ داد و تغییر هم‌زمان رنگ **`background`** سبب ایجاد **`conflict`** شد.


## ⚙️ GitHub Actions

در این مرحله برای خودکارسازی فرایند **`build`** و استقرار پروژه، پوشه‌ی **`.github/workflows`** ساخته شد و فایل **`deploy.yml`** در آن قرار گرفت تا مراحل نصب **`Node.js`**، **`build`** پروژه و انتشار خروجی در شاخه‌ی **`gh-pages`** را انجام دهد. این **`workflow`** به‌گونه‌ای تنظیم شد که پس از هر **`merge`** به شاخه‌ی **`main`** به‌صورت خودکار اجرا شود. همچنین مقدار **`base`** در فایل **`vite.config.js`** برابر با نام ریپازیتوری قرار داده شد تا **`GitHub Pages`** مسیر را درست تشخیص دهد و تنظیمات در بخش **`Pages`** روی شاخه‌ی **`gh-pages`** انجام شد تا نسخه‌ی جدید سایت به‌صورت خودکار در آدرس **`GitHub Pages`** منتشر گردد.

قابل دسترس در این لینک: https://aminpt.github.io/Software_Engineering_Lab1/

## پرسش ها

###  پوشه‌ی **`.git`**

<div dir="rtl">
پوشه‌ای است که تمام metadata نسخه‌ی پروژه را ذخیره می‌کند:

- تاریخچه commit ها (درون objectها و refs)

- تنظیمات remote

- staging area (index)

- و فایل HEAD برای اشاره به branch جاری  
با دستور git init ساخته می‌شود.
</div>

### Atomic Commit / Pull Request

یعنی هر **`commit`** یا **`PR`** باید یک تغییر مستقل و کامل باشد که شکست نیمه‌کار ندارد.  
مثلا «افزودن یک قابلیت» یا «رفع یک باگ خاص» نه ترکیب چندین مورد نامرتبط.


### تفاوت‌های fetch, pull, merge, rebase, cherry-pick

<table dir="rtl" style="width:100%; text-align:right;">
    <thead>
        <tr>
            <th style="width:20%; text-align:right;">دستور</th>
            <th style="width:50%; text-align:right;">توضیح</th>
            <th style="width:30%; text-align:right;">نتیجه</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align:right;">fetch</td>
            <td style="text-align:right;">فقط تغییرات remote را در local می‌آورد، merge نمی‌کند</td>
            <td style="text-align:right;">آپدیت remotes</td>
        </tr>
        <tr>
            <td style="text-align:right;">pull</td>
            <td style="text-align:right;">= fetch + merge</td>
            <td style="text-align:right;">همگام‌سازی شاخه با remote</td>
        </tr>
        <tr>
            <td style="text-align:right;">merge</td>
            <td style="text-align:right;">ادغام دو شاخه و تاریخچه مجزا را حفظ می‌کند</td>
            <td style="text-align:right;">merge commit</td>
        </tr>
        <tr>
            <td style="text-align:right;">rebase</td>
            <td style="text-align:right;">انتقال commitها روی شاخه‌ی مقصد (tidiest history)</td>
            <td style="text-align:right;">تاریخچه‌ی خطی</td>
        </tr>
        <tr>
            <td style="text-align:right;">cherry-pick</td>
            <td style="text-align:right;">یک commit خاص را از شاخه‌ای دیگر اعمال می‌کند</td>
            <td style="text-align:right;">commit تکی منتقل می‌شود</td>
        </tr>
    </tbody>
</table>


### تفاوت‌های reset, revert, restore, switch, checkout

<table dir="rtl" style="width:100%; text-align:right;">
    <thead>
        <tr>
            <th style="width:30%; text-align:right;">دستور</th>
            <th style="width:70%; text-align:right;">کارکرد</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align:right;">reset</td>
            <td style="text-align:right;">تاریخچه‌ی commit را به قبلی برمی‌گرداند (تغییر HEAD)</td>
        </tr>
        <tr>
            <td style="text-align:right;">revert</td>
            <td style="text-align:right;">commit معکوس می‌سازد (تاریخچه حفظ می‌شود)</td>
        </tr>
        <tr>
            <td style="text-align:right;">restore</td>
            <td style="text-align:right;">برای بازگردانی فایل‌ها در working directory/stage</td>
        </tr>
        <tr>
            <td style="text-align:right;">switch</td>
            <td style="text-align:right;">برای تغییر branch (نسخه مدرن‌تر نسبت به checkout)</td>
        </tr>
        <tr>
            <td style="text-align:right;">checkout</td>
            <td style="text-align:right;">کاربرد چندمنظوره: تغییر branch یا بازیابی فایل‌ها</td>
        </tr>
    </tbody>
</table>


### Stage یا Index

بخشی موقتی بین **`working directory`** و **`commit`** است که فایل‌های آماده‌ی **`commit`** در آن قرار می‌گیرند.  
دستور **`git add`** فایل را به **`stage`** می‌برد.  
دستور **`git stash`** تغییرات فعلی را موقتا ذخیره می‌کند تا پوشه تمیز شود.



### Snapshot

هر **`commit`** در **`git`**، یک **`snapshot`** (عکس کامل وضعیت فایل‌ها) از پروژه است؛  
**`commit`**ها به صورت زنجیره‌وار (**`hash chain`**) نگهداری می‌شوند.



### Local vs Remote Repository

<table dir="rtl" style="width:100%; text-align:right;">
    <thead>
        <tr>
            <th style="width:20%; text-align:right;">نوع</th>
            <th style="width:40%; text-align:right;">محل ذخیره</th>
            <th style="width:40%; text-align:right;">توضیح</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align:right;">Local</td>
            <td style="text-align:right;">سیستم توسعه‌دهنده</td>
            <td style="text-align:right;">روی دستگاه توسعه تست و commit انجام می‌شود</td>
        </tr>
        <tr>
            <td style="text-align:right;">Remote</td>
            <td style="text-align:right;">روی سرور GitHub یا GitLab</td>
            <td style="text-align:right;">مخزن مرکزی برای همکاری و هم‌گام‌سازی تغییرات</td>
        </tr>
    </tbody>
</table>
</div>