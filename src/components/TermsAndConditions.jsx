import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
    <div className="text-gray-600 leading-relaxed">{children}</div>
  </div>
);

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Welcome to Ksipra Guest House. These Terms and Conditions outline the rules and regulations for the use of our website and services.
          By accessing or using our website, you agree to comply with these terms. Please do not continue to use the site if you do not agree to any part of them.
        </p>

        <Section title="License">
          <p>
            Unless otherwise stated, Ksipra Guest House and/or its licensors own the intellectual property rights for all material on this website.
            You may access our site for your personal use, subject to the restrictions set forth in these terms and conditions.
          </p>
        </Section>

        <Section title="User Comments">
          <p>
            Visitors may post reviews or comments. Ksipra Guest House does not pre-screen or endorse comments before they appear on the website.
            The views expressed in comments belong solely to the individual and do not reflect our views or values.
          </p>
        </Section>

        <Section title="Hyperlinking to Our Content">
          <p>
            Government agencies, search engines, news organizations, and online directories may link to our website without prior written approval.
            Other organizations, such as NGOs or community groups, may link to our homepage upon receiving permission.
          </p>
        </Section>

        <Section title="iFrames">
          <p>
            You may not create frames around our webpages or use techniques that alter the visual presentation or appearance of our site without express written permission.
          </p>
        </Section>

        <Section title="Content Liability">
          <p>
            We are not responsible for any content that appears on websites that link to or from our website. You agree to protect and defend us against all claims arising on your site.
            No link(s) should appear on any site that may be interpreted as defamatory, obscene, or criminal, or which infringes any third-party rights.
          </p>
        </Section>

        <Section title="Reservation of Rights">
          <p>
            We reserve the right to request that you remove all links or any particular link to our website. By continuing to link to our website, you agree to be bound by these terms and future updates.
          </p>
        </Section>

        <Section title="Removal of Links">
          <p>
            If you find any link on our website that is offensive or inappropriate, you may contact us. While we will consider requests to remove links, we are not obligated to do so or to respond directly.
          </p>
        </Section>

        <Section title="Disclaimer">
          <p className="mb-2">
            To the maximum extent permitted by law, we exclude all warranties and representations relating to our website and the use of our services.
            Nothing in this disclaimer will:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Limit or exclude liability for death or personal injury</li>
            <li>Limit or exclude liability for fraud or fraudulent misrepresentation</li>
            <li>Limit any liabilities in any way not permitted under applicable law</li>
            <li>Exclude any liabilities that may not be excluded under applicable law</li>
          </ul>
        </Section>

        <Section title="Contact Us">
          <p>
            Have questions or need assistance? <br /> Reach out to us at{' '}
            <a href="mailto:ksipraguesthouse@gmail.com" className="text-blue-600 underline">
              ksipraguesthouse@gmail.com
            </a>{' '}
            <br /> or call <span className="font-medium">+91 8878878086</span>.
          </p>
        </Section>
      </div>
    </div>

  );
};

export default TermsAndConditions;
