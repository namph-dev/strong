type Props = {
  className?: string;
};
const IconBars3 = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full text-inherit"
        viewBox="0 0 448 512"
      >
        <path d="M0 80c0-8.8 7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H16C7.2 96 0 88.8 0 80zM0 240c0-8.8 7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16zM448 400c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H432c8.8 0 16 7.2 16 16z" />
      </svg>
    </span>
  );
};
const IconUser = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 448 512"
      >
        <path d="M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480H416c-1.2-79.7-66.2-144-146.3-144H178.3c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
      </svg>
    </span>
  );
};
const IconMark = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 384 512"
      >
        <path d="M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256 347.1 123.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.5 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6 324.5 411.1z" />
      </svg>
    </span>
  );
};
const IconArrowRightLeft = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 448 512"
      >
        <path d="M443.3 139.3c6.2-6.2 6.2-16.4 0-22.6l-96-96c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L393.4 112 16 112c-8.8 0-16 7.2-16 16s7.2 16 16 16l377.4 0-68.7 68.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l96-96zm-342.6 352c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 400 432 400c8.8 0 16-7.2 16-16s-7.2-16-16-16L54.6 368l68.7-68.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6l96 96z" />
      </svg>
    </span>
  );
};
const IconArrowUpDown = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 576 512"
      >
        <path d="M171.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L144 86.6V464c0 8.8 7.2 16 16 16s16-7.2 16-16V86.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-96-96zm352 342.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 425.4V48c0-8.8-7.2-16-16-16s-16 7.2-16 16V425.4l-68.7-68.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l96 96c6.2 6.2 16.4 6.2 22.6 0l96-96z" />
      </svg>
    </span>
  );
};
const IconInstagram = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 448 512"
      >
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    </span>
  );
};
const IconTiktok = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 448 512"
      >
        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
      </svg>
    </span>
  );
};
const IconTwitter = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
      </svg>
    </span>
  );
};
const IconFacebook = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 320 512"
      >
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    </span>
  );
};
const IconMapPin = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 384 512"
      >
        {" "}
        <path d="M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.4 37 16.6 63.4c10.9 25.9 26.2 54 43.6 82.1c34.1 55.3 74.4 108.2 99.9 140c25.4-31.8 65.8-84.7 99.9-140c17.3-28.1 32.7-56.3 43.6-82.1C346.6 229 352 207.6 352 192zm32 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zm-240 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160z" />
      </svg>
    </span>
  );
};

const IconCalendar = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 448 512"
      >
        <path d="M112 0c8.8 0 16 7.2 16 16V64H320V16c0-8.8 7.2-16 16-16s16 7.2 16 16V64h32c35.3 0 64 28.7 64 64v32 32V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 160 128C0 92.7 28.7 64 64 64H96V16c0-8.8 7.2-16 16-16zM416 192H32V448c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V192zM384 96H64c-17.7 0-32 14.3-32 32v32H416V128c0-17.7-14.3-32-32-32z" />
      </svg>
    </span>
  );
};

const IconUserPlus = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 640 512"
      >
        <path d="M128 128a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM269.7 336c80 0 145 64.3 146.3 144H32c1.2-79.7 66.2-144 146.3-144h91.4zM224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3zM512 304c0 8.8 7.2 16 16 16s16-7.2 16-16V224h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H544V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v80H432c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v80z" />
      </svg>
    </span>
  );
};
const IconMinus = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 448 512"
      >
        <path d="M432 256c0 8.8-7.2 16-16 16L32 272c-8.8 0-16-7.2-16-16s7.2-16 16-16l384 0c8.8 0 16 7.2 16 16z" />
      </svg>
    </span>
  );
};

const IconPlus = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 448 512"
      >
        <path d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z" />
      </svg>
    </span>
  );
};

const IconCircleUser = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
      </svg>
    </span>
  );
};

const IconArrowRightFromBracket = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M507.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-128-128c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 240 176 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l281.4 0L356.7 372.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l128-128zM176 64c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 32C35.8 32 0 67.8 0 112L0 400c0 44.2 35.8 80 80 80l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48l96 0z" />
      </svg>
    </span>
  );
};

const IconBookBookmark = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 448 512"
      >
        <path d="M0 64C0 28.7 28.7 0 64 0h96 16H336h16 80 16V16 400v16H432 416v64h16 16v32H432 64c-35.3 0-64-28.7-64-64l0 0L0 64zM320 32H192V206.7l54-43.2 10-8 10 8 54 43.2V32zM160 32H64C46.3 32 32 46.3 32 64l0 328.6c9.4-5.4 20.3-8.6 32-8.6H416V32H352V240v33.3l-26-20.8-70-56-70 56-26 20.8V240 32zM64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H384V416H64z" />
      </svg>
    </span>
  );
};

