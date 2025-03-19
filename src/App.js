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
    // The spread operator (...prevState) preserves existing properties while updating specific fields.
    setGiftCard(prevState => {
      return {
        ...prevState,
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
