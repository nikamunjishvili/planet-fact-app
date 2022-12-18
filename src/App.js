import Header from "./components/Header";
import Facts from "./components/Facts";
import MobileNav from "./components/MobileNav";
import MobileFactBtns from "./components/MobileFactBtns";

import { useGlobalContext } from "./context";

function App() {
  const { toggleMenu } = useGlobalContext();
  return (
    <div>
      <Header />
      <div className="underline"></div>

      {toggleMenu ? (
        <>
          <MobileNav />
        </>
      ) : (
        <>
          <MobileFactBtns />
          <div className="underline mobile"></div>
          <Facts />
        </>
      )}
    </div>
  );
}

export default App;