const IconSpinner = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M463.9 376c7.6 4.4 17.5 1.8 21.4-6.1c17.1-34.3 26.7-73 26.7-113.9C512 120 405.9 8.8 272 .5c-8.8-.5-16 6.7-16 15.5v0c0 8.8 7.2 15.9 16 16.6C388.2 40.8 480 137.7 480 256c0 35.1-8.1 68.3-22.5 97.9c-3.9 8-1.3 17.7 6.4 22.2v0z" />
      </svg>
    </span>
  );
};

const IconChevronDown = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M267.3 395.3c-6.2 6.2-16.4 6.2-22.6 0l-192-192c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L256 361.4 436.7 180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-192 192z" />
      </svg>
    </span>
  );
};

const IconChevronUp = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M244.7 116.7c6.2-6.2 16.4-6.2 22.6 0l192 192c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L256 150.6 75.3 331.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l192-192z" />
      </svg>
    </span>
  );
};

const IconSearch = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
    </span>
  );
};

const IconTicket = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 576 512"
      >
        <path d="M64 64C28.7 64 0 92.7 0 128v66c0 7.3 4.9 13.7 12 15.5c20.7 5.3 36 24.1 36 46.5s-15.3 41.2-36 46.5C4.9 304.3 0 310.7 0 318v66c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V318c0-7.3-4.9-13.7-12-15.5c-20.7-5.3-36-24.1-36-46.5s15.3-41.2 36-46.5c7.1-1.8 12-8.2 12-15.5V128c0-35.3-28.7-64-64-64H64zM32 128c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32v54.7c-28.2 12.3-48 40.5-48 73.3s19.8 61 48 73.3V384c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V329.3C60.2 317 80 288.8 80 256s-19.8-61-48-73.3V128zm128 64H416V320H160V192zm-32 0V320c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32z" />
      </svg>
    </span>
  );
};

const IconClock = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM240 112V256c0 5.3 2.7 10.3 7.1 13.3l96 64c7.4 4.9 17.3 2.9 22.2-4.4s2.9-17.3-4.4-22.2L272 247.4V112c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
      </svg>
    </span>
  );
};

const IconCircleCheck = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z" />
      </svg>
    </span>
  );
};

const IconChevronRight = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 320 512"
      >
        <path d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z" />
      </svg>
    </span>
  );
};

const IconChevronLeft = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 320 512"
      >
        <path d="M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15 239z" />
      </svg>
    </span>
  );
};

const IconCar = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M113.6 98.2L85.3 192.6c3.5-.4 7.1-.6 10.7-.6H416c3.6 0 7.2 .2 10.7 .6L398.4 98.2c-6.1-20.3-24.8-34.2-46-34.2H159.6c-21.2 0-39.9 13.9-46 34.2zM74.3 227.8C49.6 236.7 32 260.3 32 288v96H480V288c0-27.7-17.6-51.3-42.3-60.2l-.5 .1-.1-.3c-6.6-2.3-13.8-3.6-21.2-3.6H96c-7.4 0-14.5 1.3-21.2 3.6l-.1 .3-.5-.1zm-26-23.1l.4-1.3L83 89c10.2-33.8 41.3-57 76.6-57H352.4c35.3 0 66.5 23.2 76.6 57l34.3 114.4 .4 1.3C492.6 221.2 512 252.3 512 288v96 16 16 48c0 8.8-7.2 16-16 16s-16-7.2-16-16V416H32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V416 400 384 288c0-35.7 19.4-66.8 48.3-83.3zM104 272a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm280 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
      </svg>
    </span>
  );
};

const IconCarLight = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M113.6 98.2L85.3 192.6c3.5-.4 7.1-.6 10.7-.6H416c3.6 0 7.2 .2 10.7 .6L398.4 98.2c-6.1-20.3-24.8-34.2-46-34.2H159.6c-21.2 0-39.9 13.9-46 34.2zM74.3 227.8C49.6 236.7 32 260.3 32 288v96H480V288c0-27.7-17.6-51.3-42.3-60.2l-.5 .1-.1-.3c-6.6-2.3-13.8-3.6-21.2-3.6H96c-7.4 0-14.5 1.3-21.2 3.6l-.1 .3-.5-.1zm-26-23.1l.4-1.3L83 89c10.2-33.8 41.3-57 76.6-57H352.4c35.3 0 66.5 23.2 76.6 57l34.3 114.4 .4 1.3C492.6 221.2 512 252.3 512 288v96 16 16 48c0 8.8-7.2 16-16 16s-16-7.2-16-16V416H32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V416 400 384 288c0-35.7 19.4-66.8 48.3-83.3zM104 272a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm280 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
      </svg>
    </span>
  );
};

