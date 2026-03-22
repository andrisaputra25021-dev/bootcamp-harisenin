// realtime
const waktuTerkini = document.getElementById("waktu-terkini");

function updateWaktu() {
  const hariIni = new Date();

  const detail = {
    day: "numeric",
    weekday: "long",
    month: "long",
    year: "numeric",
  };
  waktuTerkini.innerText = hariIni.toLocaleDateString("id-ID", detail);
}
updateWaktu();
setInterval(updateWaktu, 1000);

// data global
let data = [];

// DOM elemen
const form = document.getElementById("form-tugas");
const isiInput = document.getElementById("input-tugas");
const tanggal = document.getElementById("tanggal");
const level = document.getElementById("level");

const daftarTugasBaru = document.getElementById("daftar-tugas");
const daftarTugasSelesai = document.getElementById("daftar-selesai");
const daftarTugasTerlewat = document.getElementById("daftar-terlewat");

const buttonHapusListBaru = document.getElementById("hapus-daftarBaru");
const buttonHapusListSelesai = document.getElementById("hapus-daftarSelesai");
const buttonHapusListTerlewat = document.getElementById("hapus-daftarTerlewat");

// submit data
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tugasBaru = {
    id: Date.now(),
    text: isiInput.value.trim(),
    date: tanggal.value,
    level: level.value,
    isDone: false,
  };

  data.push(tugasBaru);
  renderTugas(data);
});

// render data
function renderTugas(data) {
  daftarTugasBaru.innerHTML = "";
  daftarTugasSelesai.innerHTML = "";
  daftarTugasTerlewat.innerHTML = "";

  data.forEach((item) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.isDone;

    checkbox.addEventListener("change", () => {
      item.isDone = !item.isDone;
      renderTugas(data);
    });

    const text = document.createElement("span");
    text.innerHTML = `<strong>${item.text}</strong><br>
    <small>${item.date}</small>`;

    const label = document.createElement("small");
    label.textContent = item.level;
    label.classList.add(item.level.toLowerCase());

    if (item.isDone) {
      text.style.textDecoration = "line-through";
    }

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    deleteButton.addEventListener("click", () => {
      hapusTugas(item.id);
    });

    text.appendChild(label);
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteButton);

    if (isOverdue(item)) {
      daftarTugasTerlewat.appendChild(li);
    } else if (item.isDone) {
      daftarTugasSelesai.appendChild(li);
    } else {
      daftarTugasBaru.appendChild(li);
    }
  });
  ruangKosong(daftarTugasBaru);
  ruangKosong(daftarTugasSelesai);
  ruangKosong(daftarTugasTerlewat);

  buttonHapusListBaru.hidden = daftarTugasBaru.children.length <= 1;
  buttonHapusListSelesai.hidden = daftarTugasSelesai.children.length <= 1;
  buttonHapusListTerlewat.hidden = daftarTugasTerlewat.children.length <= 1;
}

function ruangKosong(ulElement) {
  const wording = ulElement.previousElementSibling;

  if (ulElement.children.length === 0) {
    wording.style.display = "flex";
  } else {
    wording.style.display = "none";
  }
}

// overdue
function isOverdue(item) {
  const hariIni = new Date();
  hariIni.setHours(0, 0, 0, 0);
  const tanggalTugas = new Date(item.date);
  tanggalTugas.setHours(0, 0, 0, 0);

  return hariIni > tanggalTugas && !item.isDone;
}

// hapus satu tugas
function hapusTugas(id) {
  data = data.filter((item) => item.id !== id);
  renderTugas(data);
}

// hapus semua tugas
buttonHapusListBaru.addEventListener("click", () => {
  data = data.filter((item) => item.isDone || isOverdue(item));
  renderTugas(data);
});

buttonHapusListSelesai.addEventListener("click", () => {
  data = data.filter((item) => !item.isDone);
  renderTugas(data);
});

buttonHapusListTerlewat.addEventListener("click", () => {
  data = data.filter((item) => !isOverdue(item));
  renderTugas(data);
});
