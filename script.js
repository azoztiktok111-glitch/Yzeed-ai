// إحداثيات مكة
const lat = 21.3891;
const lng = 39.8579;

// طريقة الحساب
const prayTimes = new PrayTimes('Makkah');

// التاريخ الحالي
const date = new Date();

// فرق التوقيت (السعودية)
const times = prayTimes.getTimes(date, [lat, lng], 3);

// عرض النتائج
document.getElementById("fajr").textContent = times.fajr;
document.getElementById("dhuhr").textContent = times.dhuhr;
document.getElementById("asr").textContent = times.asr;
document.getElementById("maghrib").textContent = times.maghrib;
document.getElementById("isha").textContent = times.isha;
