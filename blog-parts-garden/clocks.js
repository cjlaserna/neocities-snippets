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
  }
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
      const c=clocks[id]; this.config=c;this.zone=zone;this.tint=tint;
      const canvas=document.createElement('canvas');canvas.width=c.width;canvas.height=c.height;canvas.setAttribute('role','img');
      const width=Number(this.getAttribute('width')),height=Number(this.getAttribute('height'));
      if(width>0)canvas.style.width=width+'px';else if(height>0)canvas.style.width=(height*c.width/c.height)+'px';
      this.shadowRoot.append(canvas);this.canvas=canvas;this.ctx=canvas.getContext('2d');
      try {
        const paths=[c.background,...c.hands.map(h=>h.src),...c.texts.flatMap(()=>[]),...(c.overlays||[]).map(o=>o.src),...c.sprites.flatMap(s=>s.srcs),...(c.pendulum?[c.pendulum.src]:[])];
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
      if(c.pendulum){const d=c.pendulum;ctx.save();ctx.translate(d.x,d.y);const reduced=typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;ctx.rotate(reduced?0:Math.sin(now.getTime()/1000*Math.PI)*0.16);ctx.drawImage(artFor(art,d.src,this.tint),d.left,d.top);ctx.restore();}
      ctx.drawImage(artFor(art,c.background,this.tint),0,0);
      for(const hand of c.hands){ctx.save();ctx.translate(hand.x,hand.y);ctx.rotate((angles[hand.kind]+hand.offset)*Math.PI/180);ctx.scale(hand.sx,hand.sy);ctx.drawImage(art.get(hand.src),hand.left,hand.top);ctx.restore();}
      for(const o of c.overlays||[]){const im=artFor(art,o.src,this.tint);ctx.drawImage(im,o.x,o.y,im.width*o.scale,im.height*o.scale);}
      for(const t of c.texts){ctx.fillStyle=t.color;ctx.font=`${t.weight} ${t.size}px ${t.font}`;ctx.textAlign=t.align;ctx.textBaseline='middle';ctx.fillText(String(p[t.field]??''),t.x,t.y);}
      for(const d of c.sprites){const im=art.get(d.srcs[p[d.field]]);if(im)ctx.drawImage(im,d.x-d.w/2,d.y-d.h/2,d.w,d.h);}
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
      const refresh=()=>{const tz=zone?.value||'local';clock.setAttribute('time-zone',tz);const tint=q.get('tint')||'';if(tint)clock.setAttribute('tint',tint);else clock.removeAttribute('tint');link.href='?clock='+encodeURIComponent(id)+'&time-zone='+encodeURIComponent(tz)+(tint?'&tint='+encodeURIComponent(tint):'');code.value=`<retro-clock clock="${id}" time-zone="${tz}"${tint?` tint=\"${tint}\"`:''}></retro-clock>\n<script src="${new URL('clocks.js',base).href}" defer></script>`;};
      refresh();zone?.addEventListener('change',refresh);code.addEventListener('focus',()=>code.select());card.append(title,clock,link,code);target.append(card);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
