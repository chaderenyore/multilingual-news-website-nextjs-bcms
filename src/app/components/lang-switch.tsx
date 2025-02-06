"use client";

import Image from "next/image";
import { FC, useState } from "react";

interface LanguageSwitchProps {
  onLanguageChange?: (language: string) => void;
}

const LanguageSwitch: FC <LanguageSwitchProps> = ({ onLanguageChange }) =>  {
  const [showLangs, setShowLangs] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  
  const langs = [
    {
      label: "English",
      code: "en",
      icon: "/flag/en.png",
    },
    {
      label: "French",
      code: "fr",
      icon: "/flag/fr.png",
    },
    {
      label: "Spanish",
      code: "es",
      icon: "/flag/es.png",
    },
    {
      label: "Greek",
      code: "el",
      icon: "/flag/el.png",
      ai: true,
    },
    {
      label: "Portuguese",
      code: "pt",
      icon: "/flag/pt.png",
      ai: true,
    },
    {
      label: "Mandarin",
      code: "zh",
      icon: "/flag/zh.png",
      ai: true,
    },
    {
      label: "German",
      code: "de",
      icon: "/flag/de.png",
      ai: true,
    },
  ];

  const nonAiLangs = langs.filter((lang) => !lang.ai);
  const aiLangs = langs.filter((lang) => lang.ai);

  return (
    <div className="relative mb-[18px] lg:mb-9">
      <button
        className="flex items-center justify-between p-3 rounded-full w-[100px] ml-auto lg:w-[180px] lg:p-4"
        style={{
          boxShadow:
            "0px 0px 8px -4px rgba(16, 24, 40, 0.04), 0px 4px 24px -4px rgba(16, 24, 40, 0.04)",
        }}
        onClick={() => {
          setShowLangs(!showLangs);
        }}
      >
        <span className="flex items-center gap-1 mr-2 lg:gap-2">
          <Image
            src={`/flag/${currentLang}.png`}
            alt={currentLang}
            width={18}
            height={18}
            className="size-3 object-contain lg:size-[18px]"
          />
          <span className="text-xs leading-none tracking-[-0.36px] lg:text-lg lg:tracking-[-0.54px]">
            {langs.find((lang) => lang.code === currentLang)?.label}
          </span>
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#1D1D1D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {showLangs && (
        <div
          className="absolute z-10 -bottom-3 right-0 translate-y-full w-[120px] p-1.5 rounded-[18px] bg-white grid grid-cols-1 gap-1 lg:-bottom-2 lg:w-[190px] lg:p-2 lg:rounded-3xl"
          style={{
            boxShadow:
              "0px 0px 8px -4px rgba(16, 24, 40, 0.04), 0px 4px 24px -4px rgba(16, 24, 40, 0.04)",
          }}
        >
          {nonAiLangs.map((lng) => {
            return (
              <button
                key={lng.code}
                className={`flex items-center gap-1 w-full p-1.5 rounded-3xl transition-colors duration-300 ${
                  currentLang === lng.code ? "bg-accent-100" : ""
                } hover:bg-accent-100 focus-visible:bg-accent-100 lg:gap-2 lg:px-[18px] lg:py-2`}
                onClick={() => {
                  setCurrentLang(lng.code);
                  setShowLangs(false);
                }}
              >
                <Image
                  src={`/flag/${lng.code}.png`}
                  alt={lng.code}
                  width={18}
                  height={18}
                  className="size-3 object-contain lg:size-[18px]"
                />
                <span className="text-xs leading-none tracking-[-0.36px] lg:text-lg lg:tracking-[-0.54px]">
                  {lng.label}
                </span>
              </button>
            );
          })}
          <div className="flex mt-1 max-w-max mx-auto pt-1 border-t border-border lg:mt-2">
            <span className="text-main-light text-[10px] leading-none lg:text-xs lg:leading-none">
              Translated by AI
            </span>
          </div>
          {aiLangs.map((lng) => {
            return (
              <button
                key={lng.code}
                className={`flex items-center gap-1 w-full p-1.5 rounded-3xl transition-colors duration-300 ${
                  currentLang === lng.code ? "bg-accent-100" : ""
                } hover:bg-accent-100 focus-visible:bg-accent-100 lg:gap-2 lg:px-[18px] lg:py-2`}
                onClick={() => {
                  setCurrentLang(lng.code);
                  setShowLangs(false);
                  if (onLanguageChange) {
                    onLanguageChange(lng.label);
                  }
                }}
              >
                <Image
                  src={`/flag/${lng.code}.png`}
                  alt={lng.code}
                  width={18}
                  height={18}
                  className="size-3 object-contain lg:size-[18px]"
                />
                <span className="text-xs leading-none tracking-[-0.36px] lg:text-lg lg:tracking-[-0.54px]">
                  {lng.label}
                </span>
                <svg
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-3 ml-auto flex-shrink-0 lg:size-3.5"
                >
                  
 <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.25814 1.75004C5.41285 1.75004 5.56122 1.8115 5.67062 1.92089C5.78002 2.03029 5.84147 2.17866 5.84147 2.33337V2.91671H7.59147C7.74618 2.91671 7.89456 2.97817 8.00395 3.08756C8.11335 3.19696 8.17481 3.34533 8.17481 3.50004C8.17481 3.65475 8.11335 3.80312 8.00395 3.91252C7.89456 4.02192 7.74618 4.08337 7.59147 4.08337H7.55939C7.42931 5.26871 6.90839 6.41087 6.07481 7.40137C6.45713 7.7324 6.87161 8.02436 7.31206 8.27287L8.51781 5.59421C8.56391 5.4917 8.63865 5.4047 8.73303 5.34366C8.82741 5.28262 8.93741 5.25015 9.04981 5.25015C9.1622 5.25015 9.27221 5.28262 9.36659 5.34366C9.46097 5.4047 9.5357 5.4917 9.58181 5.59421L12.2068 11.4275C12.268 11.5683 12.2712 11.7274 12.2159 11.8705C12.1605 12.0137 12.051 12.1292 11.911 12.1921C11.7711 12.255 11.6119 12.2603 11.4681 12.2067C11.3244 12.1531 11.2075 12.045 11.1428 11.9059L10.5099 10.5H7.58914L6.95681 11.9059C6.89215 12.045 6.77526 12.1531 6.63147 12.2067C6.48767 12.2603 6.32856 12.255 6.18861 12.1921C6.04865 12.1292 5.93913 12.0137 5.88376 11.8705C5.82839 11.7274 5.83164 11.5683 5.89281 11.4275L6.83197 9.34154C6.26843 9.03129 5.74032 8.66064 5.25697 8.23612C4.50622 8.89879 3.59564 9.45996 2.55789 9.87529C2.41424 9.93277 2.25365 9.93082 2.11143 9.86989C1.96922 9.80895 1.85703 9.69402 1.79956 9.55037C1.74208 9.40673 1.74403 9.24613 1.80496 9.10392C1.86589 8.9617 1.98083 8.84951 2.12447 8.79204C3.03272 8.42862 3.80856 7.95146 4.44147 7.40254C3.94924 6.82317 3.55907 6.16434 3.28764 5.45421C3.23334 5.30932 3.23881 5.1488 3.30287 5.00795C3.36692 4.8671 3.4843 4.75747 3.62918 4.70317C3.77407 4.64886 3.93459 4.65434 4.07544 4.71839C4.21629 4.78244 4.32592 4.89982 4.38022 5.04471C4.58989 5.59324 4.8863 6.10453 5.25814 6.55904C5.87939 5.78729 6.26147 4.93387 6.38281 4.08337H2.34147C2.18676 4.08337 2.03839 4.02192 1.92899 3.91252C1.8196 3.80312 1.75814 3.65475 1.75814 3.50004C1.75814 3.34533 1.8196 3.19696 1.92899 3.08756C2.03839 2.97817 2.18676 2.91671 2.34147 2.91671H4.67481V2.33337C4.67481 2.17866 4.73627 2.03029 4.84566 1.92089C4.95506 1.8115 5.10343 1.75004 5.25814 1.75004ZM9.98489 9.33337L9.04981 7.25496L8.11531 9.33337H9.98489ZM11.0915 0.583374C11.2132 0.583423 11.3318 0.621521 11.4307 0.692335C11.5297 0.763149 11.604 0.863133 11.6433 0.978291L11.7191 1.19879C11.8055 1.45181 11.9486 1.68169 12.1376 1.87079C12.3266 2.05988 12.5564 2.20316 12.8094 2.28962L13.0299 2.36487C13.1449 2.40429 13.2448 2.47867 13.3154 2.57761C13.3861 2.67655 13.4241 2.79511 13.4241 2.91671C13.4241 3.0383 13.3861 3.15686 13.3154 3.2558C13.2448 3.35474 13.1449 3.42912 13.0299 3.46854L12.8094 3.54437C12.5564 3.63071 12.3265 3.77386 12.1374 3.96285C11.9483 4.15184 11.805 4.38165 11.7186 4.63462L11.6433 4.85512C11.6039 4.97015 11.5295 5.06999 11.4306 5.14068C11.3316 5.21136 11.2131 5.24936 11.0915 5.24936C10.9699 5.24936 10.8513 5.21136 10.7524 5.14068C10.6534 5.06999 10.5791 4.97015 10.5396 4.85512L10.4638 4.63462C10.3775 4.3816 10.2343 4.15172 10.0453 3.96263C9.85634 3.77354 9.62653 3.63026 9.37356 3.54379L9.15306 3.46854C9.03803 3.42912 8.93819 3.35474 8.86751 3.2558C8.79682 3.15686 8.75882 3.0383 8.75882 2.91671C8.75882 2.79511 8.79682 2.67655 8.86751 2.57761C8.93819 2.47867 9.03803 2.40429 9.15306 2.36487L9.37356 2.28904C9.62658 2.20271 9.85646 2.05955 10.0456 1.87056C10.2346 1.68157 10.3779 1.45177 10.4644 1.19879L10.5396 0.978291C10.5789 0.863133 10.6533 0.763149 10.7522 0.692335C10.8512 0.621521 10.9698 0.583423 11.0915 0.583374ZM11.0915 2.44771C10.9535 2.62137 10.7961 2.77872 10.6225 2.91671C10.7967 3.05476 10.953 3.2111 11.0915 3.38571C11.2295 3.21148 11.3859 3.05515 11.5605 2.91671C11.3868 2.77872 11.2295 2.62137 11.0915 2.44771Z"
                    fill="#697586"
                  />
                </svg>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;

