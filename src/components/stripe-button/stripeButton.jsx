import React from "react";
import StripeCheckout from "react-stripe-checkout";


const publishableKey =
  "pk_test_51IeCShSAN2UIjfHbMsDx17Hd6aiHSDLLqrSkXcTppvtaWTqia5QpoEcmTmdh98ZYSJZ98Z1PujxByeRzyn9GMKPR00KqJZ8oDp";
const onToken = (token) => {
  console.log(token);
  alert("Payment Succesful!");
};

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
