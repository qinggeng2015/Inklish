const lessons = [
  {
    word: "Cat",
    pronunciation: "/kæt/",
    meaning: "小猫",
    theme: "Animal",
    sentence: "This is a cat.",
    art: "cat",
  },
  {
    word: "Ball",
    pronunciation: "/bɔːl/",
    meaning: "小球",
    theme: "Toy",
    sentence: "I see a ball.",
    art: "ball",
  },
  {
    word: "Moon",
    pronunciation: "/muːn/",
    meaning: "月亮",
    theme: "Sky",
    sentence: "Look at the moon.",
    art: "moon",
  },
];

const artTemplates = {
  cat: `
    <svg viewBox="0 0 280 220" role="img" aria-label="cat drawing">
      <path d="M83 82 L105 37 L132 74 L172 74 L197 37 L217 84" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>
      <ellipse cx="150" cy="119" rx="82" ry="68" fill="#f7f3e8" stroke="#111" stroke-width="8"/>
      <circle cx="122" cy="111" r="8" fill="#111"/>
      <circle cx="178" cy="111" r="8" fill="#111"/>
      <path d="M150 124 L139 139 L161 139 Z" fill="#111"/>
      <path d="M120 153 Q150 172 180 153" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>
      <path d="M80 132 H28 M82 152 H34 M220 132 H252 M218 152 H246" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>
    </svg>
  `,
  ball: `
    <svg viewBox="0 0 280 220" role="img" aria-label="ball drawing">
      <circle cx="140" cy="110" r="83" fill="#f7f3e8" stroke="#111" stroke-width="8"/>
      <path d="M80 55 C105 92 108 130 78 167" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>
      <path d="M200 55 C175 92 172 130 202 167" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>
      <path d="M58 109 H222" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>
      <circle cx="140" cy="110" r="18" fill="#111"/>
    </svg>
  `,
  moon: `
    <svg viewBox="0 0 280 220" role="img" aria-label="moon drawing">
      <path d="M171 30 C122 45 88 90 88 141 C88 168 101 190 119 202 C70 194 34 153 34 104 C34 49 79 6 135 6 C149 6 161 14 171 30 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>
      <circle cx="204" cy="58" r="9" fill="#111"/>
      <circle cx="228" cy="111" r="6" fill="#111"/>
      <circle cx="187" cy="154" r="7" fill="#111"/>
      <path d="M205 29 L211 42 L225 44 L214 53 L217 67 L205 60 L193 67 L196 53 L185 44 L199 42 Z" fill="#111"/>
    </svg>
  `,
};

const state = {
  index: 0,
};

const storageKey = "inklish-guide-seen";

const elements = {
  guide: document.querySelector("#guide"),
  startButton: document.querySelector("#start-button"),
  guideButton: document.querySelector("#guide-button"),
  counter: document.querySelector("#lesson-counter"),
  theme: document.querySelector("#lesson-theme"),
  picture: document.querySelector("#picture-frame"),
  word: document.querySelector("#word"),
  pronunciation: document.querySelector("#pronunciation"),
  meaning: document.querySelector("#meaning"),
  parentCue: document.querySelector("#parent-cue"),
  prevButton: document.querySelector("#prev-button"),
  nextButton: document.querySelector("#next-button"),
};

function hasSeenGuide() {
  try {
    return localStorage.getItem(storageKey) === "true";
  } catch {
    return false;
  }
}

function markGuideSeen() {
  try {
    localStorage.setItem(storageKey, "true");
  } catch {
    // Some e-ink browsers disable storage; closing the guide should still work.
  }
}

function openGuide() {
  if (typeof elements.guide.showModal === "function") {
    elements.guide.showModal();
    return;
  }

  elements.guide.setAttribute("open", "");
}

function closeGuide() {
  markGuideSeen();

  if (typeof elements.guide.close === "function") {
    elements.guide.close();
    return;
  }

  elements.guide.removeAttribute("open");
}

function renderLesson() {
  const lesson = lessons[state.index];
  elements.counter.textContent = `${state.index + 1} / ${lessons.length}`;
  elements.theme.textContent = lesson.theme;
  elements.picture.innerHTML = artTemplates[lesson.art];
  elements.word.textContent = lesson.word;
  elements.pronunciation.textContent = lesson.pronunciation;
  elements.meaning.textContent = lesson.meaning;
  elements.parentCue.textContent = `家长慢读：${lesson.sentence}`;
}

elements.startButton.addEventListener("click", closeGuide);
elements.guideButton.addEventListener("click", openGuide);

elements.prevButton.addEventListener("click", () => {
  state.index = (state.index - 1 + lessons.length) % lessons.length;
  renderLesson();
});

elements.nextButton.addEventListener("click", () => {
  state.index = (state.index + 1) % lessons.length;
  renderLesson();
});

renderLesson();

if (!hasSeenGuide()) {
  openGuide();
}
