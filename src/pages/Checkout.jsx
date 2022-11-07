import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Payment from "../components/Order/Payment";
import Card from "../components/UI/Card";

const stripePromise = loadStripe(
  "pk_test_51LzQbRDbS1aURwwgVM6RaD0lgAah4PAXKeVH3vyNGwfuyMkkLsraq6jGBxVxAVobuhjPa41FkZ4xUdTyUujiJFEb00oCpBsg8y"
);

function Checkout() {
  const [secret, setSecret] = useState("");
  const totalAmount = useSelector((state) => state.cart.totalPrice) + 15;

  useEffect(() => {
    const makeRequest = async () => {
      const response = await fetch(
        "http://localhost:5000/api/checkout/payment",
        {
          method: "POST",
          body: JSON.stringify({
            amount: totalAmount,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setSecret(data);
      }
    };
    makeRequest();
  }, [totalAmount]);

  const options = {
    clientSecret: secret,
  };

  return (
    <Card>
      <h3>Your Total: $ {totalAmount}</h3>
      {secret && (
        <Elements stripe={stripePromise} options={options}>
          <Payment />
        </Elements>
      )}
    </Card>
  );
}

export default Checkout;
