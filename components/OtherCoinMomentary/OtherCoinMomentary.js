import { useEffect, useState } from "react";
import { MomentaryDataJsx } from "./MomentaryData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./OtherCoinMomentary.css";

function OtherCoinMomentary() {
  const [momentaryData, setMomentaryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(() => {
    if (window.screenX < 576) {
      let x = Math.floor(MomentaryDataJsx.length / 4);
      return x;
    } else if (576 < window.screenX < 768) {
      let x = Math.floor(MomentaryDataJsx.length / 2);
      return x;
    } else if (768 < window.screenX < 950) {
      let x = Math.floor(MomentaryDataJsx.length / 3);
      return x;
    } else if (950 < window.screenX) {
      let x = Math.floor(MomentaryDataJsx.length / 4);
      return x;
    }
  });

  useEffect(() => {
    setMomentaryData(MomentaryDataJsx);
    console.log(pageNumber);
  }, []);

  // let coin = document.querySelector("#coin");
  // let n = 0;
  // let i;

  // function disNo() {
  //   for (i = 0; i < 4; i++) {
  //     coin[i + 3].style.display = "none";
  //   }
  // }

  // setInterval(function () {
  //   n++;
  //   if (n > 2 - 1) {
  //     n = 0;
  //   }
  //   disNo();
  //   coin[n].style.display = "block";
  // }, 3000);

  // setInterval(function () {
  //   setFirst(!first);
  // }, 4000);

  const customThumbs = () => {
    return [];
  };

  return (
    <div>
      <Carousel
        // infiniteLoop
        autoPlay
        interval={40000}
        showIndicators={false}
        // showStatus={false}
        transitionTime={850}
        showThumbs={false}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
          {momentaryData.slice(0, 4).map((coinData) => {
            return (
              <div
                id="coin"
                className="coin-detail-container mx-auto  gap-6 px-2  py-2"
                key={coinData.id}
              >
                <div className="flex justify-center items-center">
                  <img className="coin-detail-img" src={coinData.img} alt="" />
                </div>
                <div className="coin-icon-name">
                  <h5>{coinData.PersianName}</h5>
                  <h4>{coinData.englishName}</h4>
                </div>
                <div className="coin-tether-price">
                  <span className="text-2sm">
                    {coinData.tetherPrice.toLocaleString()} تتر
                  </span>
                  <span className="text-xs opacity-70 font-semibold">
                    {coinData.tomanPrice.toLocaleString()} تومان
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
          {momentaryData.slice(4, 8).map((coinData) => {
            return (
              <div
                id="coin"
                className="coin-detail-container mx-auto  gap-6 px-2  py-2"
                key={coinData.id}
              >
                <div className="flex justify-center items-center">
                  <img className="coin-detail-img" src={coinData.img} alt="" />
                </div>
                <div className="coin-icon-name">
                  <h5>{coinData.PersianName}</h5>
                  <h4>{coinData.englishName}</h4>
                </div>
                <div className="coin-tether-price">
                  <span className="text-2sm">
                    {coinData.tetherPrice.toLocaleString()} تتر
                  </span>
                  <span className="text-xs opacity-70 font-semibold">
                    {coinData.tomanPrice.toLocaleString()} تومان
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Carousel>
    </div>
  );
}

export default OtherCoinMomentary;
