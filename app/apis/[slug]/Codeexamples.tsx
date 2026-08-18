const CodeExamples = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">

      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-900">
          Code Examples
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Example requests for using this API.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200">

        <div className="flex items-center gap-5 border-b border-slate-200 bg-slate-50 px-4">
          <button className="border-b-2 border-blue-600 py-3 text-sm font-medium text-blue-600">
            JavaScript
          </button>

          <button className="py-3 text-sm text-slate-500">
            Python
          </button>

          <button className="py-3 text-sm text-slate-500">
            cURL
          </button>
        </div>

        <div className="min-h-48 bg-slate-900 p-5">
          <pre className="text-sm leading-6 text-slate-300">
            <code>
{`// Code example will appear here

const response = await fetch(
  "https://api.example.com/v1/weather/Ahmedabad",
  {
    headers: {
      "x-api-key": "YOUR_API_KEY"
    }
  }
);`}
            </code>
          </pre>
        </div>

      </div>

    </div>
  );
};

export default CodeExamples;