const IconArrowUpFrom = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 448 512"
      >
        <path d="M235.3 4.7c-6.2-6.2-16.4-6.2-22.6 0l-128 128c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L208 54.6V336c0 8.8 7.2 16 16 16s16-7.2 16-16V54.6L340.7 155.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-128-128zM32 336c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 44.2 35.8 80 80 80H368c44.2 0 80-35.8 80-80V336c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V336z" />
      </svg>
    </span>
  );
};

const IconLink = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 640 512"
      >
        <path d="M591.5 256c50-50 50-131 0-181s-131-50-181 0L387.9 97.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l22.6-22.6c37.5-37.5 98.3-37.5 135.8 0s37.5 98.3 0 135.8L444.3 357.9c-37.4 37.4-98.1 37.4-135.6 0c-35.6-35.6-37.6-92.6-4.7-130.6l5.3-6.1c5.8-6.7 5.1-16.8-1.6-22.6s-16.8-5.1-22.6 1.6l-5.3 6.1c-43.9 50.7-41.2 126.7 6.2 174.1c49.9 49.9 130.9 49.9 180.8 0L591.5 256zM48.5 256c-50 50-50 131 0 181s131 50 181 0l22.6-22.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-22.6 22.6c-37.5 37.5-98.3 37.5-135.8 0s-37.5-98.3 0-135.8L195.7 154.1c37.4-37.4 98.1-37.4 135.6 0c35.6 35.6 37.6 92.6 4.7 130.6l-5.3 6.1c-5.8 6.7-5.1 16.8 1.6 22.6s16.8 5.1 22.6-1.6l5.3-6.1c43.9-50.7 41.2-126.7-6.2-174.1C303.9 81.5 223 81.5 173 131.4L48.5 256z" />
      </svg>
    </span>
  );
};

const IconStar = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 576 512"
      >
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      </svg>
    </span>
  );
};

const IconGlobe = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M256 480c16.7 0 40.4-14.4 61.9-57.3c9.9-19.8 18.2-43.7 24.1-70.7H170c5.9 27 14.2 50.9 24.1 70.7C215.6 465.6 239.3 480 256 480zM164.3 320H347.7c2.8-20.2 4.3-41.7 4.3-64s-1.5-43.8-4.3-64H164.3c-2.8 20.2-4.3 41.7-4.3 64s1.5 43.8 4.3 64zM170 160H342c-5.9-27-14.2-50.9-24.1-70.7C296.4 46.4 272.7 32 256 32s-40.4 14.4-61.9 57.3C184.2 109.1 175.9 133 170 160zm210 32c2.6 20.5 4 41.9 4 64s-1.4 43.5-4 64h90.8c6-20.3 9.3-41.8 9.3-64s-3.2-43.7-9.3-64H380zm78.5-32c-25.9-54.5-73.1-96.9-130.9-116.3c21 28.3 37.6 68.8 47.2 116.3h83.8zm-321.1 0c9.6-47.6 26.2-88 47.2-116.3C126.7 63.1 79.4 105.5 53.6 160h83.7zm-96 32c-6 20.3-9.3 41.8-9.3 64s3.2 43.7 9.3 64H132c-2.6-20.5-4-41.9-4-64s1.4-43.5 4-64H41.3zM327.5 468.3c57.8-19.5 105-61.8 130.9-116.3H374.7c-9.6 47.6-26.2 88-47.2 116.3zm-143 0c-21-28.3-37.5-68.8-47.2-116.3H53.6c25.9 54.5 73.1 96.9 130.9 116.3zM256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512z" />
      </svg>
    </span>
  );
};

