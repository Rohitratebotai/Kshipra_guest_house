import React from 'react';

const CancellationRefundPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Cancellation and Refund Policy
        </h1>

        <p className="text-gray-700 mb-4 leading-relaxed">
          At Ksipra Guest House, we are dedicated to offering a smooth and transparent booking experience.
          This Cancellation and Refund Policy outlines the terms associated with cancellations and refunds.
          By making a reservation with us, you acknowledge and agree to these terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Cancellation Policy</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Guests may cancel their reservation by notifying us in advance. Cancellations made more than 48 hours
          prior to the check-in date are eligible for a full refund. For cancellations made within 48 hours of
          check-in, a one-night charge will be applicable.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Refund Policy</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Eligible refunds will be processed within 7–10 business days from the time the cancellation is confirmed.
          Refunds will be returned through the original payment method. Please note that booking platform or
          payment gateway fees are non-refundable.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Non-Refundable Reservations</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Some reservations may be classified as non-refundable. In such cases, no refund will be issued
          regardless of when the cancellation request is made. Please check the reservation terms carefully
          before confirming your booking.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Changes to Reservations</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          If you wish to make any changes to your reservation (such as modifying dates or number of guests),
          please contact us directly. All changes are subject to availability and may be subject to
          additional charges.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          For any questions or clarifications regarding our cancellation and refund policy, please contact us at{' '}
          <a
            href="mailto:ksipraguesthouse@gmail.com"
            className="text-blue-600 underline"
          >
            ksipraguesthouse@gmail.com
          </a>{' '}
          or call <span className="font-medium">+91 8878878086</span>.
        </p>
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;
