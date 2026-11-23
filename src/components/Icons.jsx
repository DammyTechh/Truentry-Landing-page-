/* 24px grid, 2.0 stroke, round caps. Every glyph was rendered at 18 / 22 / 40
   and checked before shipping, so none of them turn to mush in a chip. */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': 'true',
  focusable: 'false',
};

const Svg = ({ size = 24, children, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>{children}</svg>
);

/* ---------- the four desks ---------- */

export const IconApplicant = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="7.8" r="4" />
    <path d="M4.4 20.6a7.6 7.6 0 0 1 15.2 0" />
  </Svg>
);

export const IconInstitution = (p) => (
  <Svg {...p}>
    <path d="M2.6 9.6 12 4.2l9.4 5.4" />
    <path d="M5.2 11.4v7.8" />
    <path d="M12 11.4v7.8" />
    <path d="M18.8 11.4v7.8" />
    <path d="M2.6 19.8h18.8" />
  </Svg>
);

export const IconBoard = (p) => (
  <Svg {...p}>
    <path d="M12 2.6 4 5.8v6.1c0 4.5 3.2 8.2 8 9.5 4.8-1.3 8-5 8-9.5V5.8Z" />
    <path d="m8.9 11.9 2.2 2.2 4.1-4.4" />
  </Svg>
);

export const IconAdmin = (p) => (
  <Svg {...p}>
    <path d="M3 6.4h18" />
    <path d="M3 12h18" />
    <path d="M3 17.6h18" />
    <circle cx="8.4" cy="6.4" r="2.2" fill="currentColor" stroke="none" />
    <circle cx="15.6" cy="17.6" r="2.2" fill="currentColor" stroke="none" />
  </Svg>
);

/* ---------- the process ---------- */

export const IconId = (p) => (
  <Svg {...p}>
    <rect x="2.4" y="4.6" width="19.2" height="14.8" rx="2.8" />
    <circle cx="8.6" cy="10.8" r="2.1" />
    <path d="M5.2 16.2a3.8 3.8 0 0 1 6.8 0" />
    <path d="M15.2 10.4h4" />
    <path d="M15.2 14h4" />
  </Svg>
);

export const IconScore = (p) => (
  <Svg {...p}>
    <path d="M3.2 20.4h17.6" />
    <path d="M7 20.4v-6.6" />
    <path d="M12 20.4V8.2" />
    <path d="M17 20.4V3.8" />
  </Svg>
);

export const IconFilter = (p) => (
  <Svg {...p}>
    <path d="M3 5.2h18l-7 8.2v6.4l-4 2v-8.4Z" />
  </Svg>
);

export const IconQuota = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v9h9" />
  </Svg>
);

export const IconLetter = (p) => (
  <Svg {...p}>
    <path d="M13.4 2.8H6.6a2.4 2.4 0 0 0-2.4 2.4v13.6a2.4 2.4 0 0 0 2.4 2.4h10.8a2.4 2.4 0 0 0 2.4-2.4V9.2Z" />
    <path d="M13.4 2.8v6.4h6.4" />
    <path d="m8.6 15.4 2 2 4.6-4.8" />
  </Svg>
);

export const IconPayment = (p) => (
  <Svg {...p}>
    <rect x="2.4" y="5.2" width="19.2" height="13.6" rx="2.8" />
    <path d="M2.4 9.8h19.2" />
    <path d="M6.6 14.6h3.6" />
  </Svg>
);

/* ---------- records and trust ---------- */

export const IconLog = (p) => (
  <Svg {...p}>
    <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="2.8" />
    <path d="M7.8 8.6h8.4" />
    <path d="M7.8 12h8.4" />
    <path d="M7.8 15.4h5" />
  </Svg>
);

export const IconExport = (p) => (
  <Svg {...p}>
    <path d="M12 3.2v11.2" />
    <path d="m7.6 10 4.4 4.4 4.4-4.4" />
    <path d="M4.2 16.6v2.2a2 2 0 0 0 2 2h11.6a2 2 0 0 0 2-2v-2.2" />
  </Svg>
);

export const IconLock = (p) => (
  <Svg {...p}>
    <rect x="3.8" y="10.2" width="16.4" height="11.2" rx="2.8" />
    <path d="M7.6 10.2V7.4a4.4 4.4 0 0 1 8.8 0v2.8" />
  </Svg>
);

export const IconKey = (p) => (
  <Svg {...p}>
    <circle cx="7.6" cy="15.6" r="4.2" />
    <path d="m10.8 12.6 8.4-8.4" />
    <path d="m15.4 7.8 2.6 2.6" />
  </Svg>
);

export const IconLink = (p) => (
  <Svg {...p}>
    <path d="M10.2 13.8a4.8 4.8 0 0 0 7.2.5l2.6-2.6a4.8 4.8 0 0 0-6.8-6.8l-1.5 1.5" />
    <path d="M13.8 10.2a4.8 4.8 0 0 0-7.2-.5L4 12.3a4.8 4.8 0 0 0 6.8 6.8l1.5-1.5" />
  </Svg>
);

export const IconCheck = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.2 12.2 2.6 2.6 5-5.6" />
  </Svg>
);

export const IconNote = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5.4" />
    <path d="M12 7.6h.01" />
  </Svg>
);

/* ---------- UI ---------- */

export const IconArrow = ({ size = 18, ...p }) => (
  <Svg size={size} {...p}>
    <path d="M4.5 12h14" />
    <path d="m13 6.5 5.5 5.5-5.5 5.5" />
  </Svg>
);

export const IconArrowDown = ({ size = 18, ...p }) => (
  <Svg size={size} {...p}>
    <path d="M12 4.5v14" />
    <path d="m6.5 13 5.5 5.5L17.5 13" />
  </Svg>
);

export const IconPlus = ({ size = 18, ...p }) => (
  <Svg size={size} {...p}>
    <path d="M12 5.2v13.6" />
    <path d="M5.2 12h13.6" />
  </Svg>
);

export const IconMenu = ({ size = 20, ...p }) => (
  <Svg size={size} {...p}>
    <path d="M3.8 8.5h16.4" />
    <path d="M3.8 15.5h16.4" />
  </Svg>
);

export const IconClose = ({ size = 20, ...p }) => (
  <Svg size={size} {...p}>
    <path d="m6.2 6.2 11.6 11.6" />
    <path d="M17.8 6.2 6.2 17.8" />
  </Svg>
);