const IconMoneyBillTransfer = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 640 512"
      >
        <path d="M548.7 27.3L585.4 64l-45.3 0H524.6L384 64l-.3 0H96c-35.3 0-64 28.7-64 64V348.1l14.1-14.1L64 316.1V192c53 0 96-43 96-96H524.3h15.8l45.3 0-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c3-3 4.7-7.1 4.7-11.3s-1.7-8.3-4.7-11.3l-64-64c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6zM128 96c0 35.3-28.7 64-64 64V128c0-17.7 14.3-32 32-32h32zM54.6 448l45.3 0 0 0H544c35.3 0 64-28.7 64-64V163.9l-14.1 14.1L576 195.9V320h0c-53 0-96 43-96 96H256.4l-.4 0L54.6 416l36.7-36.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-64 64c-3 3-4.7 7.1-4.7 11.3s1.7 8.3 4.7 11.3l64 64c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 448zM576 352h0v32c0 17.7-14.3 32-32 32H512c0-35.3 28.7-64 64-64zM256 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm160 0a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z" />
      </svg>
    </span>
  );
};

const IconMessageSmile = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M192 416c0-17.7-14.3-32-32-32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H309.3c-6.9 0-13.7 2.2-19.2 6.4L192 464V416zM64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h64 32v32 48c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM192 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm128 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM155.9 252.1c-6.6 5.9-7.1 16-1.3 22.6C179.5 302.5 215.7 320 256 320s76.5-17.5 101.4-45.3c5.9-6.6 5.3-16.7-1.3-22.6s-16.7-5.3-22.6 1.3C314.5 274.6 286.8 288 256 288s-58.5-13.4-77.5-34.7c-5.9-6.6-16-7.1-22.6-1.3z" />
      </svg>
    </span>
  );
};

const IconHandHoldingHeart = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 576 512"
      >
        <path d="M163.9 28.9C191.7 .7 235.8-.8 265.3 24.3c5.8 4.9 11 10.4 16.3 15.9c2.1 2.2 4.2 4.5 6.4 6.6c2.1-2.2 4.3-4.4 6.4-6.6c5.2-5.5 10.5-11 16.3-15.9C340.2-.8 384.3 .7 412.1 28.9c29.4 29.8 29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9c-29.4-29.8-29.4-78.2 0-108zm83.6 22.5c-16.8-17.1-44-17.1-60.8 0c-17.1 17.4-17.1 45.7 0 63.1L288 217.3 389.3 114.4c17.1-17.4 17.1-45.7 0-63.1c-16.8-17.1-44-17.1-60.8 0L299.4 80.9c-6.3 6.4-16.5 6.4-22.8 0L247.5 51.4zM151 317.4c13.1-8.8 28.6-13.4 44.4-13.4H344c30.9 0 56 25.1 56 56c0 8.6-1.9 16.7-5.4 24h5.6l94.7-56.4c8.3-4.9 17.8-7.6 27.5-7.6h1.3c28.9 0 52.3 23.4 52.3 52.3c0 17.7-9 34.2-23.8 43.8L432.6 493.9c-18.2 11.8-39.4 18.1-61 18.1H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H371.5c15.5 0 30.6-4.5 43.6-12.9l119.6-77.8c5.8-3.7 9.2-10.2 9.2-17c0-11.2-9.1-20.3-20.3-20.3h-1.3c-3.9 0-7.7 1.1-11.1 3l-98.5 58.7c-2.5 1.5-5.3 2.3-8.2 2.3H344 320 256c-8.8 0-16-7.2-16-16s7.2-16 16-16h64 24c13.3 0 24-10.7 24-24s-10.7-24-24-24H195.4c-9.5 0-18.7 2.8-26.6 8.1L88.9 397.3c-2.6 1.8-5.7 2.7-8.9 2.7H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H75.2L151 317.4z" />
      </svg>
    </span>
  );
};

const IconCheck = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 448 512"
      >
        <path d="M443.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-272 272c-6.2 6.2-16.4 6.2-22.6 0l-144-144c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L160 361.4 420.7 100.7c6.2-6.2 16.4-6.2 22.6 0z" />
      </svg>
    </span>
  );
};

const IconMobile = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 384 512"
      >
        <path d="M96 32C78.3 32 64 46.3 64 64V448c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H96zM32 64C32 28.7 60.7 0 96 0H288c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64zM160 400h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
      </svg>
    </span>
  );
};

