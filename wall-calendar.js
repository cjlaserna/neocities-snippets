/* Mini Wall Calendar — vanilla JavaScript, no dependencies */
(() => {
  "use strict";

  const presetPairs = `126:KjxWqskX,116:1YjMfbMM,124:vKvcbxb,108:xKNV7z24,117:ZR8y8GcN,109:0RcY9RK5,110:0yfB3V7V,118:39VknHJs,111:PG0FtxXX,119:CKkLTZ1s,112:GQWS9B1L,120:gbyHFjHx,121:GfxTK2Yv,113:WvWBYQmQ,122:r2hBDZ0D,114:DDLgkWjT,115:mrvfZdjD,123:Hfj50VTk,107:Q7BSwxsY,105:NgHm1HrC,106:zhXmG3gT,102:dwbWx9m2,104:bMWzBLTd,92:bgj9P5R0,100:0jQ4qDhs,101:7J7GDgj7,93:PZyWK8dp,94:rK3wG9Bz,95:sdGVyZJ1,96:gFSRj2JD,97:d0H7LF93,91:BKNJ3zZQ,98:35mbMYBb,99:G3kyc2tn,88:ycxtjgm3,89:d389vx1,90:2YvL1T3w,85:HfGHtkC6,86:gYSK7Ht,87:wZTttqZX,76:nN97SzSY,84:93bDpkgg,77:1G1FCSN7,78:fY7LdR83,79:3YPpjmYS,80:GvCMqZJN,81:Y4kNN5Vg,82:tTJqd062,83:5X2mXJfn,74:9kYQHhx0,75:5xJ6d0qP,70:35bVz9jd,72:39sMMNkJ,73:sJsJjvvx,67:Q32jvLBW,68:LDvwV81L,69:Jj8hrh0j,59:3mkDB89t,60:GfNN52Y8,61:zH08fhKQ,62:qFXYpXgW,63:j1WsQTf,64:609J8GPP,65:x82vCKtb,58:s9bBQDBH,66:RTCbs6cL,56:tPLYh750,57:Q3pf95NY,54:svcKPJfm,55:qLPkQB02,51:67kxnx27,53:XxX06v9N,44:rGvcWgGw,52:BVKsQ4j4,45:qFY615mG,46:KBNMmD3,47:2YSzw1wx,48:7N17LTj7,49:XxQpgp0R,40:vxPc2FGs,41:HDqxLPPL,38:FkQ06n3w,39:GQy9232B,37:jvvJFr4q,28:8gmkvnhv,29:SXqzJdb9,30:sDGsgC9,31:b5zDMHM8,32:W49tNDF3,34:1G6fJfw7,24:nNr2CCY5,25:v6Gf6NfB,26:RqVHXF1,21:9m2tM5Qk,22:JW8BzWXc,23:DPQ5QpWZ,19:Jj5JyY1x,20:FkpLhPnh,10:wNGGqz5h,11:wFp8r159,12:tPv2k1Nm,13:1GbszSBL,14:kgk2frgJ,15:R4JH0msp,17:wNdGHyHs,18:zVWC2xRf,7:hQrcMCf,9:nsBMXn7V,4:HLjyxj74,3:Qj8gdWN1,1:Q3wyXchx,2:spzMTV8b,125:PvbgGNz2`;
  const presets = Object.fromEntries(
    presetPairs.split(",").map((pair) => {
      const [id, code] = pair.split(":");
      return [id, `https://i.ibb.co/${code}/${id}.gif`];
    }),
  );

  const frameUrl =
    "https://github.com/cjlaserna/neocities-snippets/blob/main/widgets/calendar.gif?raw=true";

  const css = `
    .mc-root {
      position: relative;
      width: 99px;
      height: 198px;
      box-sizing: border-box;
      isolation: isolate;
      overflow: hidden;
      line-height: 1;
      font-family: monospace;
      font-weight: normal;
    }
    .mc-root.mc-extended { height: 212px; }
    .mc-art {
      position: absolute;
      left: 1px;
      top: 1px;
      width: 97px;
      height: 98px;
      object-fit: cover;
      z-index: 0;
    }
    .mc-frame {
      position: absolute;
      left: 0;
      top: 0;
      width: 99px;
      height: 198px;
      z-index: 1;
      pointer-events: none;
      image-rendering: pixelated;
    }
    .mc-month {
      position: absolute;
      top: 99px;
      left: 1px;
      width: 97px;
      height: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      background: var(--mc-title-bg);
      color: var(--mc-title);
      font-size: 9px;
      line-height: 1;
      font-weight: bold;
      white-space: nowrap;
      z-index: 2;
    }
    .mc-month span { margin-top: 1px; }
    .mc-weekdays {
      position: absolute;
      top: 113px;
      left: 0;
      width: 98px;
      height: 14px;
      display: grid;
      grid-template-columns: repeat(7, 14px);
      grid-template-rows: 14px;
      z-index: 2;
    }
    .mc-weekdays span,
    .mc-day {
      width: 13px;
      height: 13px;
      margin-left: 1px;
      margin-top: 1px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--mc-cell);
      color: var(--mc-text);
      text-align: center;
      line-height: 1;
    }
    .mc-weekdays span { font-size: 8px; }
    .mc-days {
      position: absolute;
      top: 127px;
      left: 0;
      width: 98px;
      height: 70px;
      display: grid;
      grid-template-columns: repeat(7, 14px);
      grid-template-rows: repeat(5, 14px);
      z-index: 2;
    }
    .mc-day { font-size: 8px; }
    .mc-today {
      background: var(--mc-today);
      font-weight: bold;
    }
    .mc-days.mc-six-weeks {
      height: 84px;
      grid-template-rows: repeat(6, 14px);
    }
    /* Additional row: the original GIF ends at y=197. */
    .mc-root.mc-extended::after {
      content: "";
      position: absolute;
      top: 197px;
      left: 0;
      width: 99px;
      height: 15px;
      background: var(--mc-grid);
      z-index: 1;
      pointer-events: none;
    }
  `;

  if (!document.getElementById("mc-widget-style")) {
    const style = document.createElement("style");
    style.id = "mc-widget-style";
    style.textContent = css;
    document.head.appendChild(style);
  }

  const fonts = {
    cascadia_code: ["Cascadia Code", "Cascadia+Code:wght@400;700"],
    cutive_mono: ["Cutive Mono", "Cutive+Mono"],
    fira_mono: ["Fira Mono", "Fira+Mono:wght@400;700"],
    geist_pixel: ["Geist Pixel", "Geist+Pixel"],
    handjet: ["Handjet", "Handjet:wght@400;700"],
    intel_one_mono: ["Intel One Mono", "Intel+One+Mono:wght@400;700"],
    kode_mono: ["Kode Mono", "Kode+Mono:wght@400;700"],
    lekton: ["Lekton", "Lekton:wght@400;700"],
    reddit_mono: ["Reddit Mono", "Reddit+Mono:wght@400;700"],
    roboto_mono: ["Roboto Mono", "Roboto+Mono:wght@400;700"],
    suse_mono: ["SUSE Mono", "SUSE+Mono:wght@400;700"],
    source_code_pro: ["Source Code Pro", "Source+Code+Pro:wght@400;700"],
    ubuntu_mono: ["Ubuntu Mono", "Ubuntu+Mono:wght@400;700"],
    ubuntu_sans_mono: ["Ubuntu Sans Mono", "Ubuntu+Sans+Mono:wght@400;700"],
    vt323: ["VT323", "VT323"],
  };

  function loadFont(slug) {
    const selected = Object.hasOwn(fonts, slug) ? slug : "vt323";
    const [name, family] = fonts[selected];
    if (!document.querySelector(`link[data-mc-font="${selected}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `https://fonts.googleapis.com/css2?family=${family}&display=swap`;
      link.dataset.mcFont = selected;
      document.head.appendChild(link);
    }
    return `"${name}", monospace`;
  }

  function render(host) {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const startMonday = host.getAttribute("week_start") === "mon";
    const firstWeekday = new Date(year, month, 1).getDay();
    const offset = (firstWeekday - (startMonday ? 1 : 0) + 7) % 7;
    const count = new Date(year, month + 1, 0).getDate();
    const needsSixWeeks = offset + count > 35;
    const cellCount = needsSixWeeks ? 42 : 35;
    const picture =
      host.getAttribute("custom-img")?.trim() ||
      presets[host.getAttribute("preset-img")] ||
      presets["12"];

    const root = document.createElement("div");
    root.className = needsSixWeeks ? "mc-root mc-extended" : "mc-root";
    root.style.fontFamily = loadFont(host.getAttribute("font"));

    for (const [attr, variable, fallback] of [
      ["grid-color", "--mc-grid", "#ff80d5"],
      ["cell-color", "--mc-cell", "#ffffbd"],
      ["text-color", "--mc-text", "#333333"],
      ["today-color", "--mc-today", "#ffa8e7"],
      ["title-color", "--mc-title", "#333333"],
      ["title-bg-color", "--mc-title-bg", "#bdbdff"],
    ]) {
      const color = host.getAttribute(attr);
      root.style.setProperty(
        variable,
        color && CSS.supports("color", color) ? color : fallback,
      );
    }

    const art = document.createElement("img");
    art.className = "mc-art";
    art.src = picture;
    art.alt = "";

    const frame = document.createElement("img");
    frame.className = "mc-frame";
    frame.src = frameUrl;
    frame.alt = "";

    const title = document.createElement("div");
    title.className = "mc-month";
    const titleText = document.createElement("span");
    titleText.textContent = today.toLocaleDateString(undefined, {
      month: "long",
      year: "numeric",
    });
    title.appendChild(titleText);

    const weekdays = document.createElement("div");
    weekdays.className = "mc-weekdays";
    const labels = startMonday
      ? ["M", "T", "W", "T", "F", "S", "S"]
      : ["S", "M", "T", "W", "T", "F", "S"];
    for (const label of labels) {
      const cell = document.createElement("span");
      cell.textContent = label;
      weekdays.appendChild(cell);
    }

    const days = document.createElement("div");
    days.className = needsSixWeeks ? "mc-days mc-six-weeks" : "mc-days";

    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement("div");
      cell.className = "mc-day";
      const day = i - offset + 1;
      if (day >= 1 && day <= count) {
        cell.textContent = String(day);
        if (day === today.getDate()) {
          cell.classList.add("mc-today");
          cell.setAttribute("aria-current", "date");
        }
      }
      days.appendChild(cell);
    }

    root.append(art, frame, title, weekdays, days);
    host.replaceChildren(root);
    host.setAttribute("role", "img");
    host.setAttribute(
      "aria-label",
      today.toLocaleDateString(undefined, { month: "long", year: "numeric" }) +
        " calendar",
    );
  }

  function init() {
    document
      .querySelectorAll("#calendar, #wall-calendar, [data-mini-calendar]")
      .forEach(render);
  }

  window.MiniCalendar = { presets, render, init };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

