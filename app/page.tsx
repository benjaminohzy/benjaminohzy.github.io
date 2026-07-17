import Nav from "./components/Nav";
import Bio from "./components/Bio";
import Innings from "./components/Innings";
import BattingCage from "./components/BattingCage";
import Coaching from "./components/Coaching";
import Dugout from "./components/Dugout";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Bio />
        <Innings />
        <BattingCage />
        <Coaching />
        <Dugout />
      </main>
      <Footer />
    </>
  );
}