const IconPhone = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M375.8 275.2c-16.4-7-35.4-2.4-46.7 11.4l-33.2 40.6c-46-26.7-84.4-65.1-111.1-111.1L225.3 183c13.8-11.3 18.5-30.3 11.4-46.7l-48-112C181.2 6.7 162.3-3.1 143.6 .9l-112 24C13.2 28.8 0 45.1 0 64v0C0 300.7 183.5 494.5 416 510.9c4.5 .3 9.1 .6 13.7 .8c0 0 0 0 0 0c0 0 0 0 .1 0c6.1 .2 12.1 .4 18.3 .4l0 0c18.9 0 35.2-13.2 39.1-31.6l24-112c4-18.7-5.8-37.6-23.4-45.1l-112-48zM447.7 480C218.1 479.8 32 293.7 32 64v0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0c0-3.8 2.6-7 6.3-7.8l112-24c3.7-.8 7.5 1.2 9 4.7l48 112c1.4 3.3 .5 7.1-2.3 9.3l-40.6 33.2c-12.1 9.9-15.3 27.2-7.4 40.8c29.5 50.9 71.9 93.3 122.7 122.7c13.6 7.9 30.9 4.7 40.8-7.4l33.2-40.6c2.3-2.8 6.1-3.7 9.3-2.3l112 48c3.5 1.5 5.5 5.3 4.7 9l-24 112c-.8 3.7-4.1 6.3-7.8 6.3c-.1 0-.2 0-.3 0z" />
      </svg>
    </span>
  );
};

const IconHandsHoldingCircle = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 640 512"
      >
        <path d="M416 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm-224 0a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zM64 64c35.3 0 64 28.7 64 64V252.3c0 4.6 .4 9.1 1.3 13.5c2.1-3.2 4.6-6.3 7.4-9.1c21.7-21.7 56.9-21.7 78.6 0L306.6 348c5.1 5.1 9.6 10.6 13.4 16.6c3.8-5.9 8.3-11.5 13.4-16.6l91.3-91.3c21.7-21.7 56.9-21.7 78.6 0c2.8 2.8 5.3 5.9 7.4 9.1c.9-4.4 1.3-8.9 1.3-13.5V128c0-35.3 28.7-64 64-64s64 28.7 64 64V344.2c0 29.7-11.8 58.2-32.8 79.2l-83.9 83.9c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l83.9-83.9c15-15 23.4-35.4 23.4-56.6V128c0-17.7-14.3-32-32-32s-32 14.3-32 32V252.3c0 27.1-10.8 53.1-29.9 72.2l-10.8 10.8-44 44-16 16c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l16-16 0 0 44-44 0 0c9.2-9.2 9.2-24.2 0-33.4s-24.2-9.2-33.4 0L356 370.6c-12.8 12.8-20 30.2-20 48.3V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V418.9c0-18.1-7.2-35.5-20-48.3l-91.3-91.3c-9.2-9.2-24.2-9.2-33.4 0s-9.2 24.2 0 33.4l44 44 16 16c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-16-16 0 0-44-44 0 0-10.7-10.8C106.8 305.4 96 279.4 96 252.3V128c0-17.7-14.3-32-32-32s-32 14.3-32 32V344.2c0 21.2 8.4 41.6 23.4 56.6l83.9 83.9c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L32.8 423.4C11.8 402.4 0 373.9 0 344.2V128C0 92.7 28.7 64 64 64z" />
      </svg>
    </span>
  );
};

const IconPlaneLock = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 640 512"
      >
        <path d="M256 0c-13.4 0-25.2 5.7-34.8 13.3c-9.5 7.6-17.6 17.7-24 28.4C184.4 62.7 176 89 176 109.7v52.5L24.2 248.9C9.2 257.4 0 273.3 0 290.6v56.2c0 21.3 20.3 36.6 40.8 30.8L176 338.9l0 37.1-51.2 38.4c-8.1 6-12.8 15.5-12.8 25.6v42c0 16.6 13.4 30 30 30c2.8 0 5.6-.4 8.3-1.2l0 0L256 480.6l105.7 30.2 0 0c2.1 .6 4.2 1 6.3 1.1V479.4L260.4 448.6c-2.9-.8-5.9-.8-8.8 0L144 479.4V440l57.6-43.2c4-3 6.4-7.8 6.4-12.8l0-66.3c0-5-2.4-9.8-6.4-12.8s-9.2-4-14-2.6L32 346.8V290.6c0-5.7 3.1-11 8.1-13.9l159.9-91.4c5-2.8 8.1-8.2 8.1-13.9V109.7c0-13.5 6.1-34.1 16.6-51.3c5.2-8.5 10.9-15.4 16.7-20C247 33.7 251.9 32 256 32c9.1 0 20.9 8.2 31.8 26.3C298.1 75.5 304 96.1 304 109.7v61.7c0 5.7 3.1 11 8.1 13.9l106.9 61.1c2.5-10.7 6.5-20.8 11.9-30.1L336 162.1V109.7c0-20.6-8.1-46.8-20.8-67.9C303.1 21.6 282.9 0 256 0zm80 376V338.9l48 13.7V352c0-11 2.8-21.4 7.7-30.4l-67.3-19.2c-4.8-1.4-10-.4-14 2.6s-6.4 7.8-6.4 12.8V384c0 5 2.4 9.8 6.4 12.8L368 440V400l-32-24zM528 224c26.5 0 48 21.5 48 48v48H480V272c0-26.5 21.5-48 48-48zm-80 48v48c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32V272c0-44.2-35.8-80-80-80s-80 35.8-80 80zm0 80H608V480H448V352z" />
      </svg>
    </span>
  );
};

