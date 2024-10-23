// انتخاب کاراکتر
const character = document.getElementById("character");

// تنظیم انیمیشن Idle (حرکت بالا و پایین آرام زمانی که کاراکتر بی‌حرکت است)
gsap.to(character, {
  y: -10,
  repeat: -1,
  yoyo: true,
  duration: 1
});

// تابع برای حرکت دادن کاراکتر
function moveCharacter(x, y) {
  // توقف انیمیشن Idle هنگام حرکت
  gsap.killTweensOf(character);

  // انیمیشن حرکت کاراکتر به موقعیت جدید
  gsap.to(character, {
    x: x - character.offsetWidth / 2,
    y: y - character.offsetHeight / 2,
    duration: 1,
    onComplete: function() {
      // بازگشت به انیمیشن Idle بعد از حرکت
      gsap.to(character, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 1
      });
    }
  });
}

// گوش دادن به کلیک روی صفحه بازی و حرکت کاراکتر به موقعیت کلیک شده
document.getElementById("game-board").addEventListener("click", function(event) {
  const x = event.clientX;
  const y = event.clientY;
  moveCharacter(x, y);
});
