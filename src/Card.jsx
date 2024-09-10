import React from 'react';
import './PricingCard.css'; // Import the CSS file

// Sample data for the pricing cards
const plans = [
  {
    name: 'Free',
    price: '$0',
    features: [
      'Single User',
      '50GB Storage',
      'Some Points',
      'Community Access'
    ]
  },
  {
    name: 'Plus',
    price: '$9',
    features: [
      'Multi User',
      '100GB Storage',
      'More Points',
      'Community Access',
      'Unlimited Private Project',
      'Dedicated Phone Support',
      'Free Subdomain'
    ]
  },
  {
    name: 'Pro',
    price: '$49',
    features: [
      'Unlimited Users',
      '500GB Storage',
      'Priority Support',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'FreeSubdomain',
      'Monthly Status Reports'
    ]
  }
];

const PricingCard = ({ plan }) => (
  <div className="card">
    <h2>{plan.name}</h2>
    <p className="price">{plan.price} per month</p>
    <ul>
      {plan.features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button className="button">Choose {plan.name}</button>
  </div>
);

const PricingCards = () => (
  <div className="container">
    {plans.map((plan, index) => (
      <PricingCard key={index} plan={plan} />
    ))}
  </div>
);

export default PricingCards;
