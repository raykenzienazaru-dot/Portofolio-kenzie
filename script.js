const DATA = {
  profile: {
    name: "Kenzie",
    role: "Exploring R&D and IoT Technologies",
    location: "Jakarta, Indonesia",
    email: "raykenzienazaru@gmail.com",
    brand: "kenzie.dev",
    heroDesc:
      "Saya membuat proyek Arduino,esp32 dan eksperimen IoT, sambil mendokumentasikan perkembangan skill dan riset yang saya pelajari.",
    quickTags: ["Arduino", "Esp32", "IoT", "Embedded", "Sensor" ,"KTI", "Prototyping"],
    socials: [
      { label: "GitHub", url: "https://github.com/raykenzienazaru-dot" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/raykenzie-nazaru-fathurrahmansyah-774548387?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { label: "Instagram", url: "https://www.instagram.com/zieneru_?igsh=MXIyYnVndDM3Z3c1Yw==" }
    ],
    stats: [
      { num: "4+", lbl: "Proyek Arduino" },
      { num: "10+", lbl: "Sensor/Module dipakai" },
      { num: "5", lbl: "Tema riset utama" },
      { num: "Fast", lbl: "Dokumentasi rapi" }
    ]
  },

  about: {
    text: `
      <div class="box-title">Ringkasan diri</div>
      <p>
        Perkenalkan, saya <b>${"Kenzie"}</b>. Saya fokus membuat prototipe berbasis Arduino/Esp32
        (sensor, kontrol, otomasi) dan mendokumentasikan perkembangan riset saya Lalu saya juga menyukai dan sering Membuat KTI.
        Target saya adalah membangun portofolio yang mudah dipahami: <b>tujuan → komponen → cara kerja → hasil</b>.
      </p>
      <div class="chips" style="margin-top:12px">
        ${["Problem Solving","Dokumentasi", "Berbasis AI logic","Uji coba bertahap","Iterasi desain"].map(ch => `<span class="chip">${ch}</span>`).join("")}
      </div>
    `,
    focusHtml: `
      <div class="box-title">Fokus</div>
      <ul style="margin:0; padding-left:18px; color:var(--muted); line-height:1.9">
        <li>Arduino dan ESP32</li>
        <li>Sensor & aktuator (DHT, LDR, relay, servo, dll.)</li>
        <li>IoT dasar</li>
        <li>Riset kecil & dokumentasi</li>
        <li>Karya Tulis Ilmiah</li>
         <li>Pengembangan AI logic</li>
      </ul>
    `
  },

  skills: {
    main: ["Arduino IDE", "C/C++ dasar", "Serial Monitor", "Wiring & Breadboard", "Sensor reading", "Relay/Servo control", "Analisis Data", "Research Skills" ,"Inovasi", "Authentication & ACL" ,"IoT System Design"],
    learning: ["ESP32 ", "MQTT", "Kalibrasi sensor", "PCB basic", "Data logging", "MQTT Broker", "Real-time Monitoring"]
  },

  // INI BAGIAN PROYEK ARDUINO KAMU: isi nama alat/proyek sesuai yang kamu mau
  projects: [
    {
      name: "Sistem IoT Gas Effectiveness Tawas",
      image: "images/Sistem IoT Gas Effectiveness Tawas.png",
      type: "Esp32",
      summary: "Sistem IoT Gas Effectiveness Tawas adalah sistem berbasis Internet of Things dan AI analisis yang digunakan untuk memantau dan menganalisis efektivitas penggunaan tawas dalam mengendalikan atau menetralkan gas tertentu di suatu lingkungan secara real-time lalu menggunakan Tawas.",
      components: ["Esp32", "DHT22", "MQ135", "Servo"],
      features: ["Ambang batas", "Tampilan real-time", "Kalibrasi sederhana", "Website", "AI Analys"],
      demoUrl: "https://si-geta.vercel.app/",
      repoUrl: "https://si-geta.vercel.app/"
    },
    {
      name: "AIR.CEK",
      image: "images/AIR.CEK.png",
      type: "AI logic",
      summary: "Kami mengembangkan AIR.ai, sebuah website berbasis AI logic untuk menganalisis dan menentukan kelayakan kualitas air, khususnya berdasarkan nilai pH. Sistem ini membantu memantau kondisi air di sekolah dan fasilitas umum serta memberikan rekomendasi solusi jika kualitas air berada di luar standar.",
      components: ["AI Logic", "Website", "Domain", "IoT (opsional)"],
      features: ["Chat Bot", "Analisis air", "Indikator Bahaya, Waspada"],
      demoUrl: "https://www.aircek.site/",
      repoUrl: "https://www.aircek.site/"
    },
    {
      name: "SOFIA",
      image: "images/SOFIA.png",
      type: "Esp32",
      summary: "Kami memperkenalkan SOFIA, sebuah sistem cerdas berbasis IoT, website monitoring, dan AI logic yang memantau dan menganalisis kondisi lingkungan, keamanan, dan potensi bahaya secara real-time. Sistem ini mendukung pengelolaan fasilitas kantor yang lebih efisien, aman, dan berbasis data melalui pengambilan keputusan yang cepat dan akurat.",
      components: ["Esp32", "PIR", "DHT22", "MQ135", "FLEM", "Ultrasonic"],
      features: ["Analisis Kebakaran", "Peringatan dini", "Monitor Jarak Jauh", "Analisis Tindakan Mencurigakan DLL"],
      demoUrl: "https://sofia-lime.vercel.app/",
      repoUrl: "https://sofia-lime.vercel.app/"
    },
    {
      name: "SIGEMA",
      image: "images/SIGEMA.png",
      type: "Esp32",
      summary: "SIGEMA adalah lemari pintar berbasis IoT yang memantau kelembapan secara real-time menggunakan DHT22 dan ESP32, serta memberikan peringatan melalui buzzer dan website saat silica gel jenuh untuk mencegah kerusakan dokumen dan perangkat akibat korosi dan oksidasi, Disini saya sebagai Penulis.",
      components: ["Esp32", "OLED", "DHT22", "Silical gel"],
      features: ["Minotoring"],
      demoUrl: "https://si-gema.vercel.app/#mitra",
      repoUrl: "https://si-gema.vercel.app/#mitra"
    },
    {
      name: "BALAP-SA",
      image: "images/BALAPSA.png",
      type: "Lingkungan",
      summary: "Kami mengembangkan BALAP-SA (Bantal Alam Alami Pemanfaatan Serabut Kelapa), sebuah produk inovatif berbasis pemanfaatan bahan alami dan prinsip keberlanjutan untuk menghasilkan bantal ramah lingkungan. Sistem pengembangan ini berfokus pada pengolahan serabut kelapa sebagai bahan utama yang melalui proses seleksi, pengeringan, dan perancangan struktur agar menghasilkan bantal yang nyaman, sehat, dan bernilai guna.",
      components: ["Serabut Kelapa", "Kayu manis", "Sarung bantal"],
      features: ["Bantal Alami"],
      demoUrl: "files/BALAP-SA.pdf",
      repoUrl: "files/BALAP-SA.pdf"
    }
  ],

  // RISET / PERKEMBANGAN SKILL: isi seperti jurnal belajar
  research: [
    {
      date: "2024-7",
      title: "BALAP-SA",
      note:
        "Kami mengembangkan BALAP-SA (Bantal Alam Alami Pemanfaatan Serabut Kelapa), sebuah produk inovatif berbasis pemanfaatan bahan alami dan prinsip keberlanjutan untuk menghasilkan bantal ramah lingkungan. Sistem pengembangan ini berfokus pada pengolahan serabut kelapa sebagai bahan utama yang melalui proses seleksi, pengeringan, dan perancangan struktur agar menghasilkan bantal yang nyaman, sehat, dan bernilai guna.",
        ktiUrl: "files/BALAP-SA.pdf"
    },
    {
      date: "2025-07",
      title: "SIGEMA",
      note:
        "SIGEMA adalah lemari pintar berbasis IoT yang memantau kelembapan secara real-time menggunakan DHT22 dan ESP32, serta memberikan peringatan melalui buzzer dan website saat silica gel jenuh untuk mencegah kerusakan dokumen dan perangkat akibat korosi dan oksidasi.",
        ktiUrl: "files/SIGEMA_FIXED.pdf"
    },
    {
      date: "2025-8",
      title: "LUMINA",
      note:
        "LUMINA adalah aplikasi manajemen makan berbasis IoT yang mendukung pembayaran cashless dan validasi keamanan QR + Face Recognition, menghubungkan sistem fisik dan digital. Sistem ini memberikan layanan yang praktis dan modern bagi pengguna serta membantu penyedia meningkatkan keamanan, kualitas, dan efisiensi operasional.",
        ktiUrl: "files/LUMINA.pdf"
    },
    {
      date: "2025-11",
      title: "SIGETA",
      note:
        "Kami mengembangkan SIGETA, sistem berbasis IoT untuk memantau bau dan kelembapan serta mengendalikan efektivitas larutan tawas dan serai sebagai penghilang bau alami di kamar mandi. Sistem ini membantu menjaga kualitas udara di rumah, sekolah, dan fasilitas umum secara lebih bersih dan terkendali.",
        ktiUrl: "files/SIGETA (2).pdf"
    },
    {
      date: "2025-12",
      title: "AIR.CEK",
      note:
        "Kami mengembangkan AIR.ai, sebuah website berbasis AI logic untuk menganalisis dan menentukan kelayakan kualitas air, khususnya berdasarkan nilai pH. Sistem ini membantu memantau kondisi air di sekolah dan fasilitas umum serta memberikan rekomendasi solusi jika kualitas air berada di luar standar.",
        ktiUrl: "files/AIR.CEK.pdf"
    },
    {
      date: "2026-01",
      title: "SOFIA",
      note:
        "SOFIA adalah sistem berbasis IoT, website monitoring, dan AI yang memantau dan menganalisis lingkungan, keamanan, dan potensi bahaya secara real-time. Sistem ini membantu pengelolaan fasilitas kantor yang lebih efisien, aman, dan berbasis data melalui keputusan yang cepat dan akurat.",
        ktiUrl: "files/SOFIA KTI.pdf"
    }
    
  ]
};

/* ---------- Helpers ---------- */
const $ = (id) => document.getElementById(id);
const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (m) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[m]));