const IconMoneyFromBracket = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 640 512"
      >
        <path d="M80 32C53.5 32 32 53.5 32 80v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V80C0 35.8 35.8 0 80 0H560c44.2 0 80 35.8 80 80v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-26.5-21.5-48-48-48H80zM496 96c8.8 0 16 7.2 16 16l0 344c0 30.9-25.1 56-56 56H184c-30.9 0-56-25.1-56-56l0-344c0-8.8 7.2-16 16-16s16 7.2 16 16l0 272c53 0 96 43 96 96H384c0-53 43-96 96-96V112c0-8.8 7.2-16 16-16zM224 480c0-35.3-28.7-64-64-64l0 40c0 13.3 10.7 24 24 24h40zm232 0c13.3 0 24-10.7 24-24l0-40c-35.3 0-64 28.7-64 64h40zM320 208c-47 0-80 31.3-80 64s33 64 80 64s80-31.3 80-64s-33-64-80-64zm112 64c0 55.6-53 96-112 96s-112-40.4-112-96s53-96 112-96s112 40.4 112 96z" />
      </svg>
    </span>
  );
};

const IconLock = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 448 512"
      >
        <path d="M128 128v64H320V128c0-53-43-96-96-96s-96 43-96 96zM96 192V128C96 57.3 153.3 0 224 0s128 57.3 128 128v64h16c44.2 0 80 35.8 80 80V432c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V272c0-44.2 35.8-80 80-80H96zM32 272V432c0 26.5 21.5 48 48 48H368c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48z" />
      </svg>
    </span>
  );
};

const IconCircleStar = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.3-399.1c-2.7-5.5-8.3-8.9-14.3-8.9s-11.7 3.5-14.3 8.9l-36.2 73.4-81 11.8c-6 .9-11 5.1-12.9 10.9s-.3 12.2 4 16.4l58.6 57.2-13.8 80.7c-1 6 1.4 12.1 6.4 15.6s11.5 4.1 16.8 1.2L256 342.1l72.5 38.1c5.4 2.8 11.9 2.4 16.9-1.2s7.4-9.6 6.4-15.6l-13.8-80.7 58.6-57.2c4.4-4.3 5.9-10.6 4-16.4s-6.9-10-12.9-10.9l-81.1-11.8-36.2-73.4zm-40 95.1L256 156.2l25.6 51.9c2.3 4.7 6.8 8 12 8.8l57.3 8.3-41.5 40.4c-3.8 3.7-5.5 9-4.6 14.2l9.8 57.1-51.2-26.9c-4.7-2.5-10.2-2.5-14.9 0l-51.2 26.9 9.8-57.1c.9-5.2-.8-10.5-4.6-14.2L161 225.1l57.3-8.3c5.2-.8 9.7-4 12-8.8z" />
      </svg>
    </span>
  );
};

const IconCircle = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
      </svg>
    </span>
  );
};

const IconSolidCircle = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
      </svg>
    </span>
  );
};

const IconCircleXMark = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM180.7 180.7c-6.2 6.2-6.2 16.4 0 22.6L233.4 256l-52.7 52.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 278.6l52.7 52.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0z" />
      </svg>
    </span>
  );
};

const IconCartShopping = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 576 512"
      >
        <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16H53.9c7.6 0 14.2 5.3 15.7 12.8l58.9 288c6.1 29.8 32.3 51.2 62.7 51.2H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H191.2c-15.2 0-28.3-10.7-31.4-25.6L152 288H466.5c29.4 0 55-20 62.1-48.5L570.6 71.8c5-20.2-10.2-39.8-31-39.8H99.1C92.5 13 74.4 0 53.9 0H16zm90.1 64H539.5L497.6 231.8C494 246 481.2 256 466.5 256H145.4L106.1 64zM168 456a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm200-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112z" />
      </svg>
    </span>
  );
};

