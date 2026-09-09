"use client";
import React, { useEffect, useState } from "react";
import { PencilLine, CheckCircle2 } from "lucide-react";

const Homepage = () => {
  const codeLines = [
    { text: "const res = await fetch(", color: "text-slate-700" },
    {
      text: '  "https://api.smash-api.dev/v1/weather?city=Ahmedabad",',
      color: "text-emerald-600",
    },
    { text: "  {", color: "text-slate-700" },
    { text: '    method: "GET",', color: "text-sky-600" },
    { text: "    headers: {", color: "text-slate-700" },
    {
      text: '      "x-api-key": process.env.SMASH_API_KEY,',
      color: "text-amber-600",
    },
    {
      text: '      "Content-Type": "application/json",',
      color: "text-amber-600",
    },
    { text: "    },", color: "text-slate-700" },
    { text: "  }", color: "text-slate-700" },
    { text: ");", color: "text-slate-700" },
    { text: "", color: "text-slate-400" },
    { text: "if (!res.ok) {", color: "text-violet-600" },
    {
      text: '  throw new Error("Failed to fetch weather");',
      color: "text-red-500",
    },
    { text: "}", color: "text-violet-600" },
    { text: "", color: "text-slate-400" },
    { text: "const data = await res.json();", color: "text-slate-700" },
    { text: "", color: "text-slate-400" },
    { text: "console.log(data.temperature);", color: "text-slate-700" },
    { text: "console.log(data.condition);", color: "text-slate-700" },
    { text: "// ☀️ 31°C • Clear Sky", color: "text-slate-500" },
  ];

  const responseLines = [
    { text: "{", color: "text-slate-300" },
    { text: '  "city": "Ahmedabad",', color: "text-emerald-400" },
    { text: '  "country": "IN",', color: "text-emerald-400" },
    { text: '  "temperature": 31,', color: "text-sky-400" },
    { text: '  "feels_like": 34,', color: "text-sky-400" },
    { text: '  "condition": "Clear Sky",', color: "text-amber-400" },
    { text: '  "icon": "☀️",', color: "text-amber-400" },
    { text: '  "humidity": "48%",', color: "text-violet-400" },
    { text: '  "wind_speed": "12 km/h",', color: "text-violet-400" },
    { text: '  "updated_at": "2026-08-07T14:11:00Z"', color: "text-slate-400" },
    { text: "}", color: "text-slate-300" },
  ];
  const apis = [
    "Weather API",
    "Payments API",
    "News API",
    "Maps API",
    "Currency API",
    "Auth API",
    "Image API",
  ];

  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  const [displayedResponse, setDisplayedResponse] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showResponse, setShowResponse] = useState(false);

  const lines = showResponse ? responseLines : codeLines;

  useEffect(() => {
    if (lineIndex >= lines.length) {
      if (!showResponse) {
        const t = setTimeout(() => {
          setShowResponse(true);
          setLineIndex(0);
          setCharIndex(0);
        }, 500);
        return () => clearTimeout(t);
      }
      return;
    }

    const currentLine = lines[lineIndex].text;

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        const setter = showResponse ? setDisplayedResponse : setDisplayedCode;
        setter((prev) => {
          const updated = [...prev];
          updated[lineIndex] = currentLine.slice(0, charIndex + 1);
          return updated;
        });
        setCharIndex((c) => c + 1);
      }, 25);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 300);

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, showResponse]);

  return (
    <>
    <section className="relative m-1 flex min-h-[90vh] items-center justify-center overflow-hidden rounded-xl rounded-b-none border border-slate-200 bg-slate-50 px-6">

  {/* ================= BACKGROUND GRID ================= */}
  <div
    className="
      pointer-events-none
      absolute inset-0
      opacity-60
      [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]
      [background-size:60px_60px]
    "
  />

  {/* ================= SOFT BLUE GLOW ================= */}
  <div
    className="
      pointer-events-none
      absolute left-1/2 top-1/2
      h-[500px] w-[700px]
      -translate-x-1/2 -translate-y-1/2
      rounded-full
      bg-blue-100/50
      blur-3xl
    "
  />

  {/* ================= NETWORK LINES ================= */}

  {/* Left → Center */}
  <div className="pointer-events-none absolute left-[18%] top-[35%] hidden h-px w-[25%] bg-gradient-to-r from-transparent via-blue-300 to-blue-400 lg:block" />

  {/* Center → Right */}
  <div className="pointer-events-none absolute right-[18%] top-[35%] hidden h-px w-[25%] bg-gradient-to-r from-blue-400 via-blue-300 to-transparent lg:block" />

  {/* Lower left → Center */}
  <div className="pointer-events-none absolute bottom-[30%] left-[20%] hidden h-px w-[23%] rotate-[15deg] bg-gradient-to-r from-transparent via-blue-200 to-blue-400 lg:block" />

  {/* Center → Lower right */}
  <div className="pointer-events-none absolute bottom-[30%] right-[20%] hidden h-px w-[23%] -rotate-[15deg] bg-gradient-to-r from-blue-400 via-blue-200 to-transparent lg:block" />


  {/* ================= NETWORK DOTS ================= */}

  <div className="absolute left-[42%] top-[35%] hidden h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-400/40 lg:block" />

  <div className="absolute right-[42%] top-[35%] hidden h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-400/40 lg:block" />

  <div className="absolute left-[44%] bottom-[30%] hidden h-2 w-2 rounded-full bg-blue-400 lg:block" />

  <div className="absolute right-[44%] bottom-[30%] hidden h-2 w-2 rounded-full bg-blue-400 lg:block" />


  {/* ================= LEFT API CARD ================= */}

  <div
    className="
      absolute left-[7%] top-[27%]
      hidden w-52
      rounded-xl
      border border-slate-200
      bg-white
      p-4
      shadow-lg shadow-slate-200/50
      lg:block
    "
  >
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold text-slate-900">
        Weather API
      </span>

      <span className="rounded-md bg-blue-50 px-2 py-1 text-[10px] font-bold text-blue-600">
        GET
      </span>
    </div>

    <p className="mt-3 font-mono text-xs text-slate-500">
      /weather/current
    </p>

    <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-600">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
      Operational
    </div>
  </div>


  {/* ================= RIGHT API CARD ================= */}

  <div
    className="
      absolute right-[7%] top-[27%]
      hidden w-52
      rounded-xl
      border border-slate-200
      bg-white
      p-4
      shadow-lg shadow-slate-200/50
      lg:block
    "
  >
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold text-slate-900">
        AI API
      </span>

      <span className="rounded-md bg-blue-50 px-2 py-1 text-[10px] font-bold text-blue-600">
        POST
      </span>
    </div>

    <p className="mt-3 font-mono text-xs text-slate-500">
      /chat/completions
    </p>

    <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-600">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
      Operational
    </div>
  </div>


  {/* ================= LOWER LEFT CARD ================= */}

  <div
    className="
      absolute bottom-[19%] left-[10%]
      hidden w-48
      rounded-xl
      border border-slate-200
      bg-white
      p-4
      shadow-lg shadow-slate-200/50
      lg:block
    "
  >
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold text-slate-900">
        Maps API
      </span>

      <span className="rounded-md bg-blue-50 px-2 py-1 text-[10px] font-bold text-blue-600">
        GET
      </span>
    </div>

    <p className="mt-3 font-mono text-xs text-slate-500">
      /maps/geocode
    </p>
  </div>


  {/* ================= LOWER RIGHT CARD ================= */}

  <div
    className="
      absolute bottom-[19%] right-[10%]
      hidden w-48
      rounded-xl
      border border-slate-200
      bg-white
      p-4
      shadow-lg shadow-slate-200/50
      lg:block
    "
  >
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold text-slate-900">
        Payments API
      </span>

      <span className="rounded-md bg-blue-50 px-2 py-1 text-[10px] font-bold text-blue-600">
        POST
      </span>
    </div>

    <p className="mt-3 font-mono text-xs text-slate-500">
      /payments/create
    </p>
  </div>


  {/* ================= MAIN CONTENT ================= */}

  <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">

    <div className="mb-5 flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
      <span className="h-2 w-2 rounded-full bg-blue-500" />

      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
        The API Marketplace
      </span>
    </div>

    <h1 className="max-w-4xl text-6xl font-extrabold leading-[0.95] tracking-tight text-slate-900 md:text-7xl">
      Build Without
      <span className="block text-blue-600">
        API Friction.
      </span>
    </h1>

    <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
      Discover APIs, generate keys, test endpoints, and ship
      production-ready integrations in minutes.
    </p>

    <div className="mt-10 flex items-center gap-4">
      <button
        className="
          rounded-full
          bg-blue-600
          px-8 py-4
          text-base font-bold text-white
          shadow-lg shadow-blue-600/20
          transition-all duration-300
          hover:-translate-y-1
          hover:bg-blue-700
          hover:shadow-xl
        "
      >
        Browse APIs
      </button>

      <button
        className="
          rounded-full
          border border-slate-300
          bg-white
          px-8 py-4
          text-base font-semibold text-slate-700
          transition-all duration-300
          hover:-translate-y-1
          hover:border-slate-400
          hover:bg-slate-50
        "
      >
        Explore Studio
      </button>
    </div>

    {/* Small trust indicator */}
    <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
      <CheckCircle2
        size={16}
        className="text-emerald-500"
      />

      <span>
        Test APIs before integrating
      </span>
    </div>
  </div>
</section>

     <section className="m-1 min-h-130 border border-slate-200 bg-slate-50 shadow-sm">
  <div className="relative grid grid-cols-2">

    {/* ================= CODE PANEL ================= */}
    <div className="m-3 h-110 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

      {/* Code header */}
      <div className="flex h-10 items-center justify-between border-b border-slate-200 bg-slate-50 px-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-amber-400" />
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>

        <button
          className="
            rounded-md p-1.5
            text-slate-500
            transition
            hover:bg-slate-200
            hover:text-slate-800
          "
        >
          <PencilLine size={18} strokeWidth={2} />
        </button>
      </div>

       <div className="mx-auto p-8 font-mono text-sm">
        {displayedCode.map((line, i) => (
          <div key={i} className={codeLines[i]?.color}>
            {line}
          </div>
        ))}
      </div>
    </div>


     <div className="m-3 h-110 overflow-hidden rounded-xl border border-slate-700 bg-slate-800 shadow-sm">

      {/* Response header */}
      <div className="flex h-10 items-center justify-between border-b border-slate-700 bg-slate-900 px-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-amber-400" />
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>

        {showResponse && (
          <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
            <CheckCircle2 size={14} strokeWidth={2} />
            200 OK
          </div>
        )}
      </div>

       <div className="mx-auto p-8 font-mono text-sm">
        {showResponse &&
          displayedResponse.map((line, i) => (
            <div key={i} className={responseLines[i]?.color}>
              {line}
            </div>
          ))}
      </div>
    </div>
  </div>


   <div className="mt-4 flex items-center justify-center p-3">
    <button
      className="
        cursor-pointer
        rounded-full
        bg-blue-600
        px-7 py-3
        text-xl font-bold text-white
        transition-all
        hover:-translate-y-1
        hover:rounded-xl
        hover:bg-blue-700
        hover:shadow-lg
        hover:shadow-blue-600/20
      "
    >
      Try it live
    </button>
  </div>
</section>

      <div className="m-1 mb-20 mt-20">

  {/* Heading */}
  <h2 className="ml-4 mb-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900">
    <span className="text-blue-600">
      30+
    </span>{" "}
    Production-Ready APIs
  </h2>

  {/* Description */}
  <p className="ml-4 max-w-2xl text-lg leading-8 text-slate-600">
    Discover reliable APIs for{" "}
    <span className="font-semibold text-slate-900">AI</span>,
    <span className="font-semibold text-slate-900"> Weather</span>,
    <span className="font-semibold text-slate-900"> Payments</span>,
    <span className="font-semibold text-slate-900"> Maps</span>, and more.
  </p>


  {/* ================= API MARQUEE ================= */}
  <div className="relative mt-6 overflow-hidden border-y border-slate-200 bg-white py-6">

    {/* Left fade */}
    <div
      className="
        pointer-events-none
        absolute left-0 top-0 z-10
        h-full w-24
        bg-gradient-to-r
        from-white
        to-transparent
      "
    />

    {/* Right fade */}
    <div
      className="
        pointer-events-none
        absolute right-0 top-0 z-10
        h-full w-24
        bg-gradient-to-l
        from-white
        to-transparent
      "
    />

    {/* API items */}
    <div className="flex w-max gap-4 animate-marquee motion-reduce:animate-none">
      {[...apis, ...apis].map((api, i) => (
        <span
          key={i}
          className="
            whitespace-nowrap
            rounded-full
            border border-slate-200
            bg-slate-50
            px-5 py-2
            text-sm font-medium text-slate-700
            transition-colors
            hover:border-blue-300
            hover:bg-blue-50
            hover:text-blue-600
          "
        >
          {api}
        </span>
      ))}
    </div>
  </div>
</div>
    </>
  );
};

export default Homepage;
