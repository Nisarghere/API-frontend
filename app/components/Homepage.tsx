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
      <section className="relative min-h-[90vh] overflow-hidden rounded-xl rounded-b-none border border-slate-300 shadow-sm bg-white m-1 flex items-center justify-center px-6">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-blue-500 rounded-t-[100%] z-0" />
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
          <span className="text-red-600 uppercase tracking-[0.35em] text-sm font-semibold">
            Smash API
          </span>
          <h1 className="mt-6 text-7xl md:text-6xl font-extrabold tracking-tight leading-none text-slate-900">
            Build Without API Friction.
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-slate-600">
            Toggle APIs, generate keys, test endpoints and ship production-ready
            integrations in minutes.
          </p>
          <button className="mt-12 rounded-full bg-emerald-400 px-8 py-4 text-lg font-bold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300 hover:shadow-2xl hover:shadow-emerald-400/30">
            Browse APIs
          </button>
        </div>
      </section>

      <section className="  border border-slate-300 shadow-sm m-1 min-h-130">
        <div className="relative grid grid-cols-2  ">
          {/* Code panel */}
          <div className="border border-slate-200 shadow-md rounded m-3 h-110">
            <div className="flex h-10 items-center justify-between border-b px-4 bg-zinc-50">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <button className="rounded-md p-1.5 text-zinc-500 transition hover:bg-zinc-200 hover:text-zinc-800">
                <PencilLine size={18} strokeWidth={2} />
              </button>
            </div>
            <div className="p-8 font-mono text-sm mx-auto">
              {displayedCode.map((line, i) => (
                <div key={i} className={codeLines[i]?.color}>
                  {line}
                </div>
              ))}
            </div>
          </div>

          {/* Response panel */}
          <div className="border border-slate-700 shadow-md rounded m-3 h-110 bg-slate-800">
            <div className="flex h-10 items-center justify-between border-b border-slate-700 px-4 bg-slate-900">
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
            <div className="p-8 font-mono text-sm mx-auto">
              {showResponse &&
                displayedResponse.map((line, i) => (
                  <div key={i} className={responseLines[i]?.color}>
                    {line}
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center  p-3 mt-4 ">
          <button className="px-7 py-3 rounded-full text-slate-100  bg-emerald-500 cursor-pointer text-xl font-bold  hover:bg-emerald-400 thover:text-white/80 hover:rounded-xl hover:-translate-y-1 transition-all">
            Try it live
          </button>
        </div>
      </section>

      <div className="m-1 mt-20 mb-20   ">
        <h2 className="ml-4 mb-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-600">
          <span className="bg-blue-600 bg-clip-text text-transparent">
            30+
          </span> 
          Production-Ready APIs
        </h2>

        <p className="ml-4 max-w-2xl text-lg leading-8 text-slate-600">
          Discover reliable APIs for{" "}
          <span className="font-semibold text-slate-900">AI</span>,
          <span className="font-semibold text-slate-900"> Weather</span>,
          <span className="font-semibold text-slate-900"> Payments</span>,
          <span className="font-semibold text-slate-900"> Maps</span>, and more.
        </p>
        <div className="relative overflow-hidden py-6 border-y border-slate-200 bg-white">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex w-max gap-4 animate-marquee motion-reduce:animate-none">
            {[...apis, ...apis].map((api, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-medium text-slate-700 hover:border-emerald-400 hover:text-emerald-600 transition-colors"
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
