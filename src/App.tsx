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

  const [condition1, setCondition1] = useState(true);
  const [condition2, setCondition2] = useState(true);
  const conditions = [condition1, condition2];

  const Render = ({ children, when }: any) => {
    return (
      <>{children.map((children: any, i: number) => when[i] && children)}</>
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
            <Render when={conditions}>
              <SingleContainer key={SingleContainer.name} />
              <Wrapper key={Wrapper.name}>
                <div>Hola</div>
              </Wrapper>
            </Render>
            <button onClick={() => setCondition1((p) => !p)}>
              SingleContainer
            </button>
            <button onClick={() => setCondition2((p) => !p)}>Wrapper</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
