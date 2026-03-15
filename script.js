// =============================================
// KKR Operating Playbook — Interactive Script
// =============================================

// === THEME TOGGLE ===
(function(){
  const t = document.querySelector('[data-theme-toggle]');
  const r = document.documentElement;
  let d = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  r.setAttribute('data-theme', d);
  updateToggleIcon();

  if (t) {
    t.addEventListener('click', () => {
      d = d === 'dark' ? 'light' : 'dark';
      r.setAttribute('data-theme', d);
      t.setAttribute('aria-label', 'Switch to ' + (d === 'dark' ? 'light' : 'dark') + ' mode');
      updateToggleIcon();
    });
  }

  function updateToggleIcon() {
    if (!t) return;
    t.innerHTML = d === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
})();

// === MOBILE NAV TOGGLE ===
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// === ACCORDION ===
document.querySelectorAll('.accordion-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const panel = trigger.nextElementSibling;
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', !isOpen);
    panel.classList.toggle('open', !isOpen);
  });
});

// === CODE OF VALUES TABS ===
document.querySelectorAll('.cv-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    document.querySelectorAll('.cv-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.cv-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`[data-panel="${target}"]`).classList.add('active');
  });
});

// === GLOSSARY SEARCH ===
const glossarySearch = document.getElementById('glossarySearch');
const glossaryItems = document.querySelectorAll('.glossary-item');

if (glossarySearch) {
  glossarySearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    glossaryItems.forEach(item => {
      const term = item.dataset.term || '';
      const text = item.textContent.toLowerCase();
      const match = !query || term.includes(query) || text.includes(query);
      item.classList.toggle('hidden', !match);
    });
  });
}

