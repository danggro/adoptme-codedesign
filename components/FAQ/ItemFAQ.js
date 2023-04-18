import { useState } from "react";

export default function ItemFAQ(props) {
  const [down, setDown] = useState(false);
  return (
    <li
      className={`relative px-8 border overflow-hidden transition-all  ${
        down
          ? "pt-7 pb-[115px] border-secondary/80"
          : "py-7 border-secondary/20"
      }`}
    >
      <button
        className="flex items-center justify-between w-full"
        onClick={() => setDown(!down)}
      >
        <div className="flex items-center gap-4">
          <div className="w-[5px] h-[5px] rounded-full bg-primary"></div>
          <h2 className="text-lg text-primary">{props.title}</h2>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="18"
          fill="none"
          viewBox="0 0 17 18"
          className={`text-primary transition-all ${
            down && "text-primary/30 -rotate-180"
          }`}
        >
          <path
            fill="currentColor"
            d="M1.859 5.955c.197-.211.466-.33.745-.33.28 0 .548.119.745.33l5.218 5.568 5.218-5.568a1.02 1.02 0 01.741-.316c.277.002.541.12.737.33.195.208.306.49.308.785.003.295-.104.58-.296.791L9.312 13.91c-.197.211-.465.33-.745.33-.28 0-.547-.119-.745-.33L1.859 7.545a1.165 1.165 0 01-.309-.795c0-.298.111-.584.309-.795z"
          ></path>
        </svg>
      </button>
      <p
        className={`absolute -z-50 text-base transition-all origin-top text-secondary max-w-[460px] pl-6 ${
          down ? "top-[62px] opacity-100 " : "-top-full opacity-0 "
        }`}
      >
        {props.desc}
      </p>
    </li>
  );
}
