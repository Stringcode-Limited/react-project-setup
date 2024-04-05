import "./OrderCreatedBody.css";
import left from "../../../../../assets/images/left.png";
import clock from "../../../../../assets/images/clock.svg";
import img from "../../../../../assets/JohnDoe.png";
import Button from "../../../../../components/Button/Button";
import ProfileDetails from "../../../../../components/ProfileDetails/ProfileDetails";
import PaymentCard from "../../../../../components/PaymentCard/PaymentCard";
import question from '../../../../../assets/images/question2.png';

const OrderCreatedBody = () => {
    return (
        <>
            <div className="orderCreatedBody">
                <div className="top">
                    <img src={left} />
                    <p className="orders">Order created</p>
                </div>
                <div className="orderWapper">
                    <ProfileDetails image={img} fullName="John Doe" name="Doemoney" display="show" />
                    <div className="box1">
                        <div className="text">
                            <img src={clock} />
                            <p>Make payment within</p>
                            <p className="time">10:00</p>
                        </div>

                    </div>
                    <div className="box2">

                        <p>This sellers crypto is now escrowed </p>
                        <img src={question}/>


                    </div>

                </div>

                <div className="center">


                    <div className="box3">
                        <PaymentCard />
                    </div>

                    <div className="box4">
                        <div className="title">Ad details</div>
                        <div className="details">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                    <div className="box5">
                        <Button text="Proceed to pay" type="large3" />
                        <Button text="Cancel order" type="large3" color="grey"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderCreatedBody
