import { Copy, SquareCheck } from "lucide-react";
import React, { useState } from "react";

const ReqRes = () => {
  const [copied, setcopied] = useState(false);

  function copybtn() {
    navigator.clipboard.writeText("https://smashapi.com/weather-api");
    setcopied(true);
    setTimeout(() => {
      setcopied(false);
    }, 2000);
  }

  return (
    <>
      <div className="flex justify-end p-2">
        <button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
          Subscribe
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 p-2 lg:grid-cols-2">
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <div>
              <h3 className="text-sm font-semibold text-slate-800">
                Code Snippet
              </h3>
              <p className="mt-0.5 text-xs text-slate-400">Example request</p>
            </div>

            <button
              onClick={copybtn}
              className="rounded-md p-1.5 text-slate-400 transition hover:bg-white hover:text-slate-700"
            >
              {copied ? (
                // <Check size={16} strokeWidth={3} className="text-slate-500" />
                <SquareCheck size={18} strokeWidth={3} />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>
          <div className="flex items-center gap-3 border-t border-slate-200 px-4 py-2.5">
            {/* Target */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-slate-400">Target</span>

              <select className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 outline-none focus:border-slate-400">
                <option>Production</option>
                <option>Development</option>
                <option>Sandbox</option>
              </select>
            </div>

            {/* Client */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-slate-400">Client</span>

              <select className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 outline-none focus:border-slate-400">
                <option>Ruby</option>
                <option>JavaScript</option>
                <option>Python</option>
                <option>cURL</option>
                <option>PHP</option>
                <option>Go</option>
              </select>
            </div>
          </div>

          <div className="relative h-[520px] overflow-auto scrollbar-none">
            <pre className="p-5 text-xs  bg-slate-950 leading-6 text-slate-300">
              <code>{`require 'uri'
require 'net/http'

url = URI("https://linkedin-data-api.p.rapidapi.com/profiles/interests/companies")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["x-rapidapi-key"] = 'YOUR_API_KEY'
request["x-rapidapi-host"] = 'linkedin-data-api.p.rapidapi.com'
request["Content-Type"] = 'application/json'

request.body = '{"username":"adamselipsky","page":1}'

response = http.request(request)
puts response.read_body`}</code>
            </pre>
          </div>
        </section>

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3">
            <div>
              <h3 className="text-sm font-semibold text-slate-800">
                Example Response
              </h3>
              <p className="mt-0.5 text-xs text-slate-400">
                Successful response
              </p>
            </div>

            <button
              onClick={copybtn}
              className="rounded-md p-1.5 text-slate-400 transition hover:bg-white hover:text-slate-700"
            >
              {copied ? (
                // <Check size={16} strokeWidth={3} className="text-slate-500" />
                <SquareCheck size={18} strokeWidth={3} />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>
          <div className="flex items-center gap-3 border-t border-slate-200 px-4 py-2.5">
            <span className="text-xs font-medium text-slate-400">Example</span>

            <select className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 outline-none focus:border-slate-400">
              <option>Success</option>
              <option>Failed</option>
            </select>
          </div>

          {/* Response */}
          <div className="relative h-[520px] overflow-auto bg-slate-950 scrollbar-none">
            <pre className="p-5 text-xs leading-6 text-slate-300">
              <code>{`{
  "success": true,
  "message": "",
  "data": {
    "items": [
      {
        "id": 1035,
        "name": "Microsoft",
        "logo": {
          "url": "https://media.licdn.com/...",
          "width": 100,
          "height": 100
        }
      }
    ]
  }
}`}</code>
            </pre>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReqRes;
