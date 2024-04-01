import React from 'react';
import "./make.css" 
import left from "../../../../assets/images/left.png"
import doe from "../../../../assets/images/doe.png"
import badge from "../../../../assets/images/badge.png"
import right from "../../../../assets/images/right.png"
import interval from "../../../../assets/images/interval.png"
import esc2 from "../../../../assets/images/esc2.png"
import Button from '../../../../components/Button/Button';
import ordernumber from "../../../../assets/images/ordernumber.png"
import curv from "../../../../assets/images/curv.png"
import help2 from "../../../../assets/images/help2.png"
import clock from "../../../../assets/images/clock.png"
import Chat from '../Chat/Chat';



function MakePayment() {
  return (
    <div className='make-payment'>
       <div className="order1">
          <div className="order-caption">
            <div className="arrow">
              <div className="rights">
              <img src={left} alt="" />
              </div>
              <div className="ders">
              <h2>Make Payment</h2>
              </div>
            </div>
           
          </div>
            <div className="customer-info">
            <div className="jhn-d">
                         <div className="complete">
                        
                        <div className="nam-wrapper">
                        <div className="doe-wrapper">
                        <img src={doe} alt="" />
                        </div>
                          <div className="wraps">
                            <div className="name-wrapper">
                            <h4 className="jh">JohnDoe</h4>
                            <div className="badge">
                                <img className="dge" src={badge} alt="" />
                                </div>
                            </div>
                            <div className="at-name">
                                <p className="doe">@Doemoney</p>
                            </div>
                            </div>
                            <div className="right-arrow">
                              <img src={right} alt="" />
                            </div>
                           </div>
                          </div>
                        
                        <div className="make-pay">
                            <div className="interval">
                              <img src={interval} alt="" />
                            </div>
                            <div className="esc">
                               <img src={esc2} alt="" />
                            </div>
                        </div>
                        <div className="fiat-amount">
                          <div className="inner-fiat">
                            <div className="fiat1">
                              <p className='fit'>Fiat amount</p>
                              <p className='fit'>#5,000.00</p>
                            </div>
                            <div className="fiat1">
                              <p className='fit'>Account name</p>
                              <p className='fit'>JACK DOE</p>
                            </div>
                            <div className="fiat1">
                              <p className='fit'>Account number</p>
                              <p className='fit'>0123456789 <img src={ordernumber} alt="" /></p>
                            </div>
                            <div className="fiat1">
                              <p className='fit'>Bank name</p>
                              <p className='fit'>Access Bank <img src={ordernumber} alt="" /></p>
                            </div>
                            <div className="fiat1">
                              <p className='fit'>Ref number</p>
                              <p className='fit'>203875876455390938764 <img src={ordernumber} alt="" /></p>
                            </div>
                          </div>
                        </div>
                        <div className="reviews">
                        <div className="review-caption">
                            <h3 className="rev">Reviews & ratings</h3>
                        </div>
                        <div className="write-ups">
                            <p className="rev-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorin reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                       <div className="proceed-topay">
                        <Button  type='large' text='Mark as paid'/>
                        <Button  type='large' text="Help" color='grey'/>
                       </div>
                       <div className="help"><img src={help2} alt="" /></div>
                    </div>
            </div>
         </div>
         <div className="chats">
          <div className="chat-pertition">
            <Chat time='10:00'/>
            </div>
           
         </div>
    </div>
  );
}

export default MakePayment;
