import { cookies } from "next/headers";
import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";
 interface Props {
  openapiDocument: string;
}

const CodeExamples = ({ openapiDocument }: Props) => {
  console.log("openapiDocument:", JSON.stringify(openapiDocument, null, 2));
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
          <div className="min-h-48 bg-slate-900 p-5">
               <ApiReferenceReact
                configuration={{
                  spec: {
                    content: openapiDocument,
                  },
                  showSidebar: false,
                  hideSearch: true,
                  hideModels: true,
                  hideDarkModeToggle: true,
                  theme: "none",
                }}
              />
           </div>
        </div>
      </div>
    </>
  );
};

export default CodeExamples;