function renderChips(container, items, asLinks = false){
  container.innerHTML = items.map(it => {
    if(asLinks) return `<a class="chip" href="${escapeHtml(it.url)}" target="_blank" rel="noreferrer">${escapeHtml(it.label)}</a>`;
    return `<span class="chip">${escapeHtml(it)}</span>`;
  }).join("");
}

function renderStats(container, stats){
  container.innerHTML = stats.map(s => `
    <div class="stat">
      <div class="num">${escapeHtml(s.num)}</div>
      <div class="lbl">${escapeHtml(s.lbl)}</div>
    </div>
  `).join("");
}

function renderProjects(container, projects){
  container.innerHTML = projects.map(p => `
    <article class="project">

   <img 
  class="card-img" 
  src="${escapeHtml(p.image)}" 
  alt="${escapeHtml(p.name)}"
  onerror="this.onerror=null; this.src='images/placeholder.png';"
>


      <div class="project-top">
        <h3>${escapeHtml(p.name)}</h3>
        <span class="pill">${escapeHtml(p.type)}</span>
      </div>

      <p>${escapeHtml(p.summary)}</p>

      <div class="meta">
        <span class="kv"><b>Komponen:</b> ${escapeHtml(p.components.join(", "))}</span>
        <span class="kv"><b>Fitur:</b> ${escapeHtml(p.features.join(", "))}</span>
      </div>

      <div class="links">
        <a class="link" href="${escapeHtml(p.demoUrl)}" target="_blank">Demo/Video</a>
        <a class="link" href="${escapeHtml(p.repoUrl)}" target="_blank">Repo</a>
      </div>
    </article>
  `).join("");
}


