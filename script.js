const locationEl = document.getElementById("location");
const prayerIds = ["Fajr","Dhuhr","Asr","Maghrib","Isha"];

const saved = JSON.parse(localStorage.getItem("prayerTimes"));
if (saved) showTimes(saved, "📴 بدون إنترنت");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, fail);
} else {
  locationEl.textContent = "❌ جهازك لا يدعم تحديد الموقع";
}

function success(pos) {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;

  fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=4`)
    .then(r => r.json())
    .then(data => {
      const times = data.data.timings;
      localStorage.setItem("prayerTimes", JSON.stringify(times));
      showTimes(times, "📍 حسب موقعك");
    });
}

function fail() {
  locationEl.textContent = "📴 بدون إنترنت";
}

function showTimes(times, msg) {
  locationEl.textContent = msg;
  prayerIds.forEach(p => {
    document.getElementById(p).textContent = times[p];
  });
}
