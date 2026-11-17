(() => {
  "use strict";
  const PRESETS = {
    affe_68:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/affe_68.gif",
    angel:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/angel.gif",
    angel_10:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/angel10.gif",
    angel_2:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/angel2.gif",
    bagle:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/bagle.gif",
    bee: "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/bee.gif",
    bird: "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/bird.gif",
    boar: "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/boar.gif",
    bunny_brown:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/bunny-brown.gif",
    bunny_pink:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/bunny-pink.gif",
    bunny_white:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/bunny%20white.gif",
    cat_clap:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/cat-clap.gif",
    catsa:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/catsa.gif",
    chicken:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/chicken.gif",
    cupid:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/cupid.gif",
    dog: "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/dog.gif",
    dragon:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/dragon.gif",
    frog: "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/frog.gif",
    ghost:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/ghost.gif",
    girl: "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/girl.gif",
    girl_2:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/girl-2.gif",
    girl_3:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/girl-3.gif",
    girl_4:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/girl-4.gif",
    girl_5:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/girl-5.gif",
    girl_6:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/girl-6.gif",
    horse:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/horse.gif",
    mac_nursejoy:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/mac-nursejoy.gif",
    mlp_12:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/mlp_12.gif",
    monkey:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/monkey.gif",
    ohshc_8:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/ohshc8.gif",
    ox: "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/ox.gif",
    panda:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/panda.gif",
    panda_clap:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/panda-clap.gif",
    penguindrum_6:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/penguindrum6.png",
    rabbit:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/rabbit.gif",
    rat: "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/rat.gif",
    sakura_bouncing:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/sakura-bouncing.gif",
    sheep:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/sheep.gif",
    skeleton:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/skeleton.gif",
    snake:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/snake.gif",
    snowman:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/snowman.gif",
    squid:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/squid.gif",
    student:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/student.gif",
    tiger:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/tiger.gif",
    totoro_4:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/totoro4.gif",
    tumblr_nvpx7k5p:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/tumblr_inline_nvpx7k5pVq1t78dpp_500.gif",
    tumblr_o1olvx69x:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/tumblr_inline_o1olvx69xS1tjuw11_500.gif",
    tumblr_otzfv6:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/tumblr_inline_otzfv6WUim1tr8wqc_500.gif",
    tumblr_p44t3f:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/tumblr_inline_p44t3fN7681t78dpp_75sq.gif",
    unter_wasser_43:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/Unter_Wasser_43.gif",
    wtp_18:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/wtp18.gif",
  };
  const PROVIDERS = {
    uselessfacts: {
      name: "Random Useless Facts",
      credit: "Random Useless Facts",
      site: "https://uselessfacts.jsph.pl/",
      url: () => "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en",
      read: (d) => ({
        text: d?.text,
        detail: d?.source,
        detailUrl: d?.source_url,
      }),
    },
    uselessdaily: {
      name: "Useless Fact of the Day",
      credit: "Random Useless Facts",
      site: "https://uselessfacts.jsph.pl/",
      url: () => "https://uselessfacts.jsph.pl/api/v2/facts/today?language=en",
      read: (d) => ({
        text: d?.text,
        detail: d?.source,
        detailUrl: d?.source_url,
      }),
    },
    factfacts: {
      name: "FactFacts (categories)",
      credit: "FactFacts",
      site: "https://factfacts.com/",
      url: (el) => {
        const url = new URL("https://factfacts.com/api.php");
        const cat = attr(el, "category", "general");
        if (["science", "space", "animal", "general"].includes(cat))
          url.searchParams.set("cat", cat);
        return url.href;
      },
      read: (d) => ({ text: d?.fact?.text }),
    },
    drivebird: {
      name: "DriveBird Random Facts",
      credit: "DriveBird",
      site: "https://www.drivebird.com/content-api",
      url: () => "https://www.drivebird.com/api/random-facts/random?count=1",
      read: (d) => ({ text: d?.data?.[0]?.fact }),
    },
    drivebirddaily: {
      name: "DriveBird Fact of the Day",
      credit: "DriveBird",
      site: "https://www.drivebird.com/content-api",
      url: () => "https://www.drivebird.com/api/random-facts/today",
      read: (d) => ({ text: d?.data?.fact }),
    },
    tech: {
      name: "DriveBird Technology Facts",
      credit: "DriveBird",
      site: "https://www.drivebird.com/content-api",
      url: () => "https://www.drivebird.com/api/tech-facts/random?count=1",
      read: (d) => ({ text: d?.data?.[0]?.fact }),
    },
    techdaily: {
      name: "DriveBird Tech Fact of the Day",
      credit: "DriveBird",
      site: "https://www.drivebird.com/content-api",
      url: () => "https://www.drivebird.com/api/tech-facts/today",
      read: (d) => ({ text: d?.data?.fact }),
    },
    cat: {
      name: "Cat Facts",
      credit: "Cat Facts",
      site: "https://catfact.ninja/",
      url: () => "https://catfact.ninja/fact?max_length=230",
      read: (d) => ({ text: d?.fact }),
    },
    meowfacts: {
      name: "MeowFacts (experimental)",
      credit: "MeowFacts",
      site: "https://github.com/wh-iterabb-it/meowfacts",
      url: () => "https://meowfacts.herokuapp.com/",
      read: (d) => ({ text: d?.data?.[0] }),
    },
    dog: {
      name: "Dog Facts",
      credit: "Dog API",
      site: "https://dogapi.dog/",
      url: () => "https://dogapi.dog/api/v2/facts?limit=1",
      read: (d) => ({ text: d?.data?.[0]?.attributes?.body }),
    },
    dumb: {
      name: "Dumb APIs Random Facts",
      credit: "Dumb APIs",
      site: "https://dumbapis.com/docs/fact/",
      url: () => "https://dumbapis.com/fact",
      read: (d) => ({ text: d?.fact }),
    },
    dumbdaily: {
      name: "Dumb APIs Fact of the Day",
      credit: "Dumb APIs",
      site: "https://dumbapis.com/docs/daily-fact/",
      url: () => "https://dumbapis.com/daily/fact",
      read: (d) => ({ text: d?.fact }),
    },
  };
  const APIS = { auto: "Automatic (try multiple providers)" };
  Object.entries(PROVIDERS).forEach(([id, p]) => (APIS[id] = p.name));
  const BUBBLE = {
    left: "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/2-04.gif",
    middle:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/2-05.gif",
    right:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/2-06.gif",
  };
  const scriptEl = document.currentScript;
  const BASE =
    scriptEl && scriptEl.src
      ? new URL("./", scriptEl.src).href
      : new URL("./", location.href).href;
  const BORDER_FILLS = {
    none: "",
    stars_large:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/gold-snowflakes.gif",
    sand: "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/3.gif",
    stars_small:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/27.gif",
    stripes:
      "https://raw.githubusercontent.com/cjlaserna/neocities-snippets/refs/heads/main/widgets/didyouknow/34.gif",
  };
  function attr(el, key, fallback = "") {
    const v = el.getAttribute(key);
    return v == null || v === "" ? fallback : v;
  }
  function validColor(value, fallback) {
    if (!value) return fallback;
    const x = document.createElement("span");
    x.style.color = "";
    x.style.color = value;
    return x.style.color ? value : fallback;
  }
  function randomPreset() {
    const keys = Object.keys(PRESETS);
    return keys[Math.floor(Math.random() * keys.length)];
  }
  function characterUrl(el, pickNew = false) {
    const custom = attr(el, "custom-char").trim();
    if (custom && /^https?:\/\//i.test(custom)) return custom;
    const selected = attr(el, "character", "panda");
    if (selected === "random") {
      if (pickNew || !el.__dykRandomCharacter)
        el.__dykRandomCharacter = randomPreset();
      return PRESETS[el.__dykRandomCharacter] || PRESETS.panda;
    }
    return PRESETS[selected] || PRESETS.panda;
  }
  function borderFillKey(el) {
    const key = attr(el, "border-fill", "stars_small");
    return Object.prototype.hasOwnProperty.call(BORDER_FILLS, key)
      ? key
      : "stars_small";
  }
  function ensureStyles() {
    if (document.getElementById("dyk-widget-css")) return;

    const style = document.createElement("style");
    style.id = "dyk-widget-css";
    style.textContent = `
    .dyk-shell{display:inline-block;max-width:100%;box-sizing:border-box}
    .dyk-border{display:inline-block;max-width:100%;box-sizing:border-box;padding:8px;background-repeat:repeat;background-size:auto}
    .dyk-inner{max-width:100%;box-sizing:border-box;padding:4px}
    .dyk-box{max-width:100%;width:fit-content}
    .dyk-line{display:flex;align-items:center;gap:0;max-width:100%;width:fit-content}
    .dyk-character{max-width:80px;max-height:80px;object-fit:contain;flex:none;display:block}
    .dyk-bubble{display:flex;align-items:stretch;min-width:0;max-width:100%;width:fit-content}
    .dyk-bubble img{display:block;flex:none}
    .dyk-left{width:25px;height:65px}
    .dyk-right{width:15px;height:65px}

    .dyk-text{
      box-sizing:border-box;
      min-width:0;
      max-width:min(55ch,100%);
      width:fit-content;
      height:65px;
      padding:4px;
      background:url('${BUBBLE.middle}') repeat-x;
      background-size:auto 65px;
      display:flex;
      align-items:center;
      justify-content:center;
      overflow:hidden;
    }

    .dyk-text-inner{
      min-width:0;
      max-width:100%;
      font:12px/14px Arial,sans-serif;
      white-space:pre-wrap;
      overflow-wrap:anywhere;
      display:-webkit-box;
      -webkit-box-orient:vertical;
      -webkit-line-clamp:4;
      line-clamp:4;
      overflow:hidden;
    }

    .dyk-credits{
      display:grid;
      grid-template-columns:minmax(0,1fr) minmax(0,1fr);
      align-items:center;
      gap:8px;
      margin-top:4px;
      font:10px Arial,sans-serif;
    }

    .dyk-credit{
      min-width:0;
      overflow-wrap:anywhere;
    }

    .dyk-credit:last-child{
      text-align:right;
    }

    .dyk-actions{margin-top:4px}
    .dyk-box a{color:inherit}

    @media(max-width:240px){
      .dyk-character{max-width:50px;max-height:50px}
    }
  `;

    document.head.append(style);
  }

  function link(label, url) {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = label;
    return a;
  }
  function factCredit(container, result) {
    const credit = document.createElement("div");
    credit.className = "dyk-credit";
    const provider = PROVIDERS[result.provider];
    credit.append(
      "Facts: ",
      link(provider?.credit || "Unavailable", provider?.site || "#"),
    );
    container.append(credit);
  }
  function wrapWithBorder(el, inner) {
    const fill = BORDER_FILLS[borderFillKey(el)] || "";
    const tint = validColor(attr(el, "border-color", "#d5c066"), "#d5c066");
    const contentBg = validColor(attr(el, "content-bg", "#ffffff"), "#ffffff");
    const shell = document.createElement("div");
    shell.className = "dyk-shell";
    if (!fill) {
      inner.style.background = contentBg;
      shell.append(inner);
      return shell;
    }
    const border = document.createElement("div");
    border.className = "dyk-border";
    border.style.backgroundColor = tint;
    border.style.backgroundImage = `url('${fill}')`;
    border.style.backgroundBlendMode = "multiply";
    const innerWrap = document.createElement("div");
    innerWrap.className = "dyk-inner";
    innerWrap.style.background = contentBg;
    innerWrap.append(inner);
    border.append(innerWrap);
    shell.append(border);
    return shell;
  }
  function makeBubble(el, text, result) {
    const outer = document.createElement("div");
    outer.className = "dyk-box";

    const row = document.createElement("div");
    row.className = "dyk-line";

    const character = document.createElement("img");
    character.className = "dyk-character";
    character.alt = "";
    character.src = characterUrl(el);

    const bubble = document.createElement("div");
    bubble.className = "dyk-bubble";

    const left = document.createElement("img");
    left.className = "dyk-left";
    left.src = BUBBLE.left;
    left.alt = "";

    const middle = document.createElement("div");
    middle.className = "dyk-text";
    middle.title = text.replace(/<[^>]*>/g, "").trim();

    const textInner = document.createElement("div");
    textInner.className = "dyk-text-inner";
    textInner.innerHTML = text;

    middle.append(textInner);

    const right = document.createElement("img");
    right.className = "dyk-right";
    right.src = BUBBLE.right;
    right.alt = "";

    bubble.append(left, middle, right);
    row.append(character, bubble);
    outer.append(row);

    // Credits: two columns, source left and widget right.
    const credits = document.createElement("div");
    credits.className = "dyk-credits";

    if (result) {
      factCredit(credits, result);
    } else {
      const loading = document.createElement("div");
      loading.className = "dyk-credit";
      loading.textContent = "Facts: loading…";
      credits.append(loading);
    }

    const widgetCredit = document.createElement("div");
    widgetCredit.className = "dyk-credit";
    widgetCredit.append(
      "Widget by ",
      link("Cats Corner", "https://cats-corner.neocities.org/"),
    );

    credits.append(widgetCredit);
    outer.append(credits);

    if (attr(el, "refresh", "false") === "true") {
      const actions = document.createElement("div");
      actions.className = "dyk-actions";

      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = attr(el, "refresh-label", "New fact");

      btn.addEventListener("click", () =>
        render(el, {
          newCharacter: attr(el, "character", "panda") === "random",
        }),
      );

      actions.append(btn);
      outer.append(actions);
    }

    return wrapWithBorder(el, outer);
  }
  function preferredProviders(el) {
    const requested = attr(el, "api", "auto");
    if (requested !== "auto")
      return PROVIDERS[requested] ? [requested] : ["uselessfacts"];
    const cat = attr(el, "category", "general");
    if (cat === "cat") return ["cat", "meowfacts"];
    if (cat === "dog") return ["dog"];
    if (cat === "animal") return ["factfacts", "cat", "dog", "meowfacts"];
    if (cat === "science" || cat === "space") return ["factfacts"];
    if (cat === "tech") return ["tech", "techdaily"];
    return ["uselessfacts", "drivebird", "dumb", "factfacts"];
  }
  async function getFrom(id, el, signal) {
    const p = PROVIDERS[id];
    const response = await fetch(p.url(el), {
      signal,
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    if (!response.ok) throw Error(id + " HTTP " + response.status);
    const data = await response.json();
    const r = p.read(data);
    const text = String(r?.text || "").trim();
    if (!text) throw Error(id + " no text");
    return { text, provider: id, detail: r.detail, detailUrl: r.detailUrl };
  }
  async function retrieve(el, signal) {
    let last;
    for (const id of preferredProviders(el)) {
      if (signal.aborted) throw Error("Cancelled");
      const inner = new AbortController();
      const abort = () => inner.abort();
      signal.addEventListener("abort", abort, { once: true });
      const timeout = setTimeout(() => inner.abort(), 5500);
      try {
        return await getFrom(id, el, inner.signal);
      } catch (err) {
        last = err;
        if (signal.aborted) throw err;
      } finally {
        clearTimeout(timeout);
        signal.removeEventListener("abort", abort);
      }
    }
    throw last || Error("No fact source responded");
  }
  function displayFact(text) {
    return /^did you know\b/i.test(text)
      ? text
      : "<b>Did you know?</b> \n" + text;
  }
  async function render(el, opts = {}) {
    ensureStyles();
    if (el.__dykController) el.__dykController.abort();
    if (opts.newCharacter) characterUrl(el, true);
    else characterUrl(el, false);
    const controller = new AbortController();
    el.__dykController = controller;
    const req = (el.__dykReq || 0) + 1;
    el.__dykReq = req;
    const previous = el.__dykFact;
    el.replaceChildren(
      makeBubble(el, previous?.text || "Loading a fact…", previous),
    );
    try {
      const result = await retrieve(el, controller.signal);
      if (controller.signal.aborted || req !== el.__dykReq) return;
      result.text = displayFact(result.text);
      el.__dykFact = result;
      el.replaceChildren(makeBubble(el, result.text, result));
    } catch (err) {
      if (controller.signal.aborted || req !== el.__dykReq) return;
      el.replaceChildren(
        makeBubble(
          el,
          previous?.text || "Could not load a fact. Try again.",
          previous,
        ),
      );
    }
  }
  function setCharacter(el, character, customUrl = "") {
    el.setAttribute("character", character);
    if (customUrl) el.setAttribute("custom-char", customUrl);
    else el.removeAttribute("custom-char");
    if (character === "random") el.__dykRandomCharacter = randomPreset();
    ensureStyles();
    el.replaceChildren(
      makeBubble(el, el.__dykFact?.text || "Loading a fact…", el.__dykFact),
    );
  }
  function repaint(el) {
    ensureStyles();

    el.replaceChildren(
      makeBubble(el, el.__dykFact?.text || "Loading a fact…", el.__dykFact),
    );
  }
  function init() {
    document
      .querySelectorAll("#did-you-know,[data-did-you-know]")
      .forEach((el) => render(el));
  }
  window.DidYouKnowWidget = {
    presets: PRESETS,
    apis: APIS,
    borderFills: BORDER_FILLS,
    render,
    setCharacter,
    repaint,
    init,
    randomPreset,
  };
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init);
  else init();
})();
