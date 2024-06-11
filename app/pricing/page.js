'use client'
import { useState, useEffect } from 'react';
import { RiCheckboxCircleLine } from "react-icons/ri";

const monthlyPlans = [
  {
    name: 'Free',
    // title: 'Limited version',
    img: '/assets/free-price.avif',
    price: '$0',
    period: 'month',
    features: [
      'Limited version',
      'Max Candidates: 15',
      'CV Parser Agent',
      'Individual Candidate Upload',
      'Candidate Search Agent',
      'Job Post Creator Agent'
    ]
  },
  {
    name: 'Basic',
    img: '/assets/basic-price.avif',
    price: '$39',
    period: 'month',
    features: [
      'Unlimited candidates',
      'CV Parser Agent',
      'Mass Candidate Upload: Up To 10',
      'Upload from Excel Database (Unlimited simultaneous)',
      'Candidate Search Agent',
      'Job Post Creator Agent',
      'Reporting Agent: AI Reporting',
      'ATS Access',
      '5 Simultaneous Hiring Processes',
      'Unlimited Candidates per Process',
      'Chrome Extension',
      'Communicate with Candidates via Email',
      'Marketplace Access'
    ]
  },
  {
    name: 'Full',
    img: '/assets/full-price.avif',
    price: '$69',
    period: 'month',
    features: [
      'Unlimited Candidates',
      'CV Parser Agent',
      'Mass Candidate Upload: Unlimited',
      'Upload from Excel Database (Unlimited simultaneous)',
      'Candidate Search Agent',
      'Job Post Creator Agent',
      'Reporting Agent: AI Reporting',
      'Cultural Fit Agent',
      'ATS Access',
      'Unlimited Hiring Processes',
      'Unlimited Candidates per Process',
      'Chrome Extension',
      'Communicate with Candidates via Email',
      'Communicate with Candidates via Whatsapp',
      'Marketplace Priority Access'
    ]
  },
  {
    name: 'Enterprise',
    img: '/assets/enterprise.avif',
    period: '',
    features: [
      'Unlimited Candidates',
      'Custom features adapted to your needs'
    ]
  }
];

const yearlyPlans = [
  {
    name: 'Free',
    img: '/assets/free-price.avif',
    price: '$0',
    period: 'year',
    features: [
      'Limited version',
      'Max Candidates: 15',
      'CV Parser Agent',
      'Individual Candidate Upload',
      'Candidate Search Agent',
      'Job Post Creator Agent'
    ]
  },
  {
    name: 'Basic',
    img: '/assets/basic-price.avif',
    price: '$390',
    period: 'year',
    features: [
      'Unlimited candidates',
      'CV Parser Agent',
      'Mass Candidate Upload: Up To 10',
      'Upload from Excel Database (Unlimited simultaneous)',
      'Candidate Search Agent',
      'Job Post Creator Agent',
      'Reporting Agent: AI Reporting',
      'ATS Access',
      '5 Simultaneous Hiring Processes',
      'Unlimited Candidates per Process',
      'Chrome Extension',
      'Communicate with Candidates via Email',
      'Marketplace Access'
    ]
  },
  {
    name: 'Full',
    title: ' ',
    img: '/assets/full-price.avif',
    price: '$690',
    period: 'year',
    features: [
      'Unlimited Candidates',
      'CV Parser Agent',
      'Mass Candidate Upload: Unlimited',
      'Upload from Excel Database (Unlimited simultaneous)',
      'Candidate Search Agent',
      'Job Post Creator Agent',
      'Reporting Agent: AI Reporting',
      'Cultural Fit Agent',
      'ATS Access',
      'Unlimited Hiring Processes',
      'Unlimited Candidates per Process',
      'Chrome Extension',
      'Communicate with Candidates via Email',
      'Communicate with Candidates via Whatsapp',
      'Marketplace Priority Access'
    ]
  },
  {
    name: 'Enterprise',
    img: '/assets/enterprise.avif',
    // price: 'Contact us',
    period: '',
    features: [
      'Unlimited Candidates',
      'Custom features adapted to your needs'
    ]
  }
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const plans = billingCycle === 'monthly' ? monthlyPlans : yearlyPlans;

  return (
  <div className='w-full max-w-[1440px] mx-auto my-40  font-gilroy-medium'>
   
     <div className="flex flex-col items-center justify-center p-5 md:p-10">
      <div className="flex mb-10 bg-gray-200 p-1 rounded-lg border border-gray-400">
        <button className={`px-6 py-2 rounded ${billingCycle === 'monthly' ? 'bg-blue text-white' : 'bg-gray-200'}`} onClick={() => setBillingCycle('monthly')}>Monthly</button>
        <button className={`px-6 py-2 rounded ${billingCycle === 'yearly' ? 'bg-blue text-white' : 'bg-gray-200'}`} onClick={() => setBillingCycle('yearly')}>Yearly</button>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-start gap-20">
        {plans.map((plan) => (
          <div key={plan.name} className="">
            <div className="flex flex-col mb-4">
              <img src={plan.img} alt={`${plan.name} icon`} className="h-20 mb-4 w-20"/>
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-4xl font-bold flex items-center gap-1 mt-10">
                {plan.price} 
                {plan.name !== 'Enterprise' && (
                  <span className='w-1 text-xs text-gray-500 font-gilroy-regular flex leading-3'>per {plan.period}</span>
                )}
              </p>
            </div>
            <button className="bg-blue text-white px-4 py-2 rounded mb-4 w-[200px]">
              {plan.name === 'Enterprise' ? 'Contact us' : 'Subscribe'}
            </button>
            <p className='mb-1'>This includes:</p>
            <ul className="text-left">
              {plan.features.map((feature, index) => (
                <li key={index} className="mb-2 flex items-start gap-1"><RiCheckboxCircleLine className='rounded min-w-4 min-h-4 mt-1' />{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
 </div>
  );
}
