const DATA = {
  profile: {
    name: "Kenzie",
    role: "Riset Arduino, ESP32, dan IoT",
    location: "Jakarta, Indonesia",
    email: "raykenzienazaru@gmail.com",
    brand: "kenzie.dev",
    heroDesc:
      "Saya membuat proyek Arduino, ESP32, dan eksperimen IoT sambil mendokumentasikan perkembangan skill dan riset yang saya pelajari.",
    quickTags: ["Arduino", "ESP32", "IoT", "Embedded", "Sensor", "KTI", "Prototyping"],
    socials: [
      { label: "GitHub", url: "https://github.com/raykenzienazaru-dot" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/raykenzie-nazaru-fathurrahmansyah-774548387?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { label: "Instagram", url: "https://www.instagram.com/zieneru_?igsh=MXIyYnVndDM3Z3c1Yw==" }
    ],
    stats: [
      { num: "4+", lbl: "Proyek Arduino" },
      { num: "10+", lbl: "Sensor/Modul dipakai" },
      { num: "5", lbl: "Tema riset utama" },
      { num: "Fast", lbl: "Dokumentasi rapi" }
    ]
  },

  about: {
    text: `
      <div class="box-title">Ringkasan diri</div>
      <p>
        Perkenalkan, saya <b>${"Kenzie"}</b>. Saya fokus membuat prototipe berbasis Arduino/ESP32
        (sensor, kontrol, otomasi) dan mendokumentasikan perkembangan riset saya. Saya juga menyukai dan sering membuat KTI.
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
    learning: ["ESP32", "MQTT", "Kalibrasi sensor", "PCB basic", "Data logging", "MQTT Broker", "Real-time Monitoring"]
  },

  // INI BAGIAN PROYEK ARDUINO KAMU: isi nama alat/proyek sesuai yang kamu mau
  projects: [
    {
      name: "Sistem IoT Gas Effectiveness Tawas",
      image: "images/Sistem IoT Gas Effectiveness Tawas.png",
      type: "ESP32",
      summary: "Sistem IoT Gas Effectiveness Tawas adalah sistem berbasis Internet of Things dan AI analisis yang digunakan untuk memantau dan menganalisis efektivitas penggunaan tawas dalam mengendalikan atau menetralkan gas tertentu di suatu lingkungan secara real-time lalu menggunakan Tawas.",
      components: ["ESP32", "DHT22", "MQ135", "Servo"],
      features: ["Ambang batas", "Tampilan real-time", "Kalibrasi sederhana", "Website", "AI Analysis"],
      demoUrl: "https://si-geta.vercel.app/",
      repoUrl: "https://si-geta.vercel.app/"
    },
    {
      name: "AIR.CEK",
      image: "images/AIR.CEK.png",
      type: "AI Logic",
      summary: "Kami mengembangkan AIR.ai, sebuah website berbasis AI logic untuk menganalisis dan menentukan kelayakan kualitas air, khususnya berdasarkan nilai pH. Sistem ini membantu memantau kondisi air di sekolah dan fasilitas umum serta memberikan rekomendasi solusi jika kualitas air berada di luar standar.",
      components: ["AI Logic", "Website", "Domain", "IoT (opsional)"],
      features: ["Chat Bot", "Analisis air", "Indikator Bahaya, Waspada"],
      demoUrl: "https://www.aircek.site/",
      repoUrl: "https://www.aircek.site/"
    },
    {
      name: "SOFIA",
      image: "images/SOFIA.png",
      type: "ESP32",
      summary: "Kami memperkenalkan SOFIA, sebuah sistem cerdas berbasis IoT, website monitoring, dan AI logic yang memantau dan menganalisis kondisi lingkungan, keamanan, dan potensi bahaya secara real-time. Sistem ini mendukung pengelolaan fasilitas kantor yang lebih efisien, aman, dan berbasis data melalui pengambilan keputusan yang cepat dan akurat.",
      components: ["ESP32", "PIR", "DHT22", "MQ135", "FLEM", "Ultrasonic"],
      features: ["Analisis Kebakaran", "Peringatan dini", "Monitor Jarak Jauh", "Analisis Tindakan Mencurigakan DLL"],
      demoUrl: "https://sofia-lime.vercel.app/",
      repoUrl: "https://sofia-lime.vercel.app/"
    },
    {
      name: "GWS",
      image: "images/GWS.jpeg",
      type: "ESP32",
      summary: "Kami membuat GWS dan GWS adalah sistem berbasis Internet of Things (IoT), website monitoring, dan Artificial Intelligence (AI) yang memantau dan menganalisis kualitas air secara real-time. Sistem ini membantu klasifikasi kelayakan air, pelaporan masyarakat, serta mendukung pengelolaan sanitasi yang lebih efisien, akurat, dan berbasis data.",
      components: ["ESP32", "Sensor pH air"],
      features: ["Analisis kandungan air", "Peringatan dini", "Monitor Jarak Jauh", "Informasi solusi jika kualitas air buruk"],
      demoUrl: "files/GWS.pdf",
      demoLabel: "PDF"
    },
    {
        name: "SOFIA PEMUDA PELOPOR",
      image: "images/SOFIA.jpeg",
      type: "ESP32",
      summary: "Saya membuat SOFIA ini dan SOFIA adalah sistem berbasis Internet of Things (IoT), website monitoring, dan Artificial Intelligence (AI) yang memantau dan menganalisis kondisi gudang hasil panen secara real-time dan menggunakan telegram. Sistem ini membantu menjaga kualitas hasil panen, meningkatkan keamanan, serta memberikan notifikasi otomatis untuk mendukung pengelolaan yang lebih efisien dan berbasis data.",
      components: ["ESP32", "PIR", "DHT22", "MQ135", "FLEM", "Ultrasonic"],
      features: ["Analisis Kebakaran", "Peringatan dini", "Monitor Jarak Jauh", "Analisis Tindakan Mencurigakan DLL"],
      demoUrl: "https://sofia-ai.pages.dev/",
      repoUrl: "https://sofia-ai.pages.dev/"
    },
    {
      name: "SIGEMA",
      image: "images/SIGEMA.png",
      type: "ESP32",
      summary: "SIGEMA adalah lemari pintar berbasis IoT yang memantau kelembapan secara real-time menggunakan DHT22 dan ESP32, serta memberikan peringatan melalui buzzer dan website saat silica gel jenuh untuk mencegah kerusakan dokumen dan perangkat akibat korosi dan oksidasi, Disini saya sebagai Penulis.",
      components: ["ESP32", "OLED", "DHT22", "Silica gel"],
      features: ["Monitoring"],
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
      demoLabel: "PDF",
      repoUrl: "files/BALAP-SA.pdf"
    },
    {
      name: "Toko Novi",
      image: "images/UMKM.png",
      type: "UMKM",
      summary: "I developed this e-commerce website to support my parents' business by improving its digital promotion, marketing, and sales management. The platform allows customers to browse products and place orders online while helping business owners efficiently manage sales, customer data, and business reports through an integrated dashboard.",
      components: ["HTML", "CSS", "JavaScript", "SUPABASE"],
      features: ["ECOMMERCE", "DASHBOARD", "PAYMENT GATEWAY"],
      demoUrl: "https://tokonovi.vercel.app/",
      repoUrl: "https://github.com/raykenzienazaru-dot/TokoNovi"
    },
    {
      name: "SuperClean",
      image: "images/SUPERCLEAN.png",
      type: "Jasa Kebersihan",
      summary: "Developed a professional website for a home cleaning service business to enhance digital promotion, strengthen brand credibility, and attract potential customers. The platform showcases services, work portfolios, and customer information through a modern and responsive user interface. Built using HTML, CSS, and JavaScript with a focus on user experience, accessibility, and business growth.",
      components: ["HTML", "CSS", "JavaScript"],
      features: ["kebersihan rumah", "profesional", "terpercaya"],
      demoUrl: "https://superclean-fawn.vercel.app/",
      repoUrl: "https://github.com/raykenzienazaru-dot/cucicleane"
    }
    ,
    {
      name: "Golden Bolu",
      image: "images/BOLU.png",
      type: "UMKM",
      summary: "Developed a responsive business website for a local bakery and traditional cake business to strengthen digital marketing, increase brand visibility, and improve customer engagement. The platform showcases products, galleries, customer reviews, and contact information through a modern and user-friendly interface built with HTML, CSS, and JavaScript.",
      components: ["HTML", "CSS", "JavaScript"],
      features: ["Pembuatan Kue", "Kue Ulang Tahun", "Kue Modern"],
      demoUrl: "https://bolu-ten.vercel.app/",
      repoUrl: "https://github.com/raykenzienazaru-dot/bolu"
    },
    {
      name: "HealReminder AI",
      image: "images/AI.png",
      type: "Kesehatan",
      summary: "I developed a health reminder and monitoring web application to help users maintain healthy daily habits through activity tracking and automated Telegram notifications. The platform allows users to monitor BMI, water intake, sleep quality, and medication schedules through a centralized dashboard. Built using HTML, CSS, and JavaScript with Local Storage for data management, the application provides a lightweight and accessible solution for improving consistency in healthy routines and promoting overall well-being.",
      components: ["HTML", "CSS", "JavaScript", "Telegram Bot API"],
      features: ["Kesehatan", "Pengingat Otomatis", "Pemantauan Aktivitas"],
      demoUrl: "https://healreminder.pages.dev/",
      repoUrl: "https://github.com/raykenzienazaru-dot/Kesehatan"
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
    },
    {
      date: "2026-03",
      title: "SOFIA PEMUDA PELOPOR",
      note:
        "SOFIA adalah sistem IoT, website, dan AI untuk memantau kondisi gudang hasil panen secara real-time guna menjaga kualitas, keamanan, dan efisiensi pengelolaan.",
        ktiUrl: "files/SOFIA PEMUDA PELOPOR.pdf"
    },
    {
      date: "2026-03",
      title: "GWS",
      note:
        "GWS adalah sistem berbasis Internet of Things (IoT), website monitoring, dan Artificial Intelligence (AI) yang memantau dan menganalisis kualitas air secara real-time. Sistem ini membantu klasifikasi kelayakan air, pelaporan masyarakat, serta mendukung pengelolaan sanitasi yang lebih efisien, akurat, dan berbasis data.",
        ktiUrl: "files/GWS.pdf"
    }
    
  ]
};

/* ---------- Helpers ---------- */
const $ = (id) => document.getElementById(id);
const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (m) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[m]));

const IMAGE_FALLBACK = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" role="img" aria-label="Preview unavailable">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="55%" stop-color="#111827" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity=".55" />
      <stop offset="70%" stop-color="#2dd4bf" stop-opacity=".12" />
      <stop offset="100%" stop-color="#020617" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="1200" height="800" rx="40" fill="url(#bg)" />
  <rect width="1200" height="800" rx="40" fill="url(#glow)" />
  <g fill="#e2e8f0" font-family="Arial, Helvetica, sans-serif">
    <text x="72" y="640" font-size="54" font-weight="700">Preview unavailable</text>
    <text x="72" y="700" font-size="28" opacity=".72">Open the project link to see more.</text>
  </g>
</svg>
`)}`;

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
  container.innerHTML = projects.map((p, index) => {
    const componentChips = (p.components || []).map(item => `<span class="chip">${escapeHtml(item)}</span>`).join("");
    const featureChips = (p.features || []).map(item => `<span class="chip">${escapeHtml(item)}</span>`).join("");
    const demoLabel = p.demoLabel || (p.repoUrl && p.repoUrl === p.demoUrl ? "Lihat Proyek" : "Demo / Video");
    const repoLabel = p.repoLabel || "Detail";
    const links = [
      p.demoUrl
        ? `<a class="link primary" href="${escapeHtml(p.demoUrl)}" target="_blank" rel="noreferrer">${escapeHtml(demoLabel)}</a>`
        : "",
      p.repoUrl && p.repoUrl !== p.demoUrl
        ? `<a class="link" href="${escapeHtml(p.repoUrl)}" target="_blank" rel="noreferrer">${escapeHtml(repoLabel)}</a>`
        : ""
    ].filter(Boolean).join("");

    return `
    <article class="project">
      <img
        class="card-img"
        src="${escapeHtml(p.image)}"
        alt="${escapeHtml(p.name)}"
        loading="lazy"
        decoding="async"
        onerror="this.onerror=null;this.src='${IMAGE_FALLBACK}'"
      >

      <div class="project-top">
        <div>
          <div class="eyebrow">Proyek ${String(index + 1).padStart(2, "0")}</div>
          <h3>${escapeHtml(p.name)}</h3>
        </div>
        <span class="pill">${escapeHtml(p.type)}</span>
      </div>

      <p class="project-summary">${escapeHtml(p.summary)}</p>

      <div class="meta-block">
        <div class="meta-label">Komponen</div>
        <div class="chips chips-inline">${componentChips}</div>
      </div>

      <div class="meta-block">
        <div class="meta-label">Fitur</div>
        <div class="chips chips-inline">${featureChips}</div>
      </div>

      <div class="links">${links}</div>
    </article>`;
  }).join("");
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

function initLoader(){
  const loader = document.getElementById("pageLoader");
  let finished = false;
  let finishTimer = null;
  const MIN_VISIBLE_MS = 4200;
  const startedAt = performance.now();

  const commitFinish = () => {
    if (finished) return;
    finished = true;
    finishTimer = null;

    document.body.classList.remove("is-loading");
    document.body.classList.add("is-loaded");

    if (loader) {
      loader.setAttribute("aria-hidden", "true");
      window.setTimeout(() => loader.remove(), 550);
    }
  };

  const finish = () => {
    if (finished || finishTimer !== null) return;

    const elapsed = performance.now() - startedAt;
    const delay = Math.max(0, MIN_VISIBLE_MS - elapsed);

    finishTimer = window.setTimeout(commitFinish, delay);
  };

  window.addEventListener("load", finish, { once: true });
  window.setTimeout(finish, 5000);
}

function initCustomCursor(){
  const cursor = document.getElementById("customCursor");
  if (!cursor) return;

  const canUseCustomCursor =
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!canUseCustomCursor) {
    cursor.remove();
    return;
  }

  document.body.classList.add("has-custom-cursor");

  const interactiveSelector = "a, button, .chip, .link, .project, .achievement, .nav-link-flip, .nav-action, .btn, .menu-toggle";
  const state = {
    currentX: window.innerWidth / 2,
    currentY: window.innerHeight / 2,
    targetX: window.innerWidth / 2,
    targetY: window.innerHeight / 2,
    rotation: 0,
    hovering: false,
    pressed: false,
    visible: false,
    lastX: window.innerWidth / 2,
    lastY: window.innerHeight / 2,
    lastTime: performance.now(),
  };

  const updateTransform = () => {
    const scale = state.pressed ? 0.76 : state.hovering ? 1.04 : 0.88;
    cursor.style.transform =
      `translate3d(${state.currentX}px, ${state.currentY}px, 0) translate(-50%, -50%) rotate(${state.rotation}deg) scale(${scale})`;
  };

  const showCursor = () => {
    if (state.visible) return;
    state.visible = true;
    cursor.style.opacity = "1";
  };

  const hideCursor = () => {
    state.visible = false;
    state.hovering = false;
    state.pressed = false;
    cursor.classList.remove("is-hovering", "is-pressed");
    cursor.style.opacity = "0";
  };

  const setHovering = (target) => {
    const isHovering = !!target?.closest(interactiveSelector);
    if (state.hovering === isHovering) return;
    state.hovering = isHovering;
    cursor.classList.toggle("is-hovering", isHovering);
  };

  const handleMove = (event) => {
    showCursor();

    state.targetX = event.clientX;
    state.targetY = event.clientY;

    const now = performance.now();
    const delta = Math.max(1, now - state.lastTime);
    const dx = event.clientX - state.lastX;
    const dy = event.clientY - state.lastY;
    const speed = Math.hypot(dx, dy) / delta;

    if (speed > 0.02) {
      state.rotation = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
    }

    state.lastX = event.clientX;
    state.lastY = event.clientY;
    state.lastTime = now;

    setHovering(event.target instanceof Element ? event.target : null);
  };

  const handleDown = () => {
    state.pressed = true;
    cursor.classList.add("is-pressed");
  };

  const handleUp = () => {
    state.pressed = false;
    cursor.classList.remove("is-pressed");
  };

  const animate = () => {
    state.currentX += (state.targetX - state.currentX) * 0.18;
    state.currentY += (state.targetY - state.currentY) * 0.18;
    updateTransform();
    requestAnimationFrame(animate);
  };

  window.addEventListener("mousemove", handleMove, { passive: true });
  window.addEventListener("mousedown", handleDown, { passive: true });
  window.addEventListener("mouseup", handleUp, { passive: true });
  window.addEventListener("blur", hideCursor);
  document.addEventListener("mouseleave", hideCursor);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) hideCursor();
  });

  animate();
}

function initPanelSwitcher(){
  const panels = Array.from(document.querySelectorAll("[data-panel]"));
  if (!panels.length) return;

  const triggers = Array.from(document.querySelectorAll("[data-panel-target]"));
  const panelMap = new Map(panels.map((panel) => [panel.dataset.panel, panel]));
  const navLinks = document.getElementById("navLinks");
  const menuToggle = document.getElementById("menuToggle");
  const defaultPanelId = panelMap.has("home") ? "home" : panels[0].dataset.panel;
  let currentPanelId = null;

  const closeMenu = () => {
    if (!navLinks || !menuToggle) return;
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  const applyPanelState = (panelId, { pushState = false, scrollToTop = true } = {}) => {
    const targetId = panelMap.has(panelId) ? panelId : defaultPanelId;
    const target = panelMap.get(targetId);
    if (!target) return;

    panels.forEach((panel) => {
      const isActive = panel === target;
      panel.hidden = !isActive;
      panel.setAttribute("aria-hidden", String(!isActive));
      panel.classList.remove("is-entering");
    });

    triggers.forEach((trigger) => {
      const isActive = trigger.dataset.panelTarget === targetId;
      trigger.classList.toggle("is-active", isActive);
      if (isActive) {
        trigger.setAttribute("aria-current", "page");
      } else {
        trigger.removeAttribute("aria-current");
      }
    });

    if (pushState && currentPanelId !== targetId) {
      history.pushState({ panel: targetId }, "", `#${targetId}`);
    } else {
      history.replaceState({ panel: targetId }, "", `#${targetId}`);
    }

    currentPanelId = targetId;

    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    closeMenu();

    window.requestAnimationFrame(() => {
      target.classList.add("is-entering");
      window.setTimeout(() => target.classList.remove("is-entering"), 320);
    });
  };

  const handleTriggerClick = (event) => {
    const trigger = event.target.closest("[data-panel-target]");
    if (!trigger) return;

    const targetPanel = trigger.dataset.panelTarget;
    if (!targetPanel) return;

    event.preventDefault();
    applyPanelState(targetPanel, { pushState: true });
  };

  document.addEventListener("click", handleTriggerClick);
  window.addEventListener("popstate", () => {
    const hash = window.location.hash.replace(/^#/, "");
    applyPanelState(hash || defaultPanelId, { pushState: false, scrollToTop: false });
  });

  const initialHash = window.location.hash.replace(/^#/, "");
  applyPanelState(initialHash || defaultPanelId, { pushState: false, scrollToTop: false });
}

initLoader();
initCustomCursor();

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
  const navLinks = document.getElementById("navLinks");

  if (toggle && navLinks) {
  const closeMenu = () => {
    navLinks.classList.remove("active");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  };

  const toggleMenu = () => {
    const isOpen = navLinks.classList.toggle("active");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  };

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  const links = navLinks.querySelectorAll("a");
  if (links) {
    links.forEach(link => {
      link.addEventListener("click", closeMenu);
    });
  }

  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener("scroll", () => {
    closeMenu();
  }, { passive: true });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

  initPanelSwitcher();

});
