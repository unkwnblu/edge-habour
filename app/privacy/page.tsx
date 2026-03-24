import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Edge Harbour collects, uses, and protects your personal data in accordance with UK GDPR and the Data Protection Act 2018.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal data."
      lastUpdated="24 March 2026"
    >
      <div className="callout">
        <p>
          This policy applies to Edge Harbour Recruitment Company Ltd and covers
          all personal data we process in connection with our recruitment
          platform and waitlist. We are committed to handling your data
          lawfully, transparently, and securely.
        </p>
      </div>

      <h2>1. Who We Are</h2>
      <p>
        Edge Harbour Recruitment Company Ltd (&ldquo;Edge Harbour&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is the data
        controller responsible for your personal data. We are a UK-based
        recruitment platform connecting employers with pre-vetted, compliance-ready
        professionals across Healthcare, Hospitality, Customer Service, and
        Technology.
      </p>
      <p>
        You can contact us regarding data protection matters at:{" "}
        <a href="mailto:hello@edgeharbour.co.uk">hello@edgeharbour.co.uk</a>
      </p>

      <h2>2. What Personal Data We Collect</h2>
      <h3>From waitlist registrants</h3>
      <ul>
        <li>Email address</li>
        <li>User type (employer or candidate)</li>
        <li>Date and time of registration</li>
      </ul>
      <h3>From employers (once the platform launches)</h3>
      <ul>
        <li>Contact name, job title, and business email</li>
        <li>Company name, address, and Companies House number</li>
        <li>Billing information (processed via our payment provider)</li>
        <li>Hiring preferences and role requirements</li>
      </ul>
      <h3>From candidates (once the platform launches)</h3>
      <ul>
        <li>Full name, contact details, and address history</li>
        <li>CV, work history, and qualifications</li>
        <li>Right-to-Work documentation (e.g. passport, visa, share code)</li>
        <li>DBS check results (where applicable and consent is given)</li>
        <li>References and professional registrations (e.g. NMC, HCPC)</li>
      </ul>
      <h3>Automatically collected data</h3>
      <ul>
        <li>IP address and browser type (via server logs)</li>
        <li>Pages visited and time on site (via analytics, where enabled)</li>
      </ul>

      <h2>3. How We Use Your Data</h2>
      <p>We use your personal data for the following purposes:</p>
      <ul>
        <li>
          <strong>Waitlist management</strong> — to notify you when Edge Harbour
          launches and to communicate relevant updates
        </li>
        <li>
          <strong>Platform operation</strong> — to match candidates with
          suitable roles and verify compliance documentation
        </li>
        <li>
          <strong>Right-to-Work and compliance checks</strong> — to meet our
          legal obligations as a recruitment business under the Immigration,
          Asylum and Nationality Act 2006
        </li>
        <li>
          <strong>Service communications</strong> — to send confirmations,
          updates, and support messages
        </li>
        <li>
          <strong>Platform improvement</strong> — to analyse usage patterns and
          improve our services
        </li>
      </ul>

      <h2>4. Legal Basis for Processing (UK GDPR)</h2>
      <ul>
        <li>
          <strong>Consent</strong> — for waitlist sign-up and marketing
          communications (Article 6(1)(a))
        </li>
        <li>
          <strong>Contract performance</strong> — to provide our recruitment
          services to employers and candidates (Article 6(1)(b))
        </li>
        <li>
          <strong>Legal obligation</strong> — for Right-to-Work checks and DBS
          compliance (Article 6(1)(c))
        </li>
        <li>
          <strong>Legitimate interests</strong> — to improve our platform,
          prevent fraud, and protect our services (Article 6(1)(f))
        </li>
      </ul>
      <p>
        Where we process special category data (e.g. health information for
        healthcare candidates), we rely on explicit consent (Article 9(2)(a))
        and substantial public interest in employment contexts (Article 9(2)(b)).
      </p>

      <h2>5. Who We Share Your Data With</h2>
      <p>
        We do not sell your personal data. We may share it with:
      </p>
      <ul>
        <li>
          <strong>Supabase</strong> — our database provider, which stores waitlist
          and platform data on EU/UK servers
        </li>
        <li>
          <strong>Vercel</strong> — our hosting provider
        </li>
        <li>
          <strong>Employers</strong> — candidate profiles shared only with
          specific hiring employers, with candidate consent
        </li>
        <li>
          <strong>DBS checking bodies</strong> — where a DBS check is required
          and authorised
        </li>
        <li>
          <strong>Legal or regulatory authorities</strong> — where required by
          law (e.g. HMRC, Home Office)
        </li>
      </ul>
      <p>
        All third-party processors are bound by data processing agreements and
        required to maintain adequate security standards.
      </p>

      <h2>6. Data Retention</h2>
      <ul>
        <li>
          <strong>Waitlist data</strong> — retained until 12 months after the
          platform launches, then deleted unless you have created an account
        </li>
        <li>
          <strong>Candidate profiles</strong> — retained for the duration of
          your active use plus 2 years, or as required by law
        </li>
        <li>
          <strong>Right-to-Work records</strong> — retained for 2 years after
          employment ends, as required by law
        </li>
        <li>
          <strong>Financial records</strong> — retained for 6 years in
          accordance with HMRC requirements
        </li>
      </ul>

      <h2>7. Your Rights Under UK GDPR</h2>
      <p>You have the following rights regarding your personal data:</p>
      <ul>
        <li>
          <strong>Access</strong> — request a copy of the data we hold about you
        </li>
        <li>
          <strong>Rectification</strong> — ask us to correct inaccurate data
        </li>
        <li>
          <strong>Erasure</strong> — request deletion of your data where we have
          no legal basis to retain it
        </li>
        <li>
          <strong>Restriction</strong> — ask us to limit how we process your
          data
        </li>
        <li>
          <strong>Portability</strong> — receive your data in a structured,
          machine-readable format
        </li>
        <li>
          <strong>Object</strong> — object to processing based on legitimate
          interests or for direct marketing
        </li>
        <li>
          <strong>Withdraw consent</strong> — at any time where processing is
          based on consent, without affecting prior processing
        </li>
      </ul>
      <p>
        To exercise any of these rights, email us at{" "}
        <a href="mailto:hello@edgeharbour.co.uk">hello@edgeharbour.co.uk</a>.
        We will respond within 30 days. You also have the right to lodge a
        complaint with the{" "}
        <a
          href="https://ico.org.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Information Commissioner&apos;s Office (ICO)
        </a>{" "}
        at any time.
      </p>

      <h2>8. Cookies</h2>
      <p>
        Our website currently uses only essential technical cookies required for
        the site to function (e.g. session management). We do not currently use
        analytics or advertising cookies. If this changes, we will update this
        policy and request your consent where required under the UK PECR.
      </p>

      <h2>9. Data Security</h2>
      <p>
        We implement appropriate technical and organisational measures to protect
        your personal data against unauthorised access, loss, or disclosure.
        These include encrypted data transmission (TLS), access controls, and
        regular security reviews of our infrastructure. Our database provider
        (Supabase) is SOC 2 Type II certified.
      </p>

      <h2>10. International Transfers</h2>
      <p>
        Your data is stored and processed in the UK and European Economic Area
        (EEA). Where data is transferred outside the UK/EEA (e.g. via our
        hosting provider&apos;s global infrastructure), we ensure appropriate
        safeguards are in place under UK GDPR Chapter V.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify
        waitlist subscribers of material changes by email. The &ldquo;Last
        updated&rdquo; date at the top of this page reflects the most recent
        revision.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        For any questions about this policy or how we handle your data, please
        contact:
      </p>
      <p>
        <strong>Edge Harbour Recruitment Company Ltd</strong>
        <br />
        <a href="mailto:hello@edgeharbour.co.uk">hello@edgeharbour.co.uk</a>
      </p>
    </LegalLayout>
  );
}