const IconGoogle = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full fill-inherit"
        aria-label="Log in with Google"
      >
        <g fill="none" fillRule="evenodd">
          <path
            d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
            fill="#4285F4"
          ></path>
          <path
            d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
            fill="#34A853"
          ></path>
          <path
            d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
            fill="#FBBC05"
          ></path>
          <path
            d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
            fill="#EA4335"
          ></path>
          <path d="M0 0h18v18H0z"></path>
        </g>
      </svg>
    </span>
  );
};

const IconFaceBook = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
      </svg>
    </span>
  );
};
const IconRocketChat = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 576 512"
      >
        <path d="M284 224.8a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 284 224.8zm-110.5 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 173.6 224.8zm220.9 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 394.5 224.8zm153.8-55.3c-15.5-24.2-37.3-45.6-64.7-63.6-52.9-34.8-122.4-54-195.7-54a406 406 0 0 0 -72 6.4 238.5 238.5 0 0 0 -49.5-36.6C99.7-11.7 40.9 .7 11.1 11.4A14.3 14.3 0 0 0 5.6 34.8C26.5 56.5 61.2 99.3 52.7 138.3c-33.1 33.9-51.1 74.8-51.1 117.3 0 43.4 18 84.2 51.1 118.1 8.5 39-26.2 81.8-47.1 103.5a14.3 14.3 0 0 0 5.6 23.3c29.7 10.7 88.5 23.1 155.3-10.2a238.7 238.7 0 0 0 49.5-36.6A406 406 0 0 0 288 460.1c73.3 0 142.8-19.2 195.7-54 27.4-18 49.1-39.4 64.7-63.6 17.3-26.9 26.1-55.9 26.1-86.1C574.4 225.4 565.6 196.4 548.3 169.5zM285 409.9a345.7 345.7 0 0 1 -89.4-11.5l-20.1 19.4a184.4 184.4 0 0 1 -37.1 27.6 145.8 145.8 0 0 1 -52.5 14.9c1-1.8 1.9-3.6 2.8-5.4q30.3-55.7 16.3-100.1c-33-26-52.8-59.2-52.8-95.4 0-83.1 104.3-150.5 232.8-150.5s232.9 67.4 232.9 150.5C517.9 342.5 413.6 409.9 285 409.9z" />
      </svg>
    </span>
  );
};

const IconEnvelope = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M64 80c-26.5 0-48 21.5-48 48v28.2L220.8 321.4c20.5 16.5 49.8 16.5 70.3 0L496 156.2V128c0-26.5-21.5-48-48-48H64zM16 176.7V384c0 26.5 21.5 48 48 48H448c26.5 0 48-21.5 48-48V176.7L301.2 333.8c-26.4 21.3-64 21.3-90.4 0L16 176.7zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
      </svg>
    </span>
  );
};

const IconPhoneVolume = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M264 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c128.1 0 232 103.9 232 232c0 4.4 3.6 8 8 8s8-3.6 8-8C512 111 401 0 264 0zm8 224a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 104c0 4.4 3.6 8 8 8c75.1 0 136 60.9 136 136c0 4.4 3.6 8 8 8s8-3.6 8-8c0-83.9-68.1-152-152-152c-4.4 0-8 3.6-8 8zm41.8 278.5c6.6 3.1 14.6 1.3 19.2-4.3l40.4-49.3c6.7-8.2 18-11 27.8-7l96 40c11.1 4.6 17.1 16.8 13.9 28.5l-24 88C468.3 488.8 458.8 496 448 496C209.4 496 16 302.6 16 64c0-10.8 7.2-20.3 17.7-23.2l88-24c11.6-3.2 23.8 2.8 28.5 13.9l40 96c4.1 9.8 1.3 21.1-7 27.8l-49.3 40.4c-5.7 4.7-7.5 12.6-4.3 19.2c34.8 73.8 94.5 133.5 168.3 168.3zM345 318.7L304.7 368C234.2 334.7 177.2 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6z" />
      </svg>
    </span>
  );
};

