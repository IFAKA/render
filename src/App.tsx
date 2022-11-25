import {
  Footer,
  Header,
  MultipleContainer,
  Nav,
  Navbar,
  SingleContainer,
} from "./components";

function App() {
  const Render = ({ children, when }: any) => {
    return (
      <>
        {Array.isArray(children) && typeof when !== "boolean"
          ? children.map((children) => when[children.type.name] && children)
          : when && children}
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center h-[calc(100vh-96px)] overflow-auto p-4">
        <div className="max-w-2xl w-full flex flex-col items-center">
          <Header />
          <div className="w-full flex justify-around flex-wrap">
            <MultipleContainer />
            <SingleContainer />
            <Render when={true}>
              <Nav />
            </Render>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
