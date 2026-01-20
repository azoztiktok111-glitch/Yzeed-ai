let count = localStorage.getItem("tawaf") || 0;
count = parseInt(count);

const countEl = document.getElementById("count");
const statusEl = document.getElementById("status");

update();

function add() {
  if (count < 7) {
    count++;
    save();
  }
}

function remove() {
  if (count > 0) {
    count--;
    save();
  }
}

function reset() {
  count = 0;
  save();
}

function save() {
  localStorage.setItem("tawaf", count);
  update();
}

function update() {
  countEl.textContent = count;
  statusEl.textContent = count === 7 ? "✅ تم الطواف" : "متبقي: " + (7 - count);
}
