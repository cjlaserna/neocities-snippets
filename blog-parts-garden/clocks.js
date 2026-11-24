(() => {
  'use strict';
  const script = document.currentScript;
  const base = new URL('.', script.src || location.href);
  const clocks = {
  "analogsimpleclock01": {
    "name": "AnalogSimpleClock01",
    "width": 160,
    "height": 160,
    "hands": [
      {
        "kind": "minute",
        "src": "assets/analogsimpleclock01/minute.png",
        "x": 80,
        "y": 87,
        "left": -9,
        "top": -69.4,
        "sx": 0.8,
        "sy": 0.8,
        "offset": 0
      },
      {
        "kind": "hour",
        "src": "assets/analogsimpleclock01/hour.png",
        "x": 80,
        "y": 87,
        "left": -7.25,
        "top": -38,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/analogsimpleclock01/second.png",
        "x": 80,
        "y": 87,
        "left": -6.1,
        "top": -52.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "background": "assets/analogsimpleclock01/background.png"
  },
  "blogparts-otometokei-trans-red-checker": {
    "name": "Otometokei Red Checker (Transparent)",
    "width": 240,
    "height": 344,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/blogparts-otometokei-trans/hour.png",
        "x": 119.5,
        "y": 174.1,
        "left": -6.25,
        "top": -51.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "minute",
        "src": "assets/blogparts-otometokei-trans/minute.png",
        "x": 119.75,
        "y": 174.75,
        "left": -6.75,
        "top": -70,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/blogparts-otometokei-trans/second.png",
        "x": 119.35,
        "y": 174.75,
        "left": -4.5,
        "top": -69.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "overlays": [
      {
        "src": "assets/blogparts-otometokei-trans/overlay-0.png",
        "x": 114.3,
        "y": 169.35,
        "scale": 1
      }
    ],
    "background": "assets/blogparts-otometokei-trans/skin-red-checker.png"
  },
  "blogparts-otometokei-trans": {
    "name": "Otometokei Pink (Transparent)",
    "width": 240,
    "height": 344,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/blogparts-otometokei-trans/hour.png",
        "x": 119.5,
        "y": 174.1,
        "left": -6.25,
        "top": -51.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "minute",
        "src": "assets/blogparts-otometokei-trans/minute.png",
        "x": 119.75,
        "y": 174.75,
        "left": -6.75,
        "top": -70,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/blogparts-otometokei-trans/second.png",
        "x": 119.35,
        "y": 174.75,
        "left": -4.5,
        "top": -69.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "overlays": [
      {
        "src": "assets/blogparts-otometokei-trans/overlay-0.png",
        "x": 114.3,
        "y": 169.35,
        "scale": 1
      }
    ],
    "background": "assets/blogparts-otometokei-trans/skin-pink.png"
  },
  "blogparts-otometokei-trans-pink-polka": {
    "name": "Otometokei Pink Polka (Transparent)",
    "width": 240,
    "height": 344,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/blogparts-otometokei-trans/hour.png",
        "x": 119.5,
        "y": 174.1,
        "left": -6.25,
        "top": -51.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "minute",
        "src": "assets/blogparts-otometokei-trans/minute.png",
        "x": 119.75,
        "y": 174.75,
        "left": -6.75,
        "top": -70,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/blogparts-otometokei-trans/second.png",
        "x": 119.35,
        "y": 174.75,
        "left": -4.5,
        "top": -69.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "overlays": [
      {
        "src": "assets/blogparts-otometokei-trans/overlay-0.png",
        "x": 114.3,
        "y": 169.35,
        "scale": 1
      }
    ],
    "background": "assets/blogparts-otometokei-trans/skin-pink-polka.png"
  },
  "blogparts-otometokei-trans-blue": {
    "name": "Otometokei Blue (Transparent)",
    "width": 240,
    "height": 344,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/blogparts-otometokei-trans/hour.png",
        "x": 119.5,
        "y": 174.1,
        "left": -6.25,
        "top": -51.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "minute",
        "src": "assets/blogparts-otometokei-trans/minute.png",
        "x": 119.75,
        "y": 174.75,
        "left": -6.75,
        "top": -70,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/blogparts-otometokei-trans/second.png",
        "x": 119.35,
        "y": 174.75,
        "left": -4.5,
        "top": -69.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "overlays": [
      {
        "src": "assets/blogparts-otometokei-trans/overlay-0.png",
        "x": 114.3,
        "y": 169.35,
        "scale": 1
      }
    ],
    "background": "assets/blogparts-otometokei-trans/skin-blue.png"
  },
  "blogparts-otometokei-trans-yellow": {
    "name": "Otometokei Yellow (Transparent)",
    "width": 240,
    "height": 344,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/blogparts-otometokei-trans/hour.png",
        "x": 119.5,
        "y": 174.1,
        "left": -6.25,
        "top": -51.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "minute",
        "src": "assets/blogparts-otometokei-trans/minute.png",
        "x": 119.75,
        "y": 174.75,
        "left": -6.75,
        "top": -70,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/blogparts-otometokei-trans/second.png",
        "x": 119.35,
        "y": 174.75,
        "left": -4.5,
        "top": -69.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "overlays": [
      {
        "src": "assets/blogparts-otometokei-trans/overlay-0.png",
        "x": 114.3,
        "y": 169.35,
        "scale": 1
      }
    ],
    "background": "assets/blogparts-otometokei-trans/skin-yellow.png"
  },
  "blogparts-otometokei-trans-light-blue": {
    "name": "Otometokei Light Blue (Transparent)",
    "width": 240,
    "height": 344,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/blogparts-otometokei-trans/hour.png",
        "x": 119.5,
        "y": 174.1,
        "left": -6.25,
        "top": -51.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "minute",
        "src": "assets/blogparts-otometokei-trans/minute.png",
        "x": 119.75,
        "y": 174.75,
        "left": -6.75,
        "top": -70,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/blogparts-otometokei-trans/second.png",
        "x": 119.35,
        "y": 174.75,
        "left": -4.5,
        "top": -69.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "overlays": [
      {
        "src": "assets/blogparts-otometokei-trans/overlay-0.png",
        "x": 114.3,
        "y": 169.35,
        "scale": 1
      }
    ],
    "background": "assets/blogparts-otometokei-trans/skin-light-blue.png"
  },
  "blogparts-otometokei-trans-silver": {
    "name": "Otometokei Silver (Transparent)",
    "width": 240,
    "height": 344,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/blogparts-otometokei-trans/hour.png",
        "x": 119.5,
        "y": 174.1,
        "left": -6.25,
        "top": -51.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "minute",
        "src": "assets/blogparts-otometokei-trans/minute.png",
        "x": 119.75,
        "y": 174.75,
        "left": -6.75,
        "top": -70,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/blogparts-otometokei-trans/second.png",
        "x": 119.35,
        "y": 174.75,
        "left": -4.5,
        "top": -69.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "overlays": [
      {
        "src": "assets/blogparts-otometokei-trans/overlay-0.png",
        "x": 114.3,
        "y": 169.35,
        "scale": 1
      }
    ],
    "background": "assets/blogparts-otometokei-trans/skin-silver.png"
  },
  "blogparts-otometokei-trans-pink-diamonds": {
    "name": "Otometokei Pink Diamonds (Transparent)",
    "width": 240,
    "height": 344,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/blogparts-otometokei-trans/hour.png",
        "x": 119.5,
        "y": 174.1,
        "left": -6.25,
        "top": -51.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "minute",
        "src": "assets/blogparts-otometokei-trans/minute.png",
        "x": 119.75,
        "y": 174.75,
        "left": -6.75,
        "top": -70,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/blogparts-otometokei-trans/second.png",
        "x": 119.35,
        "y": 174.75,
        "left": -4.5,
        "top": -69.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "overlays": [
      {
        "src": "assets/blogparts-otometokei-trans/overlay-0.png",
        "x": 114.3,
        "y": 169.35,
        "scale": 1
      }
    ],
    "background": "assets/blogparts-otometokei-trans/skin-pink-diamonds.png"
  },
  "blogparts-otometokei-trans-pink-checker": {
    "name": "Otometokei Pink Checker (Transparent)",
    "width": 240,
    "height": 344,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/blogparts-otometokei-trans/hour.png",
        "x": 119.5,
        "y": 174.1,
        "left": -6.25,
        "top": -51.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "minute",
        "src": "assets/blogparts-otometokei-trans/minute.png",
        "x": 119.75,
        "y": 174.75,
        "left": -6.75,
        "top": -70,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/blogparts-otometokei-trans/second.png",
        "x": 119.35,
        "y": 174.75,
        "left": -4.5,
        "top": -69.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "overlays": [
      {
        "src": "assets/blogparts-otometokei-trans/overlay-0.png",
        "x": 114.3,
        "y": 169.35,
        "scale": 1
      }
    ],
    "background": "assets/blogparts-otometokei-trans/skin-pink-checker.png"
  },
  "blogparts-otometokei-trans-cream": {
    "name": "Otometokei Cream (Transparent)",
    "width": 240,
    "height": 344,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/blogparts-otometokei-trans/hour.png",
        "x": 119.5,
        "y": 174.1,
        "left": -6.25,
        "top": -51.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "minute",
        "src": "assets/blogparts-otometokei-trans/minute.png",
        "x": 119.75,
        "y": 174.75,
        "left": -6.75,
        "top": -70,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/blogparts-otometokei-trans/second.png",
        "x": 119.35,
        "y": 174.75,
        "left": -4.5,
        "top": -69.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "overlays": [
      {
        "src": "assets/blogparts-otometokei-trans/overlay-0.png",
        "x": 114.3,
        "y": 169.35,
        "scale": 1
      }
    ],
    "background": "assets/blogparts-otometokei-trans/skin-cream.png"
  },
  "blogparts-otometokei-trans-green": {
    "name": "Otometokei Green (Transparent)",
    "width": 240,
    "height": 344,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/blogparts-otometokei-trans/hour.png",
        "x": 119.5,
        "y": 174.1,
        "left": -6.25,
        "top": -51.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "minute",
        "src": "assets/blogparts-otometokei-trans/minute.png",
        "x": 119.75,
        "y": 174.75,
        "left": -6.75,
        "top": -70,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/blogparts-otometokei-trans/second.png",
        "x": 119.35,
        "y": 174.75,
        "left": -4.5,
        "top": -69.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "overlays": [
      {
        "src": "assets/blogparts-otometokei-trans/overlay-0.png",
        "x": 114.3,
        "y": 169.35,
        "scale": 1
      }
    ],
    "background": "assets/blogparts-otometokei-trans/skin-green.png"
  },
  "blogparts-otometokei-trans-black-polka": {
    "name": "Otometokei Black Polka (Transparent)",
    "width": 240,
    "height": 344,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/blogparts-otometokei-trans/hour.png",
        "x": 119.5,
        "y": 174.1,
        "left": -6.25,
        "top": -51.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "minute",
        "src": "assets/blogparts-otometokei-trans/minute.png",
        "x": 119.75,
        "y": 174.75,
        "left": -6.75,
        "top": -70,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/blogparts-otometokei-trans/second.png",
        "x": 119.35,
        "y": 174.75,
        "left": -4.5,
        "top": -69.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "overlays": [
      {
        "src": "assets/blogparts-otometokei-trans/overlay-0.png",
        "x": 114.3,
        "y": 169.35,
        "scale": 1
      }
    ],
    "background": "assets/blogparts-otometokei-trans/skin-black-polka.png"
  },
  "blogparts-otometokei-trans-teal": {
    "name": "Otometokei Teal (Transparent)",
    "width": 240,
    "height": 344,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/blogparts-otometokei-trans/hour.png",
        "x": 119.5,
        "y": 174.1,
        "left": -6.25,
        "top": -51.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "minute",
        "src": "assets/blogparts-otometokei-trans/minute.png",
        "x": 119.75,
        "y": 174.75,
        "left": -6.75,
        "top": -70,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/blogparts-otometokei-trans/second.png",
        "x": 119.35,
        "y": 174.75,
        "left": -4.5,
        "top": -69.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "overlays": [
      {
        "src": "assets/blogparts-otometokei-trans/overlay-0.png",
        "x": 114.3,
        "y": 169.35,
        "scale": 1
      }
    ],
    "background": "assets/blogparts-otometokei-trans/skin-teal.png"
  },
  "blogparts-otometokei-trans-lavender": {
    "name": "Otometokei Lavender (Transparent)",
    "width": 240,
    "height": 344,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/blogparts-otometokei-trans/hour.png",
        "x": 119.5,
        "y": 174.1,
        "left": -6.25,
        "top": -51.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "minute",
        "src": "assets/blogparts-otometokei-trans/minute.png",
        "x": 119.75,
        "y": 174.75,
        "left": -6.75,
        "top": -70,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/blogparts-otometokei-trans/second.png",
        "x": 119.35,
        "y": 174.75,
        "left": -4.5,
        "top": -69.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "overlays": [
      {
        "src": "assets/blogparts-otometokei-trans/overlay-0.png",
        "x": 114.3,
        "y": 169.35,
        "scale": 1
      }
    ],
    "background": "assets/blogparts-otometokei-trans/skin-lavender.png"
  },
  "blogparts-otometokei-trans-black-gingham": {
    "name": "Otometokei Black Gingham (Transparent)",
    "width": 240,
    "height": 344,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/blogparts-otometokei-trans/hour.png",
        "x": 119.5,
        "y": 174.1,
        "left": -6.25,
        "top": -51.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "minute",
        "src": "assets/blogparts-otometokei-trans/minute.png",
        "x": 119.75,
        "y": 174.75,
        "left": -6.75,
        "top": -70,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/blogparts-otometokei-trans/second.png",
        "x": 119.35,
        "y": 174.75,
        "left": -4.5,
        "top": -69.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "overlays": [
      {
        "src": "assets/blogparts-otometokei-trans/overlay-0.png",
        "x": 114.3,
        "y": 169.35,
        "scale": 1
      }
    ],
    "background": "assets/blogparts-otometokei-trans/skin-black-gingham.png"
  },
  "blogparts-otometokei-trans-magenta-gingham": {
    "name": "Otometokei Magenta Gingham (Transparent)",
    "width": 240,
    "height": 344,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/blogparts-otometokei-trans/hour.png",
        "x": 119.5,
        "y": 174.1,
        "left": -6.25,
        "top": -51.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "minute",
        "src": "assets/blogparts-otometokei-trans/minute.png",
        "x": 119.75,
        "y": 174.75,
        "left": -6.75,
        "top": -70,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/blogparts-otometokei-trans/second.png",
        "x": 119.35,
        "y": 174.75,
        "left": -4.5,
        "top": -69.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "overlays": [
      {
        "src": "assets/blogparts-otometokei-trans/overlay-0.png",
        "x": 114.3,
        "y": 169.35,
        "scale": 1
      }
    ],
    "background": "assets/blogparts-otometokei-trans/skin-magenta-gingham.png"
  },
  "blogparts-otometokei-trans-pink-gingham": {
    "name": "Otometokei Pink Gingham (Transparent)",
    "width": 240,
    "height": 344,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/blogparts-otometokei-trans/hour.png",
        "x": 119.5,
        "y": 174.1,
        "left": -6.25,
        "top": -51.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "minute",
        "src": "assets/blogparts-otometokei-trans/minute.png",
        "x": 119.75,
        "y": 174.75,
        "left": -6.75,
        "top": -70,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/blogparts-otometokei-trans/second.png",
        "x": 119.35,
        "y": 174.75,
        "left": -4.5,
        "top": -69.5,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "overlays": [
      {
        "src": "assets/blogparts-otometokei-trans/overlay-0.png",
        "x": 114.3,
        "y": 169.35,
        "scale": 1
      }
    ],
    "background": "assets/blogparts-otometokei-trans/skin-pink-gingham.png"
  },
  "clock01": {
    "name": "clock01",
    "width": 160,
    "height": 237,
    "hands": [
      {
        "kind": "minute",
        "src": "assets/clock01/minute.png",
        "x": 78.75,
        "y": 79.25,
        "left": -79,
        "top": -79,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "hour",
        "src": "assets/clock01/hour.png",
        "x": 78.75,
        "y": 79.25,
        "left": -79,
        "top": -79,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/clock01/second.png",
        "x": 78.75,
        "y": 79.25,
        "left": -79,
        "top": -78,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "background": "assets/clock01/background.png"
  },
  "clock02-01": {
    "name": "clock02_01",
    "width": 150,
    "height": 200,
    "hands": [
      {
        "kind": "minute",
        "src": "assets/clock02-01/minute.png",
        "x": 75.3,
        "y": 91.4,
        "left": -5.45,
        "top": -57.05,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "hour",
        "src": "assets/clock02-01/hour.png",
        "x": 75.35,
        "y": 91.4,
        "left": -5.5,
        "top": -44,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/clock02-01/second.png",
        "x": 75.6,
        "y": 91.45,
        "left": -12.45,
        "top": -33.05,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "background": "assets/clock02-01/background.png"
  },
  "clock02-02": {
    "name": "clock02_02",
    "width": 150,
    "height": 200,
    "hands": [
      {
        "kind": "minute",
        "src": "assets/clock02-02/minute.png",
        "x": 75.3,
        "y": 91.4,
        "left": -5.45,
        "top": -57.05,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "hour",
        "src": "assets/clock02-02/hour.png",
        "x": 75.35,
        "y": 91.4,
        "left": -5.5,
        "top": -44,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "overlays": [
      {
        "src": "assets/clock02-02/overlay-0.png",
        "x": 71.85,
        "y": 87.7,
        "scale": 1
      }
    ],
    "background": "assets/clock02-02/background.png"
  },
  "clock02-03": {
    "name": "clock02_03",
    "width": 150,
    "height": 200,
    "hands": [
      {
        "kind": "minute",
        "src": "assets/clock02-03/minute.png",
        "x": 73.3,
        "y": 91.4,
        "left": -5.45,
        "top": -57.05,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "hour",
        "src": "assets/clock02-03/hour.png",
        "x": 75.3,
        "y": 91.4,
        "left": -5.5,
        "top": -44,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/clock02-03/second.png",
        "x": 75.6,
        "y": 92.45,
        "left": -17.45,
        "top": -81.1,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "overlays": [
      {
        "src": "assets/clock02-03/overlay-0.png",
        "x": 70.65,
        "y": 87.2,
        "scale": 0.685
      }
    ],
    "background": "assets/clock02-03/background.png"
  },
  "clock06-05": {
    "name": "clock06_05",
    "width": 160,
    "height": 120,
    "hands": [],
    "texts": [
      {
        "field": "date",
        "x": 10,
        "y": 22,
        "size": 18,
        "color": "#dcb049",
        "font": "\"Noto Sans JP\", sans-serif",
        "weight": "normal",
        "align": "left"
      },
      {
        "field": "hm",
        "x": 100,
        "y": 102,
        "size": 30,
        "color": "#87773d",
        "font": "\"Noto Sans JP\", sans-serif",
        "weight": "normal",
        "align": "center"
      }
    ],
    "sprites": [],
    "background": "assets/clock06-05/background.png"
  },
  "clock06-08": {
    "name": "clock06_08",
    "width": 160,
    "height": 120,
    "hands": [],
    "texts": [
      {
        "field": "date",
        "x": 80,
        "y": 39,
        "size": 17,
        "color": "#e8001e",
        "font": "\"Yuji Syuku\", serif",
        "weight": "normal",
        "align": "center"
      },
      {
        "field": "hm",
        "x": 80,
        "y": 60,
        "size": 28,
        "color": "#000000",
        "font": "\"Yuji Syuku\", serif",
        "weight": "normal",
        "align": "center"
      }
    ],
    "sprites": [],
    "background": "assets/clock06-08/background.png"
  },
  "clockwidget-analog": {
    "name": "clockwidget (1)",
    "width": 160,
    "height": 160,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/clockwidget-analog/hour.png",
        "x": 80,
        "y": 80,
        "left": -9.5,
        "top": -6.5,
        "sx": 0.9996,
        "sy": 0.97755,
        "offset": -90
      },
      {
        "kind": "minute",
        "src": "assets/clockwidget-analog/minute.png",
        "x": 80,
        "y": 80,
        "left": -9.5,
        "top": -7.5,
        "sx": 0.99974,
        "sy": 0.9823,
        "offset": -90
      },
      {
        "kind": "second",
        "src": "assets/clockwidget-analog/second.png",
        "x": 80,
        "y": 79.5,
        "left": -16,
        "top": -3.5,
        "sx": 1.0003,
        "sy": 0.97484,
        "offset": -90
      }
    ],
    "texts": [],
    "sprites": [],
    "background": "assets/clockwidget-analog/background.png"
  },
  "clockwidget": {
    "name": "clockwidget",
    "width": 160,
    "height": 160,
    "hands": [],
    "texts": [
      {
        "field": "hms",
        "x": 80,
        "y": 80,
        "size": 11,
        "color": "#ffffff",
        "font": "\"VT323\", monospace",
        "weight": "normal",
        "align": "center"
      }
    ],
    "sprites": [],
    "background": "assets/clockwidget/background.png"
  },
  "haruurara-analog": {
    "name": "haruurara_analog",
    "width": 160,
    "height": 160,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/haruurara-analog/hour.png",
        "x": 70.15,
        "y": 81.45,
        "left": -10,
        "top": -39,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "minute",
        "src": "assets/haruurara-analog/minute.png",
        "x": 70.15,
        "y": 81.45,
        "left": -9.5,
        "top": -48,
        "sx": 1,
        "sy": 1,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/haruurara-analog/second.png",
        "x": 70.15,
        "y": 81.45,
        "left": -7.5,
        "top": -54,
        "sx": 1,
        "sy": 1,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "background": "assets/haruurara-analog/background.png"
  },
  "koiclock": {
    "name": "koiclock",
    "width": 160,
    "height": 220,
    "hands": [
      {
        "kind": "hour",
        "src": "assets/koiclock/hour.png",
        "x": 80,
        "y": 77,
        "left": -5,
        "top": -22,
        "sx": 1.176,
        "sy": 1.176,
        "offset": 0
      },
      {
        "kind": "minute",
        "src": "assets/koiclock/minute.png",
        "x": 80,
        "y": 77,
        "left": -3.5,
        "top": -43,
        "sx": 1.176,
        "sy": 1.176,
        "offset": 0
      },
      {
        "kind": "second",
        "src": "assets/koiclock/second.png",
        "x": 80,
        "y": 77,
        "left": -3,
        "top": -55,
        "sx": 1.176,
        "sy": 1.176,
        "offset": 0
      }
    ],
    "texts": [],
    "sprites": [],
    "background": "assets/koiclock/background.png",
    "pendulum": {
      "src": "assets/koiclock/pendulum.png",
      "x": 77,
      "y": 149,
      "left": -77,
      "top": 0
    }
  },
  "nekomimi": {
    "name": "nekomimi",
    "width": 150,
    "height": 215,
    "hands": [],
    "texts": [],
    "sprites": [
      {
        "field": "H0",
        "srcs": [
          "assets/nekomimi/40-0.png",
          "assets/nekomimi/40-1.png",
          "assets/nekomimi/40-2.png",
          "assets/nekomimi/40-3.png",
          "assets/nekomimi/40-4.png",
          "assets/nekomimi/40-5.png",
          "assets/nekomimi/40-6.png",
          "assets/nekomimi/40-7.png",
          "assets/nekomimi/40-8.png",
          "assets/nekomimi/40-9.png"
        ],
        "x": 18.65,
        "y": 45.05,
        "w": 17.28,
        "h": 12.24
      },
      {
        "field": "H1",
        "srcs": [
          "assets/nekomimi/40-0.png",
          "assets/nekomimi/40-1.png",
          "assets/nekomimi/40-2.png",
          "assets/nekomimi/40-3.png",
          "assets/nekomimi/40-4.png",
          "assets/nekomimi/40-5.png",
          "assets/nekomimi/40-6.png",
          "assets/nekomimi/40-7.png",
          "assets/nekomimi/40-8.png",
          "assets/nekomimi/40-9.png"
        ],
        "x": 47.4,
        "y": 39.95,
        "w": 17.28,
        "h": 12.24
      },
      {
        "field": "M0",
        "srcs": [
          "assets/nekomimi/40-0.png",
          "assets/nekomimi/40-1.png",
          "assets/nekomimi/40-2.png",
          "assets/nekomimi/40-3.png",
          "assets/nekomimi/40-4.png",
          "assets/nekomimi/40-5.png",
          "assets/nekomimi/40-6.png",
          "assets/nekomimi/40-7.png",
          "assets/nekomimi/40-8.png",
          "assets/nekomimi/40-9.png"
        ],
        "x": 75.6,
        "y": 45.75,
        "w": 17.28,
        "h": 12.24
      },
      {
        "field": "M1",
        "srcs": [
          "assets/nekomimi/40-0.png",
          "assets/nekomimi/40-1.png",
          "assets/nekomimi/40-2.png",
          "assets/nekomimi/40-3.png",
          "assets/nekomimi/40-4.png",
          "assets/nekomimi/40-5.png",
          "assets/nekomimi/40-6.png",
          "assets/nekomimi/40-7.png",
          "assets/nekomimi/40-8.png",
          "assets/nekomimi/40-9.png"
        ],
        "x": 103.15,
        "y": 39.7,
        "w": 17.28,
        "h": 12.24
      },
      {
        "field": "S0",
        "srcs": [
          "assets/nekomimi/40-0.png",
          "assets/nekomimi/40-1.png",
          "assets/nekomimi/40-2.png",
          "assets/nekomimi/40-3.png",
          "assets/nekomimi/40-4.png",
          "assets/nekomimi/40-5.png",
          "assets/nekomimi/40-6.png",
          "assets/nekomimi/40-7.png",
          "assets/nekomimi/40-8.png",
          "assets/nekomimi/40-9.png"
        ],
        "x": 125.1,
        "y": 45.65,
        "w": 8.64,
        "h": 6.48
      },
      {
        "field": "S1",
        "srcs": [
          "assets/nekomimi/40-0.png",
          "assets/nekomimi/40-1.png",
          "assets/nekomimi/40-2.png",
          "assets/nekomimi/40-3.png",
          "assets/nekomimi/40-4.png",
          "assets/nekomimi/40-5.png",
          "assets/nekomimi/40-6.png",
          "assets/nekomimi/40-7.png",
          "assets/nekomimi/40-8.png",
          "assets/nekomimi/40-9.png"
        ],
        "x": 136.2,
        "y": 45.65,
        "w": 8.64,
        "h": 6.48
      },
      {
        "field": "month0",
        "srcs": [
          "assets/nekomimi/16-0.png",
          "assets/nekomimi/16-1.png",
          "assets/nekomimi/16-2.png",
          "assets/nekomimi/16-3.png",
          "assets/nekomimi/16-4.png",
          "assets/nekomimi/16-5.png",
          "assets/nekomimi/16-6.png",
          "assets/nekomimi/16-7.png",
          "assets/nekomimi/16-8.png",
          "assets/nekomimi/16-9.png"
        ],
        "x": 91.65,
        "y": 66.85,
        "w": 9.36,
        "h": 7.2
      },
      {
        "field": "month1",
        "srcs": [
          "assets/nekomimi/16-0.png",
          "assets/nekomimi/16-1.png",
          "assets/nekomimi/16-2.png",
          "assets/nekomimi/16-3.png",
          "assets/nekomimi/16-4.png",
          "assets/nekomimi/16-5.png",
          "assets/nekomimi/16-6.png",
          "assets/nekomimi/16-7.png",
          "assets/nekomimi/16-8.png",
          "assets/nekomimi/16-9.png"
        ],
        "x": 104.6,
        "y": 66.85,
        "w": 9.36,
        "h": 7.2
      },
      {
        "field": "day0",
        "srcs": [
          "assets/nekomimi/16-0.png",
          "assets/nekomimi/16-1.png",
          "assets/nekomimi/16-2.png",
          "assets/nekomimi/16-3.png",
          "assets/nekomimi/16-4.png",
          "assets/nekomimi/16-5.png",
          "assets/nekomimi/16-6.png",
          "assets/nekomimi/16-7.png",
          "assets/nekomimi/16-8.png",
          "assets/nekomimi/16-9.png"
        ],
        "x": 123.95,
        "y": 66.85,
        "w": 9.36,
        "h": 7.2
      },
      {
        "field": "day1",
        "srcs": [
          "assets/nekomimi/16-0.png",
          "assets/nekomimi/16-1.png",
          "assets/nekomimi/16-2.png",
          "assets/nekomimi/16-3.png",
          "assets/nekomimi/16-4.png",
          "assets/nekomimi/16-5.png",
          "assets/nekomimi/16-6.png",
          "assets/nekomimi/16-7.png",
          "assets/nekomimi/16-8.png",
          "assets/nekomimi/16-9.png"
        ],
        "x": 136.75,
        "y": 66.85,
        "w": 9.36,
        "h": 7.2
      },
      {
        "field": "weekIndex",
        "srcs": [
          "assets/nekomimi/24-0.png",
          "assets/nekomimi/24-1.png",
          "assets/nekomimi/24-2.png",
          "assets/nekomimi/24-3.png",
          "assets/nekomimi/24-4.png",
          "assets/nekomimi/24-5.png",
          "assets/nekomimi/24-6.png"
        ],
        "x": 129.95,
        "y": 78.3,
        "w": 18.72,
        "h": 5.76
      }
    ],
    "background": "assets/nekomimi/background.png"
  },
  "star-green": {
    "name": "star-green",
    "width": 165,
    "height": 75,
    "hands": [],
    "texts": [
      {
        "field": "hm",
        "x": 60,
        "y": 44,
        "size": 22,
        "color": "#159b00",
        "font": "\"Arimo\", sans-serif",
        "weight": "bold",
        "align": "center"
      },
      {
        "field": "fullDate",
        "x": 63,
        "y": 25,
        "size": 10,
        "color": "#000000",
        "font": "\"Arimo\", sans-serif",
        "weight": "bold",
        "align": "center"
      }
    ],
    "sprites": [],
    "background": "assets/star-green/background.png"
  },
    "clock05-02": {"name":"Aqua Jewel Heart (clock05_02)","width":160,"height":140,"frameRate":60,"stage":[{"length":1,"frames":[[0,[{"symbol":"Symbol 3","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"field":"hm","matrix":[1.0,0.0,0.0,1.0,3.6,51.85],"width":133.85,"size":31.95,"align":"center","color":"#000033","font":"\"Edwardian Script ITC\", \"Pinyon Script\", cursive","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,127.05,31.0]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,54.5,106.6]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,0.0,33.85]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,72.1,84.6]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,118.6,-11.15]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,64.55,0.75]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,46.1,0.35]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,1.6,49.6]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,8.5,90.7]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,92.1,1.1]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-16.0,-2.9]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,132.35,49.6]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,-8.5,93.9]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,115.45,68.4]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 11","matrix":[0.05,0.0,0.0,0.05,0.0,0.0]}]]]}],"symbols":{"Symbol 3":[{"length":1,"frames":[[0,[{"src":"assets/clock05-02/bitmap-2.png","matrix":[1.0,0.0,0.0,1.0,0.0,-3.0]}]]]},{"length":1,"frames":[[0,[{"src":"assets/clock05-02/bitmap-1.png","matrix":[1.0,0.0,0.0,1.0,0.0,-3.0]}]]]}],"Symbol 8":[{"length":1,"frames":[[0,[{"src":"assets/clock05-02/bitmap-6.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 9":[{"length":60,"frames":[[0,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]],[1,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[2,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[3,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[4,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.95703125}]],[5,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9296875}]],[6,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.8984375}]],[7,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.86328125}]],[8,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.82421875}]],[9,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.77734375}]],[10,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.72265625}]],[11,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6640625}]],[12,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6015625}]],[13,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.53125}]],[14,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.45703125}]],[15,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.375}]],[16,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.2890625}]],[17,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19921875}]],[18,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.1015625}]],[19,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.0}]],[40,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.09765625}]],[41,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19140625}]],[42,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.27734375}]],[43,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.359375}]],[44,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.4375}]],[45,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.51171875}]],[46,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.578125}]],[47,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.640625}]],[48,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.69921875}]],[49,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.75}]],[50,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.796875}]],[51,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.83984375}]],[52,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.87890625}]],[53,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.91015625}]],[54,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9375}]],[55,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9609375}]],[56,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[57,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[58,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[59,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]]]}],"Symbol 11":[{"length":1,"frames":[[0,[{"src":"assets/clock05-02/bitmap-10.png","matrix":[20.0,0.0,0.0,20.0,627.0,7.0]}]]]}],"Symbol 12":[{"length":1,"frames":[[0,[{"symbol":"Symbol 11","matrix":[0.05,0.0,0.0,0.05,-31.35,-0.35]}]]]}],"Symbol 13":[{"length":50,"frames":[[0,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.13671875}]],[2,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.265625}]],[3,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3828125}]],[4,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48828125}]],[5,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5859375}]],[6,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.671875}]],[7,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[8,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.81640625}]],[9,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[10,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91796875}]],[11,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.953125}]],[12,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[13,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[14,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[26,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[27,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[28,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[29,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[30,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[31,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.921875}]],[32,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8984375}]],[33,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[34,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[35,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[36,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.76953125}]],[37,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.73046875}]],[38,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6875}]],[39,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[40,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58984375}]],[41,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5390625}]],[42,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48046875}]],[43,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.421875}]],[44,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[45,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.29296875}]],[46,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[47,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.15234375}]],[48,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.078125}]],[49,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}],"Symbol 16":[{"length":1,"frames":[[0,[{"src":"assets/clock05-02/bitmap-14.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 17":[{"length":101,"frames":[[0,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[11,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[12,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[13,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[14,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[15,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[16,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94921875}]],[17,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[18,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9140625}]],[19,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.89453125}]],[20,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.875}]],[21,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8515625}]],[22,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.82421875}]],[23,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.796875}]],[24,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[25,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[26,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.69921875}]],[27,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6640625}]],[28,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.625}]],[29,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[30,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.54296875}]],[31,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.49609375}]],[32,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.44921875}]],[33,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.40234375}]],[34,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3515625}]],[35,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.296875}]],[36,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2421875}]],[37,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.18359375}]],[38,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.125}]],[39,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0625}]],[40,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[70,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.03125}]],[71,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[72,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.09765625}]],[73,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[74,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.16015625}]],[75,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[76,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[77,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[78,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2890625}]],[79,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.32421875}]],[80,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.35546875}]],[81,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.38671875}]],[82,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.41796875}]],[83,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.453125}]],[84,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.484375}]],[85,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.515625}]],[86,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.546875}]],[87,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[88,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[89,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.64453125}]],[90,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.67578125}]],[91,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7109375}]],[92,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7421875}]],[93,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7734375}]],[94,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[95,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[96,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[97,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[98,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[99,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[100,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 20":[{"length":1,"frames":[[0,[{"src":"assets/clock05-02/bitmap-18.png","matrix":[1.0,0.0,0.0,1.0,-1.0,-1.0]}]]]}],"Symbol 21":[{"length":70,"frames":[[0,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.046875}]],[2,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.08984375}]],[3,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1328125}]],[4,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.171875}]],[5,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.21484375}]],[6,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.25390625}]],[7,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.29296875}]],[8,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.33203125}]],[9,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3671875}]],[10,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.40234375}]],[11,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4375}]],[12,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.47265625}]],[13,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.50390625}]],[14,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.53515625}]],[15,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.56640625}]],[16,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.59375}]],[17,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.625}]],[18,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.65234375}]],[19,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.67578125}]],[20,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.703125}]],[21,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7265625}]],[22,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[23,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7734375}]],[24,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.79296875}]],[25,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8125}]],[26,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83203125}]],[27,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8515625}]],[28,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8671875}]],[29,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8828125}]],[30,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8984375}]],[31,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9140625}]],[32,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.92578125}]],[33,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9375}]],[34,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94921875}]],[35,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.95703125}]],[36,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[37,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9765625}]],[38,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[39,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[40,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[41,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[43,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[46,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[47,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[48,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[49,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[50,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[51,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.921875}]],[52,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8984375}]],[53,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[54,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[55,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[56,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.76953125}]],[57,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.73046875}]],[58,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6875}]],[59,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[60,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58984375}]],[61,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5390625}]],[62,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48046875}]],[63,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.421875}]],[64,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[65,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.29296875}]],[66,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[67,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.15234375}]],[68,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.078125}]],[69,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}],"Symbol 22":[{"length":1,"frames":[[0,[{"src":"assets/clock05-02/bitmap-18.png","matrix":[1.0,0.0,0.0,1.0,27.45,91.0]}]]]},{"length":1,"frames":[[0,[{"src":"assets/clock05-02/bitmap-6.png","matrix":[1.0,0.0,0.0,1.0,104.5,102.6]}]]]}]},"paths":["assets/clock05-02/bitmap-1.png","assets/clock05-02/bitmap-10.png","assets/clock05-02/bitmap-14.png","assets/clock05-02/bitmap-18.png","assets/clock05-02/bitmap-2.png","assets/clock05-02/bitmap-6.png"]},
    "clock05-04": {"name":"Blue Charm Box (clock05_04)","width":160,"height":140,"frameRate":60,"stage":[{"length":1,"frames":[[0,[{"symbol":"Symbol 3","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"field":"hm","matrix":[1.0,0.0,0.0,1.0,9.1,67.95],"width":133.85,"size":23.65,"align":"center","color":"#000000","font":"\"Arno Pro Subhead\", Georgia, serif","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"field":"date","matrix":[0.60025,0.0,0.0,0.60001,37.2,47.25],"width":125.95,"size":23.65,"align":"left","color":"#000033","font":"\"Arno Pro Subhead\", Georgia, serif","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"field":"weekday","matrix":[0.60025,0.0,0.0,0.60001,82.25,47.25],"width":85.2,"size":23.65,"align":"left","color":"#000033","font":"\"Arno Pro Subhead\", Georgia, serif","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,48.5,111.25]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,119.95,100.6]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,-3.95,-7.55]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,-12.05,60.05]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,119.5,21.05]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,60.05,10.65]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,41.0,1.0]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,71.05,13.5]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,127.5,50.6]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,12.5,84.05]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,76.05,79.05]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,71.95,104.6]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,116.05,47.2]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"symbols":{"Symbol 3":[{"length":1,"frames":[[0,[{"src":"assets/clock05-04/bitmap-2.jpg","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"src":"assets/clock05-04/bitmap-1.jpg","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 10":[{"length":1,"frames":[[0,[{"src":"assets/clock05-04/bitmap-8.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 11":[{"length":60,"frames":[[0,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]],[1,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[2,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[3,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[4,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.95703125}]],[5,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9296875}]],[6,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.8984375}]],[7,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.86328125}]],[8,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.82421875}]],[9,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.77734375}]],[10,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.72265625}]],[11,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6640625}]],[12,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6015625}]],[13,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.53125}]],[14,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.45703125}]],[15,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.375}]],[16,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.2890625}]],[17,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19921875}]],[18,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.1015625}]],[19,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.0}]],[40,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.09765625}]],[41,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19140625}]],[42,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.27734375}]],[43,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.359375}]],[44,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.4375}]],[45,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.51171875}]],[46,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.578125}]],[47,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.640625}]],[48,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.69921875}]],[49,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.75}]],[50,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.796875}]],[51,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.83984375}]],[52,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.87890625}]],[53,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.91015625}]],[54,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9375}]],[55,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9609375}]],[56,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[57,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[58,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[59,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]]]}],"Symbol 14":[{"length":1,"frames":[[0,[{"src":"assets/clock05-04/bitmap-12.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 15":[{"length":50,"frames":[[0,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.13671875}]],[2,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.265625}]],[3,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3828125}]],[4,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48828125}]],[5,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5859375}]],[6,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.671875}]],[7,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[8,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.81640625}]],[9,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[10,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91796875}]],[11,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.953125}]],[12,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[13,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[14,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[26,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[27,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[28,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[29,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[30,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[31,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.921875}]],[32,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8984375}]],[33,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[34,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[35,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[36,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.76953125}]],[37,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.73046875}]],[38,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6875}]],[39,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[40,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58984375}]],[41,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5390625}]],[42,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48046875}]],[43,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.421875}]],[44,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[45,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.29296875}]],[46,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[47,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.15234375}]],[48,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.078125}]],[49,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}],"Symbol 18":[{"length":1,"frames":[[0,[{"src":"assets/clock05-04/bitmap-16.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 19":[{"length":101,"frames":[[0,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[11,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[12,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[13,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[14,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[15,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[16,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94921875}]],[17,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[18,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9140625}]],[19,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.89453125}]],[20,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.875}]],[21,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8515625}]],[22,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.82421875}]],[23,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.796875}]],[24,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[25,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[26,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.69921875}]],[27,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6640625}]],[28,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.625}]],[29,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[30,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.54296875}]],[31,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.49609375}]],[32,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.44921875}]],[33,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.40234375}]],[34,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3515625}]],[35,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.296875}]],[36,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2421875}]],[37,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.18359375}]],[38,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.125}]],[39,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0625}]],[40,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[70,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.03125}]],[71,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[72,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.09765625}]],[73,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[74,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.16015625}]],[75,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[76,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[77,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[78,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2890625}]],[79,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.32421875}]],[80,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.35546875}]],[81,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.38671875}]],[82,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.41796875}]],[83,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.453125}]],[84,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.484375}]],[85,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.515625}]],[86,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.546875}]],[87,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[88,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[89,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.64453125}]],[90,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.67578125}]],[91,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7109375}]],[92,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7421875}]],[93,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7734375}]],[94,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[95,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[96,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[97,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[98,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[99,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[100,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 22":[{"length":1,"frames":[[0,[{"src":"assets/clock05-04/bitmap-20.png","matrix":[1.0,0.0,0.0,1.0,-1.0,-1.0]}]]]}],"Symbol 23":[{"length":60,"frames":[[0,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[2,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1328125}]],[3,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[4,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[5,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.31640625}]],[6,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.37109375}]],[7,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.42578125}]],[8,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4765625}]],[9,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5234375}]],[10,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5703125}]],[11,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[12,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.65625}]],[13,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6953125}]],[14,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[15,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[16,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.80078125}]],[17,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.828125}]],[18,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.85546875}]],[19,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8828125}]],[20,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[21,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.92578125}]],[22,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[23,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.95703125}]],[24,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[25,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[26,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[27,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[28,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[31,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[32,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[33,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[34,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[35,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[36,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9453125}]],[37,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9296875}]],[38,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91015625}]],[39,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.890625}]],[40,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8671875}]],[41,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[42,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8125}]],[43,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.78125}]],[44,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[45,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.71484375}]],[46,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6796875}]],[47,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[48,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.59765625}]],[49,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5546875}]],[50,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.51171875}]],[51,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4609375}]],[52,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4140625}]],[53,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[54,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3046875}]],[55,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.25}]],[56,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.19140625}]],[57,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[58,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[59,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}],"Symbol 24":[{"length":1,"frames":[[0,[{"src":"assets/clock05-04/bitmap-20.png","matrix":[1.0,0.0,0.0,1.0,0.0,104.6]}]]]},{"length":1,"frames":[[0,[{"src":"assets/clock05-04/bitmap-8.png","matrix":[1.0,0.0,0.0,1.0,8.5,38.5]}]]]}]},"paths":["assets/clock05-04/bitmap-1.jpg","assets/clock05-04/bitmap-12.png","assets/clock05-04/bitmap-16.png","assets/clock05-04/bitmap-2.jpg","assets/clock05-04/bitmap-20.png","assets/clock05-04/bitmap-8.png"]},
    "clock05-07": {"name":"Hot Pink Charms (clock05_07)","width":160,"height":140,"frameRate":60,"stage":[{"length":1,"frames":[[0,[{"symbol":"Symbol 3","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"field":"hm","matrix":[1.0,0.0,0.0,1.0,13.1,49.95],"width":133.85,"size":32.5,"align":"center","color":"#000000","font":"\"Times New Roman Baltic\", Georgia, serif","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"field":"date","matrix":[0.60025,0.0,0.0,0.60001,17.3,25.7],"width":125.95,"size":34.35,"align":"center","color":"#ffffff","font":"\"Times New Roman Baltic\", Georgia, serif","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"field":"weekday","matrix":[0.60025,0.0,0.0,0.60001,81.05,25.7],"width":91.4,"size":34.35,"align":"center","color":"#ffffff","font":"\"Times New Roman Baltic\", Georgia, serif","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,138.55,31.0]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,7.1,-0.15]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,113.1,-23.15]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,2.6,46.6]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,131.0,75.1]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,2.15,25.5]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,46.1,-20.4]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-1.55,46.05]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,6.0,90.7]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,92.1,-2.4]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,22.5,59.35]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,132.35,49.6]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,92.85,76.1]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"symbols":{"Symbol 3":[{"length":1,"frames":[[0,[{"src":"assets/clock05-07/bitmap-2.jpg","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"src":"assets/clock05-07/bitmap-1.jpg","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 10":[{"length":1,"frames":[[0,[{"src":"assets/clock05-07/bitmap-8.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 11":[{"length":60,"frames":[[0,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]],[1,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[2,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[3,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[4,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.95703125}]],[5,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9296875}]],[6,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.8984375}]],[7,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.86328125}]],[8,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.82421875}]],[9,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.77734375}]],[10,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.72265625}]],[11,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6640625}]],[12,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6015625}]],[13,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.53125}]],[14,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.45703125}]],[15,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.375}]],[16,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.2890625}]],[17,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19921875}]],[18,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.1015625}]],[19,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.0}]],[40,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.09765625}]],[41,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19140625}]],[42,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.27734375}]],[43,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.359375}]],[44,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.4375}]],[45,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.51171875}]],[46,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.578125}]],[47,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.640625}]],[48,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.69921875}]],[49,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.75}]],[50,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.796875}]],[51,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.83984375}]],[52,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.87890625}]],[53,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.91015625}]],[54,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9375}]],[55,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9609375}]],[56,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[57,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[58,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[59,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]]]}],"Symbol 14":[{"length":1,"frames":[[0,[{"src":"assets/clock05-07/bitmap-12.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 15":[{"length":50,"frames":[[0,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.13671875}]],[2,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.265625}]],[3,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3828125}]],[4,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48828125}]],[5,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5859375}]],[6,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.671875}]],[7,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[8,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.81640625}]],[9,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[10,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91796875}]],[11,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.953125}]],[12,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[13,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[14,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[26,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[27,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[28,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[29,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[30,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[31,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.921875}]],[32,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8984375}]],[33,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[34,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[35,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[36,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.76953125}]],[37,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.73046875}]],[38,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6875}]],[39,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[40,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58984375}]],[41,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5390625}]],[42,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48046875}]],[43,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.421875}]],[44,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[45,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.29296875}]],[46,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[47,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.15234375}]],[48,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.078125}]],[49,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}],"Symbol 18":[{"length":1,"frames":[[0,[{"src":"assets/clock05-07/bitmap-16.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 19":[{"length":101,"frames":[[0,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[11,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[12,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[13,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[14,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[15,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[16,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94921875}]],[17,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[18,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9140625}]],[19,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.89453125}]],[20,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.875}]],[21,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8515625}]],[22,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.82421875}]],[23,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.796875}]],[24,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[25,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[26,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.69921875}]],[27,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6640625}]],[28,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.625}]],[29,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[30,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.54296875}]],[31,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.49609375}]],[32,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.44921875}]],[33,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.40234375}]],[34,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3515625}]],[35,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.296875}]],[36,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2421875}]],[37,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.18359375}]],[38,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.125}]],[39,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0625}]],[40,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[70,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.03125}]],[71,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[72,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.09765625}]],[73,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[74,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.16015625}]],[75,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[76,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[77,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[78,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2890625}]],[79,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.32421875}]],[80,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.35546875}]],[81,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.38671875}]],[82,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.41796875}]],[83,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.453125}]],[84,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.484375}]],[85,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.515625}]],[86,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.546875}]],[87,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[88,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[89,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.64453125}]],[90,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.67578125}]],[91,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7109375}]],[92,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7421875}]],[93,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7734375}]],[94,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[95,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[96,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[97,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[98,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[99,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[100,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 22":[{"length":1,"frames":[[0,[{"src":"assets/clock05-07/bitmap-20.png","matrix":[1.0,0.0,0.0,1.0,-1.0,-1.0]}]]]}],"Symbol 23":[{"length":60,"frames":[[0,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[2,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1328125}]],[3,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[4,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[5,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.31640625}]],[6,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.37109375}]],[7,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.42578125}]],[8,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4765625}]],[9,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5234375}]],[10,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5703125}]],[11,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[12,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.65625}]],[13,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6953125}]],[14,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[15,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[16,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.80078125}]],[17,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.828125}]],[18,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.85546875}]],[19,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8828125}]],[20,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[21,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.92578125}]],[22,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[23,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.95703125}]],[24,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[25,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[26,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[27,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[28,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[31,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[32,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[33,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[34,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[35,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[36,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9453125}]],[37,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9296875}]],[38,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91015625}]],[39,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.890625}]],[40,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8671875}]],[41,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[42,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8125}]],[43,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.78125}]],[44,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[45,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.71484375}]],[46,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6796875}]],[47,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[48,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.59765625}]],[49,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5546875}]],[50,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.51171875}]],[51,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4609375}]],[52,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4140625}]],[53,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[54,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3046875}]],[55,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.25}]],[56,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.19140625}]],[57,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[58,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[59,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}],"Symbol 24":[{"length":1,"frames":[[0,[{"src":"assets/clock05-07/bitmap-20.png","matrix":[1.0,0.0,0.0,1.0,45.1,76.35]}]]]},{"length":1,"frames":[[0,[{"src":"assets/clock05-07/bitmap-8.png","matrix":[1.0,0.0,0.0,1.0,21.25,-3.4]}]]]}]},"paths":["assets/clock05-07/bitmap-1.jpg","assets/clock05-07/bitmap-12.png","assets/clock05-07/bitmap-16.png","assets/clock05-07/bitmap-2.jpg","assets/clock05-07/bitmap-20.png","assets/clock05-07/bitmap-8.png"]},
    "clock05-11": {"name":"Black Cat & Pearls (clock05_11)","width":160,"height":140,"frameRate":60,"stage":[{"length":1,"frames":[[0,[{"src":"assets/clock05-11/bitmap-1.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"field":"hm","matrix":[1.0,0.0,0.0,1.0,8.15,53.5],"width":133.85,"size":21.45,"align":"center","color":"#666666","font":"\"Bradley Hand ITC\", \"Bradley Hand\", \"Comic Sans MS\", cursive","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,141.55,31.0]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,98.0,-17.65]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,5.6,46.6]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,1.45,46.05]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,85.1,-51.65]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,25.5,59.35]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,189.35,49.6]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"symbols":{"Symbol 7":[{"length":1,"frames":[[0,[{"src":"assets/clock05-11/bitmap-5.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 8":[{"length":60,"frames":[[0,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]],[1,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[2,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[3,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[4,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.95703125}]],[5,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9296875}]],[6,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.8984375}]],[7,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.86328125}]],[8,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.82421875}]],[9,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.77734375}]],[10,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.72265625}]],[11,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6640625}]],[12,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6015625}]],[13,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.53125}]],[14,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.45703125}]],[15,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.375}]],[16,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.2890625}]],[17,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19921875}]],[18,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.1015625}]],[19,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.0}]],[40,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.09765625}]],[41,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19140625}]],[42,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.27734375}]],[43,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.359375}]],[44,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.4375}]],[45,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.51171875}]],[46,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.578125}]],[47,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.640625}]],[48,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.69921875}]],[49,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.75}]],[50,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.796875}]],[51,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.83984375}]],[52,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.87890625}]],[53,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.91015625}]],[54,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9375}]],[55,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9609375}]],[56,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[57,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[58,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[59,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]]]}],"Symbol 11":[{"length":1,"frames":[[0,[{"src":"assets/clock05-11/bitmap-9.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 12":[{"length":101,"frames":[[0,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[11,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[12,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[13,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[14,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[15,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[16,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94921875}]],[17,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[18,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9140625}]],[19,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.89453125}]],[20,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.875}]],[21,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8515625}]],[22,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.82421875}]],[23,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.796875}]],[24,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[25,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[26,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.69921875}]],[27,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6640625}]],[28,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.625}]],[29,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[30,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.54296875}]],[31,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.49609375}]],[32,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.44921875}]],[33,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.40234375}]],[34,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3515625}]],[35,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.296875}]],[36,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2421875}]],[37,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.18359375}]],[38,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.125}]],[39,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0625}]],[40,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[70,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.03125}]],[71,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[72,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.09765625}]],[73,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[74,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.16015625}]],[75,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[76,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[77,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[78,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2890625}]],[79,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.32421875}]],[80,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.35546875}]],[81,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.38671875}]],[82,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.41796875}]],[83,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.453125}]],[84,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.484375}]],[85,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.515625}]],[86,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.546875}]],[87,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[88,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[89,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.64453125}]],[90,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.67578125}]],[91,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7109375}]],[92,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7421875}]],[93,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7734375}]],[94,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[95,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[96,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[97,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[98,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[99,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[100,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 15":[{"length":1,"frames":[[0,[{"src":"assets/clock05-11/bitmap-13.png","matrix":[1.0,0.0,0.0,1.0,-1.0,-1.0]}]]]}],"Symbol 16":[{"length":60,"frames":[[0,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[2,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1328125}]],[3,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[4,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[5,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.31640625}]],[6,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.37109375}]],[7,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.42578125}]],[8,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4765625}]],[9,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5234375}]],[10,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5703125}]],[11,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[12,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.65625}]],[13,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6953125}]],[14,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[15,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[16,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.80078125}]],[17,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.828125}]],[18,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.85546875}]],[19,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8828125}]],[20,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[21,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.92578125}]],[22,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[23,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.95703125}]],[24,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[25,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[26,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[27,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[28,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[31,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[32,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[33,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[34,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[35,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[36,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9453125}]],[37,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9296875}]],[38,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91015625}]],[39,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.890625}]],[40,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8671875}]],[41,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[42,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8125}]],[43,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.78125}]],[44,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[45,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.71484375}]],[46,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6796875}]],[47,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[48,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.59765625}]],[49,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5546875}]],[50,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.51171875}]],[51,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4609375}]],[52,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4140625}]],[53,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[54,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3046875}]],[55,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.25}]],[56,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.19140625}]],[57,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[58,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[59,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}],"Symbol 19":[{"length":1,"frames":[[0,[{"src":"assets/clock05-11/bitmap-17.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 20":[{"length":50,"frames":[[0,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.13671875}]],[2,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.265625}]],[3,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3828125}]],[4,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48828125}]],[5,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5859375}]],[6,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.671875}]],[7,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[8,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.81640625}]],[9,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[10,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91796875}]],[11,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.953125}]],[12,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[13,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[14,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[26,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[27,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[28,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[29,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[30,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[31,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.921875}]],[32,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8984375}]],[33,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[34,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[35,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[36,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.76953125}]],[37,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.73046875}]],[38,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6875}]],[39,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[40,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58984375}]],[41,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5390625}]],[42,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48046875}]],[43,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.421875}]],[44,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[45,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.29296875}]],[46,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[47,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.15234375}]],[48,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.078125}]],[49,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}],"Symbol 21":[{"length":1,"frames":[[0,[{"src":"assets/clock05-11/bitmap-13.png","matrix":[1.0,0.0,0.0,1.0,-12.85,85.55]}]]]},{"length":1,"frames":[[0,[{"src":"assets/clock05-11/bitmap-5.png","matrix":[1.0,0.0,0.0,1.0,35.25,-3.4]}]]]}]},"paths":["assets/clock05-11/bitmap-1.png","assets/clock05-11/bitmap-13.png","assets/clock05-11/bitmap-17.png","assets/clock05-11/bitmap-5.png","assets/clock05-11/bitmap-9.png"]},
    "clock05-13": {"name":"Blue Rose Heart (clock05_13)","width":160,"height":140,"frameRate":60,"stage":[{"length":1,"frames":[[0,[{"src":"assets/clock05-13/bitmap-1.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"field":"hm","matrix":[1.0,0.0,0.0,1.0,9.1,62.95],"width":133.85,"size":27.2,"align":"center","color":"#666666","font":"\"Charlemagne Std Bold\", Georgia, serif","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"field":"date","matrix":[0.60025,0.0,0.0,0.60001,41.2,47.25],"width":125.95,"size":19.2,"align":"left","color":"#666666","font":"\"Book Antiqua\", Georgia, serif","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"field":"weekday","matrix":[0.60025,0.0,0.0,0.60001,79.25,47.25],"width":85.2,"size":19.2,"align":"left","color":"#666666","font":"\"Book Antiqua\", Georgia, serif","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,-197.0,128.0]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-65.45,89.0]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-172.45,152.0]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-113.0,172.55]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,109.05,84.55]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-19.9,157.9]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,11.0,-6.55]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 26","matrix":[1.0,0.0,0.0,1.0,127.35,43.55]}]]]}],"symbols":{"Symbol 10":[{"length":1,"frames":[[0,[{"src":"assets/clock05-13/bitmap-8.png","matrix":[1.0,0.0,0.0,1.0,-1.0,-1.0]}]]]}],"Symbol 11":[{"length":60,"frames":[[0,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[2,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1328125}]],[3,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[4,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[5,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.31640625}]],[6,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.37109375}]],[7,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.42578125}]],[8,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4765625}]],[9,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5234375}]],[10,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5703125}]],[11,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[12,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.65625}]],[13,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6953125}]],[14,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[15,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[16,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.80078125}]],[17,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.828125}]],[18,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.85546875}]],[19,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8828125}]],[20,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[21,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.92578125}]],[22,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[23,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.95703125}]],[24,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[25,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[26,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[27,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[28,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[31,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[32,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[33,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[34,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[35,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[36,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9453125}]],[37,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9296875}]],[38,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91015625}]],[39,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.890625}]],[40,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8671875}]],[41,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[42,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8125}]],[43,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.78125}]],[44,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[45,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.71484375}]],[46,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6796875}]],[47,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[48,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.59765625}]],[49,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5546875}]],[50,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.51171875}]],[51,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4609375}]],[52,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4140625}]],[53,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[54,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3046875}]],[55,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.25}]],[56,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.19140625}]],[57,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[58,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[59,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}],"Symbol 14":[{"length":1,"frames":[[0,[{"src":"assets/clock05-13/bitmap-12.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 15":[{"length":50,"frames":[[0,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.13671875}]],[2,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.265625}]],[3,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3828125}]],[4,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48828125}]],[5,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5859375}]],[6,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.671875}]],[7,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[8,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.81640625}]],[9,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[10,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91796875}]],[11,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.953125}]],[12,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[13,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[14,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[26,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[27,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[28,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[29,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[30,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[31,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.921875}]],[32,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8984375}]],[33,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[34,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[35,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[36,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.76953125}]],[37,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.73046875}]],[38,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6875}]],[39,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[40,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58984375}]],[41,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5390625}]],[42,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48046875}]],[43,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.421875}]],[44,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[45,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.29296875}]],[46,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[47,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.15234375}]],[48,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.078125}]],[49,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}],"Symbol 18":[{"length":1,"frames":[[0,[{"src":"assets/clock05-13/bitmap-16.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 19":[{"length":60,"frames":[[0,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]],[1,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[2,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[3,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[4,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.95703125}]],[5,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9296875}]],[6,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.8984375}]],[7,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.86328125}]],[8,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.82421875}]],[9,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.77734375}]],[10,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.72265625}]],[11,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6640625}]],[12,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6015625}]],[13,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.53125}]],[14,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.45703125}]],[15,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.375}]],[16,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.2890625}]],[17,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19921875}]],[18,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.1015625}]],[19,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.0}]],[40,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.09765625}]],[41,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19140625}]],[42,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.27734375}]],[43,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.359375}]],[44,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.4375}]],[45,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.51171875}]],[46,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.578125}]],[47,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.640625}]],[48,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.69921875}]],[49,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.75}]],[50,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.796875}]],[51,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.83984375}]],[52,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.87890625}]],[53,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.91015625}]],[54,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9375}]],[55,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9609375}]],[56,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[57,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[58,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[59,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]]]}],"Symbol 22":[{"length":1,"frames":[[0,[{"src":"assets/clock05-13/bitmap-20.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 23":[{"length":101,"frames":[[0,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[11,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[12,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[13,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[14,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[15,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[16,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94921875}]],[17,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[18,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9140625}]],[19,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.89453125}]],[20,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.875}]],[21,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8515625}]],[22,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.82421875}]],[23,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.796875}]],[24,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[25,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[26,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.69921875}]],[27,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6640625}]],[28,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.625}]],[29,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[30,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.54296875}]],[31,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.49609375}]],[32,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.44921875}]],[33,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.40234375}]],[34,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3515625}]],[35,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.296875}]],[36,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2421875}]],[37,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.18359375}]],[38,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.125}]],[39,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0625}]],[40,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[70,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.03125}]],[71,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[72,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.09765625}]],[73,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[74,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.16015625}]],[75,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[76,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[77,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[78,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2890625}]],[79,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.32421875}]],[80,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.35546875}]],[81,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.38671875}]],[82,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.41796875}]],[83,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.453125}]],[84,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.484375}]],[85,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.515625}]],[86,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.546875}]],[87,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[88,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[89,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.64453125}]],[90,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.67578125}]],[91,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7109375}]],[92,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7421875}]],[93,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7734375}]],[94,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[95,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[96,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[97,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[98,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[99,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[100,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 25":[{"length":1,"frames":[[0,[{"src":"assets/clock05-13/bitmap-24.png","matrix":[1.22772,0.0,0.0,1.4856,-256.0,-309.0]}]]]}],"Symbol 26":[{"length":80,"frames":[[0,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4]}]],[1,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.96875}]],[2,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.94140625}]],[3,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.91015625}]],[4,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.8828125}]],[5,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.8515625}]],[6,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.82421875}]],[7,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.79296875}]],[8,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.765625}]],[9,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.734375}]],[10,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.70703125}]],[11,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.67578125}]],[12,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.6484375}]],[13,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.6171875}]],[14,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.58984375}]],[15,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.55859375}]],[16,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.53125}]],[17,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.5}]],[18,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.46875}]],[19,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.44140625}]],[20,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.41015625}]],[21,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.3828125}]],[22,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.3515625}]],[23,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.32421875}]],[24,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.29296875}]],[25,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.265625}]],[26,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.234375}]],[27,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.20703125}]],[28,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.17578125}]],[29,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.1484375}]],[30,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.1171875}]],[31,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.08984375}]],[32,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.05859375}]],[33,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.03125}]],[34,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.0}]],[35,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.0234375}]],[36,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.04296875}]],[37,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.06640625}]],[38,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.08984375}]],[39,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.109375}]],[40,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.1328125}]],[41,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.15625}]],[42,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.1796875}]],[43,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.19921875}]],[44,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.22265625}]],[45,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.24609375}]],[46,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.265625}]],[47,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.2890625}]],[48,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.3125}]],[49,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.33203125}]],[50,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.35546875}]],[51,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.37890625}]],[52,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.3984375}]],[53,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.421875}]],[54,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.4453125}]],[55,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.46484375}]],[56,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.48828125}]],[57,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.51171875}]],[58,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.53515625}]],[59,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.5546875}]],[60,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.578125}]],[61,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.6015625}]],[62,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.62109375}]],[63,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.64453125}]],[64,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.66796875}]],[65,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.6875}]],[66,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.7109375}]],[67,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.734375}]],[68,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.75390625}]],[69,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.77734375}]],[70,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.80078125}]],[71,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.8203125}]],[72,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.84375}]],[73,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.8671875}]],[74,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.890625}]],[75,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.91015625}]],[76,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.93359375}]],[77,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.95703125}]],[78,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4],"alpha":0.9765625}]],[79,[{"symbol":"Symbol 25","matrix":[0.05,0.0,0.0,0.05,-0.05,0.4]}]]]}]},"paths":["assets/clock05-13/bitmap-1.png","assets/clock05-13/bitmap-12.png","assets/clock05-13/bitmap-16.png","assets/clock05-13/bitmap-20.png","assets/clock05-13/bitmap-24.png","assets/clock05-13/bitmap-8.png"]},
    "clock05-15": {"name":"Chocolate Bear (clock05_15)","width":160,"height":140,"frameRate":60,"stage":[{"length":1,"frames":[[0,[{"src":"assets/clock05-15/bitmap-1.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"field":"hm","matrix":[1.0,0.0,0.0,1.0,13.1,46.2],"width":133.85,"size":30.5,"align":"center","color":"#660000","font":"\"Constantia\", Georgia, serif","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,43.5,45.75]}]]]}],"symbols":{"Symbol 5":[],"Symbol 6":[{"length":60,"frames":[[0,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[2,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1328125}]],[3,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[4,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[5,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.31640625}]],[6,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.37109375}]],[7,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.42578125}]],[8,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4765625}]],[9,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5234375}]],[10,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5703125}]],[11,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[12,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.65625}]],[13,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6953125}]],[14,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[15,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[16,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.80078125}]],[17,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.828125}]],[18,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.85546875}]],[19,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8828125}]],[20,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[21,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.92578125}]],[22,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[23,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.95703125}]],[24,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[25,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[26,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[27,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[28,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[31,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[32,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[33,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[34,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[35,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[36,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9453125}]],[37,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9296875}]],[38,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91015625}]],[39,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.890625}]],[40,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8671875}]],[41,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[42,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8125}]],[43,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.78125}]],[44,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[45,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.71484375}]],[46,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6796875}]],[47,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[48,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.59765625}]],[49,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5546875}]],[50,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.51171875}]],[51,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4609375}]],[52,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4140625}]],[53,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[54,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3046875}]],[55,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.25}]],[56,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.19140625}]],[57,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[58,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[59,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}]},"paths":["assets/clock05-15/bitmap-1.png"]},
    "clock05-16": {"name":"Pastel Doughnuts (clock05_16)","width":160,"height":140,"frameRate":60,"stage":[{"length":1,"frames":[[0,[{"src":"assets/clock05-16/bitmap-1.png","matrix":[1.0,0.0,0.0,1.0,0.35,1.35]}]]]},{"length":1,"frames":[[0,[{"field":"hm","matrix":[1.0,0.0,0.0,1.0,13.45,44.75],"width":133.85,"size":28.1,"align":"center","color":"#512800","font":"\"Elephant\", Georgia, serif","weight":"bold"}]]]},{"length":1,"frames":[[0,[{"field":"date","matrix":[0.60025,0.0,0.0,0.60001,59.3,92.15],"width":125.95,"size":22.0,"align":"left","color":"#512800","font":"\"Elephant\", Georgia, serif","weight":"bold"}]]]},{"length":1,"frames":[[0,[{"field":"weekday","matrix":[0.60025,0.0,0.0,0.60001,96.2,92.15],"width":63.0,"size":22.1,"align":"left","color":"#512800","font":"\"Elephant\", Georgia, serif","weight":"bold"}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 8","matrix":[1.0,0.0,0.0,1.0,43.5,45.75]}]]]}],"symbols":{"Symbol 7":[],"Symbol 8":[{"length":60,"frames":[[0,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[2,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1328125}]],[3,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[4,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[5,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.31640625}]],[6,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.37109375}]],[7,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.42578125}]],[8,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4765625}]],[9,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5234375}]],[10,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5703125}]],[11,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[12,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.65625}]],[13,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6953125}]],[14,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[15,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[16,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.80078125}]],[17,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.828125}]],[18,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.85546875}]],[19,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8828125}]],[20,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[21,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.92578125}]],[22,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[23,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.95703125}]],[24,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[25,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[26,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[27,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[28,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[31,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[32,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[33,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[34,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[35,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[36,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9453125}]],[37,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9296875}]],[38,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91015625}]],[39,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.890625}]],[40,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8671875}]],[41,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[42,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8125}]],[43,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.78125}]],[44,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[45,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.71484375}]],[46,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6796875}]],[47,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[48,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.59765625}]],[49,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5546875}]],[50,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.51171875}]],[51,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4609375}]],[52,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4140625}]],[53,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[54,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3046875}]],[55,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.25}]],[56,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.19140625}]],[57,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[58,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[59,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}]},"paths":["assets/clock05-16/bitmap-1.png"]},
    "clock05-17": {"name":"Rainbow Smiles (clock05_17)","width":160,"height":140,"frameRate":60,"stage":[{"length":1,"frames":[[0,[{"src":"assets/clock05-17/bitmap-1.png","matrix":[1.0,0.0,0.0,1.0,-0.65,-0.65]}]]]},{"length":1,"frames":[[0,[{"field":"hm","matrix":[1.0,0.0,0.0,1.0,13.1,57.45],"width":133.85,"size":0.0,"align":"center","color":"#000000","font":"\"HGSoeiKakupoptai\", \"Arial Rounded MT Bold\", \"Trebuchet MS\", sans-serif","weight":"bold"}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,43.5,45.75]}]]]}],"symbols":{"Symbol 5":[],"Symbol 6":[{"length":60,"frames":[[0,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[2,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1328125}]],[3,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[4,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[5,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.31640625}]],[6,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.37109375}]],[7,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.42578125}]],[8,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4765625}]],[9,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5234375}]],[10,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5703125}]],[11,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[12,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.65625}]],[13,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6953125}]],[14,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[15,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[16,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.80078125}]],[17,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.828125}]],[18,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.85546875}]],[19,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8828125}]],[20,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[21,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.92578125}]],[22,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[23,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.95703125}]],[24,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[25,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[26,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[27,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[28,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[31,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[32,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[33,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[34,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[35,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[36,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9453125}]],[37,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9296875}]],[38,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91015625}]],[39,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.890625}]],[40,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8671875}]],[41,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[42,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8125}]],[43,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.78125}]],[44,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[45,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.71484375}]],[46,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6796875}]],[47,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[48,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.59765625}]],[49,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5546875}]],[50,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.51171875}]],[51,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4609375}]],[52,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4140625}]],[53,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[54,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3046875}]],[55,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.25}]],[56,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.19140625}]],[57,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[58,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[59,[{"symbol":"Symbol 5","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}]},"paths":["assets/clock05-17/bitmap-1.png"]},
    "clock05-19": {"name":"Clover & Pink Gem (clock05_19)","width":160,"height":140,"frameRate":60,"stage":[{"length":1,"frames":[[0,[{"src":"assets/clock05-19/bitmap-1.jpg","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"field":"hm","matrix":[1.0,0.0,0.0,1.0,13.1,31.45],"width":133.85,"size":45.6,"align":"center","color":"#512800","font":"\"Curlz MT\", \"Berkshire Swash\", cursive","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"field":"weekday","matrix":[0.60025,0.0,0.0,0.60001,86.2,86.4],"width":89.35,"size":34.2,"align":"left","color":"#512800","font":"\"Curlz MT\", \"Berkshire Swash\", cursive","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 7","matrix":[1.0,0.0,0.0,1.0,43.5,45.75]}]]]}],"symbols":{"Symbol 6":[],"Symbol 7":[{"length":60,"frames":[[0,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[2,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1328125}]],[3,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[4,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[5,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.31640625}]],[6,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.37109375}]],[7,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.42578125}]],[8,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4765625}]],[9,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5234375}]],[10,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5703125}]],[11,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[12,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.65625}]],[13,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6953125}]],[14,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[15,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[16,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.80078125}]],[17,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.828125}]],[18,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.85546875}]],[19,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8828125}]],[20,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[21,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.92578125}]],[22,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[23,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.95703125}]],[24,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[25,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[26,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[27,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[28,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[31,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[32,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[33,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[34,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[35,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[36,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9453125}]],[37,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9296875}]],[38,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91015625}]],[39,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.890625}]],[40,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8671875}]],[41,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[42,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8125}]],[43,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.78125}]],[44,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[45,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.71484375}]],[46,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6796875}]],[47,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[48,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.59765625}]],[49,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5546875}]],[50,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.51171875}]],[51,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4609375}]],[52,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4140625}]],[53,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[54,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3046875}]],[55,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.25}]],[56,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.19140625}]],[57,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[58,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[59,[{"symbol":"Symbol 6","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}]},"paths":["assets/clock05-19/bitmap-1.jpg"]},
    "clock05-22": {"name":"Blue Dolphins (clock05_22)","width":160,"height":140,"frameRate":60,"stage":[{"length":1,"frames":[[0,[{"symbol":"Symbol 3","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"field":"hm","matrix":[0.83986,0.0,0.0,0.83986,24.05,61.45],"width":133.85,"size":26.6,"align":"center","color":"#003366","font":"\"ＤＦＰスティックW9\", \"Trebuchet MS\", sans-serif","weight":"bold"}]]]},{"length":1,"frames":[[0,[{"field":"date","matrix":[0.50412,0.0,0.0,0.50392,48.65,47.55],"width":125.95,"size":23.75,"align":"left","color":"#003366","font":"\"ＤＦＧスティックW9\", \"Trebuchet MS\", sans-serif","weight":"bold"}]]]},{"length":1,"frames":[[0,[{"field":"weekday","matrix":[0.50412,0.0,0.0,0.50392,85.45,47.55],"width":85.2,"size":23.75,"align":"left","color":"#003366","font":"\"ＤＦＧスティックW9\", \"Trebuchet MS\", sans-serif","weight":"bold"}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,42.3,-21.65]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,-5.7,65.35]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,97.3,63.35]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,3.85,75.0]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,140.0,74.0]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,54.3,91.85]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,-0.7,-13.15]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,110.3,-14.15]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.8,114.35]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,125.8,113.35]}]]]}],"symbols":{"Symbol 3":[{"length":1,"frames":[[0,[{"src":"assets/clock05-22/bitmap-2.jpg","matrix":[1.0,0.0,0.0,1.0,0.3,-0.65]}]]]},{"length":1,"frames":[[0,[{"src":"assets/clock05-22/bitmap-1.jpg","matrix":[1.0,0.0,0.0,1.0,0.3,-0.65]}]]]}],"Symbol 11":[{"length":1,"frames":[[0,[{"src":"assets/clock05-22/bitmap-9.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 12":[{"length":101,"frames":[[0,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[11,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[12,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[13,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[14,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[15,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[16,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94921875}]],[17,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[18,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9140625}]],[19,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.89453125}]],[20,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.875}]],[21,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8515625}]],[22,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.82421875}]],[23,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.796875}]],[24,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[25,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[26,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.69921875}]],[27,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6640625}]],[28,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.625}]],[29,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[30,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.54296875}]],[31,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.49609375}]],[32,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.44921875}]],[33,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.40234375}]],[34,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3515625}]],[35,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.296875}]],[36,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2421875}]],[37,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.18359375}]],[38,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.125}]],[39,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0625}]],[40,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[70,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.03125}]],[71,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[72,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.09765625}]],[73,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[74,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.16015625}]],[75,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[76,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[77,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[78,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2890625}]],[79,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.32421875}]],[80,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.35546875}]],[81,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.38671875}]],[82,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.41796875}]],[83,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.453125}]],[84,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.484375}]],[85,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.515625}]],[86,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.546875}]],[87,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[88,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[89,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.64453125}]],[90,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.67578125}]],[91,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7109375}]],[92,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7421875}]],[93,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7734375}]],[94,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[95,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[96,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[97,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[98,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[99,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[100,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 15":[{"length":1,"frames":[[0,[{"src":"assets/clock05-22/bitmap-13.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 16":[{"length":60,"frames":[[0,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]],[1,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[2,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[3,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[4,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.95703125}]],[5,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9296875}]],[6,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.8984375}]],[7,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.86328125}]],[8,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.82421875}]],[9,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.77734375}]],[10,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.72265625}]],[11,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6640625}]],[12,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6015625}]],[13,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.53125}]],[14,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.45703125}]],[15,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.375}]],[16,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.2890625}]],[17,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19921875}]],[18,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.1015625}]],[19,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.0}]],[40,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.09765625}]],[41,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19140625}]],[42,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.27734375}]],[43,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.359375}]],[44,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.4375}]],[45,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.51171875}]],[46,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.578125}]],[47,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.640625}]],[48,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.69921875}]],[49,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.75}]],[50,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.796875}]],[51,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.83984375}]],[52,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.87890625}]],[53,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.91015625}]],[54,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9375}]],[55,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9609375}]],[56,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[57,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[58,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[59,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]]]}],"Symbol 19":[{"length":1,"frames":[[0,[{"src":"assets/clock05-22/bitmap-17.png","matrix":[1.0,0.0,0.0,1.0,-1.0,-1.0]}]]]}],"Symbol 20":[{"length":60,"frames":[[0,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[2,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1328125}]],[3,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[4,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[5,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.31640625}]],[6,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.37109375}]],[7,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.42578125}]],[8,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4765625}]],[9,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5234375}]],[10,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5703125}]],[11,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[12,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.65625}]],[13,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6953125}]],[14,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[15,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[16,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.80078125}]],[17,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.828125}]],[18,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.85546875}]],[19,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8828125}]],[20,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[21,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.92578125}]],[22,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[23,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.95703125}]],[24,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[25,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[26,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[27,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[28,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[31,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[32,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[33,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[34,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[35,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[36,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9453125}]],[37,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9296875}]],[38,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91015625}]],[39,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.890625}]],[40,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8671875}]],[41,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[42,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8125}]],[43,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.78125}]],[44,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[45,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.71484375}]],[46,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6796875}]],[47,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[48,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.59765625}]],[49,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5546875}]],[50,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.51171875}]],[51,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4609375}]],[52,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4140625}]],[53,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[54,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3046875}]],[55,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.25}]],[56,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.19140625}]],[57,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[58,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[59,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}],"Symbol 23":[{"length":1,"frames":[[0,[{"src":"assets/clock05-22/bitmap-21.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 24":[{"length":50,"frames":[[0,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.13671875}]],[2,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.265625}]],[3,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3828125}]],[4,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48828125}]],[5,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5859375}]],[6,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.671875}]],[7,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[8,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.81640625}]],[9,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[10,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91796875}]],[11,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.953125}]],[12,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[13,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[14,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[26,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[27,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[28,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[29,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[30,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[31,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.921875}]],[32,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8984375}]],[33,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[34,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[35,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[36,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.76953125}]],[37,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.73046875}]],[38,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6875}]],[39,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[40,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58984375}]],[41,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5390625}]],[42,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48046875}]],[43,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.421875}]],[44,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[45,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.29296875}]],[46,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[47,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.15234375}]],[48,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.078125}]],[49,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}]},"paths":["assets/clock05-22/bitmap-1.jpg","assets/clock05-22/bitmap-13.png","assets/clock05-22/bitmap-17.png","assets/clock05-22/bitmap-2.jpg","assets/clock05-22/bitmap-21.png","assets/clock05-22/bitmap-9.png"]},
    "clock05-24": {"name":"Green Apple & Bird (clock05_24)","width":160,"height":140,"frameRate":60,"stage":[{"length":1,"frames":[[0,[{"symbol":"Symbol 3","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"field":"hm","matrix":[0.83986,0.0,0.0,0.83986,16.55,48.45],"width":133.85,"size":43.7,"align":"center","color":"#660000","font":"\"Script MT Bold\", \"Lobster\", cursive","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"field":"date","matrix":[0.50412,0.0,0.0,0.50392,34.3,95.0],"width":125.95,"size":27.2,"align":"left","color":"#660000","font":"\"Script MT Bold\", \"Lobster\", cursive","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"field":"weekday","matrix":[0.50412,0.0,0.0,0.50392,68.6,95.0],"width":85.2,"size":27.2,"align":"left","color":"#660000","font":"\"Script MT Bold\", \"Lobster\", cursive","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,-0.15,-4.65]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,139.55,74.0]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,79.35,-8.65]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,15.35,97.35]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,69.85,-20.15]}]]]}],"symbols":{"Symbol 3":[{"length":1,"frames":[[0,[{"src":"assets/clock05-24/bitmap-2.jpg","matrix":[1.0,0.0,0.0,1.0,-0.15,-1.15]}]]]},{"length":1,"frames":[[0,[{"src":"assets/clock05-24/bitmap-1.jpg","matrix":[1.0,0.0,0.0,1.0,-0.15,-0.65]}]]]}],"Symbol 10":[{"length":1,"frames":[[0,[{"src":"assets/clock05-24/bitmap-8.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 11":[{"length":101,"frames":[[0,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[11,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[12,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[13,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[14,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[15,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[16,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94921875}]],[17,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[18,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9140625}]],[19,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.89453125}]],[20,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.875}]],[21,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8515625}]],[22,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.82421875}]],[23,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.796875}]],[24,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[25,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[26,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.69921875}]],[27,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6640625}]],[28,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.625}]],[29,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[30,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.54296875}]],[31,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.49609375}]],[32,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.44921875}]],[33,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.40234375}]],[34,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3515625}]],[35,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.296875}]],[36,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2421875}]],[37,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.18359375}]],[38,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.125}]],[39,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0625}]],[40,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[70,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.03125}]],[71,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[72,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.09765625}]],[73,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[74,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.16015625}]],[75,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[76,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[77,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[78,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2890625}]],[79,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.32421875}]],[80,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.35546875}]],[81,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.38671875}]],[82,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.41796875}]],[83,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.453125}]],[84,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.484375}]],[85,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.515625}]],[86,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.546875}]],[87,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[88,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[89,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.64453125}]],[90,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.67578125}]],[91,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7109375}]],[92,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7421875}]],[93,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7734375}]],[94,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[95,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[96,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[97,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[98,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[99,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[100,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 14":[{"length":1,"frames":[[0,[{"src":"assets/clock05-24/bitmap-12.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 15":[{"length":60,"frames":[[0,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]],[1,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[2,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[3,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[4,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.95703125}]],[5,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9296875}]],[6,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.8984375}]],[7,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.86328125}]],[8,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.82421875}]],[9,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.77734375}]],[10,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.72265625}]],[11,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6640625}]],[12,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6015625}]],[13,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.53125}]],[14,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.45703125}]],[15,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.375}]],[16,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.2890625}]],[17,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19921875}]],[18,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.1015625}]],[19,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.0}]],[40,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.09765625}]],[41,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19140625}]],[42,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.27734375}]],[43,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.359375}]],[44,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.4375}]],[45,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.51171875}]],[46,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.578125}]],[47,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.640625}]],[48,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.69921875}]],[49,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.75}]],[50,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.796875}]],[51,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.83984375}]],[52,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.87890625}]],[53,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.91015625}]],[54,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9375}]],[55,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9609375}]],[56,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[57,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[58,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[59,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]]]}],"Symbol 18":[{"length":1,"frames":[[0,[{"src":"assets/clock05-24/bitmap-16.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 19":[{"length":50,"frames":[[0,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.13671875}]],[2,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.265625}]],[3,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3828125}]],[4,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48828125}]],[5,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5859375}]],[6,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.671875}]],[7,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[8,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.81640625}]],[9,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[10,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91796875}]],[11,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.953125}]],[12,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[13,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[14,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[26,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[27,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[28,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[29,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[30,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[31,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.921875}]],[32,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8984375}]],[33,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[34,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[35,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[36,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.76953125}]],[37,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.73046875}]],[38,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6875}]],[39,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[40,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58984375}]],[41,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5390625}]],[42,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48046875}]],[43,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.421875}]],[44,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[45,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.29296875}]],[46,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[47,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.15234375}]],[48,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.078125}]],[49,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}],"Symbol 22":[{"length":1,"frames":[[0,[{"src":"assets/clock05-24/bitmap-20.png","matrix":[1.0,0.0,0.0,1.0,-1.0,-1.0]}]]]}],"Symbol 23":[{"length":60,"frames":[[0,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[2,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1328125}]],[3,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[4,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[5,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.31640625}]],[6,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.37109375}]],[7,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.42578125}]],[8,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4765625}]],[9,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5234375}]],[10,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5703125}]],[11,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[12,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.65625}]],[13,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6953125}]],[14,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[15,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[16,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.80078125}]],[17,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.828125}]],[18,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.85546875}]],[19,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8828125}]],[20,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[21,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.92578125}]],[22,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[23,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.95703125}]],[24,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[25,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[26,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[27,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[28,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[31,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[32,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[33,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[34,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[35,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[36,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9453125}]],[37,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9296875}]],[38,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91015625}]],[39,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.890625}]],[40,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8671875}]],[41,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[42,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8125}]],[43,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.78125}]],[44,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[45,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.71484375}]],[46,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6796875}]],[47,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[48,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.59765625}]],[49,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5546875}]],[50,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.51171875}]],[51,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4609375}]],[52,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4140625}]],[53,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[54,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3046875}]],[55,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.25}]],[56,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.19140625}]],[57,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[58,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[59,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}]},"paths":["assets/clock05-24/bitmap-1.jpg","assets/clock05-24/bitmap-12.png","assets/clock05-24/bitmap-16.png","assets/clock05-24/bitmap-2.jpg","assets/clock05-24/bitmap-20.png","assets/clock05-24/bitmap-8.png"]},
    "clock05-30": {"name":"Pink Rose Heart (clock05_30)","width":160,"height":140,"frameRate":60,"stage":[{"length":1,"frames":[[0,[{"src":"assets/clock05-30/bitmap-1.jpg","matrix":[1.0,0.0,0.0,1.0,-0.15,0.0]}]]]},{"length":1,"frames":[[0,[{"field":"hm","matrix":[1.0,0.0,0.0,1.0,13.1,27.95],"width":133.85,"size":43.2,"align":"center","color":"#ff0066","font":"\"French Script MT\", \"Pinyon Script\", cursive","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"field":"date","matrix":[0.60025,0.0,0.0,0.60001,40.2,70.2],"width":125.95,"size":23.25,"align":"center","color":"#ff0066","font":"\"Times New Roman Baltic\", Georgia, serif","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,106.5,44.0]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 14","matrix":[1.0,0.0,0.0,1.0,18.35,49.85]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 10","matrix":[1.0,0.0,0.0,1.0,29.35,-19.65]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,111.55,8.5]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,21.05,75.5]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,66.35,87.35]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,-6.65,16.35]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 22","matrix":[1.0,0.0,0.0,1.0,130.35,44.35]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 18","matrix":[1.0,0.0,0.0,1.0,21.05,11.5]}]]]}],"symbols":{"Symbol 9":[{"length":1,"frames":[[0,[{"src":"assets/clock05-30/bitmap-7.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 10":[{"length":101,"frames":[[0,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[11,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[12,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[13,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[14,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[15,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[16,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94921875}]],[17,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[18,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9140625}]],[19,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.89453125}]],[20,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.875}]],[21,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8515625}]],[22,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.82421875}]],[23,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.796875}]],[24,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[25,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[26,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.69921875}]],[27,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6640625}]],[28,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.625}]],[29,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[30,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.54296875}]],[31,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.49609375}]],[32,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.44921875}]],[33,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.40234375}]],[34,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3515625}]],[35,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.296875}]],[36,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2421875}]],[37,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.18359375}]],[38,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.125}]],[39,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0625}]],[40,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[70,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.03125}]],[71,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[72,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.09765625}]],[73,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[74,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.16015625}]],[75,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[76,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[77,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[78,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2890625}]],[79,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.32421875}]],[80,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.35546875}]],[81,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.38671875}]],[82,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.41796875}]],[83,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.453125}]],[84,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.484375}]],[85,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.515625}]],[86,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.546875}]],[87,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[88,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[89,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.64453125}]],[90,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.67578125}]],[91,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7109375}]],[92,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7421875}]],[93,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7734375}]],[94,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[95,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[96,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[97,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[98,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[99,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[100,[{"symbol":"Symbol 9","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 13":[{"length":1,"frames":[[0,[{"src":"assets/clock05-30/bitmap-11.png","matrix":[1.0,0.0,0.0,1.0,-1.0,-1.0]}]]]}],"Symbol 14":[{"length":60,"frames":[[0,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[2,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1328125}]],[3,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[4,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[5,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.31640625}]],[6,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.37109375}]],[7,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.42578125}]],[8,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4765625}]],[9,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5234375}]],[10,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5703125}]],[11,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[12,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.65625}]],[13,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6953125}]],[14,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[15,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[16,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.80078125}]],[17,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.828125}]],[18,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.85546875}]],[19,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8828125}]],[20,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[21,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.92578125}]],[22,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[23,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.95703125}]],[24,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[25,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[26,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[27,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[28,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[31,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[32,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[33,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[34,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[35,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[36,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9453125}]],[37,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9296875}]],[38,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91015625}]],[39,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.890625}]],[40,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8671875}]],[41,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[42,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8125}]],[43,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.78125}]],[44,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[45,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.71484375}]],[46,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6796875}]],[47,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[48,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.59765625}]],[49,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5546875}]],[50,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.51171875}]],[51,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4609375}]],[52,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4140625}]],[53,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[54,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3046875}]],[55,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.25}]],[56,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.19140625}]],[57,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[58,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[59,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}],"Symbol 17":[{"length":1,"frames":[[0,[{"src":"assets/clock05-30/bitmap-15.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 18":[{"length":60,"frames":[[0,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]],[1,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[2,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[3,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[4,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.95703125}]],[5,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9296875}]],[6,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.8984375}]],[7,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.86328125}]],[8,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.82421875}]],[9,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.77734375}]],[10,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.72265625}]],[11,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6640625}]],[12,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6015625}]],[13,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.53125}]],[14,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.45703125}]],[15,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.375}]],[16,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.2890625}]],[17,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19921875}]],[18,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.1015625}]],[19,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.0}]],[40,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.09765625}]],[41,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19140625}]],[42,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.27734375}]],[43,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.359375}]],[44,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.4375}]],[45,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.51171875}]],[46,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.578125}]],[47,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.640625}]],[48,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.69921875}]],[49,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.75}]],[50,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.796875}]],[51,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.83984375}]],[52,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.87890625}]],[53,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.91015625}]],[54,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9375}]],[55,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9609375}]],[56,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[57,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[58,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[59,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]]]}],"Symbol 21":[{"length":1,"frames":[[0,[{"src":"assets/clock05-30/bitmap-19.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 22":[{"length":50,"frames":[[0,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.13671875}]],[2,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.265625}]],[3,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3828125}]],[4,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48828125}]],[5,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5859375}]],[6,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.671875}]],[7,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[8,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.81640625}]],[9,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[10,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91796875}]],[11,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.953125}]],[12,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[13,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[14,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[26,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[27,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[28,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[29,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[30,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[31,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.921875}]],[32,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8984375}]],[33,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[34,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[35,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[36,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.76953125}]],[37,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.73046875}]],[38,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6875}]],[39,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[40,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58984375}]],[41,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5390625}]],[42,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48046875}]],[43,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.421875}]],[44,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[45,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.29296875}]],[46,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[47,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.15234375}]],[48,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.078125}]],[49,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}]},"paths":["assets/clock05-30/bitmap-1.jpg","assets/clock05-30/bitmap-11.png","assets/clock05-30/bitmap-15.png","assets/clock05-30/bitmap-19.png","assets/clock05-30/bitmap-7.png"]},
    "clock05-31": {"name":"Tartan & Charms (clock05_31)","width":160,"height":140,"frameRate":60,"stage":[{"length":1,"frames":[[0,[{"symbol":"Symbol 2","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"field":"hm","matrix":[0.83986,0.0,0.0,0.83986,2.55,43.7],"width":184.65,"size":57.25,"align":"center","color":"#ffffff","font":"\"Imprint MT Shadow\", \"Bodoni Moda\", Georgia, serif","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"field":"date","matrix":[0.50412,0.0,0.0,0.50392,54.3,96.85],"width":125.95,"size":36.55,"align":"left","color":"#ffffff","font":"\"Imprint MT Shadow\", \"Bodoni Moda\", Georgia, serif","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"field":"weekday","matrix":[0.50412,0.0,0.0,0.50392,103.15,96.85],"width":116.35,"size":36.55,"align":"left","color":"#ffffff","font":"\"Imprint MT Shadow\", \"Bodoni Moda\", Georgia, serif","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"src":"assets/clock05-31/bitmap-8.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 13","matrix":[1.0,0.0,0.0,1.0,87.85,-18.65]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,10.55,12.5]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,73.35,-1.15]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 25","matrix":[1.0,0.0,0.0,1.0,-1.15,88.85]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 17","matrix":[1.0,0.0,0.0,1.0,77.55,125.0]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,135.35,114.35]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 25","matrix":[1.0,0.0,0.0,1.0,24.35,3.85]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 21","matrix":[1.0,0.0,0.0,1.0,-10.15,-12.65]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 25","matrix":[1.0,0.0,0.0,1.0,127.85,-24.65]}]]]}],"symbols":{"Symbol 2":[{"length":1,"frames":[[0,[{"src":"assets/clock05-31/bitmap-1.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"src":"assets/clock05-31/bitmap-1.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"src":"assets/clock05-31/bitmap-1.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 12":[{"length":1,"frames":[[0,[{"src":"assets/clock05-31/bitmap-10.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 13":[{"length":101,"frames":[[0,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[11,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[12,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[13,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[14,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[15,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[16,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94921875}]],[17,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[18,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9140625}]],[19,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.89453125}]],[20,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.875}]],[21,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8515625}]],[22,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.82421875}]],[23,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.796875}]],[24,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[25,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[26,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.69921875}]],[27,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6640625}]],[28,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.625}]],[29,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[30,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.54296875}]],[31,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.49609375}]],[32,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.44921875}]],[33,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.40234375}]],[34,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3515625}]],[35,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.296875}]],[36,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2421875}]],[37,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.18359375}]],[38,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.125}]],[39,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0625}]],[40,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[70,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.03125}]],[71,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[72,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.09765625}]],[73,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[74,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.16015625}]],[75,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[76,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[77,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[78,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2890625}]],[79,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.32421875}]],[80,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.35546875}]],[81,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.38671875}]],[82,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.41796875}]],[83,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.453125}]],[84,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.484375}]],[85,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.515625}]],[86,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.546875}]],[87,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[88,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[89,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.64453125}]],[90,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.67578125}]],[91,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7109375}]],[92,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7421875}]],[93,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7734375}]],[94,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[95,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[96,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[97,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[98,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[99,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[100,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 16":[{"length":1,"frames":[[0,[{"src":"assets/clock05-31/bitmap-14.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 17":[{"length":60,"frames":[[0,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]],[1,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[2,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[3,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[4,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.95703125}]],[5,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9296875}]],[6,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.8984375}]],[7,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.86328125}]],[8,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.82421875}]],[9,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.77734375}]],[10,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.72265625}]],[11,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6640625}]],[12,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6015625}]],[13,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.53125}]],[14,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.45703125}]],[15,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.375}]],[16,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.2890625}]],[17,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19921875}]],[18,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.1015625}]],[19,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.0}]],[40,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.09765625}]],[41,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19140625}]],[42,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.27734375}]],[43,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.359375}]],[44,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.4375}]],[45,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.51171875}]],[46,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.578125}]],[47,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.640625}]],[48,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.69921875}]],[49,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.75}]],[50,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.796875}]],[51,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.83984375}]],[52,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.87890625}]],[53,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.91015625}]],[54,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9375}]],[55,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9609375}]],[56,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[57,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[58,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[59,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]]]}],"Symbol 20":[{"length":1,"frames":[[0,[{"src":"assets/clock05-31/bitmap-18.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 21":[{"length":50,"frames":[[0,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.13671875}]],[2,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.265625}]],[3,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3828125}]],[4,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48828125}]],[5,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5859375}]],[6,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.671875}]],[7,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[8,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.81640625}]],[9,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[10,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91796875}]],[11,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.953125}]],[12,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[13,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[14,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[26,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[27,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[28,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[29,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[30,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[31,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.921875}]],[32,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8984375}]],[33,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[34,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[35,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[36,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.76953125}]],[37,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.73046875}]],[38,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6875}]],[39,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[40,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58984375}]],[41,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5390625}]],[42,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48046875}]],[43,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.421875}]],[44,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[45,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.29296875}]],[46,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[47,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.15234375}]],[48,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.078125}]],[49,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}],"Symbol 24":[{"length":1,"frames":[[0,[{"src":"assets/clock05-31/bitmap-22.png","matrix":[1.0,0.0,0.0,1.0,-1.0,-1.0]}]]]}],"Symbol 25":[{"length":60,"frames":[[0,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[2,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1328125}]],[3,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[4,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[5,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.31640625}]],[6,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.37109375}]],[7,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.42578125}]],[8,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4765625}]],[9,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5234375}]],[10,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5703125}]],[11,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[12,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.65625}]],[13,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6953125}]],[14,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[15,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[16,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.80078125}]],[17,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.828125}]],[18,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.85546875}]],[19,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8828125}]],[20,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[21,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.92578125}]],[22,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[23,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.95703125}]],[24,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[25,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[26,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[27,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[28,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[31,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[32,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[33,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[34,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[35,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[36,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9453125}]],[37,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9296875}]],[38,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91015625}]],[39,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.890625}]],[40,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8671875}]],[41,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[42,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8125}]],[43,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.78125}]],[44,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[45,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.71484375}]],[46,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6796875}]],[47,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[48,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.59765625}]],[49,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5546875}]],[50,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.51171875}]],[51,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4609375}]],[52,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4140625}]],[53,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[54,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3046875}]],[55,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.25}]],[56,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.19140625}]],[57,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[58,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[59,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}]},"paths":["assets/clock05-31/bitmap-1.png","assets/clock05-31/bitmap-10.png","assets/clock05-31/bitmap-14.png","assets/clock05-31/bitmap-18.png","assets/clock05-31/bitmap-22.png","assets/clock05-31/bitmap-8.png"]},
    "clock05-33": {"name":"Lavender Jewel Box (clock05_33)","width":160,"height":140,"frameRate":60,"stage":[{"length":1,"frames":[[0,[{"src":"assets/clock05-33/bitmap-1.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"field":"hm","matrix":[0.83986,0.0,0.0,0.83986,3.25,57.0],"width":184.65,"size":38.4,"align":"center","color":"#993399","font":"\"Copperplate Gothic Light\", Georgia, serif","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"field":"date","matrix":[0.50412,0.0,0.0,0.50392,1.9,96.3],"width":310.8,"size":35.05,"align":"center","color":"#993399","font":"\"Copperplate Gothic Light\", Georgia, serif","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"src":"assets/clock05-33/bitmap-7.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,41.05,-9.75]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,7.85,60.6]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,25.15,109.6]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,86.95,119.15]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,129.9,45.55]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,120.8,17.15]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,129.9,21.3]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,6.85,26.8]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,25.2,14.45]}]]]}],"symbols":{"Symbol 11":[{"length":1,"frames":[[0,[{"src":"assets/clock05-33/bitmap-9.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 12":[{"length":101,"frames":[[0,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[11,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[12,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[13,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[14,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[15,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[16,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94921875}]],[17,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[18,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9140625}]],[19,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.89453125}]],[20,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.875}]],[21,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8515625}]],[22,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.82421875}]],[23,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.796875}]],[24,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[25,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[26,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.69921875}]],[27,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6640625}]],[28,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.625}]],[29,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[30,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.54296875}]],[31,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.49609375}]],[32,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.44921875}]],[33,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.40234375}]],[34,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3515625}]],[35,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.296875}]],[36,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2421875}]],[37,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.18359375}]],[38,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.125}]],[39,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0625}]],[40,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[70,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.03125}]],[71,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[72,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.09765625}]],[73,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[74,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.16015625}]],[75,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[76,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[77,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[78,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2890625}]],[79,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.32421875}]],[80,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.35546875}]],[81,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.38671875}]],[82,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.41796875}]],[83,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.453125}]],[84,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.484375}]],[85,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.515625}]],[86,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.546875}]],[87,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[88,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[89,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.64453125}]],[90,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.67578125}]],[91,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7109375}]],[92,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7421875}]],[93,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7734375}]],[94,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[95,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[96,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[97,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[98,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[99,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[100,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 15":[{"length":1,"frames":[[0,[{"src":"assets/clock05-33/bitmap-13.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 16":[{"length":60,"frames":[[0,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]],[1,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[2,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[3,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[4,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.95703125}]],[5,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9296875}]],[6,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.8984375}]],[7,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.86328125}]],[8,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.82421875}]],[9,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.77734375}]],[10,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.72265625}]],[11,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6640625}]],[12,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6015625}]],[13,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.53125}]],[14,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.45703125}]],[15,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.375}]],[16,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.2890625}]],[17,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19921875}]],[18,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.1015625}]],[19,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.0}]],[40,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.09765625}]],[41,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19140625}]],[42,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.27734375}]],[43,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.359375}]],[44,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.4375}]],[45,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.51171875}]],[46,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.578125}]],[47,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.640625}]],[48,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.69921875}]],[49,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.75}]],[50,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.796875}]],[51,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.83984375}]],[52,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.87890625}]],[53,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.91015625}]],[54,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9375}]],[55,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9609375}]],[56,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[57,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[58,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[59,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]]]}],"Symbol 19":[{"length":1,"frames":[[0,[{"src":"assets/clock05-33/bitmap-17.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 20":[{"length":50,"frames":[[0,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.13671875}]],[2,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.265625}]],[3,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3828125}]],[4,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48828125}]],[5,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5859375}]],[6,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.671875}]],[7,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[8,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.81640625}]],[9,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[10,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91796875}]],[11,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.953125}]],[12,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[13,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[14,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[26,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[27,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[28,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[29,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[30,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[31,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.921875}]],[32,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8984375}]],[33,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[34,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[35,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[36,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.76953125}]],[37,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.73046875}]],[38,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6875}]],[39,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[40,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58984375}]],[41,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5390625}]],[42,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48046875}]],[43,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.421875}]],[44,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[45,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.29296875}]],[46,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[47,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.15234375}]],[48,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.078125}]],[49,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}]},"paths":["assets/clock05-33/bitmap-1.png","assets/clock05-33/bitmap-13.png","assets/clock05-33/bitmap-17.png","assets/clock05-33/bitmap-7.png","assets/clock05-33/bitmap-9.png"]},
    "clock05-36": {"name":"Poodle & Gems (clock05_36)","width":160,"height":140,"frameRate":60,"stage":[{"length":1,"frames":[[0,[{"src":"assets/clock05-36/bitmap-1.jpg","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"field":"hm","matrix":[0.83986,0.0,0.0,0.83986,0.25,35.0],"width":184.65,"size":45.35,"align":"center","color":"#0066ff","font":"\"A-OTF じゅん Pro 34\", \"Arial Rounded MT Bold\", \"Trebuchet MS\", sans-serif","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"field":"date","matrix":[0.50412,0.0,0.0,0.50392,32.15,79.0],"width":106.85,"size":39.65,"align":"center","color":"#0066ff","font":"\"A-OTF じゅん Pro 34\", \"Arial Rounded MT Bold\", \"Trebuchet MS\", sans-serif","weight":"normal"}]]]},{"length":1,"frames":[[0,[{"src":"assets/clock05-36/bitmap-7.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,99.35,-20.65]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 12","matrix":[1.0,0.0,0.0,1.0,-14.65,77.35]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,6.55,74.5]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,125.35,33.85]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,38.85,82.85]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,27.55,12.5]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,91.85,-7.15]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 24","matrix":[1.0,0.0,0.0,1.0,117.35,22.85]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,87.55,82.0]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 20","matrix":[1.0,0.0,0.0,1.0,132.35,79.85]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,80.55,121.0]}]]]},{"length":1,"frames":[[0,[{"symbol":"Symbol 16","matrix":[1.0,0.0,0.0,1.0,73.55,10.5]}]]]}],"symbols":{"Symbol 11":[{"length":1,"frames":[[0,[{"src":"assets/clock05-36/bitmap-9.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 12":[{"length":101,"frames":[[0,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[11,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[12,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[13,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[14,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[15,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[16,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94921875}]],[17,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[18,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9140625}]],[19,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.89453125}]],[20,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.875}]],[21,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8515625}]],[22,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.82421875}]],[23,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.796875}]],[24,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[25,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[26,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.69921875}]],[27,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6640625}]],[28,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.625}]],[29,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[30,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.54296875}]],[31,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.49609375}]],[32,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.44921875}]],[33,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.40234375}]],[34,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3515625}]],[35,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.296875}]],[36,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2421875}]],[37,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.18359375}]],[38,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.125}]],[39,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0625}]],[40,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[70,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.03125}]],[71,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[72,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.09765625}]],[73,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[74,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.16015625}]],[75,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[76,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[77,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[78,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2890625}]],[79,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.32421875}]],[80,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.35546875}]],[81,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.38671875}]],[82,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.41796875}]],[83,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.453125}]],[84,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.484375}]],[85,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.515625}]],[86,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.546875}]],[87,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58203125}]],[88,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[89,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.64453125}]],[90,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.67578125}]],[91,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7109375}]],[92,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7421875}]],[93,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.7734375}]],[94,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[95,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[96,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[97,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[98,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.93359375}]],[99,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[100,[{"symbol":"Symbol 11","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 15":[{"length":1,"frames":[[0,[{"src":"assets/clock05-36/bitmap-13.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 16":[{"length":60,"frames":[[0,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]],[1,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[2,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[3,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[4,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.95703125}]],[5,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9296875}]],[6,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.8984375}]],[7,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.86328125}]],[8,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.82421875}]],[9,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.77734375}]],[10,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.72265625}]],[11,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6640625}]],[12,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.6015625}]],[13,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.53125}]],[14,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.45703125}]],[15,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.375}]],[16,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.2890625}]],[17,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19921875}]],[18,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.1015625}]],[19,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.0}]],[40,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.09765625}]],[41,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.19140625}]],[42,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.27734375}]],[43,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.359375}]],[44,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.4375}]],[45,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.51171875}]],[46,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.578125}]],[47,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.640625}]],[48,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.69921875}]],[49,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.75}]],[50,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.796875}]],[51,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.83984375}]],[52,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.87890625}]],[53,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.91015625}]],[54,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9375}]],[55,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9609375}]],[56,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.9765625}]],[57,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.98828125}]],[58,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65],"alpha":0.99609375}]],[59,[{"symbol":"Symbol 15","matrix":[1.0,0.0,0.0,1.0,-11.55,-10.65]}]]]}],"Symbol 19":[{"length":1,"frames":[[0,[{"src":"assets/clock05-36/bitmap-17.png","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]]]}],"Symbol 20":[{"length":50,"frames":[[0,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.13671875}]],[2,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.265625}]],[3,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3828125}]],[4,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48828125}]],[5,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5859375}]],[6,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.671875}]],[7,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[8,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.81640625}]],[9,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[10,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91796875}]],[11,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.953125}]],[12,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[13,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[14,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[26,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9921875}]],[27,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.984375}]],[28,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[29,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[30,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[31,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.921875}]],[32,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8984375}]],[33,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.87109375}]],[34,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[35,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8046875}]],[36,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.76953125}]],[37,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.73046875}]],[38,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6875}]],[39,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[40,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.58984375}]],[41,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5390625}]],[42,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.48046875}]],[43,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.421875}]],[44,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[45,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.29296875}]],[46,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2265625}]],[47,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.15234375}]],[48,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.078125}]],[49,[{"symbol":"Symbol 19","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}],"Symbol 23":[{"length":1,"frames":[[0,[{"src":"assets/clock05-36/bitmap-21.png","matrix":[1.0,0.0,0.0,1.0,-1.0,-1.0]}]]]}],"Symbol 24":[{"length":60,"frames":[[0,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]],[1,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[2,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1328125}]],[3,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.1953125}]],[4,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.2578125}]],[5,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.31640625}]],[6,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.37109375}]],[7,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.42578125}]],[8,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4765625}]],[9,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5234375}]],[10,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5703125}]],[11,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.61328125}]],[12,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.65625}]],[13,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6953125}]],[14,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.734375}]],[15,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.765625}]],[16,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.80078125}]],[17,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.828125}]],[18,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.85546875}]],[19,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8828125}]],[20,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.90234375}]],[21,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.92578125}]],[22,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.94140625}]],[23,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.95703125}]],[24,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.96875}]],[25,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[26,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[27,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[28,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0]}]],[31,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.99609375}]],[32,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98828125}]],[33,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.98046875}]],[34,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.97265625}]],[35,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9609375}]],[36,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9453125}]],[37,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.9296875}]],[38,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.91015625}]],[39,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.890625}]],[40,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8671875}]],[41,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.83984375}]],[42,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.8125}]],[43,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.78125}]],[44,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.75}]],[45,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.71484375}]],[46,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.6796875}]],[47,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.640625}]],[48,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.59765625}]],[49,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.5546875}]],[50,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.51171875}]],[51,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4609375}]],[52,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.4140625}]],[53,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.359375}]],[54,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.3046875}]],[55,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.25}]],[56,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.19140625}]],[57,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.12890625}]],[58,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.06640625}]],[59,[{"symbol":"Symbol 23","matrix":[1.0,0.0,0.0,1.0,0.0,0.0],"alpha":0.0}]]]}]},"paths":["assets/clock05-36/bitmap-1.jpg","assets/clock05-36/bitmap-13.png","assets/clock05-36/bitmap-17.png","assets/clock05-36/bitmap-21.png","assets/clock05-36/bitmap-7.png","assets/clock05-36/bitmap-9.png"]}
};
  // Google Fonts approximations of the original Flash typefaces.
  if (!document.querySelector('link[data-retro-clock-fonts]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&family=Noto+Sans+JP:wght@400;500&family=VT323&family=Yuji+Syuku&display=swap';
    link.setAttribute('data-retro-clock-fonts', '');
    document.head.append(link);
    link.addEventListener('load', () => {
      if (document.fonts) for (const font of ['400 18px "Noto Sans JP"','400 17px "Yuji Syuku"','400 11px "VT323"','700 22px "Arimo"']) document.fonts.load(font).catch(()=>{});
    });
  }
  const TINTS = Object.freeze({
    pink:'#ff86c8', rose:'#e97aa8', red:'#d96b7a', orange:'#f0a35e', yellow:'#e7c85d',
    gold:'#c9a24f', green:'#7fc98d', mint:'#82d8c3', teal:'#66b8b8', blue:'#7eaeea',
    lavender:'#b39be8', purple:'#9c7bd8', gray:'#999999', brown:'#a27b60'
  });
  const aliases = {"blogparts-otometokei": "blogparts-otometokei-trans", "blogparts-otometokei-red-checker": "blogparts-otometokei-trans-red-checker", "blogparts-otometokei-pink-polka": "blogparts-otometokei-trans-pink-polka", "blogparts-otometokei-blue": "blogparts-otometokei-trans-blue", "blogparts-otometokei-yellow": "blogparts-otometokei-trans-yellow", "blogparts-otometokei-light-blue": "blogparts-otometokei-trans-light-blue", "blogparts-otometokei-silver": "blogparts-otometokei-trans-silver", "blogparts-otometokei-pink-diamonds": "blogparts-otometokei-trans-pink-diamonds", "blogparts-otometokei-pink-checker": "blogparts-otometokei-trans-pink-checker", "blogparts-otometokei-cream": "blogparts-otometokei-trans-cream", "blogparts-otometokei-green": "blogparts-otometokei-trans-green", "blogparts-otometokei-black-polka": "blogparts-otometokei-trans-black-polka", "blogparts-otometokei-teal": "blogparts-otometokei-trans-teal", "blogparts-otometokei-lavender": "blogparts-otometokei-trans-lavender", "blogparts-otometokei-black-gingham": "blogparts-otometokei-trans-black-gingham", "blogparts-otometokei-magenta-gingham": "blogparts-otometokei-trans-magenta-gingham", "blogparts-otometokei-pink-gingham": "blogparts-otometokei-trans-pink-gingham", "blogparts-otometokei-pink": "blogparts-otometokei-trans", "blogparts-otometokei-trans-pink": "blogparts-otometokei-trans", "clockwidget-1": "clockwidget-analog", "clockwidget (1)": "clockwidget-analog"};
  const normalize = id => { const raw = (id || '').trim().toLowerCase().replace(/\.swf$/i,''); const key = raw.replaceAll('_','-'); return aliases[key] || key; };
  const normalizeTint = value => { const key = (value || '').trim().toLowerCase(); return Object.hasOwn(TINTS,key) ? key : ''; };
  const tintables = path => /(?:\/background\.png$|\/skin-[^/]+\.png$|\/pendulum\.png$)/i.test(path || '');
  const images = new Map(), tinted = new Map(), formats = new Map(), active = new Set();
  let timer;
  function load(path) {
    if (!images.has(path)) images.set(path,new Promise((resolve,reject) => {
      const image = new Image(); image.onload = () => resolve(image);
      image.onerror = () => reject(new Error('Could not load '+path));
      image.src = new URL(path,base).href;
    }));
    return images.get(path);
  }
  function tintImage(path, image, tint) {
    if (!tint || !Object.hasOwn(TINTS,tint) || !image) return image;
    const key = path+'::'+tint;
    if (!tinted.has(key)) {
      const canvas = document.createElement('canvas');
      canvas.width = image.naturalWidth || image.width;
      canvas.height = image.naturalHeight || image.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image,0,0);
      ctx.globalCompositeOperation = 'source-atop';
      ctx.fillStyle = TINTS[tint];
      ctx.globalAlpha = 0.45;
      ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.globalCompositeOperation = 'multiply';
      ctx.globalAlpha = 0.55;
      ctx.drawImage(image,0,0);
      ctx.globalCompositeOperation = 'destination-in';
      ctx.globalAlpha = 1;
      ctx.drawImage(image,0,0);
      tinted.set(key, canvas);
    }
    return tinted.get(key);
  }
  function artFor(art, path, tint) {
    const image = art.get(path);
    return tint && tintables(path) ? tintImage(path, image, tint) : image;
  }
  function formatter(zone) {
    const key = zone || 'local';
    if (!formats.has(key)) {
      const options = {year:'numeric',month:'2-digit',day:'2-digit',weekday:'short',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'};
      if (zone && zone !== 'local') options.timeZone = zone;
      formats.set(key,new Intl.DateTimeFormat('en-US',options));
    }
    return formats.get(key);
  }
  function timeParts(date,zone) {
    const p = Object.fromEntries(formatter(zone).formatToParts(date).map(x=>[x.type,x.value]));
    const H=p.hour,M=p.minute,S=p.second;
    return {H,M,S,year:p.year,month:p.month,day:p.day,weekday:p.weekday.toUpperCase(),
      weekIndex:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(p.weekday),
      monthName:['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'][+p.month-1],
      hm:H+':'+M,hms:H+':'+M+':'+S,hmSpace:H+' '+M,date:(+p.month)+'/'+(+p.day),fullDate:p.year+' / '+p.month+' / '+p.day,brand:'オトメトケイ',
      H0:+H[0],H1:+H[1],M0:+M[0],M1:+M[1],S0:+S[0],S1:+S[1],month0:+p.month[0],month1:+p.month[1],day0:+p.day[0],day1:+p.day[1]};
  }
  const animationStart = Date.now();
  if (!document.querySelector('link[data-bpparts-girly-fonts]')) {
    const fontSheet = document.createElement('link');
    fontSheet.rel = 'stylesheet';
    fontSheet.href = 'https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Bodoni+Moda&family=Lobster&family=Pinyon+Script&display=swap';
    fontSheet.setAttribute('data-bpparts-girly-fonts', '');
    document.head.append(fontSheet);
  }

  function drawLayers(ctx, layers, symbols, art, frame, parts, angles) {
    for (const layer of layers) {
      const position = frame % layer.length;
      const [, elements] = layer.frames.findLast(([index]) => index <= position) || [0, []];
      for (const element of elements) {
        ctx.save();
        ctx.transform(...element.matrix);
        if (element.alpha !== undefined) ctx.globalAlpha *= element.alpha;
        if (element.hand) ctx.rotate(angles[element.hand] * Math.PI / 180);
        if (element.symbol) {
          drawLayers(ctx, symbols[element.symbol], symbols, art, frame, parts, angles);
        } else if (element.src) {
          ctx.drawImage(art.get(element.src), 0, 0);
        } else {
          const {size, weight, font, color, align, width, field} = element;
          ctx.font = `${weight} ${size}px ${font}`;
          ctx.fillStyle = color;
          ctx.textAlign = align === 'justify' ? 'left' : align;
          ctx.textBaseline = 'alphabetic';
          const x = align === 'center' ? width / 2 : align === 'right' ? width - 2 : 2;
          ctx.fillText(parts[field], x, size * 0.92 + 2, width - 4);
        }
        ctx.restore();
      }
    }
  }

  function tick() { const now = new Date(); for (const widget of active) widget.draw(now); }
  function register(widget) { active.add(widget); if (!timer) timer=setInterval(tick,100); widget.draw(new Date()); }
  function unregister(widget) { active.delete(widget); if (!active.size && timer) {clearInterval(timer);timer=undefined;} }
  class RetroClock extends HTMLElement {
    static get observedAttributes() {return ['clock','time-zone','width','height','tint'];}
    constructor(){super();this.attachShadow({mode:'open'});this.generation=0;}
    connectedCallback(){this.setup();}
    disconnectedCallback(){++this.generation;unregister(this);}
    attributeChangedCallback(name,oldValue,newValue){if(oldValue!==newValue && this.isConnected)this.setup();}
    async setup(){
      const generation=++this.generation;unregister(this);
      const query=new URLSearchParams(location.search);
      const id=normalize(this.getAttribute('clock')||query.get('clock')||'clock02-02');
      const zone=this.getAttribute('time-zone')||query.get('time-zone')||'local';
      const tint=normalizeTint(this.getAttribute('tint')||query.get('tint')||'');
      this.shadowRoot.innerHTML='<style>:host{display:inline-block;vertical-align:middle;max-width:100%}canvas{display:block;max-width:100%;height:auto}span{font:12px sans-serif;color:inherit}</style>';
      const message=text=>{const span=document.createElement('span');span.textContent=text;this.shadowRoot.append(span);};
      if (!Object.hasOwn(clocks,id)){message('Unknown clock: '+id);return;}
      try{formatter(zone);}catch{message('Invalid time zone: '+zone);return;}
      const c=clocks[id]; this.config=c;this.zone=zone;this.tint=c.stage ? "" : tint;
      const canvas=document.createElement('canvas');canvas.width=c.width;canvas.height=c.height;canvas.setAttribute('role','img');
      const width=Number(this.getAttribute('width')),height=Number(this.getAttribute('height'));
      if(width>0)canvas.style.width=width+'px';else if(height>0)canvas.style.width=(height*c.width/c.height)+'px';
      this.shadowRoot.append(canvas);this.canvas=canvas;this.ctx=canvas.getContext('2d');
      try {
        const paths=c.paths ?? [c.background,...c.hands.map(h=>h.src),...c.texts.flatMap(()=>[]),...(c.overlays||[]).map(o=>o.src),...c.sprites.flatMap(s=>s.srcs),...(c.pendulum?[c.pendulum.src]:[])];
        const loaded=await Promise.all([...new Set(paths)].map(async path=>[path,await load(path)]));
        if(generation!==this.generation||!this.isConnected)return;
        this.art=new Map(loaded);register(this);
      }catch(error){if(generation===this.generation){canvas.remove();message(error.message);}}
    }
    draw(now){
      const c=this.config,ctx=this.ctx,art=this.art;if(!c||!ctx||!art)return;
      const p=timeParts(now,this.zone),s=+p.S+now.getMilliseconds()/1000,m=+p.M,h=+p.H;
      const angles={hour:(h%12)*30+m*.5+s/120,minute:m*6+s*.1,second:s*6};
      ctx.clearRect(0,0,c.width,c.height);
      if (c.stage) {
        const reduced = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
        const frame = reduced ? 0 : Math.max(0, Math.floor((now.getTime() - animationStart) * c.frameRate / 1000));
        drawLayers(ctx, c.stage, c.symbols, art, frame, p, angles);
      } else {
        if(c.pendulum){const d=c.pendulum;ctx.save();ctx.translate(d.x,d.y);const reduced=typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;ctx.rotate(reduced?0:Math.sin(now.getTime()/1000*Math.PI)*0.16);ctx.drawImage(artFor(art,d.src,this.tint),d.left,d.top);ctx.restore();}
        ctx.drawImage(artFor(art,c.background,this.tint),0,0);
        for(const hand of c.hands){ctx.save();ctx.translate(hand.x,hand.y);ctx.rotate((angles[hand.kind]+hand.offset)*Math.PI/180);ctx.scale(hand.sx,hand.sy);ctx.drawImage(art.get(hand.src),hand.left,hand.top);ctx.restore();}
        for(const o of c.overlays||[]){const im=artFor(art,o.src,this.tint);ctx.drawImage(im,o.x,o.y,im.width*o.scale,im.height*o.scale);}
        for(const t of c.texts){ctx.fillStyle=t.color;ctx.font=`${t.weight} ${t.size}px ${t.font}`;ctx.textAlign=t.align;ctx.textBaseline='middle';ctx.fillText(String(p[t.field]??''),t.x,t.y);}
        for(const d of c.sprites){const im=art.get(d.srcs[p[d.field]]);if(im)ctx.drawImage(im,d.x-d.w/2,d.y-d.h/2,d.w,d.h);}
      }
      const label=`${c.name}: ${p.hms}, ${this.zone==='local'?'local time':this.zone}${this.tint?`, tint ${this.tint}`:''}`;if(this.canvas.getAttribute('aria-label')!==label)this.canvas.setAttribute('aria-label',label);
    }
  }
  if (!customElements.get('retro-clock')) customElements.define('retro-clock',RetroClock);
  window.RetroClocks=Object.freeze({ids:Object.freeze(Object.keys(clocks)),tints:Object.freeze(Object.keys(TINTS)),timeParts});
  function start(){
    const q=new URLSearchParams(location.search), target=document.querySelector('[data-retro-clock-gallery]');
    if(!target)return;
    if(q.has('clock')){
      const clock=document.createElement('retro-clock');clock.setAttribute('clock',q.get('clock'));if(q.has('time-zone'))clock.setAttribute('time-zone',q.get('time-zone'));if(q.has('tint'))clock.setAttribute('tint',q.get('tint'));target.replaceChildren(clock);document.body.classList.add('single-clock');return;
    }
    const zone=document.querySelector('#time-zone');
    for(const [id,c] of Object.entries(clocks)){
      const card=document.createElement('section'), title=document.createElement('h2'), clock=document.createElement('retro-clock'), link=document.createElement('a'), code=document.createElement('textarea');
      title.textContent=c.name;clock.setAttribute('clock',id);clock.setAttribute('time-zone',zone?.value||'local');
      link.textContent='Open widget';link.href='?clock='+encodeURIComponent(id);code.readOnly=true;code.rows=3;code.setAttribute('aria-label','Embed code for '+id);
      const refresh=()=>{const tz=zone?.value||'local';clock.setAttribute('time-zone',tz);const tint=c.stage?'':q.get('tint')||'';if(tint)clock.setAttribute('tint',tint);else clock.removeAttribute('tint');link.href='?clock='+encodeURIComponent(id)+'&time-zone='+encodeURIComponent(tz)+(tint?'&tint='+encodeURIComponent(tint):'');code.value=`<retro-clock clock="${id}" time-zone="${tz}"${tint?` tint=\"${tint}\"`:''}></retro-clock>\n<script src="${new URL('clocks.js',base).href}" defer></script>`;};
      refresh();zone?.addEventListener('change',refresh);code.addEventListener('focus',()=>code.select());card.append(title,clock,link,code);target.append(card);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
 
