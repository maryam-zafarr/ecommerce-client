import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3001/success",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      history.push("/success");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe} className="btn btn-warning mt-4">
        Submit
      </button>
    </form>
  );
};

export default Payment;
