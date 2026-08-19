interface Endpoint{
  method:string;
  path:string;
  description:string |null;
}

interface ApiSpec {
  endpoints:Endpoint[]
}

const EndpointList = ({endpoints}:ApiSpec) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">

      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-900">
          Endpoints
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Available endpoints for this API.
        </p>
      </div>

      <div className="space-y-3">
        {endpoints.map((endpoint) => (
          <div
            key={endpoint.path}
            className="rounded-lg border border-slate-200 p-4"
          >
            <div className="flex items-center gap-3">

              <span className="rounded-md bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                {endpoint.method}
              </span>

              <code className="font-mono text-sm text-slate-800">
                {endpoint.path}
              </code>

            </div>

            <p className="mt-3 text-sm text-slate-500">
              {endpoint.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default EndpointList;