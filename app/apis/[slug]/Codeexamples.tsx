interface Props {
  slug: string;
}

const CodeExamples = ({ slug }: Props) => {
  async function fetchData() {
    const response = await fetch(`/api/openapi/${slug}`, {
      method: "GET",
      credentials: "include",
    });

    const openapiDocument = await response.json();

    console.log(openapiDocument);
  }

  fetchData();

  return (
    <>
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

            <button className="py-3 text-sm text-slate-500">Python</button>

            <button className="py-3 text-sm text-slate-500">cURL</button>
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

            <span className="text-slate-500">OK</span>
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
    </>
  );
};

export default CodeExamples;
