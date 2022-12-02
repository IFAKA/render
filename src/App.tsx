import {
  Card,
  Code,
  Footer,
  Header,
  MultipleElements,
  Navbar,
  SingleElement,
} from "./components";
import { ServiceWorkerModal } from "./config";
import { MULTIPLE_JSX, SINGLE_JSX } from "./models";

function App() {
  return (
    <>
      <ServiceWorkerModal />
      <Navbar />
      <div className="flex justify-center h-[calc(100vh-96px)] overflow-auto p-4">
        <div className="max-w-2xl w-full flex flex-col items-center">
          <Header />
          <div className="w-full flex justify-around flex-wrap">
            <Card title="Multiple Elements">
              <MultipleElements />
              <Code>{MULTIPLE_JSX}</Code>
            </Card>
            <Card title="Single Element">
              <SingleElement />
              <Code>{SINGLE_JSX}</Code>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
