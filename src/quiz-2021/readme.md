<div dir="rtl">

#### در حل سوالات به موارد زیر توجه کنید

۱. توجه کنید که نام هر فایل باید با نام نوشته شده در بالای تابع یکی باشد. برای نمونه در مثال ۱، نام فایل را `is-balance.js` بگذارید.
۲. بعد از کامل شدن تابع در هر سوال، حتما تابع را با دستور `export default` خروجی بگیرید. توجه شود اگه این تغیر را انجام ندهید، در مسیر تصحیح سوالات از روند محاسبه حذف خواهید شد. برای خروجی گرفتن تابع کافی است دستور `export default` را به اول تابع خود اضافه کنید برای نمونه در سوال ۱ پس از اتمام توسعه کافی است تعریف تابع را به حالت زیر در آوردید. نیازی به تغییر هیچ چیز دیگری نیست.

<div dir="ltr">
 
```javascript
export default function  isBalance(input) {
```
  
</div>
  
۳. برای اطمینان از صحت تابع، حتما تابع تکمیل شده را با ورودی های مختلف تست کنید.
​ ۴. در ورودی توابع نیازی به کنترل صحت ورودی‌ها نیست مگر به صورت مشخص ذکر شده باشد.
برای مثال در سوال ۱ نیازی نیست بررسی شود آیا ورودی از جنس string است. نیازی به بررسی خطا‌های احتمالی در صورتی که ذکر نشدند نیز وجود ندارد.

۵. تمام فایل‌های خروجی رو باید در یک repository گیت قرار دهید. توجه شود که در این قسمت هیچ محدودیتی وجود ندارد. در نهایت آدرس repository خود را به ما ارسال خواهید کرد.
۶. به همراه لینک ارسالی لطفا شبکه‌ی اجتماعی مورد‌علاقه خود را که در لیست زیر موجود است را برای ما ارسال کنید.

- instagram
- twitter
- clubhouse
- هیچکدام

---

### ۱. بالانس تعمیم یافته

رشته‌ای بالانس است که در آن هر پرانتز که باز شده، متناظرا بسته شده باشد. برای مثال ‍‍`()` و `()(())` هر دو رشته‌های بالانس هستند اما رشته `)` و رشته `(()` هیچکدام بالانس نیستند. در بالانس تعمیم یافته علاوه بر پرانتز باید آکولاد `{}` و براکت `[]` نیز بالانس باشند.
برای مثال `[{()}]` و `[]{}()` رشته‌های بالانس هستند اما رشته `}[{}]` بالانس نیست

در این سوال باید تابعی بنویسید که یک رشته به عنوان ورودی می گیرد و می گوید این رشته بالانس تعمیم یافته هست یا خیر.

<div dir="ltr">
```javascript
// file-name: is-balance.js
function isBalance(input) {
  let result = null;
  // Your code
  return result;
}
```
  </div>
  
- کارکتر‌های ورودی تنها شامل کارکتر‌های `{}()[]` خواهد بود.

---

### ۲. سوال چاپ ارقام

یک عدد در ورودی به شما داده خواهد شد، و شما باید رشته‌هایی را باز گردانید که به تعداد عدد ورودی در خروجی تکرار شده اند. برای مثال اگر عدد ورودی عدد 125 باشد شما باید به عنوان جواب object ای باز گردانید که هر رقم عدد ورودی در object خروجی موجود باشد، یعنی کلید‌های “1” ، “2” و “5” را داشته باشد. مقدار هر کلید باید برابر با تکرار همان کلید به اندازه خودش باشد. برای مثال برای کلید “5” باید ارزش “55555” را داشته باشد که برابر ۵ بار تکرار کارکتر “5” است.
پس برای عدد ورودی 125 انتظار object زیر را خواهیم داشت.

<div dir="ltr">
    
```javascript
{1: "1", 2: "22", 5: "55555"}
```

```javascript
// file-name: get-repeated-info.js
function getRepeatedInfo(number) {
  let result = null;
  // Your code
  return result;
}
```

</div>

- اعداد ورودی تنها اعداد موجود در لیست `123456789` خواهند بود.
- اگر عدد تکراری در عدد موجود بود همان عملیات را به ازای مشاهده عدد تکراری، تکرار می‌کنیم.
  برای مثال اگر یک عدد “5” دیگر در “125” موجود بود برای مثال “5125” یا “1525”، برای مشاهده “5” اول ۵ تکرار کارکتر 5 و برای مشاهده دومین “5”، ۵ تکرار دیگر کارکتر “5” به کلید “5” اضافه می‌کنیم. در نتیجه کلید “5” برابر ۱۰ بار تکرار کارکتر “5” خواهد بود.

---

### ۳. سوال رمزنگاری رشته‌ها

