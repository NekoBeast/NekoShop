const icons = {
  dropDown: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414z"
      ></path>
    </svg>
  ),

  globe: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 187a113.4 113.4 0 0 1-20.39-35h40.82a117 117 0 0 1-10 20.77A108.6 108.6 0 0 1 128 207m-26.49-59a135.4 135.4 0 0 1 0-40h53a135.4 135.4 0 0 1 0 40ZM44 128a83.5 83.5 0 0 1 2.43-20h30.82a160.6 160.6 0 0 0 0 40H46.43A83.5 83.5 0 0 1 44 128m84-79a113.4 113.4 0 0 1 20.39 35h-40.8a117 117 0 0 1 10-20.77A108.6 108.6 0 0 1 128 49m50.73 59h30.82a83.5 83.5 0 0 1 0 40h-30.8a160.6 160.6 0 0 0 0-40Zm20.77-24h-25.79a140.8 140.8 0 0 0-15.5-34.36A84.5 84.5 0 0 1 199.52 84ZM97.79 49.64A140.8 140.8 0 0 0 82.29 84H56.48a84.5 84.5 0 0 1 41.31-34.36M56.48 172h25.81a140.8 140.8 0 0 0 15.5 34.36A84.5 84.5 0 0 1 56.48 172m101.73 34.36a140.8 140.8 0 0 0 15.5-34.36h25.81a84.5 84.5 0 0 1-41.31 34.36"
      ></path>
    </svg>
  ),

  shopCart: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25z"
      ></path>
    </svg>
  ),
  error: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9s-9-1.8-9-9s1.8-9 9-9m0 5v4m0 4h.01"
      ></path>
    </svg>
  ),

  profile: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path
          stroke="currentColor"
          d="M21 12a8.958 8.958 0 0 1-1.526 5.016A8.991 8.991 0 0 1 12 21a8.991 8.991 0 0 1-7.474-3.984A9 9 0 1 1 21 12Z"
        ></path>
        <path
          fill="currentColor"
          d="M13.5 9a1.5 1.5 0 0 1-1.5 1.5v1A2.5 2.5 0 0 0 14.5 9zM12 10.5A1.5 1.5 0 0 1 10.5 9h-1a2.5 2.5 0 0 0 2.5 2.5zM10.5 9A1.5 1.5 0 0 1 12 7.5v-1A2.5 2.5 0 0 0 9.5 9zM12 7.5A1.5 1.5 0 0 1 13.5 9h1A2.5 2.5 0 0 0 12 6.5zM5.166 17.856l-.48-.142l-.077.261l.177.207zm13.668 0l.38.326l.177-.207l-.078-.261zM9 15.5h6v-1H9zm0-1a4.502 4.502 0 0 0-4.313 3.214l.958.285A3.502 3.502 0 0 1 9 15.5zm3 6a8.48 8.48 0 0 1-6.455-2.97l-.759.652A9.48 9.48 0 0 0 12 21.5zm3-5a3.502 3.502 0 0 1 3.355 2.5l.958-.286A4.502 4.502 0 0 0 15 14.5zm3.455 2.03A8.48 8.48 0 0 1 12 20.5v1a9.48 9.48 0 0 0 7.214-3.318z"
        ></path>
      </g>
    </svg>
  ),

  female: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 128 128"
    >
      <path
        fill="black"
        d="M123.58 37.18c-1.11-3.67.13-7.56-.56-11.29c-.57-3.14-1.98-6.09-3.66-8.78c-3.04-4.87-9.2-7.07-14.64-7.75c-3.68-.46-7.57.03-10.93-1.87c-2.45-1.38-5.05-2.84-7.73-3.88C79.33 1.02 71.61.67 64.46.46L64 .45l-.46.01c-7.14.21-14.86.56-21.59 3.15c-2.68 1.03-5.28 2.49-7.73 3.88c-3.36 1.9-7.25 1.41-10.94 1.87c-5.43.67-11.59 2.87-14.63 7.75c-1.68 2.69-3.08 5.64-3.66 8.78c-.69 3.73.55 7.62-.56 11.29c-.25.83-1.3 2.06-.89 2.99c.42.97 2.73 1.68 3.6 2.18c2.91 1.71 6.11 2.92 9.35 3.88c2.17.65 4.43 1.99 6.78 1.66c1.01-.14 1.79-.55 1.94-1.59c.45-3.18 1.57-6.42 2.61-9.44c.28-.82.7-2.28 1.88-2.18c.8.07 1.25 1.79 1.2 2.42c-.19 2.39-.75 4.76-.84 7.16c-.1 2.52.62 4.57 1.42 6.9c.9 2.59 2 5.12 2.78 7.75c.83 2.87.33 5.9-.51 8.71c-2.02 6.7-4.76 12.83-7.44 19.27c-1.01 2.41-1.89 4.87-2.88 7.29a62.87 62.87 0 0 1-1.44 3.25c-1.39 2.92-4.37 5.11-3.99 8.75c.6 5.72 5.96 9.04 10.41 11.79c10.57 6.54 23.17 9.64 35.6 9.58c12.44.06 25.04-3.03 35.62-9.58c4.44-2.75 9.81-6.07 10.41-11.79c.38-3.63-2.61-5.83-3.99-8.75c-.5-1.06-.99-2.16-1.43-3.25c-.98-2.42-1.87-4.88-2.88-7.29c-2.69-6.44-5.43-12.57-7.44-19.27c-.84-2.81-1.35-5.84-.51-8.71c.77-2.64 1.88-5.16 2.77-7.75c.81-2.33 1.52-4.38 1.43-6.9c-.08-2.41-.65-4.77-.84-7.16c-.04-.62.4-2.35 1.19-2.42c1.19-.09 1.61 1.36 1.89 2.18c1.04 3.03 2.16 6.27 2.61 9.44c.15 1.04.93 1.45 1.94 1.59c2.36.33 4.6-1.01 6.78-1.66c3.24-.96 6.43-2.17 9.35-3.88c.86-.5 3.17-1.21 3.6-2.18c.37-.93-.67-2.16-.93-2.99"
      ></path>
      <path
        fill="#fff"
        d="M53.84 26.77c-2.6 1.15-5.59.96-8.22-.01l-.17-.06c-1.49-.57-3.07-1.55-4.29-2.59c-3.9-3.39-4.29-9.3-2.75-13.92c.4-1.21 1.78-2.84 3.22-2.54c.21.05.43.13.65.24c1.44.75 2.52 1.96 3.83 2.89c2.28 1.62 4.64 2.33 7.21 3.33c1.8.69 3.65 1.26 5.52 1.66c.5.1 1.06.27 1.52.44c.72.27.76 1.07.79 1.73c.09 1.69-1.67 3.83-2.66 5.07c-1.25 1.55-2.78 2.94-4.65 3.76m32.3-2.67c-1.21 1.05-2.79 2.02-4.29 2.59l-.16.06c-2.62.97-5.62 1.16-8.22.01c-1.87-.82-3.4-2.2-4.66-3.78c-.99-1.23-2.75-3.38-2.66-5.07c.04-.66.08-1.46.8-1.73c.47-.18 1.03-.34 1.52-.44c1.88-.4 3.73-.97 5.53-1.66c2.57-.99 4.93-1.71 7.21-3.33c1.31-.93 2.4-2.15 3.83-2.89c.22-.11.44-.2.65-.24c1.44-.3 2.81 1.34 3.21 2.54c1.54 4.64 1.15 10.55-2.76 13.94"
      ></path>
      <circle cx={63.69} cy={103.05} r={4.68} fill="white"></circle>
      <circle cx={63.69} cy={79} r={4.68} fill="white"></circle>
      <circle cx={63.69} cy={54.96} r={4.68} fill="white"></circle>
      <circle cx={63.69} cy={30.91} r={4.68} fill="white"></circle>
    </svg>
  ),
  man: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 128 128"
    >
      <path
        fill="black"
        d="M122.23 46.29c-2.47-4.62-12.99-21.64-23.56-27.97c-2.6-1.55-9.82-3.55-13.04-4.43c-4.25-1.49-5.66-1.28-7.04-.63c-5.26 2.49-8.79 3.68-14.18 3.68c-.15 0-.29-.01-.43-.01c-.14.01-.28.01-.43.01c-5.39 0-8.92-1.19-14.18-3.68c-1.38-.65-2.79-.86-7.04.63c-3.22.88-10.44 2.88-13.04 4.43C18.72 24.64 8.2 41.67 5.73 46.29c-.35.64-.79 1.21-.53 1.88c1.22 3.11 5.63 7.18 15.16 12.82c.67.4 1.5.45 2.11-.03c2.5-1.97 8.58-9.45 8.58-9.45s4.33 17.62 2.51 32.85c-1.83 15.23-4.96 27.07-4.96 27.07c-.09.75.3 1.48 1 1.81c3.01 1.45 17.53 4.72 34.39 4.75c16.86-.02 31.38-3.3 34.39-4.75c.7-.33 1.09-1.07 1-1.81c0 0-3.14-11.83-4.96-27.07c-1.83-15.23 2.51-32.85 2.51-32.85s6.08 7.48 8.58 9.45c.61.48 1.44.43 2.11.03c9.53-5.63 13.95-9.7 15.16-12.82c.25-.68-.2-1.24-.55-1.88"
      ></path>
      <path
        fill="#eee"
        d="M82.36 9.48c-.72-.68-2.39-2.07-5.26-1.26c-3.11.87-7.83 1.5-13.22 1.52c-5.38-.02-10.1-.64-13.21-1.52c-2.86-.8-4.53.59-5.26 1.26c-1.16 1.08-4.74 3.86-4.74 4.95c0 3.81 1.92 15.37 12.59 17.23c5.28.92 8.62-3.54 9.96-5.82c.15-.25.4-.38.66-.39c.26.02.51.14.66.39c1.34 2.29 4.68 6.74 9.96 5.82c10.67-1.85 12.6-13.41 12.6-17.22c0-1.1-3.58-3.88-4.74-4.96"
      ></path>
      <path
        fill="white"
        d="M40.78 14.44c.45 3.01 1.33 5.93 2.81 8.46c1.41 2.55 3.4 4.68 5.83 5.9c1.21.62 2.53 1 3.87 1.24c1.28.23 2.45.09 3.56-.39c1.11-.47 2.14-1.25 3.03-2.24c.45-.49.86-1.03 1.24-1.59c.19-.28.37-.57.54-.87l.14-.25c.17-.3.42-.57.72-.78a2.463 2.463 0 0 1 3.35.51l.15.21l.04.06l.3.48c.19.31.39.61.58.9c.39.58.8 1.12 1.24 1.61c.88.98 1.9 1.71 3.01 2.14c1.11.44 2.36.53 3.65.33c1.32-.23 2.68-.61 3.88-1.21c2.44-1.19 4.39-3.32 5.66-5.93c.67-1.29 1.19-2.69 1.59-4.14c.39-1.45.68-2.94 1.01-4.45l.2.02c-.24 3.03-.64 6.12-1.81 8.97c-1.13 2.85-3.14 5.42-5.87 6.91c-1.34.77-2.82 1.26-4.34 1.56c-1.52.29-3.13.25-4.6-.28c-1.48-.51-2.77-1.47-3.82-2.6c-.53-.57-1-1.18-1.44-1.81c-.22-.32-.43-.64-.64-.96l-.31-.48a.514.514 0 0 0-.31-.26a.466.466 0 0 0-.38.07c-.05.04-.1.09-.14.14l-.14.25c-.2.33-.4.66-.62.98c-.44.63-.92 1.25-1.45 1.81c-1.05 1.13-2.31 2.1-3.77 2.67c-1.45.58-3.08.69-4.59.36c-1.51-.3-2.99-.81-4.33-1.59c-2.71-1.53-4.72-4.05-6.01-6.83a22.495 22.495 0 0 1-2.05-8.91h.22z"
      ></path>
      <path
        fill="white"
        d="M82.36 9.48c-.77-.62-2.39-2.07-5.26-1.26c-3.11.87-7.83 1.5-13.22 1.52c-5.38-.02-10.1-.64-13.21-1.52c-2.86-.8-4.53.59-5.26 1.26c-1.12 1.05-4.51 3.69-4.72 4.85c.53.13 4.28-3.55 5.55-3.44c.98.08 2.34 3.3 4.69 4.11c2.35.81 25.78.36 25.78.36s2.21-1.74 3.41-3.39c.72-.99 1.36-1.36 2.39-.85c1.01.51 4.43 3.88 4.57 3.24c-.13-1.13-3.36-3.79-4.72-4.88"
      ></path>
      <path
        fill="white"
        d="M21.39 62.22C14.7 58.19 9.13 53.63 4.21 48.85a.685.685 0 0 1-.1-.87l1.28-1.99a.68.68 0 0 1 1.05-.13c4.7 4.51 11.1 9.47 17.43 13.31c.37.23.44.74.14 1.06l-1.76 1.88c-.21.23-.58.28-.86.11m85.22 0c6.69-4.03 12.27-8.59 17.19-13.37c.24-.23.28-.6.1-.87l-1.28-1.99a.68.68 0 0 0-1.05-.13c-4.7 4.51-11.1 9.47-17.43 13.31a.69.69 0 0 0-.14 1.06l1.76 1.88c.2.23.57.28.85.11"
      ></path>
      <linearGradient
        id="notoWomansClothes0"
        x1={63.983}
        x2={63.983}
        y1={9.647}
        y2={23.14}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.181} stopColor="white"></stop>
        <stop offset={1} stopColor="#754ca5"></stop>
      </linearGradient>
      <path
        fill="url(#notoWomansClothes0)"
        d="M77.28 9.99c-1.7.41-7.24 1.94-13.08 1.94h-.42c-5.84 0-11.39-1.52-13.08-1.94c-1.7-.41-2.36.01-2.03 1.37c1.43 3.66 5.7 9 15.33 9.01c9.63-.01 13.9-5.35 15.33-9.01c.31-1.37-.35-1.78-2.05-1.37"
      ></path>
    </svg>
  ),
  shoes: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      >
        <path d="M18 4H8c-1.886 0-2.828 0-3.414.586C4 5.172 4 6.114 4 8v32c0 1.886 0 2.828.586 3.414C5.172 44 6.114 44 8 44h4l4-4l4 4h20c1.886 0 2.828 0 3.414-.586C44 42.828 44 41.886 44 40v-7.525c0-4.992 0-7.488-1.48-9.183c-1.48-1.696-3.953-2.033-8.899-2.707l-1.242-.17c-4.946-.674-7.42-1.011-8.9-2.707C22 16.013 22 13.518 22 8.525V8c0-1.886 0-2.828-.586-3.414C20.828 4 19.886 4 18 4m26 30H4m0-22.5h18"></path>
        <circle cx={15} cy={23} r={3}></circle>
      </g>
    </svg>
  ),

  play: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
    >
      <g fill="none" stroke-linejoin="round" stroke-width="4">
        <path
          fill="#2f88ff"
          stroke="#000"
          d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
        />
        <path
          fill="#43ccf8"
          stroke="#fff"
          d="M20 24V17.0718L26 20.5359L32 24L26 27.4641L20 30.9282V24Z"
        />
      </g>
    </svg>
  ),

  personeAdd: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M21 6h-1V5a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 0 0 0-2m-11 5a4 4 0 1 0-4-4a4 4 0 0 0 4 4m6 10a1 1 0 0 0 1-1a7 7 0 0 0-14 0a1 1 0 0 0 1 1"
      ></path>
    </svg>
  ),
  person: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 11a4 4 0 1 0-4-4a4 4 0 0 0 4 4m6 10a1 1 0 0 0 1-1a7 7 0 0 0-14 0a1 1 0 0 0 1 1Z"
      ></path>
    </svg>
  ),
  lock: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"
      ></path>
    </svg>
  ),
  logout: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M5 3h6a3 3 0 0 1 3 3v4h-1V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4h1v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m3 9h11.25L16 8.75l.66-.75l4.5 4.5l-4.5 4.5l-.66-.75L19.25 13H8z"
      ></path>
    </svg>
  ),
  facebook: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
    >
      <path
        fill="#1877f2"
        d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
      ></path>
      <path
        fill="#fff"
        d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
      ></path>
    </svg>
  ),
  insta: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
    >
      <g fill="none">
        <rect
          width={256}
          height={256}
          fill="url(#skillIconsInstagram0)"
          rx={60}
        ></rect>
        <rect
          width={256}
          height={256}
          fill="url(#skillIconsInstagram1)"
          rx={60}
        ></rect>
        <path
          fill="#fff"
          d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
        ></path>
        <defs>
          <radialGradient
            id="skillIconsInstagram0"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fd5"></stop>
            <stop offset={0.1} stopColor="#fd5"></stop>
            <stop offset={0.5} stopColor="#ff543e"></stop>
            <stop offset={1} stopColor="#c837ab"></stop>
          </radialGradient>
          <radialGradient
            id="skillIconsInstagram1"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3771c8"></stop>
            <stop offset={0.128} stopColor="#3771c8"></stop>
            <stop offset={1} stopColor="#60f" stopOpacity={0}></stop>
          </radialGradient>
        </defs>
      </g>
    </svg>
  ),
  shop: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M14.9 5.1s-.2.06-.54.17c-.06-.18-.14-.41-.26-.63c-.38-.73-.94-1.11-1.62-1.12c-.05 0-.09 0-.14.01c-.02-.02-.04-.05-.06-.07c-.29-.32-.67-.47-1.12-.46c-.87.03-1.74.66-2.45 1.78c-.5.79-.87 1.78-.98 2.54c-1 .31-1.7.53-1.72.53c-.51.16-.52.18-.59.65c-.05.36-1.37 10.6-1.37 10.6L15.03 21V5.08c-.05 0-.1.01-.13.02m-2.54.79c-.58.18-1.22.38-1.85.57c.18-.69.52-1.37.94-1.82c.16-.17.37-.35.63-.46c.24.51.29 1.22.28 1.71m-1.19-2.31c.2 0 .38.04.53.14c-.24.12-.46.3-.68.53c-.55.59-.98 1.52-1.15 2.41c-.53.16-1.04.32-1.52.47c.3-1.41 1.48-3.51 2.82-3.55m-1.7 7.99c.06.93 2.52 1.14 2.66 3.33c.11 1.72-.91 2.9-2.39 2.99C7.98 18 7 16.96 7 16.96l.37-1.59s.98.74 1.76.69c.51-.03.69-.45.68-.74c-.08-1.22-2.08-1.15-2.2-3.15c-.11-1.69 1-3.39 3.44-3.55c.95-.06 1.43.18 1.43.18l-.56 2.09s-.62-.28-1.36-.24c-1.08.07-1.1.75-1.09.92m3.47-5.86c-.01-.44-.06-1.06-.27-1.59c.66.13.99.87 1.13 1.32c-.25.08-.54.17-.86.27m2.45 15.25l4.56-1.13S17.99 6.57 17.98 6.48c-.01-.09-.09-.14-.16-.15c-.07-.01-1.35-.03-1.35-.03s-.78-.76-1.08-1.05z"
      ></path>
    </svg>
  ),
};

export { icons };
