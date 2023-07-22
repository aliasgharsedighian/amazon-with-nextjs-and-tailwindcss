import React, { useEffect, useState } from "react";
import "./CalculatePage.css";

function CalculatePage() {
  const [tether, setTether] = useState("");
  const [price, setPrice] = useState("");
  const [calculatePrice, setCalculatePrice] = useState(null);
  const [calculateTether, setCalculateTether] = useState(null);

  function calculatePriceFunc() {
    const resTether = (tether * 46.8).toLocaleString();
    setCalculatePrice(resTether);
  }

  function calculateTetherFunc() {
    const resPrice = (price / 46.8).toLocaleString();
    setCalculateTether(resPrice);
  }

  const setNumberToPriceValue = () => {
    if (tether) {
      return calculatePrice.toLocaleString();
    }
    if (!tether) {
      return price;
    }
  };

  const setNumberToTetherValue = () => {
    if (price) {
      return calculateTether.toLocaleString();
    }
    if (!price) {
      return tether;
    }
  };

  const handleChangePrice = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setPrice(e.target.value);
    }
  };

  const handleChangeTether = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setTether(e.target.value);
    }
  };

  useEffect(() => {
    calculateTetherFunc();
    calculatePriceFunc();
  }, [tether, price]);

  return (
    <div className="calculate-row-container">
      <div className="title-home-container">
        <h2 className="">رمزارز (( تتر ))</h2>
        <h2 className="">یک راه انتقال سریع و مطمئن</h2>
      </div>
      <div className="calculate-container">
        <div className="mb-10 flex flex-col gap-7 justify-between">
          <div className="input-tether">
            <input
              onChange={handleChangeTether}
              type="text"
              placeholder="تعداد مورد نظر را وارد کنید"
              value={setNumberToTetherValue()}
            />
            <span>تتر</span>
          </div>
          <div className="input-price">
            <input
              onChange={handleChangePrice}
              type="text"
              placeholder="مبلغ مورد نظر را وارد کنید"
              value={setNumberToPriceValue()}
            />
            <span>تومان</span>
          </div>
        </div>
        <span className="text-gray-400 text-xs flex justify-end">
          مقدار دقیق دریافتی با توجه به نرخ لحظه ای تتر محاسبه می شود.
        </span>
        <div className="sell-buy-btn">
          <button className="buy-tether-btn">خرید تتر</button>
          <button className="sell-tether-btn">فروش تتر</button>
        </div>
      </div>
    </div>
  );
}

export default CalculatePage;
