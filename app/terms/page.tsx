import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Business",
  description:
    "The terms governing use of Edge Harbour's recruitment platform for UK employers and candidates.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Business"
      subtitle="The terms that govern your use of the Edge Harbour platform."
      lastUpdated="24 March 2026"
    >
      <div className="callout">
        <p>
          By joining our waitlist or using our platform, you agree to these
          Terms of Business. Please read them carefully. If you do not agree,
          do not use our services.
        </p>
      </div>

      <h2>1. Definitions</h2>
      <p>In these Terms:</p>
      <ul>
        <li>
          <strong>&ldquo;Edge Harbour&rdquo;</strong> means Edge Harbour
          Recruitment Company Ltd, the operator of this platform.
        </li>
        <li>
          <strong>&ldquo;Platform&rdquo;</strong> means the Edge Harbour website
          and recruitment service at edgeharbour.co.uk.
        </li>
        <li>
          <strong>&ldquo;Employer&rdquo;</strong> means any organisation or
          individual using the Platform to source candidates.
        </li>
        <li>
          <strong>&ldquo;Candidate&rdquo;</strong> means any individual using
          the Platform to find employment opportunities.
        </li>
        <li>
          <strong>&ldquo;Placement&rdquo;</strong> means a successful
          introduction by Edge Harbour that results in a Candidate commencing
          work with an Employer.
        </li>
        <li>
          <strong>&ldquo;Services&rdquo;</strong> means the recruitment,
          compliance-checking, and talent-matching services provided by Edge
          Harbour.
        </li>
      </ul>

      <h2>2. Acceptance of Terms</h2>
      <p>
        These Terms apply to all users of the Platform, including waitlist
        registrants, Employers, and Candidates. By registering on the Platform
        or joining the waitlist, you represent that you are at least 18 years
        old and have the authority to enter into a binding agreement on behalf
        of yourself or your organisation.
      </p>

      <h2>3. Our Services</h2>
      <p>Edge Harbour provides:</p>
      <ul>
        <li>
          A pre-launch waitlist for Employers and Candidates to register
          interest in the Platform
        </li>
        <li>
          Compliance-verified candidate profiles, including Right-to-Work
          checks and DBS screening
        </li>
        <li>
          Talent-matching services connecting Employers with role-ready
          professionals in Healthcare, Hospitality, Customer Service, and
          Technology
        </li>
        <li>
          Tools for managing the hiring pipeline and compliance documentation
        </li>
      </ul>
      <p>
        Edge Harbour reserves the right to modify, suspend, or discontinue any
        part of the Services at any time with reasonable notice.
      </p>

      <h2>4. Employer Obligations</h2>
      <p>As an Employer, you agree to:</p>
      <ul>
        <li>
          Provide accurate and complete information about your organisation and
          vacancies
        </li>
        <li>
          Use candidate data solely for the purpose of evaluating candidates
          for specific roles you have listed with Edge Harbour
        </li>
        <li>
          Comply with all applicable employment legislation, including the
          Equality Act 2010, the Employment Rights Act 1996, and all Right-to-Work
          obligations under the Immigration, Asylum and Nationality Act 2006
        </li>
        <li>
          Notify Edge Harbour promptly of any Placement so that the appropriate
          fee can be raised
        </li>
        <li>
          Not approach, engage, or hire any Candidate introduced by Edge Harbour
          through any channel other than the Platform for a period of 12 months
          from the date of introduction, without incurring a placement fee
        </li>
        <li>
          Not share candidate profiles or compliance documents with third
          parties without Edge Harbour&apos;s prior written consent
        </li>
      </ul>

      <h2>5. Candidate Obligations</h2>
      <p>As a Candidate, you agree to:</p>
      <ul>
        <li>
          Provide accurate, truthful, and up-to-date information in your profile,
          CV, and compliance documentation
        </li>
        <li>
          Promptly provide any documentation requested for Right-to-Work or DBS
          verification
        </li>
        <li>
          Notify Edge Harbour of any change in your Right-to-Work status,
          professional registrations, or other compliance-relevant circumstances
        </li>
        <li>
          Not misrepresent your qualifications, experience, or eligibility to
          work in the UK
        </li>
        <li>
          Inform Edge Harbour if you accept a role directly with an Employer
          introduced through the Platform
        </li>
      </ul>

      <h2>6. Compliance and Right-to-Work</h2>
      <p>
        Edge Harbour conducts Right-to-Work checks on candidates as part of its
        platform services. However, the ultimate legal obligation to verify a
        worker&apos;s Right-to-Work rests with the Employer. Edge Harbour
        facilitates this process but does not replace the Employer&apos;s own
        statutory duty. Employers must retain copies of all Right-to-Work
        documents as required by law.
      </p>
      <p>
        DBS checks are carried out only with the explicit written consent of the
        Candidate and in compliance with the Disclosure and Barring Service Code
        of Practice.
      </p>

      <h2>7. Fees and Payment</h2>
      <p>
        Specific fee structures will be set out in a separate Fee Schedule
        provided to Employers upon onboarding. As a general principle:
      </p>
      <ul>
        <li>
          Permanent placement fees are calculated as a percentage of the
          candidate&apos;s first year&apos;s gross salary and are invoiced upon
          the candidate&apos;s start date
        </li>
        <li>
          Temporary and contract placement fees are invoiced weekly or monthly
          in arrears as agreed
        </li>
        <li>
          All fees are subject to VAT at the prevailing rate
        </li>
        <li>
          Payment terms are 14 days from the date of invoice unless otherwise
          agreed in writing
        </li>
      </ul>
      <p>
        Edge Harbour is free for Candidates at all times. We do not charge
        candidates for registration, profile creation, or placement.
      </p>

      <h2>8. Refund and Rebate Policy</h2>
      <p>
        Where a Candidate leaves an Employer&apos;s employment within 8 weeks
        of their start date (for reasons other than redundancy or constructive
        dismissal), Edge Harbour will offer a rebate or replacement candidate at
        its discretion, subject to the Employer notifying Edge Harbour in writing
        within 5 working days of the departure and having paid the placement
        invoice in full.
      </p>

      <h2>9. Intellectual Property</h2>
      <p>
        All content on the Platform, including text, design, graphics, and
        software, is the property of Edge Harbour or its licensors and is
        protected by UK and international intellectual property law. You may not
        reproduce, distribute, or create derivative works from any part of the
        Platform without our prior written consent.
      </p>
      <p>
        By submitting content to the Platform (e.g. a CV or job description),
        you grant Edge Harbour a non-exclusive, royalty-free licence to use that
        content solely for the purpose of operating the Services.
      </p>

      <h2>10. Data Protection</h2>
      <p>
        Both Employers and Candidates are responsible for ensuring their use of
        the Platform complies with the UK General Data Protection Regulation
        (UK GDPR) and the Data Protection Act 2018. Employers act as independent
        data controllers for candidate data they access via the Platform.
        Edge Harbour acts as a data processor on behalf of Employers for certain
        processing activities, as set out in our Data Processing Agreement
        (available on request).
      </p>
      <p>
        For full details of how Edge Harbour handles personal data, see our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Edge Harbour shall not be liable
        for:
      </p>
      <ul>
        <li>
          Any loss of profits, revenue, business, or anticipated savings
        </li>
        <li>
          Any indirect, consequential, or special loss arising from use of the
          Platform
        </li>
        <li>
          The conduct or performance of any Candidate or Employer on the Platform
        </li>
        <li>
          The accuracy of candidate-provided information or documentation
        </li>
      </ul>
      <p>
        Nothing in these Terms limits liability for death or personal injury
        caused by negligence, fraud, or any liability that cannot be excluded
        under applicable law.
      </p>
      <p>
        Our total aggregate liability to any party shall not exceed the total
        fees paid to Edge Harbour in the 12 months preceding the claim.
      </p>

      <h2>12. Termination</h2>
      <p>
        Either party may terminate their use of the Platform at any time by
        giving written notice. Edge Harbour reserves the right to suspend or
        terminate access to the Platform immediately if a user breaches these
        Terms, engages in fraudulent conduct, or causes harm to other users.
      </p>
      <p>
        Termination does not affect any accrued rights or obligations, including
        outstanding payment obligations.
      </p>

      <h2>13. Governing Law and Jurisdiction</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of
        England and Wales. Any dispute arising out of or in connection with these
        Terms shall be subject to the exclusive jurisdiction of the courts of
        England and Wales.
      </p>

      <h2>14. Changes to These Terms</h2>
      <p>
        Edge Harbour may update these Terms from time to time. Material changes
        will be communicated to registered users by email with at least 14
        days&apos; notice. Continued use of the Platform after the effective date
        of updated Terms constitutes acceptance.
      </p>

      <h2>15. Contact</h2>
      <p>
        For any questions about these Terms, please contact:
      </p>
      <p>
        <strong>Edge Harbour Recruitment Company Ltd</strong>
        <br />
        <a href="mailto:hello@edgeharbour.co.uk">hello@edgeharbour.co.uk</a>
      </p>
    </LegalLayout>
  );
}
