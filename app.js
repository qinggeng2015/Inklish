var lessonDays = [
  {
    label: "昨天",
    title: "Yesterday",
    lessons: [
      {
        word: "Fish",
        pronunciation: "/fɪʃ/",
        meaning: "小鱼",
        theme: "Animal",
        sentence: "This is a fish.",
        art: "fish"
      },
      {
        word: "Book",
        pronunciation: "/bʊk/",
        meaning: "书",
        theme: "Home",
        sentence: "I see a book.",
        art: "book"
      },
      {
        word: "Star",
        pronunciation: "/stɑːr/",
        meaning: "星星",
        theme: "Sky",
        sentence: "Look at the star.",
        art: "star"
      }
    ]
  },
  {
    label: "今天",
    title: "Today",
    lessons: [
      {
        word: "Cat",
        pronunciation: "/kæt/",
        meaning: "小猫",
        theme: "Animal",
        sentence: "This is a cat.",
        art: "cat"
      },
      {
        word: "Ball",
        pronunciation: "/bɔːl/",
        meaning: "小球",
        theme: "Toy",
        sentence: "I see a ball.",
        art: "ball"
      },
      {
        word: "Moon",
        pronunciation: "/muːn/",
        meaning: "月亮",
        theme: "Sky",
        sentence: "Look at the moon.",
        art: "moon"
      }
    ]
  },
  {
    label: "明天",
    title: "Tomorrow",
    lessons: [
      {
        word: "Dog",
        pronunciation: "/dɔːɡ/",
        meaning: "小狗",
        theme: "Animal",
        sentence: "This is a dog.",
        art: "dog"
      },
      {
        word: "Cup",
        pronunciation: "/kʌp/",
        meaning: "杯子",
        theme: "Home",
        sentence: "I see a cup.",
        art: "cup"
      },
      {
        word: "Sun",
        pronunciation: "/sʌn/",
        meaning: "太阳",
        theme: "Sky",
        sentence: "Look at the sun.",
        art: "sun"
      }
    ]
  }
];