function renderResearch(container, items){
  container.innerHTML = items.map(it => `
    <div class="t-item">
      <div class="t-top">
        <div class="t-date">${escapeHtml(it.date)}</div>
        <div class="chip">Riset</div>
      </div>

      <h3>${escapeHtml(it.title)}</h3>
      <p>${escapeHtml(it.note)}</p>

      <!-- LINK KTI -->
      ${it.ktiUrl ? `
        <div class="research-links">
          <a class="link" href="${escapeHtml(it.ktiUrl)}#view=FitH" target="_blank" rel="noreferrer">
            Buka KTI
          </a>
        </div>
      ` : ``}
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- INIT DATA ---------- */
  const p = DATA.profile;
  const safe = (id) => document.getElementById(id);

  if (safe("brandName")) safe("brandName").textContent = p.brand;
  if (safe("yourName")) safe("yourName").textContent = p.name;
  if (safe("profileName")) safe("profileName").textContent = p.name;
  if (safe("footerName")) safe("footerName").textContent = p.name;

  if (safe("yourRole")) safe("yourRole").textContent = p.role;
  if (safe("heroDesc")) safe("heroDesc").textContent = p.heroDesc;
  if (safe("profileMeta"))
    safe("profileMeta").textContent = `${p.location} • ${p.email}`;

  // GitHub button
  const gh = p.socials.find(s => s.label.toLowerCase().includes("github"));
  if (gh && safe("githubBtn")) safe("githubBtn").href = gh.url;

  if (safe("quickTags")) renderChips(safe("quickTags"), p.quickTags);
  if (safe("socialLinks")) renderChips(safe("socialLinks"), p.socials, true);
  if (safe("stats")) renderStats(safe("stats"), p.stats);

  if (safe("aboutBox"))
  safe("aboutBox").innerHTML =
    DATA.about.text.replace(/\$\{\s*"Nama Kamu"\s*\}/g, escapeHtml(p.name));

  if (safe("focusBox"))
    safe("focusBox").innerHTML = DATA.about.focusHtml;

  if (safe("skillsMain"))
    renderChips(safe("skillsMain"), DATA.skills.main);

  if (safe("skillsLearning"))
    renderChips(safe("skillsLearning"), DATA.skills.learning);

  if (safe("projectsGrid"))
    renderProjects(safe("projectsGrid"), DATA.projects);

  if (safe("researchTimeline"))
    renderResearch(safe("researchTimeline"), DATA.research);

  if (safe("year"))
    safe("year").textContent = new Date().getFullYear();

  const toggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    toggle.classList.toggle("active");
  });

  const links = navLinks.querySelectorAll("a");
  if (links) {
    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        toggle.classList.remove("active");
      });
    });
  }

  window.addEventListener("scroll", () => {
    navLinks.classList.remove("active");
    toggle.classList.remove("active");
  });
}

});