import { cookies } from "next/headers";
import { ApiReferenceReact } from "@scalar/api-reference-react";
import '@scalar/api-reference-react/style.css'
interface Props {
  openapiDocument: string;
}

const CodeExamples = ({ openapiDocument }: Props) => {
  console.log('openapiDocument:', JSON.stringify(openapiDocument, null, 2))
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
             
            
            <ApiReferenceReact
              configuration={{
                spec:{content: openapiDocument}
              }}
            />
          </div>
        </div>
      </div>
       
    </>
  );
};

export default CodeExamples;
