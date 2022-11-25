import {
  Footer,
  Header,
  MultipleContainer,
  Navbar,
  SingleContainer,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center h-[calc(100vh-96px)] overflow-auto p-4">
        <div className="max-w-2xl w-full flex flex-col items-center">
          <Header />
          <div className="w-full flex justify-around flex-wrap">
            <MultipleContainer />
            <SingleContainer />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
