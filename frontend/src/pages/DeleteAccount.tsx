import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Store, Smartphone } from 'lucide-react';
import SEO from '../components/SEO';

interface DeleteAccountProps {
  defaultTab?: 'partner' | 'locall-app';
}

const DeleteAccount: React.FC<DeleteAccountProps> = ({ defaultTab }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramTab = searchParams.get('tab');

  const getInitialTab = (): 'partner' | 'locall-app' => {
    if (defaultTab) return defaultTab;
    if (paramTab === 'locall-app' || paramTab === 'app') return 'locall-app';
    return 'partner';
  };

  const [activeTab, setActiveTab] = useState<'partner' | 'locall-app'>(getInitialTab);

  useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab);
    } else if (paramTab === 'locall-app' || paramTab === 'app') {
      setActiveTab('locall-app');
    } else if (paramTab === 'partner') {
      setActiveTab('partner');
    }
  }, [defaultTab, paramTab]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabChange = (tab: 'partner' | 'locall-app') => {
    setActiveTab(tab);
    if (tab === 'locall-app') {
      setSearchParams({ tab: 'locall-app' });
    } else {
      setSearchParams({});
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-background text-on-surface font-body-md pt-24 pb-16 px-margin-mobile md:px-margin-desktop">
      <SEO 
        title={activeTab === 'locall-app' ? "Delete Locall User Account | Locall" : "Delete Account | Locall"} 
        description={
          activeTab === 'locall-app'
            ? "Process and instructions for requesting deletion of your Locall user account."
            : "Process for requesting deletion of your Locall Partner account."
        }
      />
      <div className="max-w-4xl mx-auto bg-surface-container-lowest p-8 md:p-12 rounded-3xl shadow-sm border border-outline-variant/30">
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-outline-variant/60 mb-8 gap-2 sm:gap-4 overflow-x-auto">
          <button
            type="button"
            onClick={() => handleTabChange('partner')}
            className={`pb-3.5 px-4 sm:px-6 font-semibold text-sm sm:text-base transition-all relative flex items-center gap-2 cursor-pointer border-b-2 -mb-[2px] ${
              activeTab === 'partner'
                ? 'border-primary text-primary font-bold'
                : 'border-transparent text-on-surface-variant hover:text-on-surface hover:border-outline-variant'
            }`}
            aria-selected={activeTab === 'partner'}
            role="tab"
          >
            <Store className="w-4 h-4" />
            <span>Locall Partner</span>
          </button>
          <button
            type="button"
            onClick={() => handleTabChange('locall-app')}
            className={`pb-3.5 px-4 sm:px-6 font-semibold text-sm sm:text-base transition-all relative flex items-center gap-2 cursor-pointer border-b-2 -mb-[2px] ${
              activeTab === 'locall-app'
                ? 'border-primary text-primary font-bold'
                : 'border-transparent text-on-surface-variant hover:text-on-surface hover:border-outline-variant'
            }`}
            aria-selected={activeTab === 'locall-app'}
            role="tab"
          >
            <Smartphone className="w-4 h-4" />
            <span>Locall App</span>
          </button>
        </div>

        {/* Tab 1: Locall Partner Account Deletion */}
        {activeTab === 'partner' && (
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Delete Your Locall Partner Account
            </h1>
            
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
        )}

        {/* Tab 2: Locall App Account Deletion */}
        {activeTab === 'locall-app' && (
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Locall — Account Deletion
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-on-surface mt-4 mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Delete Your Locall User Account
            </h2>

            <div className="prose prose-on-surface max-w-none space-y-6">
              <p>
                Locall respects your privacy and provides users with a way to request deletion of their 
                accounts and associated personal information.
              </p>
              <p>
                If you no longer wish to use the Locall user app, you can request account deletion by 
                following the instructions below.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>1. How to Request Account Deletion</h2>
              <p>To request deletion of your Locall user account:</p>
              <ol className="list-decimal pl-6 space-y-2 mb-4">
                <li>Send an email to <a href="mailto:contact@locall.co.in" className="text-primary hover:underline">contact@locall.co.in</a>.</li>
                <li>Use the subject line Locall User Account Deletion.</li>
                <li>Include the mobile number registered with your Locall account, including the country code.</li>
                <li>Clearly state that you want your Locall user account deleted.</li>
              </ol>
              <p>
                If you have a registered email address associated with your account, please send your request from that address where possible.
              </p>
              <p>
                Do not include your password or one-time password (OTP) in your email.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>2. Verification of Your Request</h2>
              <p>
                To protect your account and prevent unauthorised deletion, we may ask you to verify your identity or provide additional information reasonably necessary to locate your account.
              </p>
              <p>
                Once your account ownership has been verified, we will process your request within the timeframe required by applicable law.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>3. What Information Will Be Deleted?</h2>
              <p>
                Subject to applicable legal requirements and legitimate retention needs, account deletion may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Your Locall user account.</li>
                <li>Your profile information associated with the account.</li>
                <li>Personal information associated with your account that Locall no longer needs to retain.</li>
              </ul>
              <p>
                Where applicable, personal information that is no longer required will be deleted or anonymised.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>4. Information That May Be Retained</h2>
              <p>
                Certain information may need to be retained for a limited period where required by law or necessary for legitimate purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Compliance with legal and regulatory obligations.</li>
                <li>Prevention and investigation of fraud or misuse.</li>
                <li>Resolution of disputes and enforcement of agreements.</li>
                <li>Maintenance of records required by law.</li>
              </ul>
              <p>
                Any information retained for these purposes will be handled in accordance with applicable law and Locall's{' '}
                <Link to="/privacy-policy?tab=locall-app" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>5. Information Shared With Shops or Third Parties</h2>
              <p>
                If you have contacted a shop, household worker, service provider, or third-party service through Locall, deleting your Locall account may not automatically delete information that the independent recipient already holds.
              </p>
              <p>
                You may need to contact that business, service provider, or third party directly to request deletion of information held by them.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>6. Need Help?</h2>
              <p>
                If you cannot access your registered email address or need assistance with your account deletion request, contact us at:
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:contact@locall.co.in" className="text-primary hover:underline">contact@locall.co.in</a>
              </p>
              <p>
                Please include your registered mobile number so we can help locate your account. We may request additional information to verify account ownership.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>7. Contact Us</h2>
              <div className="bg-surface-container-low p-6 rounded-xl mt-4 space-y-2">
                <p><strong>Localstack Market Private Limited</strong></p>
                <p>Shankar Nagar, Durg, Chhattisgarh – 491001, India</p>
                <p><strong>Email:</strong> <a href="mailto:contact@locall.co.in" className="text-primary hover:underline">contact@locall.co.in</a></p>
                <p><strong>Website:</strong> <a href="https://www.locall.co.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.locall.co.in/</a></p>
              </div>
              <p className="mt-4">
                For more information about how Locall handles personal information, please read our{' '}
                <Link to="/privacy-policy?tab=locall-app" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        )}

      </div>
    </main>
  );
};

export default DeleteAccount;