در این سوال از شما می خواهیم که یک روش رمزنگاری خاص را به تعداد خواسته شده روی یک رشته ورودی فراخونی کنید و حاصل رمزنگاری شده را به عنوان خروجی باز گردانید.
روش رمزنگاری: ابتدا حرف آخر رشته را به اول رشته جابه‌جا می‌کند و سپس تمامی حروف رشته را به حرف بعدی آن در الفبا تبدیل می‌کنند. برای مثال رشته “abz” را در نظر بگیرید. ابتدا حرف z را به ابتدای رشته منتقل می‌کنیم، پس رشته جدید برابر

“zab” خواهد بود. حال هر حرف را به حرف بعدی در رشته‌ی الفبا منتقل می‌کنیم. ` b => c`، `a => b` و `z => a`. در نتیجه رشته‌ی خروجی برابر ‍“abc” خوهد بود.

این خروجی یکبار تکرار الگوریتم رمزنگاری روی رشته ورودی است. وظیفه‌ی تابع رمزنگار این است که این عملیات را به تعداد خواسته شده روی رشته‌ی ورودی تکرار کند. برای مثال حاصل دوبار تکرار الگوریتم رمزنگار روی رشته ورودی “abz” برابر

“bcd” خواهد بود.

<div dir="ltr">
    
```javascript
// file-name: encoder.js
function encoder({ inputString, repeatCount }) {
  let result = null;
  // Your code
  return result;
}
```
  
</div>
  
- ورودی این تابع تنها حروف کوچک الفبای انگلیسی خواهد بود.

---

### ۴. سوال پاک کردن تکراری‌ها

تابعی بنویسید که یک رشته به عنوان ورودی گرفته و کاراکترهای تکراری پشت سرهم را پاک کرده و فقط یکی را نگه دارد. برای مثال اگر رشته “abbbbbbbbbccccd” را دریافت کردید باید خروجی “abcd” را باز گردانید.

<div dir="ltr">
  
```javascript
// file-name: remove-repetitive.js
function removerRepetitive(string) {
  let result = null;
  // Your code
  return result;
}
```
</div>

---

### ۵. سوال اعمال تکریبی

در این سوال یک رشته متنی شامل برخی اعمال تعریف شده و اعداد صحیح به شما داده شده که هر کدام با فاصله از هم جدا شده‌اند. رشته مورد نظر علاوه بر اعداد صحیح شامل سه حرف “R”، “D” و “+” است.

تابع تعریف شده موظف است که با مشاهده هر گونه از ورودی حرکت متناظر بخصوصی انجام دهد و در نهایت مجموع عناصر آرایه موجود را باز گرداند.

- با مشاهده عدد صحیح آن را به آرایه اضافه کند
- با مشاهده حرف “D”: آخرین عنصر آرایه را دو برابر کرده و به آرایه اضافه کند. تضمین میشود آرایه حداقل یک عضو داشته باشد.
- با مشاهده حرف “R”: آخرین عنصر آرایه را حذف کند.تضمین میشود آرایه حداقل یک عضو داشته باشد.
- با مشاهده کاراکتر “+”: دو عنصر آخر آرایه را با هم جمع کند و نتیجه را به آرایه اضافه کند.تضمین میشود آرایه حداقل دو عضو داشته باشد.

<div dir="ltr">
  
```javascript
ops = "-2 5 D + R";
// [-2]
// [-2, 5]
// [-2, 5, 10]
// [-2, 5, 10, 15]
// [-2, 5, 10]
// 13
```
  
```javascript
// file-name: operations.js
function operations(ops) {
  let result = null;
  // Your code
  return result;
}
```
    
</div>
---

### ۶. مشاعره

یک تابع بنویسید که بتواند با گرفتن یک بیت به عنوان ورودی، شعر متناسب برای مشاعره را باز گرداند.

- شعر شما باید با حرفی آغاز شود که شعر ورودی پایان یافته.

- مجموعه ابیات خود را به صورت دلخواه و از [مثنویات، تمثیلات و مقطعات، دیوان اشعار پروین اعتصامی](https://ganjoor.net/parvin/divanp/mtm) انتخاب کنید.

- در ابتدا و انتهای اشعار شما نباید فاصله اضافی وجود داشته باشد.

- مجموعه ابیات شما باید حداقل ۱۰ حرف از زبان فارسی را پوشش دهند (یعنی حداقل برای ۱۰ حرف مجزا شعر جداگانه انتخاب کرده باشید) .

- میتوانید برای همزه و هر نوع تلفظی از الف، یک بیت که با الف شروع می‌شود باز گردانید.

- در صورتی که برای حرف آخر بیت پاسخی آماده نداشتید، می‌توانید از حرف آخر مصرع استفاده کنید. توجه کنید که دو مصرع با فاصله از هم جدا شده‌اند. در صورتی که برای حرف آخر مصرع هم پاسخی نداشتید، می‌توانید null باز گردانید.

<div dir="ltr">

```javascript
// file-name: poetry.js
function poetry(verse) {
  let result = null;
  // Your code
  return null;
}
```

</div>
