import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    // Update the giftCard state to reflect that the coupon has been used.
    // The functional form of setGiftCard ensures we work with the latest state (prevState).
    /* Using ...prevState in a new object will copy all the properties into the new object.
       If additional properties are specified after ...prevState, 
       they will overwrite the corresponding properties from prevState.*/
    /* prevState is a name that you give to the argument passed to seState callback fct. 
       What it holds is the value of state before the setState was triggered by React.  
   */
    setGiftCard(prevState => {
      return {
        ...prevState, // Immutability principle respected: Leaves the original state untouched by creating a new object. 
        text: "Your coupon has been used.", // Update the displayed message.
        valid: false, // Mark the gift card as no longer valid.
        instructions: "Please visit our restaurant to renew your gift card." // Provide renewal instructions.
      }
    }) 
  }

  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}
