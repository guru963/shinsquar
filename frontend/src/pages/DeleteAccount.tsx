import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const DeleteAccount: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-background text-on-surface font-body-md pt-24 pb-16 px-margin-mobile md:px-margin-desktop">
      <SEO 
        title="Delete Account | Locall" 
        description="Process for requesting deletion of your Locall Partner account."
      />
      <div className="max-w-4xl mx-auto bg-surface-container-lowest p-8 md:p-12 rounded-3xl shadow-sm border border-outline-variant/30">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2" style={{ fontFamily: "var(--font-display)" }}>Delete Your Locall Partner Account</h1>
        
        <div className="flex flex-col sm:flex-row sm:gap-6 mt-6 mb-10 text-sm font-medium text-on-surface-variant">
          <p><strong>Last Updated:</strong> 15 September 2026</p>
        </div>

        <div className="prose prose-on-surface max-w-none space-y-6">
          <p>
            Locall Partner is operated by <strong>Localstack Market Private Limited</strong> under the brand name <strong>Locall</strong>.
          </p>
          <p>
            If you are a partner/vendor using the <strong>Locall Partner</strong> application, you can request deletion of 
            your account and associated personal data by following the process below.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>How to Request Account Deletion</h2>
          <p>To request deletion of your Locall Partner account:</p>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>Send an email to <strong><a href="mailto:contact@locall.co.in" className="text-primary hover:underline">contact@locall.co.in</a></strong></li>
            <li>Use the subject line: <strong>Account Deletion Request &ndash; Locall Partner</strong></li>
            <li>Include the following information:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your registered name</li>
                <li>Registered mobile number or email address</li>
                <li>Business/shop name, if applicable</li>
                <li>A brief statement requesting deletion of your Locall Partner account</li>
              </ul>
            </li>
          </ol>
          <p>
            We may request additional information to verify that the deletion request is being made by 
            the account holder or an authorized person.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>What Will Be Deleted</h2>
          <p>
            After verifying your request, we will delete or anonymize, as applicable, data associated with 
            your account, including:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Your Locall Partner account/profile information</li>
            <li>Personal contact information</li>
            <li>Business profile information, where applicable</li>
            <li>Uploaded photos and other user-submitted content</li>
            <li>Documents uploaded through the application, where deletion is legally and operationally permitted</li>
            <li>Other personal data associated with your account that is not required to be retained</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>Data That May Be Retained</h2>
          <p>
            Certain information may need to be retained for a limited period where required or permitted 
            by applicable law, regulatory requirements, fraud prevention, security, dispute resolution, 
            accounting, taxation, or legitimate business purposes.
          </p>
          <p>
            Where data is required to be retained, it will be retained only for the applicable period and 
            handled in accordance with our privacy practices.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>Request Deletion of Specific Data Without Deleting Your Account</h2>
          <p>
            You may also request deletion of specific personal data without necessarily deleting your 
            entire Locall Partner account.
          </p>
          <p>
            For example, you may request deletion of certain uploaded documents, images, or other 
            personal information, subject to applicable legal and operational requirements.
          </p>
          <p>
            To make such a request, email <strong><a href="mailto:contact@locall.co.in" className="text-primary hover:underline">contact@locall.co.in</a></strong> with the subject:<br/>
            <strong>Data Deletion Request &ndash; Locall Partner</strong>
          </p>
          <p>Please specify the data you want deleted.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>Processing of Deletion Requests</h2>
          <p>We will review and verify your request before taking action.</p>
          <p>
            Once the request is verified, we will process the deletion in accordance with our applicable 
            privacy practices and legal obligations.
          </p>
          <p>
            Some information may remain temporarily in backups or security logs and may be deleted or 
            overwritten in accordance with our retention procedures.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>Contact Us</h2>
          <div className="bg-surface-container-low p-6 rounded-xl mt-4 space-y-2">
            <p><strong>Company:</strong><br/>Localstack Market Private Limited</p>
            <p><strong>Brand:</strong><br/>Locall</p>
            <p><strong>Website:</strong><br/><a href="https://locall.co.in" className="text-primary hover:underline">https://locall.co.in</a></p>
            <p><strong>Email:</strong><br/><a href="mailto:contact@locall.co.in" className="text-primary hover:underline">contact@locall.co.in</a></p>
            <p><strong>Privacy / Grievance Contact:</strong><br/>Jayant Ashok Dhote</p>
            <p><strong>Phone:</strong><br/>+91-75873-15025</p>
            <p><strong>Registered Office:</strong><br/>Shankar Nagar, Durg, Chhattisgarh &ndash; 491001, India</p>
          </div>
          <div className="mt-6 p-4 border border-outline-variant rounded-xl bg-surface-container-lowest">
            <p className="font-semibold mb-1">For account deletion requests, please email:</p>
            <p><a href="mailto:contact@locall.co.in" className="text-primary hover:underline font-medium">contact@locall.co.in</a></p>
            <p className="mt-2 text-sm text-on-surface-variant"><strong>Subject:</strong> Account Deletion Request &ndash; Locall Partner</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DeleteAccount;