// === QUIZ ===
const quizData = [
  {
    question: "What year was KKR Capstone founded?",
    options: ["1976", "1995", "2000", "2008"],
    correct: 2,
    explanation: "KKR Capstone was founded in 2000 when Dean Nelson, a former Boston Consulting Group partner, was hired to build it as a dedicated in-house operations group."
  },
  {
    question: "What does R.I.C.H. stand for in Neighborly's Code of Values?",
    options: [
      "Revenue, Innovation, Commitment, Honesty",
      "Respect, Integrity, Customer Focus, Having Fun in the Process",
      "Reliability, Improvement, Clarity, Happiness",
      "Results, Initiative, Collaboration, Honor"
    ],
    correct: 1,
    explanation: "R.I.C.H. stands for Respect, Integrity, Customer Focus, and Having Fun in the Process. These values are recited at any Neighborly meeting of three or more employees."
  },
  {
    question: "Approximately how many full-time operating professionals does KKR Capstone have?",
    options: ["25", "50", "100", "500"],
    correct: 2,
    explanation: "KKR Capstone has grown to approximately 100 full-time operating professionals supporting all of KKR's investment strategies around the world."
  },
  {
    question: "What is the primary purpose of KKR's 100-Day Plan?",
    options: [
      "To decide whether to keep or sell a portfolio company",
      "To chart a detailed path to value creation with clear accountability from day one",
      "To replace the existing management team",
      "To reduce headcount by 10%"
    ],
    correct: 1,
    explanation: "The 100-Day Plan charts a path to value creation by ensuring everyone agrees upon a plan for improvement, is committed to executing it, and is held accountable from day one."
  },
  {
    question: "Who pioneered KKR's broad-based employee ownership model?",
    options: ["Henry Kravis", "George Roberts", "Pete Stavros", "Dean Nelson"],
    correct: 2,
    explanation: "Pete Stavros, Co-Head of Americas Private Equity at KKR, pioneered the employee ownership model. He also founded Ownership Works, a non-profit to scale this practice globally."
  },
  {
    question: "What was the approximate cost savings from KKR's Green Portfolio Program across participating companies?",
    options: ["$100 million", "$500 million", "$1.2 billion", "$5 billion"],
    correct: 2,
    explanation: "The Green Portfolio Program, launched in 2008 with the Environmental Defense Fund, yielded over $1.2 billion in cost savings for about 25 portfolio companies through energy savings, waste reduction, and other eco-efficiency improvements."
  },
  {
    question: "What is a Kaizen event in the KKR context?",
    options: [
      "An annual shareholder meeting",
      "A multi-day problem-solving exercise focused on operational improvement",
      "A technology deployment sprint",
      "A quarterly financial review"
    ],
    correct: 1,
    explanation: "A Kaizen event is a multi-day problem-solving exercise. KKR investment team members are required to participate in at least one per year, walking factory floors to find improvement opportunities."
  },
  {
    question: "When did KKR acquire Neighborly?",
    options: ["2018", "2019", "2021", "2023"],
    correct: 2,
    explanation: "KKR agreed to acquire Neighborly from Harvest Partners in July 2021. The investment was made from KKR's North American private equity fund."
  },
  {
    question: "What is 'governance arbitrage' in private equity?",
    options: [
      "Buying companies in countries with weaker regulations",
      "The advantage PE boards have over public company boards in making faster, more focused decisions",
      "Exploiting differences in accounting standards",
      "A tax optimization strategy"
    ],
    correct: 1,
    explanation: "Governance arbitrage refers to the advantage that private equity boards have — they're typically smaller, more focused, have deeper industry expertise, and can make faster strategic decisions without quarterly public reporting pressures."
  },
  {
    question: "What is the goal of Ownership Works, the non-profit founded by Pete Stavros?",
    options: [
      "Create $1 billion in tax savings",
      "Create $20 billion of wealth for working families over the next decade",
      "Lobby for reduced regulation",
      "Provide retirement planning services"
    ],
    correct: 1,
    explanation: "Ownership Works aims to create more than $20 billion of wealth for working families over the next decade by building a global worker ownership movement."
  },
  {
    question: "Which of these is NOT one of Capstone's Centers of Excellence?",
    options: ["Procurement", "Technology & Cybersecurity", "Real Estate Development", "Supply Chain Efficiency"],
    correct: 2,
    explanation: "Capstone's Centers of Excellence include human capital, insurance, procurement, technology and cybersecurity, and supply chain efficiency. Real estate development is not listed among them."
  },
  {
    question: "How many brands does Neighborly have in its portfolio?",
    options: ["10+", "20+", "30+", "50+"],
    correct: 2,
    explanation: "Neighborly has grown to more than 30 brands and over 5,500 franchises across six countries, surpassing $4 billion in systemwide sales in 2023."
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizFeedback = document.getElementById('quizFeedback');
const quizNext = document.getElementById('quizNext');
const quizResult = document.getElementById('quizResult');
const quizProgressBar = document.getElementById('quizProgressBar');

function loadQuestion() {
  if (currentQuestion >= quizData.length) {
    showResult();
    return;
  }

  answered = false;
  const q = quizData[currentQuestion];
  quizQuestion.textContent = q.question;
  quizOptions.innerHTML = '';
  quizFeedback.textContent = '';
  quizNext.style.display = 'none';
  quizProgressBar.style.width = ((currentQuestion) / quizData.length * 100) + '%';

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.addEventListener('click', () => selectAnswer(i));
    quizOptions.appendChild(btn);
  });
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;

  const q = quizData[currentQuestion];
  const options = quizOptions.querySelectorAll('.quiz-option');

  options.forEach((opt, i) => {
    opt.classList.add('disabled');
    if (i === q.correct) opt.classList.add('correct');
    if (i === index && i !== q.correct) opt.classList.add('incorrect');
  });

  if (index === q.correct) {
    score++;
    quizFeedback.innerHTML = '<strong style="color:var(--color-success)">Correct.</strong> ' + q.explanation;
  } else {
    quizFeedback.innerHTML = '<strong style="color:var(--color-error)">Not quite.</strong> ' + q.explanation;
  }

  quizNext.style.display = 'inline-flex';
}

function showResult() {
  quizQuestion.style.display = 'none';
  quizOptions.style.display = 'none';
  quizFeedback.style.display = 'none';
  quizNext.style.display = 'none';
  quizProgressBar.style.width = '100%';

  const pct = Math.round((score / quizData.length) * 100);
  let message = '';
  if (pct >= 90) message = 'Outstanding. You have a strong grasp of KKR\'s operating playbook.';
  else if (pct >= 70) message = 'Well done. Review the sections you missed to solidify your knowledge.';
  else if (pct >= 50) message = 'Good start. Revisit the chapters above to strengthen your understanding.';
  else message = 'Keep studying. Scroll through the chapters above and try again.';

  quizResult.style.display = 'block';
  quizResult.innerHTML = `
    <h3>Quiz Complete</h3>
    <div class="quiz-score">${score} / ${quizData.length}</div>
    <p>${message}</p>
    <button class="btn btn-primary quiz-restart" onclick="restartQuiz()">Try Again</button>
  `;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  quizQuestion.style.display = '';
  quizOptions.style.display = '';
  quizFeedback.style.display = '';
  quizResult.style.display = 'none';
  loadQuestion();
}

