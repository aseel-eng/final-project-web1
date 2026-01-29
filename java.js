
window.alert(" مرحبا بكم في عالم المشاريع ")
// رح تظهر في مكان اسم صفحة الويب وقت التنفيذ
// ظهرت كرسالة ترحيب للمستخدم

console.log(6+4)
// رح تظهر بالكونسول 10

// function supportProject(name){
//   alert("شكرًا لدعمك مشروع " + name);
// }



// دالة التحقق من نموذج التواصل
// function validateForm() {
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let message = document.getElementById("message").value;

//   if (name === ""  email === ""  message === "") {
//     alert("الرجاء تعبئة جميع الحقول");
//     return false;
//   }

//   if (!email.includes("@")) {
//     alert("الرجاء إدخال بريد إلكتروني صحيح");
//     return false;
//   }

//   alert("تم إرسال الرسالة بنجاح، شكرًا لتواصلك معنا 🌸");
//   console.log("تم إرسال النموذج");
//   return true;





// function supportProject(projectName) {
//   alert("شكرًا لدعمك مشروع " + projectName + " ❤️");
//   console.log("تم دعم مشروع: " + projectName);
// }




// تغيير لون الزر عند المرور عليه
// function hoverButton(btn) {
//   btn.style.backgroundColor = "#1b12bf";
// }

// function outButton(btn) {
//   btn.style.backgroundColor = "#1109a3";
// }





// function validateForm() { ... }
// تتحقق من أن جميع الحقول ممتلئة.
// تتحقق من صحة البريد الإلكتروني.
// تمنع إرسال النموذج إذا كانت البيانات خاطئة.



// Dark Mode Toggle + حفظ الحالة
const darkBtn = document.getElementById("darkModeToggle");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark"); // يضيف أو يزيل الكلاس
  // حفظ الحالة في LocalStorage
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
});

// عند تحميل الصفحة، تحقق من LocalStorage
if(localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}


//  window.alert("تم إرسال الرسالة بنجاح، شكرًا لتواصلك معنا 🌸");
//   console.log("تم إرسال النموذج");
//   return true;