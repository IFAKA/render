import { useState } from "react";
import {
  Footer,
  Header,
  MultipleContainer,
  Nav,
  Navbar,
  SingleContainer,
} from "./components";

function App() {
  const Wrapper = ({ children }: { children: JSX.Element }) => (
    <div>{children}</div>
  );

  const [condition, setCondition] = useState({
    SingleContainer: true,
    Wrapper: true,
  });

  const Render = ({ children, when }: any) => {
    console.log(children);
    return (
      <>{children.map((children: any) => when[children.key] && children)}</>
    );
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center h-[calc(100vh-96px)] overflow-auto p-4">
        <div className="max-w-2xl w-full flex flex-col items-center">
          <Header />
          <div className="w-full flex justify-around flex-wrap">
            {/* <MultipleContainer />
            <SingleContainer /> */}
            <Render when={condition}>
              <SingleContainer key={SingleContainer.name} />
              <Wrapper key={Wrapper.name}>
                <div>Hola</div>
              </Wrapper>
            </Render>
            <button
              onClick={() =>
                setCondition((p) => ({
                  ...p,
                  SingleContainer: !p.SingleContainer,
                }))
              }
            >
              Click
            </button>
            <button
              onClick={() =>
                setCondition((p) => ({
                  ...p,
                  Wrapper: !p.Wrapper,
                }))
              }
            >
              Click
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