var artTemplates = {
  cat: [
    '<svg viewBox="0 0 280 220" role="img" aria-label="cat drawing">',
    '<path d="M83 82 L105 37 L132 74 L172 74 L197 37 L217 84" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<ellipse cx="150" cy="119" rx="82" ry="68" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<circle cx="122" cy="111" r="8" fill="#111"/>',
    '<circle cx="178" cy="111" r="8" fill="#111"/>',
    '<path d="M150 124 L139 139 L161 139 Z" fill="#111"/>',
    '<path d="M120 153 Q150 172 180 153" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>',
    '<path d="M80 132 H28 M82 152 H34 M220 132 H252 M218 152 H246" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>',
    '</svg>'
  ].join(""),
  ball: [
    '<svg viewBox="0 0 280 220" role="img" aria-label="ball drawing">',
    '<circle cx="140" cy="110" r="83" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M80 55 C105 92 108 130 78 167" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>',
    '<path d="M200 55 C175 92 172 130 202 167" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>',
    '<path d="M58 109 H222" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>',
    '<circle cx="140" cy="110" r="18" fill="#111"/>',
    '</svg>'
  ].join(""),
  moon: [
    '<svg viewBox="0 0 280 220" role="img" aria-label="moon drawing">',
    '<path d="M171 30 C122 45 88 90 88 141 C88 168 101 190 119 202 C70 194 34 153 34 104 C34 49 79 6 135 6 C149 6 161 14 171 30 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<circle cx="204" cy="58" r="9" fill="#111"/>',
    '<circle cx="228" cy="111" r="6" fill="#111"/>',
    '<circle cx="187" cy="154" r="7" fill="#111"/>',
    '<path d="M205 29 L211 42 L225 44 L214 53 L217 67 L205 60 L193 67 L196 53 L185 44 L199 42 Z" fill="#111"/>',
    '</svg>'
  ].join(""),
  dog: [
    '<svg viewBox="0 0 280 220" role="img" aria-label="dog drawing">',
    '<path d="M72 91 Q91 45 136 54 Q184 43 209 84 Q237 95 232 129 Q225 183 154 187 Q82 188 64 133 Q59 111 72 91 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M83 89 Q49 64 45 113 Q49 142 77 128" fill="#ded8c8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M204 87 Q238 62 242 113 Q236 145 208 128" fill="#ded8c8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<circle cx="119" cy="117" r="8" fill="#111"/>',
    '<circle cx="173" cy="117" r="8" fill="#111"/>',
    '<path d="M146 130 L133 144 L160 144 Z" fill="#111"/>',
    '<path d="M117 159 Q146 178 177 159" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>',
    '</svg>'
  ].join(""),
  cup: [
    '<svg viewBox="0 0 280 220" role="img" aria-label="cup drawing">',
    '<path d="M82 57 H180 L168 180 H94 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M180 83 H211 Q238 83 238 111 Q238 139 211 139 H174" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>',
    '<path d="M93 91 H169" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>',
    '<path d="M101 184 H164" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>',
    '</svg>'
  ].join(""),
  sun: [
    '<svg viewBox="0 0 280 220" role="img" aria-label="sun drawing">',
    '<circle cx="140" cy="110" r="54" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M140 20 V48 M140 172 V200 M50 110 H78 M202 110 H230 M76 46 L96 66 M184 154 L204 174 M204 46 L184 66 M96 154 L76 174" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>',
    '<circle cx="121" cy="103" r="7" fill="#111"/>',
    '<circle cx="159" cy="103" r="7" fill="#111"/>',
    '<path d="M119 128 Q140 144 162 128" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>',
    '</svg>'
  ].join(""),
  fish: [
    '<svg viewBox="0 0 280 220" role="img" aria-label="fish drawing">',
    '<path d="M51 112 Q110 47 194 111 Q112 176 51 112 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M193 111 L239 73 L238 150 Z" fill="#ded8c8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<circle cx="101" cy="101" r="8" fill="#111"/>',
    '<path d="M131 75 Q151 111 130 148" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>',
    '<path d="M70 84 Q88 113 70 140" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>',
    '</svg>'
  ].join(""),
  book: [
    '<svg viewBox="0 0 280 220" role="img" aria-label="book drawing">',
    '<path d="M42 48 H129 Q147 48 147 66 V181 Q135 166 112 166 H42 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M238 48 H155 Q147 48 147 66 V181 Q160 166 181 166 H238 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M71 83 H113 M71 113 H116 M180 83 H217 M180 113 H213" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>',
    '</svg>'
  ].join(""),
  star: [
    '<svg viewBox="0 0 280 220" role="img" aria-label="star drawing">',
    '<path d="M140 24 L166 82 L230 88 L181 130 L196 193 L140 160 L84 193 L99 130 L50 88 L114 82 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<circle cx="122" cy="112" r="7" fill="#111"/>',
    '<circle cx="158" cy="112" r="7" fill="#111"/>',
    '<path d="M119 135 Q140 149 161 135" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>',
    '</svg>'
  ].join("")
};

var state = {
  dayIndex: 1,
  index: 0
};

var storageKey = "inklish-guide-seen";

function byId(id) {
  return document.getElementById(id);
}

var elements = {
  guide: byId("guide"),
  startButton: byId("start-button"),
  guideButton: byId("guide-button"),
  title: byId("app-title"),
  dayLabel: byId("day-label"),
  prevDayButton: byId("prev-day-button"),
  nextDayButton: byId("next-day-button"),
  dayPicker: byId("day-picker"),
  counter: byId("lesson-counter"),
  theme: byId("lesson-theme"),
  picture: byId("picture-frame"),
  word: byId("word"),
  pronunciation: byId("pronunciation"),
  meaning: byId("meaning"),
  parentCue: byId("parent-cue"),
  prevButton: byId("prev-button"),
  nextButton: byId("next-button")
};

function on(element, eventName, handler) {
  if (element.addEventListener) {
    element.addEventListener(eventName, handler, false);
    return;
  }

  if (element.attachEvent) {
    element.attachEvent("on" + eventName, function () {
      handler.call(element, window.event);
    });
  }
}

function hasSeenGuide() {
  try {
    return localStorage.getItem(storageKey) === "true";
  } catch (error) {
    return false;
  }
}

function markGuideSeen() {
  try {
    localStorage.setItem(storageKey, "true");
  } catch (error) {
    // Some e-ink browsers disable storage; closing the guide should still work.
  }
}

