const ResponseExample = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">

      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-900">
          Example Response
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          A typical response returned by the endpoint.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg bg-slate-900 p-5">

        <div className="mb-4 flex items-center gap-2 text-xs">
          <span className="rounded bg-green-500/10 px-2 py-1 font-medium text-green-400">
            200
          </span>

          <span className="text-slate-500">
            OK
          </span>
        </div>

        <pre className="overflow-x-auto text-sm leading-6 text-slate-300">
          <code>
{`{
  "city": "Ahmedabad",
  "temperature": 31,
  "condition": "Clear",
  "humidity": 48
}`}
          </code>
        </pre>

      </div>

    </div>
  );
};

export default ResponseExample;