const IconTrash = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 448 512"
      >
        <path d="M177.7 32h92.5c5.5 0 10.6 2.8 13.6 7.5L299.1 64H148.9l15.3-24.5c2.9-4.7 8.1-7.5 13.6-7.5zM336.9 64L311 22.6C302.2 8.5 286.8 0 270.3 0H177.7C161.2 0 145.8 8.5 137 22.6L111.1 64H64.1 32 16C7.2 64 0 71.2 0 80s7.2 16 16 16H34.3L59.8 452.6C62.1 486.1 90 512 123.6 512H324.4c33.6 0 61.4-25.9 63.8-59.4L413.7 96H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H416 383.9 336.9zm44.8 32L356.3 450.3C355.1 467 341.2 480 324.4 480H123.6c-16.8 0-30.7-13-31.9-29.7L66.4 96H381.6z" />
      </svg>
    </span>
  );
};

const IconUpload = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 512 512"
      >
        <path d="M272 54.6V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V54.6L139.3 155.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l128-128c6.2-6.2 16.4-6.2 22.6 0l128 128c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L272 54.6zM208 352H64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H304V320H448c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V384c0-35.3 28.7-64 64-64H208v32zm176 64a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
      </svg>
    </span>
  );
};

const IconEye = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 576 512"
      >
        <path d="M106.3 124.3C151.4 82.4 212.4 48 288 48s136.6 34.4 181.7 76.3c44.9 41.7 75 91.7 89.1 125.6c1.6 3.9 1.6 8.4 0 12.3C544.7 296 514.6 346 469.7 387.7C424.6 429.6 363.6 464 288 464s-136.6-34.4-181.7-76.3C61.4 346 31.3 296 17.2 262.2c-1.6-3.9-1.6-8.4 0-12.3C31.3 216 61.4 166 106.3 124.3zM288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM192 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm208 0a112 112 0 1 0 -224 0 112 112 0 1 0 224 0z" />
      </svg>
    </span>
  );
};

const IconEyeSlash = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes("w-") ? className : `h-6 w-6 ${className}`
      } block `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full fill-inherit"
        viewBox="0 0 640 512"
      >
        <path d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7zM605.5 268.3c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-47.8 0-90.1 12.9-126.3 32.5l13.7 10.9C240.3 58.7 277.9 48 320 48c75.6 0 136.6 34.4 181.7 76.3c44.9 41.7 75 91.7 89.1 125.6c1.6 3.9 1.6 8.4 0 12.3C581.7 284 566 312.4 544 341.1l12.6 9.9c23-29.9 39.4-59.7 49-82.7zM83.5 161c-23 29.9-39.4 59.7-49 82.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 90.1-12.9 126.3-32.5l-13.7-10.9C399.7 453.3 362.1 464 320 464c-75.6 0-136.6-34.4-181.7-76.3C93.4 346 63.3 296 49.2 262.2c-1.6-3.9-1.6-8.4 0-12.3C58.3 228 74 199.6 96 170.9L83.5 161zM320 368c7.8 0 15.4-.8 22.7-2.3l-17.5-13.8c-1.7 .1-3.5 .1-5.2 .1c-47.2 0-86.4-34-94.5-78.9L208 259.4C209.8 319.7 259.3 368 320 368zm0-224c-7.8 0-15.4 .8-22.7 2.3l17.5 13.8c1.7-.1 3.5-.1 5.2-.1c47.2 0 86.4 34 94.5 78.9L432 252.6C430.2 192.3 380.7 144 320 144z" />
      </svg>
    </span>
  );
};

export {
  IconBars3,
  IconUser,
  IconMark,
  IconArrowRightLeft,
  IconArrowUpDown,
  IconArrowUpFrom,
  IconFacebook,
  IconInstagram,
  IconTiktok,
  IconTwitter,
  IconMapPin,
  IconCalendar,
  IconUserPlus,
  IconMinus,
  IconPlus,
  IconCircleUser,
  IconArrowRightFromBracket,
  IconBookBookmark,
  IconSpinner,
  IconChevronDown,
  IconSearch,
  IconTicket,
  IconClock,
  IconCircleCheck,
  IconChevronRight,
  IconChevronLeft,
  IconCar,
  IconCarLight,
  IconLink,
  IconGlobe,
  IconStar,
  IconMoneyBillTransfer,
  IconMessageSmile,
  IconHandHoldingHeart,
  IconCheck,
  IconMobile,
  IconPhone,
  IconHandsHoldingCircle,
  IconPlaneLock,
  IconMoneyFromBracket,
  IconChevronUp,
  IconLock,
  IconCircleStar,
  IconCircle,
  IconSolidCircle,
  IconCircleXMark,
  IconCartShopping,
  IconGoogle,
  IconFaceBook,
  IconRocketChat,
  IconEnvelope,
  IconPhoneVolume,
  IconTrash,
  IconUpload,
  IconEyeSlash,
  IconEye,
};
