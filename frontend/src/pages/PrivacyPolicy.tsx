import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Store, Smartphone } from 'lucide-react';
import SEO from '../components/SEO';

interface PrivacyPolicyProps {
  defaultTab?: 'partner' | 'locall-app';
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ defaultTab }) => {
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
        title={activeTab === 'locall-app' ? "Locall App Privacy Policy | Locall" : "Privacy Policy | Locall"} 
        description={
          activeTab === 'locall-app' 
            ? "Privacy Policy for the Locall user mobile application operated by Localstack Market Private Limited."
            : "Privacy Policy for Locall Partner and locall.co.in"
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

        {/* Tab 1: Locall Partner Privacy Policy */}
        {activeTab === 'partner' && (
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Privacy Policy
            </h1>
            <p className="text-xl text-on-surface-variant mb-6">Locall Partner &amp; locall.co.in</p>
            
            <div className="flex flex-col sm:flex-row sm:gap-6 mb-10 text-sm font-medium text-on-surface-variant">
              <p><strong>Last Updated:</strong> 11 September 2026</p>
              <p><strong>Effective Date:</strong> 11 September 2026</p>
            </div>

            <div className="prose prose-on-surface max-w-none space-y-6">
              <p>
                Localstack Market Private Limited ("Locall", "we", "us", or "our") operates the <strong>Locall Partner</strong> mobile application
                and the website <strong>locall.co.in</strong>.
              </p>
              <p>
                Locall Partner is designed to enable local vendors, shopkeepers, service providers, household workers and other
                eligible partners to register with Locall, provide relevant business or professional information, manage their profile,
                submit documents, and access services and features offered through the Locall platform.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, store, protect, disclose and otherwise process information when
                you use the Locall Partner application, website and related services.
              </p>
              <p>
                By using Locall Partner or providing information to us, you acknowledge that you have read and understood this
                Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">A. Personal and Contact Information</h3>
              <p>When you register or use Locall Partner, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Full name</li>
                <li>Mobile phone number</li>
                <li>Email address</li>
                <li>Date of birth, where required for a particular verification or service</li>
                <li>Profile photograph, if provided</li>
                <li>Communication preferences</li>
                <li>Account credentials or authentication information</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">B. Business and Professional Information</h3>
              <p>For partner/vendor onboarding and profile creation, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Business/shop name</li>
                <li>Business category</li>
                <li>Nature of products or services offered</li>
                <li>Business address</li>
                <li>Business operating area</li>
                <li>Shop or workplace photographs</li>
                <li>Professional information</li>
                <li>Service information</li>
                <li>Business registration information</li>
                <li>GST-related information, where applicable</li>
                <li>Other information required for partner onboarding and verification</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">C. Identity and Verification Information</h3>
              <p>
                Where required for onboarding, compliance, verification or fraud prevention, you may be asked to provide certain
                identification or verification information.
              </p>
              <p>This may include:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>PAN information</li>
                <li>Aadhaar-related information or documents, where legally permitted and required</li>
                <li>Government-issued identification documents</li>
                <li>Business registration documents</li>
                <li>GST certificates</li>
                <li>Licences or permits</li>
                <li>Address proof</li>
                <li>Other documents voluntarily submitted for verification</li>
              </ul>
              <p>
                We use such information only for legitimate purposes such as onboarding, verification, compliance, fraud
                prevention, account management and providing requested services.
              </p>
              <p>Locall does not publicly display government identification numbers or other sensitive identification information.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">D. Location Information</h3>
              <p>
                Depending on the features you use and the permissions you grant, Locall Partner may collect approximate or
                precise location information.
              </p>
              <p>Location may be used for purposes such as:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Identifying the relevant service area</li>
                <li>Connecting partners with nearby customers</li>
                <li>Displaying location-relevant services or opportunities</li>
                <li>Confirming or managing a business/service location</li>
                <li>Improving location-based features</li>
                <li>Preventing misuse or fraudulent activity</li>
              </ul>
              <p>
                Locall will request location permission only where necessary for a feature that requires it.
              </p>
              <p>
                You can control location permissions through your device settings, although disabling location access may affect
                certain features of the application.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">E. Documents, Images and Files</h3>
              <p>
                If you choose to upload documents, photographs or other files through Locall Partner, we may collect and store
                those files.
              </p>
              <p>Examples may include:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Shop photographs</li>
                <li>Product/service photographs</li>
                <li>Business documents</li>
                <li>Registration certificates</li>
                <li>Identity/verification documents</li>
                <li>Address documents</li>
                <li>Other documents required during onboarding</li>
              </ul>
              <p>
                You should only submit documents that are requested by the application or required for the relevant service.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">F. Device and Technical Information</h3>
              <p>
                When you use the application, certain technical information may be automatically collected, depending on the
                technologies and services integrated into the app.
              </p>
              <p>This may include:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Device type</li>
                <li>Operating system and version</li>
                <li>Application version</li>
                <li>Device identifiers</li>
                <li>IP address</li>
                <li>Network information</li>
                <li>Crash information</li>
                <li>Log information</li>
                <li>Application performance information</li>
                <li>Security-related information</li>
              </ul>
              <p>
                This information may be used to maintain application security, diagnose technical problems, prevent abuse and
                improve application performance.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">G. Communications</h3>
              <p>
                If you contact Locall or communicate with us through the application, email, phone or other supported channels, we
                may retain information relating to those communications for customer support, dispute resolution, security and
                service improvement.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>2. How We Use Your Information</h2>
              <p>Locall may use collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Creating and managing your Locall Partner account.</li>
                <li>Verifying your identity, business or professional information.</li>
                <li>Completing partner/vendor onboarding.</li>
                <li>Reviewing submitted documents.</li>
                <li>Providing Locall services and features.</li>
                <li>Connecting eligible partners with relevant customers or opportunities.</li>
                <li>Managing your partner profile.</li>
                <li>Communicating with you regarding your account or Locall services.</li>
                <li>Sending important service, security and operational notifications.</li>
                <li>Processing or facilitating transactions where applicable.</li>
                <li>Detecting and preventing fraud, misuse and unauthorized activity.</li>
                <li>Maintaining platform security.</li>
                <li>Troubleshooting crashes and technical issues.</li>
                <li>Improving application functionality and user experience.</li>
                <li>Complying with applicable laws, regulations and lawful requests.</li>
                <li>Resolving disputes and enforcing our terms and policies.</li>
                <li>Conducting internal analytics and operational analysis.</li>
                <li>Protecting the rights, safety and security of Locall, our partners and users.</li>
              </ul>
              <p>We do not sell personal or sensitive personal information to third parties.</p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>3. How We Share Information</h2>
              <p>
                Locall may share information only where reasonably necessary for providing services, operating the platform,
                complying with law or protecting users and the platform.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">A. Service Providers</h3>
              <p>We may use trusted third-party service providers for services such as:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Cloud hosting</li>
                <li>Database infrastructure</li>
                <li>Authentication</li>
                <li>Application analytics</li>
                <li>Error monitoring</li>
                <li>Communication services</li>
                <li>Notifications</li>
                <li>Document storage</li>
                <li>Security</li>
                <li>Technical support</li>
              </ul>
              <p>
                These providers may process information on our behalf and are expected to handle information according to
                applicable contractual and legal requirements.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">B. Verification and Government Services</h3>
              <p>
                Where you request or authorize verification or where required for lawful onboarding and compliance, certain
                information may be transmitted to relevant verification providers, government platforms or authorized service
                providers.
              </p>
              <p>
                For example, where Locall integrates an approved identity, business or document verification service, information
                necessary for that verification may be shared with the relevant service.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">C. Legal and Regulatory Authorities</h3>
              <p>
                We may disclose information where required or permitted by applicable law, regulation, court order, governmental
                request or legal process.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">D. Business Protection</h3>
              <p>Information may be disclosed where reasonably necessary to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Detect fraud</li>
                <li>Prevent security threats</li>
                <li>Investigate misuse</li>
                <li>Protect Locall's rights</li>
                <li>Protect users or partners</li>
                <li>Enforce agreements and policies</li>
              </ul>
              <p>
                We do not permit third parties to use your personal information for purposes unrelated to the services they provide
                to Locall unless otherwise authorized or legally permitted.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>4. Data Security</h2>
              <p>
                We take reasonable technical and organizational measures to protect information against unauthorized access,
                loss, misuse, alteration or disclosure.
              </p>
              <p>Depending on the nature of the information and the systems involved, security measures may include:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Encryption during transmission</li>
                <li>Access controls</li>
                <li>Authentication mechanisms</li>
                <li>Restricted access to sensitive information</li>
                <li>Secure server infrastructure</li>
                <li>Monitoring and logging</li>
                <li>Security updates</li>
                <li>Backup and recovery measures</li>
              </ul>
              <p>However, no electronic transmission or storage system can be guaranteed to be completely secure.</p>
              <p>
                You are responsible for keeping your account credentials and authentication information confidential and should
                notify us if you believe your account has been accessed without authorization.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>5. Data Retention</h2>
              <p>
                We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy
                Policy, including:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Providing our services</li>
                <li>Maintaining your account</li>
                <li>Completing verification</li>
                <li>Meeting legal and regulatory requirements</li>
                <li>Resolving disputes</li>
                <li>Preventing fraud and misuse</li>
                <li>Enforcing agreements</li>
                <li>Maintaining security and business records</li>
              </ul>
              <p>
                When information is no longer required, we may delete, anonymize or securely dispose of it, subject to applicable
                legal, regulatory and legitimate business requirements.
              </p>
              <p>
                Certain information may need to be retained for a longer period where required by law or necessary for legitimate
                purposes such as fraud prevention, legal claims or regulatory compliance.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>6. Account Deletion and Data Deletion</h2>
              <p>You may request deletion of your Locall Partner account and associated personal information.</p>
              <p><strong>Email:</strong> <a href="mailto:contact@locall.co.in" className="text-primary hover:underline">contact@locall.co.in</a></p>
              <p>
                Please include your registered mobile number or email address and clearly state that you want to delete your
                Locall Partner account. For detailed instructions, visit our{' '}
                <Link to="/delete-account" className="text-primary hover:underline font-medium">Account Deletion page</Link>.
              </p>
              <p>
                Where applicable, you may also request deletion through an account deletion feature within the Locall Partner
                application.
              </p>
              <p>
                After receiving a valid deletion request, Locall will process the request and delete or anonymize information that is
                no longer required, subject to applicable legal, regulatory, security and legitimate business requirements.
              </p>
              <p>
                Certain information may be retained where retention is legally required or reasonably necessary for fraud
                prevention, dispute resolution, legal claims, regulatory compliance or other legitimate purposes.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>7. Your Choices and Rights</h2>
              <p>Depending on applicable law, you may have rights relating to your personal information, including the ability to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Access information associated with your account</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Withdraw consent where applicable</li>
                <li>Manage certain device permissions</li>
                <li>Request information about how your data is processed</li>
                <li>Raise a privacy-related complaint or grievance</li>
              </ul>
              <p>Some requests may be subject to verification and applicable legal limitations.</p>
              <p>You can contact us using the details provided in the Contact Us section below.</p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>8. Device Permissions</h2>
              <p>
                Locall Partner may request certain permissions when necessary for specific functionality. Depending on the
                features available in the application, these may include:
              </p>
              <h4 className="text-lg font-semibold mt-4 mb-2">Location</h4>
              <p>Used for location-based services and relevant partner functionality.</p>
              <h4 className="text-lg font-semibold mt-4 mb-2">Camera</h4>
              <p>Used when you choose to take photographs, scan information or upload documents/images.</p>
              <h4 className="text-lg font-semibold mt-4 mb-2">Photos/Files</h4>
              <p>Used when you choose to upload photographs, documents or other files.</p>
              <h4 className="text-lg font-semibold mt-4 mb-2">Notifications</h4>
              <p>Used to send important account, service, onboarding and operational notifications.</p>
              <p>Locall does not request permissions that are unrelated to the functionality being provided.</p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>9. Third-Party Services and SDKs</h2>
              <p>
                Locall Partner may use third-party technologies, SDKs and service providers to provide, maintain, secure and
                improve the application.
              </p>
              <p>These may include services for:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Authentication</li>
                <li>Cloud infrastructure</li>
                <li>Analytics</li>
                <li>Crash reporting</li>
                <li>Push notifications</li>
                <li>Maps/location services</li>
                <li>Document or identity verification</li>
                <li>Security</li>
              </ul>
              <p>
                Third-party services may process certain information according to their own privacy policies and applicable
                agreements.
              </p>
              <p>Locall will take reasonable steps to select service providers appropriate for the intended processing purposes.</p>
              <p>Our Google Play Data Safety disclosures will be updated when our data practices or third-party integrations change.</p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>10. Children's Privacy</h2>
              <p>
                Locall Partner is intended primarily for business partners, vendors, service providers and other eligible users and is
                not designed for children.
              </p>
              <p>
                We do not knowingly collect personal information from children where such collection is prohibited by applicable
                law.
              </p>
              <p>
                If you believe that a child has provided personal information to Locall in circumstances where it should not have
                been collected, please contact us so that we can take appropriate action.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>11. Cookies and Website Technologies</h2>
              <p>The Locall website may use cookies or similar technologies for purposes such as:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Website functionality</li>
                <li>Security</li>
                <li>Analytics</li>
                <li>Performance monitoring</li>
                <li>Improving user experience</li>
              </ul>
              <p>
                You can manage cookies through your browser settings. Disabling certain cookies may affect website functionality.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>12. Links to Third-Party Websites</h2>
              <p>The Locall website or application may contain links to third-party websites, platforms or services.</p>
              <p>Locall is not responsible for the privacy practices, content or security of third-party websites.</p>
              <p>
                We encourage you to review the privacy policies of third-party services before providing them with personal
                information.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>13. International Data Processing</h2>
              <p>
                Depending on the infrastructure and service providers used by Locall, information may be processed or stored in
                locations outside your state or country.
              </p>
              <p>
                Where required, Locall will take reasonable steps to ensure that applicable legal and contractual requirements
                relating to personal information are followed.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>14. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Changes to our services</li>
                <li>Changes in technology</li>
                <li>Changes in our data practices</li>
                <li>Changes in applicable laws or regulations</li>
                <li>New features or functionality</li>
              </ul>
              <p>
                When we make material changes, we may provide an appropriate notice through the application, website or other
                available communication channels.
              </p>
              <p>The updated Privacy Policy will be published on this page with a revised Last Updated date.</p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>15. Contact Us</h2>
              <p>
                If you have questions, concerns, requests or complaints regarding this Privacy Policy or the way Locall handles
                your information, please contact us.
              </p>
              <div className="bg-surface-container-low p-6 rounded-xl mt-4 space-y-2">
                <p><strong>Company:</strong><br/>Localstack Market Private Limited</p>
                <p><strong>Brand:</strong><br/>Locall</p>
                <p><strong>Website:</strong><br/><a href="https://locall.co.in" className="text-primary hover:underline">locall.co.in</a></p>
                <p><strong>Contact Email:</strong><br/><a href="mailto:contact@locall.co.in" className="text-primary hover:underline">contact@locall.co.in</a></p>
                <p><strong>Registered Office:</strong><br/>Shankar Nagar, Durg, Chhattisgarh - 491001</p>
                <p><strong>Privacy / Grievance Contact:</strong><br/>Jayant Dhote<br/>+91-75873-15025</p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>16. Consent</h2>
              <p>
                By creating an account, using Locall Partner or voluntarily submitting information through the application or
                website, you acknowledge that you have read and understood this Privacy Policy.
              </p>
              <p>
                Where consent is legally required for a particular type of processing, Locall will request the appropriate consent
                through the application or another appropriate mechanism.
              </p>
              <p>
                You may withdraw consent where applicable, although withdrawal may affect our ability to provide certain services
                or features.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Locall App Privacy Policy */}
        {activeTab === 'locall-app' && (
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Locall — Privacy Policy
            </h1>
            <p className="text-xl text-on-surface-variant mb-6">Locall Mobile Application</p>
            
            <div className="flex flex-col sm:flex-row sm:gap-6 mb-10 text-sm font-medium text-on-surface-variant">
              <p><strong>Last Updated:</strong> 26 October 2026</p>
            </div>

            <div className="prose prose-on-surface max-w-none space-y-6">
              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>1. Introduction</h2>
              <p>
                Locall is a hyperlocal platform operated by <strong>Localstack Market Private Limited</strong>. We connect
                users with local shops, household workers, service providers, and offers in their local area.
              </p>
              <p>
                This Privacy Policy explains how Locall collects, uses, stores, and shares information when you use our mobile application and related services.
              </p>
              <p>
                By using Locall, you acknowledge the practices described in this Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>2. Information We Collect</h2>
              <p>
                Depending on how you use Locall and which features are available, we may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Personal Information:</strong> Information such as your name, mobile number, email address, and profile details that you provide when creating or using an account.
                </li>
                <li>
                  <strong>Location Information:</strong> Your device location, if you grant location permission, or a location you enter manually. We use this information to help you discover nearby shops, offers, household workers, and local service providers.
                </li>
                <li>
                  <strong>User-Generated Information:</strong> Information you submit through the app, such as enquiries, feedback, ratings, reviews, photographs, and other content.
                </li>
                <li>
                  <strong>Technical Information:</strong> Information such as your device type, operating system, app version, diagnostic information, and usage data, where collected through the app or its integrated services.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>3. How We Use Your Information</h2>
              <p>We may use your information to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Create, maintain, and manage your account.</li>
                <li>Help you discover nearby shops, products, offers, discounts, and local services.</li>
                <li>Display relevant local information based on your selected location.</li>
                <li>Enable communication with shops and service providers.</li>
                <li>Respond to your enquiries, feedback, and support requests.</li>
                <li>Improve the performance, functionality, and user experience of Locall.</li>
                <li>Maintain platform security and prevent misuse or fraudulent activity.</li>
                <li>Comply with applicable laws and legal obligations.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>4. Location Permissions</h2>
              <p>
                Locall may use location information to help you discover businesses, offers, household workers, and services near you.
              </p>
              <p>
                You can allow or deny location access through your device settings. You may also enter a location manually if that feature is available.
              </p>
              <p>
                Disabling location access may limit certain location-based features, but other app features may remain available.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>5. How We Share Your Information</h2>
              <p>Locall does not sell your personal information.</p>
              <p>We may share relevant information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>With Local Businesses and Service Providers:</strong> When you contact a shop, household worker, or service provider through Locall, information necessary to respond to your enquiry may be shared with that business or provider.
                </li>
                <li>
                  <strong>With Service Providers:</strong> We may share information with third-party companies that help us operate, maintain, secure, or improve Locall, where such services are used.
                </li>
                <li>
                  <strong>For Legal and Security Reasons:</strong> We may disclose information where required by applicable law or legal process, or where reasonably necessary to protect users, our platform, or our legal rights.
                </li>
              </ul>
              <p>
                Information you submit as a public review, rating, or photograph may be visible to other users or businesses, depending on the features of the app.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>6. Third-Party Services and Links</h2>
              <p>
                Locall may provide links or access to third-party services, including messaging platforms such as WhatsApp, where available.
              </p>
              <p>
                When you use a third-party service, its own terms and privacy policy apply. Locall does not control the independent privacy practices of those services.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>7. Data Security</h2>
              <p>
                We take reasonable technical and organisational measures to protect personal information against unauthorised access, loss, misuse, or disclosure.
              </p>
              <p>
                However, no method of electronic transmission or storage can be guaranteed to be completely secure.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>8. Data Retention</h2>
              <p>
                We retain personal information for as long as reasonably necessary to provide our services, maintain account records, address disputes, meet legal obligations, and protect the security of the platform.
              </p>
              <p>
                When information is no longer required, we take reasonable steps to delete it or anonymise it, subject to applicable legal requirements.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>9. Your Privacy Choices and Rights</h2>
              <p>
                You can manage location permissions through your device settings.
              </p>
              <p>
                You may also request access to, correction of, or deletion of your personal information, subject to applicable law.
              </p>
              <p>
                To submit a privacy-related request, contact us at{' '}
                <a href="mailto:contact@locall.co.in" className="text-primary hover:underline">contact@locall.co.in</a>. We may ask for information to verify your identity before processing your request.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>10. Account Deletion</h2>
              <p>
                You may request deletion of your Locall user account and associated personal information.
              </p>
              <p>
                To request deletion, visit our{' '}
                <Link to="/delete-account?tab=locall-app" className="text-primary hover:underline font-semibold">Account Deletion page</Link>{' '}
                and follow the instructions provided there.
              </p>
              <p>
                Some information may need to be retained where required by law or where necessary for legitimate purposes such as security, fraud prevention, dispute resolution, or legal compliance. Where applicable, information that no longer needs to be retained will be deleted or anonymised.
              </p>
              <p>
                Deleting your Locall account may not delete information already held independently by a shop, service provider, or third-party service with which you have interacted.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>11. Children's Privacy</h2>
              <p>
                Locall is not intended to be used by children in any manner prohibited by applicable law. We take appropriate steps in response to reports that personal information may have been collected from a child in violation of applicable requirements.
              </p>
              <p>
                If you have a concern regarding children's information, please contact us.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>12. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes to our services, data practices, or applicable laws.
              </p>
              <p>
                Any updated version will be published on this page, along with the revised update date.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-display)" }}>13. Contact Us</h2>
              <div className="bg-surface-container-low p-6 rounded-xl mt-4 space-y-2">
                <p><strong>Company:</strong><br/>Localstack Market Private Limited</p>
                <p><strong>Registered Address:</strong><br/>Shankar Nagar, Durg, Chhattisgarh – 491001, India</p>
                <p><strong>Email:</strong><br/><a href="mailto:contact@locall.co.in" className="text-primary hover:underline">contact@locall.co.in</a></p>
                <p><strong>Website:</strong><br/><a href="https://www.locall.co.in/" className="text-primary hover:underline">https://www.locall.co.in/</a></p>
              </div>
              <p className="mt-4 text-sm text-on-surface-variant">
                We will review and respond to privacy-related requests in accordance with applicable law.
              </p>
            </div>
          </div>
        )}

      </div>
    </main>
  );
};

export default PrivacyPolicy;