if (quizNext) {
  quizNext.addEventListener('click', () => {
    currentQuestion++;
    loadQuestion();
  });
}

// Init quiz
loadQuestion();

// === PORTFOLIO CHARTS ===
(function() {
  const cs = getComputedStyle(document.documentElement);
  const textColor = cs.getPropertyValue('--color-text-muted').trim() || '#8C8FA0';
  const accent = cs.getPropertyValue('--color-accent').trim() || '#D4A940';

  // Color palette for charts - harmonious with navy/gold theme
  const chartColors = [
    '#D4A940', // gold
    '#5B8FC2', // blue
    '#4CAF5A', // green
    '#E05660', // red
    '#8B6FC0', // purple
    '#E89830', // orange
    '#3DBEAB', // teal
    '#C47DB8', // pink
    '#6B9E4F', // olive
    '#D4785A', // coral
    '#508AB0', // slate blue
  ];

  Chart.defaults.color = textColor;
  Chart.defaults.font.family = "'Satoshi', 'Inter', sans-serif";
  Chart.defaults.font.size = 12;
  Chart.defaults.plugins.legend.labels.usePointStyle = true;
  Chart.defaults.plugins.legend.labels.pointStyle = 'circle';
  Chart.defaults.plugins.legend.labels.padding = 16;

  // Industry Doughnut
  const indCtx = document.getElementById('chartIndustry');
  if (indCtx) {
    new Chart(indCtx, {
      type: 'doughnut',
      data: {
        labels: ['Info Tech','Healthcare','Industrials','Consumer Disc.','Comm. Services','Utilities','Financials','Consumer Staples','Energy','Materials','Real Estate'],
        datasets: [{
          data: [72,56,45,29,29,23,18,13,9,4,1],
          backgroundColor: chartColors,
          borderWidth: 0,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        cutout: '62%',
        plugins: {
          legend: { position: 'bottom', labels: { font: { size: 11 } } },
          tooltip: {
            callbacks: {
              label: ctx => ` ${ctx.label}: ${ctx.raw} companies (${Math.round(ctx.raw/299*100)}%)`
            }
          }
        }
      }
    });
  }

  // Strategy Doughnut
  const stratCtx = document.getElementById('chartStrategy');
  if (stratCtx) {
    new Chart(stratCtx, {
      type: 'doughnut',
      data: {
        labels: ['Private Equity','Infrastructure','Tech Growth','Health Care Growth','Global Impact'],
        datasets: [{
          data: [147,69,42,29,12],
          backgroundColor: ['#D4A940','#5B8FC2','#4CAF5A','#E05660','#8B6FC0'],
          borderWidth: 0,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        cutout: '62%',
        plugins: {
          legend: { position: 'bottom', labels: { font: { size: 11 } } },
          tooltip: {
            callbacks: {
              label: ctx => ` ${ctx.label}: ${ctx.raw} companies (${Math.round(ctx.raw/299*100)}%)`
            }
          }
        }
      }
    });
  }

  // Geography Bar
  const geoCtx = document.getElementById('chartGeo');
  if (geoCtx) {
    new Chart(geoCtx, {
      type: 'bar',
      data: {
        labels: ['Americas','Asia Pacific','EMEA'],
        datasets: [{
          data: [125,93,81],
          backgroundColor: ['#D4A940','#5B8FC2','#4CAF5A'],
          borderRadius: 6,
          barThickness: 60,
          maxBarThickness: 80
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'x',
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => ` ${ctx.raw} companies (${Math.round(ctx.raw/299*100)}%)`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(128,128,128,0.1)' },
            ticks: { stepSize: 25 }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });
  }

  // Biggest Deals Bar
  const dealsCtx = document.getElementById('chartDeals');
  if (dealsCtx) {
    new Chart(dealsCtx, {
      type: 'bar',
      data: {
        labels: ['CyrusOne','Cotiviti','STT GDC','Envision','Metronet','Global Atlantic','Spectris','Barracuda','Epicor','Heartland Dental','Internet Brands','Arnott\'s','Simon & Schuster','Arctos','Neighborly'],
        datasets: [{
          data: [15.0,11.0,10.0,9.9,9.8,7.4,6.5,4.0,3.3,2.8,2.8,2.2,1.62,1.4,null],
          backgroundColor: [
            '#D4A940','#D4A940','#D4A940','#E05660','#D4A940',
            '#5B8FC2','#D4A940','#4CAF5A','#5B8FC2','#5B8FC2',
            '#5B8FC2','#8B6FC0','#8B6FC0','#E89830','#3DBEAB'
          ],
          borderRadius: 4,
          barThickness: 24
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => ctx.raw ? ` $${ctx.raw}B deal value` : ' Undisclosed'
            }
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            grid: { color: 'rgba(128,128,128,0.1)' },
            ticks: {
              callback: v => '$' + v + 'B'
            }
          },
          y: {
            grid: { display: false },
            ticks: { font: { size: 11, weight: '500' } }
          }
        }
      }
    });
  }
})();

// === PORTFOLIO BROWSER ===
(function() {
  const allCompanies = [
    {n:"+Simple",i:"Financials",s:"Tech Growth",l:"EMEA"},
    {n:"1-800 Contacts, Inc.",i:"Consumer Discretionary",s:"Private Equity",l:"Americas"},
    {n:"123Dentist",i:"Healthcare",s:"Private Equity",l:"Americas"},
    {n:"A-Gas",i:"Industrials",s:"Private Equity",l:"EMEA"},
    {n:"Accuris",i:"Information Technology",s:"Private Equity",l:"Americas"},
    {n:"Neighborly",i:"Consumer Discretionary",s:"Private Equity",l:"Americas"}
  ];

  // We'll load the full list from the JSON file embedded inline
  // For now, populate from the extracted data
  const grid = document.getElementById('portfolioGrid');
  const search = document.getElementById('portfolioSearch');
  const filterInd = document.getElementById('portfolioFilterIndustry');
  const filterStrat = document.getElementById('portfolioFilterStrategy');
  const countEl = document.getElementById('portfolioCount');
  const loadMoreBtn = document.getElementById('portfolioLoadMore');

  if (!grid) return;

  let visibleCount = 24;
  let filtered = [];

  function render() {
    const q = (search?.value || '').toLowerCase().trim();
    const ind = filterInd?.value || '';
    const strat = filterStrat?.value || '';

    filtered = window._kkrPortfolio.filter(c => {
      if (q && !c.n.toLowerCase().includes(q)) return false;
      if (ind && c.i !== ind) return false;
      if (strat && !c.s.includes(strat)) return false;
      return true;
    });

    const showing = filtered.slice(0, visibleCount);
    grid.innerHTML = showing.map(c => {
      const isN = c.n === 'Neighborly';
      return `<div class="portfolio-item${isN ? ' is-neighborly' : ''}">
        <span class="portfolio-item-name">${c.n}</span>
        <span class="portfolio-item-meta">${c.i} &middot; ${c.l}</span>
        <span class="portfolio-item-tag">${c.s}</span>
      </div>`;
    }).join('');

    countEl.textContent = `Showing ${Math.min(visibleCount, filtered.length)} of ${filtered.length} companies`;
    loadMoreBtn.style.display = filtered.length > visibleCount ? 'block' : 'none';

    // Animate in
    grid.querySelectorAll('.portfolio-item').forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, i * 20);
    });
  }

  search?.addEventListener('input', () => { visibleCount = 24; render(); });
  filterInd?.addEventListener('change', () => { visibleCount = 24; render(); });
  filterStrat?.addEventListener('change', () => { visibleCount = 24; render(); });
  loadMoreBtn?.addEventListener('click', () => { visibleCount += 24; render(); });

  // Load portfolio data
  fetch('portfolio-data.json')
    .then(r => r.json())
    .then(data => {
      window._kkrPortfolio = data.map(c => ({
        n: c.name,
        i: c.industry,
        s: c.asset_class,
        l: c.location.includes('Americas') ? 'Americas' :
           (c.location.includes('Asia') || c.location.includes('Japan')) ? 'Asia Pacific' : 'EMEA'
      }));
      render();
    })
    .catch(() => {
      // fallback - at least render something
      window._kkrPortfolio = allCompanies;
      render();
    });
})();

// === SCROLL ANIMATIONS ===
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .coe-card, .toolkit-card, .case-card, .glossary-item, .timeline-item, .pillar, .esg-card, .n-stat, .plan-quote, .case-study, .stat-callout, .callout, .kpi-card, .chart-card, .deals-table-wrap').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Add visible class styles
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

// === ACTIVE NAV LINK ===
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinksAll.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--color-text)';
    }
  });
}, { passive: true });
