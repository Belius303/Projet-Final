import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';

import Review from './Review';

// Le paiement passait par Stripe puis Commerce.js, qui a fermé.
// En local, le paiement est simulé : aucune carte n'est demandée ni débitée.
const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const orderData = {
      line_items: checkoutToken.live.line_items,
      customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
      shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
      fulfillment: { shipping_method: shippingData.shippingOption },
      payment: { gateway: 'demo' },
    };

    onCaptureCheckout(checkoutToken.id, orderData);

    nextStep();
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Methode de Paiement</Typography>
      <form onSubmit={handleSubmit}>
        <Typography variant="body2" color="textSecondary">
          Version de démonstration : le paiement est simulé, aucune carte n&apos;est débitée.
        </Typography>
        <br /> <br />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined" onClick={backStep}>Retour</Button>
          <Button type="submit" variant="contained" color="primary">
            Payer {checkoutToken.live.subtotal.formatted_with_symbol}
          </Button>
        </div>
      </form>
    </>
  );
};

export default PaymentForm;
