import Navbar from "@/app/Navbar/Navbar";
import ApiHeader from "./ApiHeader";
import ApiOverview from "./ApiOverview";
import CodeExamples from "./Codeexamples";
import EndpointList from "./EndpointList";
import ResponseExample from "./ResponseExample";

 
const ApiDetailsPage = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      <div className="mx-auto max-w-6xl space-y-6">
        


        <ApiHeader />

        <ApiOverview />

        <EndpointList />

        <CodeExamples />

        <ResponseExample />

      </div>
    </div>
    </>
  );
};

export default ApiDetailsPage;