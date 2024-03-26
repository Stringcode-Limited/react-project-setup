import "./Buyusdt.css"
import left from "../../../../assets/images/left.png"
import OrderCard from "../../../../components/OrderCard/OrderCard";
import figure from "../../../../assets/images/figure.png"
import fiat from "../../../../assets/images/fiat.png"
import pays from "../../../../assets/images/pays.png"
import Buyudstbtn from "./Buyudstbtn";
import timer from "../../../../assets/images/timer.png"





function Buyusdt() {
  return (
    <div className='usdt-info'>
        <div className="jr-usdt">
            <div className="middle-section">
             <div className="left">
            <div className="dt-icon">
             <img src={left} alt="" />
             </div>
             <div className="dt">
             <h3>Buy USDT</h3>
             </div>
             </div>
            </div>
            <div className="hero-frame">
                <div className="figure-frame">
                    <div className="inner-container">
                        <div className="fig-bold">
                            <div className="wrapps">
                            <div className="fig-amount">
                                <img src={figure} alt="" />
                            </div>
                            <div className="ud-label">
                                <img src={fiat} alt="" />
                            </div>
                            </div>
                            <div className="entering-filed">
                            <div className="input-field">
                              <input type="text" placeholder="# Enter Amount" />
                            </div>
                            <div className="amount">
                                <p className="figs">Range #100,000.00 - #367,200.00</p>
                            </div>
                            <div className="pays">
                                <div className="paying">
                                <p className="pying">You will pay</p>
                                <p className="pying">-- NGN</p>
                                </div>
                                <div className="paying">
                                <p className="pying">You will pay</p>
                                <p className="pying">-- USDT</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="btn">
                        <Buyudstbtn />
                    </div>
            </div>
                <div className="details">
                        <div className="det">
                            <h3>Ad Details</h3>
                            </div>
                        <div className="comments">
                            <p className="comm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="timer">
                            <div className="time"><img src={timer} alt="" /></div>
                            <p className="com">10 mins</p>
                        </div>
                </div>
           </div>
    </div>
    
  );
}

export default Buyusdt;
