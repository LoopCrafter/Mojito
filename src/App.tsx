import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="h-[300vh]">
      <Navbar />
      <div className="flex-center h-[100vh]">
        <h1 className="text-[150px]">HAMED</h1>
      </div>
    </main>
  );
};

export default App;