function openGuide() {
  elements.guide.removeAttribute("hidden");

  if (typeof elements.guide.showModal === "function") {
    try {
      if (!elements.guide.open) {
        elements.guide.showModal();
      }
    } catch (error) {
      elements.guide.setAttribute("open", "");
    }
    return;
  }

  elements.guide.setAttribute("open", "");
}

function closeGuide() {
  markGuideSeen();

  if (typeof elements.guide.close === "function") {
    try {
      elements.guide.close();
    } catch (error) {
      // Old browsers may expose dialog-like elements without a working close method.
    }
  }

  elements.guide.removeAttribute("open");
  elements.guide.setAttribute("hidden", "hidden");
}

function renderLesson() {
  var day = lessonDays[state.dayIndex];
  var lessons = day.lessons;
  var lesson = lessons[state.index];

  elements.title.innerHTML = day.title;
  elements.dayLabel.innerHTML = day.label;
  elements.counter.innerHTML = state.index + 1 + " / " + lessons.length;
  elements.theme.innerHTML = lesson.theme;
  elements.picture.innerHTML = artTemplates[lesson.art] || "";
  elements.word.innerHTML = lesson.word;
  elements.pronunciation.innerHTML = lesson.pronunciation;
  elements.meaning.innerHTML = lesson.meaning;
  elements.parentCue.innerHTML = "家长慢读：" + lesson.sentence;
}

function getVisibleDayIndexes() {
  var maxVisibleDays = 3;
  var visibleCount = Math.min(maxVisibleDays, lessonDays.length);
  var halfWindow = Math.floor(visibleCount / 2);
  var maxStart = lessonDays.length - visibleCount;
  var start = Math.min(Math.max(state.dayIndex - halfWindow, 0), maxStart);
  var indexes = [];
  var index;

  for (index = 0; index < visibleCount; index += 1) {
    indexes.push(start + index);
  }

  return indexes;
}

function renderDayPicker() {
  var indexes = getVisibleDayIndexes();
  var html = [];
  var index;
  var dayIndex;
  var day;
  var isCurrent;
  var marker;

  elements.prevDayButton.disabled = state.dayIndex === 0;
  elements.nextDayButton.disabled = state.dayIndex === lessonDays.length - 1;

  for (index = 0; index < indexes.length; index += 1) {
    dayIndex = indexes[index];
    day = lessonDays[dayIndex];
    isCurrent = dayIndex === state.dayIndex;
    marker = isCurrent ? "●" : "○";
    html.push(
      '<button class="day-button" type="button" data-day-index="' +
        dayIndex +
        '" aria-label="' +
        day.label +
        '" aria-current="' +
        isCurrent +
        '">' +
        marker +
        "</button>"
    );
  }

  elements.dayPicker.innerHTML = html.join("");
}

function selectDay(dayIndex) {
  if (dayIndex < 0 || dayIndex >= lessonDays.length || dayIndex === state.dayIndex) {
    return;
  }

  state.dayIndex = dayIndex;
  state.index = 0;
  renderDayPicker();
  renderLesson();
}

function findDayButton(target) {
  while (target && target !== elements.dayPicker) {
    if (target.getAttribute && target.getAttribute("data-day-index") !== null) {
      return target;
    }

    target = target.parentNode;
  }

  return null;
}

on(elements.startButton, "click", closeGuide);
on(elements.guideButton, "click", openGuide);

on(elements.dayPicker, "click", function (event) {
  var button = findDayButton(event.target || event.srcElement);

  if (!button) {
    return;
  }

  selectDay(parseInt(button.getAttribute("data-day-index"), 10));
});

on(elements.prevDayButton, "click", function () {
  selectDay(state.dayIndex - 1);
});

on(elements.nextDayButton, "click", function () {
  selectDay(state.dayIndex + 1);
});

on(elements.prevButton, "click", function () {
  var lessons = lessonDays[state.dayIndex].lessons;

  state.index = (state.index - 1 + lessons.length) % lessons.length;
  renderLesson();
});

on(elements.nextButton, "click", function () {
  var lessons = lessonDays[state.dayIndex].lessons;

  state.index = (state.index + 1) % lessons.length;
  renderLesson();
});

renderDayPicker();
renderLesson();

if (!hasSeenGuide()) {
  openGuide();
}
