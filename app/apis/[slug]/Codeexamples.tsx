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
     <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
  <div className="mb-5">
    <h2 className="text-lg font-semibold text-slate-800">
      Code Examples
    </h2>

    <p className="mt-1 text-sm text-slate-400">
      Example requests for using this API.
    </p>
  </div>

  <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
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
        layout: "classic",
        forceDarkModeState: "light",
      }}
    />
  </div>
</div>
    </>
  );
};

export default CodeExamples;
