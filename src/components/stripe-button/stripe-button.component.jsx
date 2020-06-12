import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_spaYt8UUUKBWwVeDMgYxGdQX00yq4AZ4gh";
  const onToken = (token) => {
    console.log(token);
    alert("payment succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-commerce"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
