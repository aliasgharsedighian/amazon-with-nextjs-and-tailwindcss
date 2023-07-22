import CalculatePage from "../CalculatePage/CalculatePage";
import MomentaryPrice from "../MomentaryPrice/MomentaryPrice";
import "./Home.css";

function Home() {
  return (
    <section className="home-bg-container">
      <div className="home-bg">
        <img
          alt=""
          className="h-[730px] sm:h-[850px]  w-[100%] object-cover"
          src="./images/home/bg-home.webp"
        />
        <div className="absolute  left-[10%]">
          <CalculatePage />
        </div>
        <div className="absolute max-w-6xl bottom-[-250px] md:bottom-[-300px] lg:bottom-[-280px] xl:bottom-[-230px]">
          <MomentaryPrice />
        </div>
      </div>
    </section>
  );
}

export default Home;
