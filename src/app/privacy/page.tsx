import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Lilah - AI Meeting Assistant",
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24 mx-auto max-w-3xl px-6 relative">
        {/* Background glow matching brand */}
        <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-[20%] opacity-[0.15] blur-[100px] rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 pointer-events-none" />

        <div className="glass p-8 md:p-12 rounded-2xl border border-white/[0.05] bg-bg-card/50 backdrop-blur-xl">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">
            Privacy Policy – Lilah
          </h1>
          <p className="text-text-secondary mb-12 text-lg">
            <strong>Last updated:</strong> March 2026
          </p>

          <div className="space-y-10 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                1. Introduction
              </h2>
              <p className="mb-4">
                Lilah is an AI-powered meeting assistant operated by{" "}
                <strong className="text-text-primary">
                  Strategic Automation Ltd
                </strong>{" "}
                ("we", "our", or "us"). This Privacy Policy explains how we
                collect, use, store, and protect personal data when you use the
                Lilah website and application.
              </p>
              <p>
                We are committed to protecting your privacy and handling your
                personal data in accordance with the{" "}
                <strong className="text-text-primary">
                  UK General Data Protection Regulation (UK GDPR)
                </strong>{" "}
                and the{" "}
                <strong className="text-text-primary">
                  Data Protection Act 2018
                </strong>
                .
              </p>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                2. Data Controller
              </h2>
              <p className="mb-4">
                The data controller responsible for your personal data is:
              </p>
              <address className="not-italic mb-4 p-4 glass rounded-xl inline-block">
                <strong className="text-text-primary block mb-1">
                  Strategic Automation Ltd
                </strong>
                Registered in England and Wales
                <br />
                ICO Registration Number:{" "}
                <strong className="text-text-primary">ZC099902</strong>
              </address>
              <p>
                If you have questions about this policy or your data, you can
                contact us at:
              </p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:privacy@lilah.app"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  privacy@lilah.app
                </a>
              </p>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-6">
                3. Information We Collect
              </h2>
              <p className="mb-6">
                We may collect and process the following types of personal data.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-text-primary mb-3">
                    3.1 Account Information
                  </h3>
                  <p className="mb-3">
                    When you create an account or sign up for Lilah:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 marker:text-cyan-500">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Organisation name</li>
                    <li>Login credentials</li>
                    <li>Account preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-text-primary mb-3">
                    3.2 Meeting Data
                  </h3>
                  <p className="mb-3">
                    When you use Lilah to assist with meetings, we may process:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-4 marker:text-cyan-500">
                    <li>Audio recordings of meetings</li>
                    <li>Transcripts generated from audio</li>
                    <li>Speaker identification data</li>
                    <li>Meeting summaries</li>
                    <li>Action items and notes</li>
                    <li>
                      User prompts or queries submitted to the AI assistant
                    </li>
                  </ul>
                  <p className="text-sm bg-violet-500/10 text-violet-200 p-4 rounded-xl border border-violet-500/20">
                    Meeting data may contain personal information depending on
                    the content of the conversation.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-text-primary mb-3">
                    3.3 Usage Data
                  </h3>
                  <p className="mb-3">
                    We automatically collect certain technical information
                    including:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-4 marker:text-cyan-500">
                    <li>Device type</li>
                    <li>Browser type</li>
                    <li>IP address</li>
                    <li>Operating system</li>
                    <li>Log data</li>
                    <li>Interaction with features</li>
                  </ul>
                  <p>
                    This helps us improve the performance and reliability of the
                    service.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-text-primary mb-3">
                    3.4 Website Analytics
                  </h3>
                  <p className="mb-3">
                    When you visit the Lilah website, we may collect limited
                    analytics data such as:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-4 marker:text-cyan-500">
                    <li>Pages visited</li>
                    <li>Time spent on pages</li>
                    <li>Referral source</li>
                    <li>Device information</li>
                  </ul>
                  <p>
                    This data is used to improve our website and user experience.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                4. How We Use Your Data
              </h2>
              <p className="mb-4">
                We process personal data for the following purposes:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-violet-500">
                <li>To provide and operate the Lilah service</li>
                <li>To generate meeting transcripts and summaries</li>
                <li>To enable AI-powered research and analysis features</li>
                <li>To maintain account functionality</li>
                <li>To improve system performance and reliability</li>
                <li>To provide customer support</li>
                <li>To ensure security and prevent misuse</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-6">
                5. Legal Basis for Processing
              </h2>
              <p className="mb-6">
                Under UK GDPR, we rely on the following legal bases:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="glass p-5 rounded-xl">
                  <h3 className="text-text-primary font-medium mb-2">Contract</h3>
                  <p className="text-sm">
                    Processing necessary to provide the Lilah service to users.
                  </p>
                </div>
                <div className="glass p-5 rounded-xl">
                  <h3 className="text-text-primary font-medium mb-2">
                    Legitimate Interests
                  </h3>
                  <p className="text-sm">
                    Improving the service, maintaining system security, and
                    preventing fraud.
                  </p>
                </div>
                <div className="glass p-5 rounded-xl">
                  <h3 className="text-text-primary font-medium mb-2">Consent</h3>
                  <p className="text-sm">
                    Where required, such as optional analytics cookies.
                  </p>
                </div>
                <div className="glass p-5 rounded-xl">
                  <h3 className="text-text-primary font-medium mb-2">
                    Legal Obligations
                  </h3>
                  <p className="text-sm">
                    Where we must retain or disclose data to comply with legal
                    requirements.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                6. AI Processing
              </h2>
              <p className="mb-4">
                Lilah uses artificial intelligence technologies to generate
                summaries, insights, and research results.
              </p>
              <p className="mb-4">
                These systems analyse meeting transcripts and user queries to
                provide helpful outputs.
              </p>
              <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-50">
                <p>
                  AI-generated content is intended to assist users and should
                  not be relied upon as professional advice.
                </p>
              </div>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                7. Data Processors and Third Parties
              </h2>
              <p className="mb-4">
                To operate Lilah, we use trusted service providers who process
                data on our behalf.
              </p>
              <p className="mb-4">These may include providers for:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4 marker:text-violet-500">
                <li>Cloud hosting</li>
                <li>AI processing</li>
                <li>Transcription services</li>
                <li>Analytics</li>
                <li>Authentication</li>
              </ul>
              <p className="mb-4">
                Examples of processors may include providers of AI models,
                transcription systems, or hosting infrastructure.
              </p>
              <p>
                We ensure that all processors are subject to appropriate data
                protection obligations.
              </p>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                8. International Data Transfers
              </h2>
              <p className="mb-4">
                Some of our service providers may process data outside the United
                Kingdom.
              </p>
              <p className="mb-4">
                Where this occurs, we ensure appropriate safeguards are in place,
                such as:
              </p>
              <ul className="list-disc pl-5 space-y-1 marker:text-cyan-500">
                <li>UK International Data Transfer Agreements</li>
                <li>Adequacy regulations</li>
                <li>Standard contractual clauses</li>
              </ul>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                9. Data Retention
              </h2>
              <p className="mb-4">
                We retain personal data only for as long as necessary to provide
                the Lilah service and fulfil the purposes outlined in this
                policy.
              </p>
              <p className="mb-4">
                Users may delete meeting recordings or transcripts within their
                account.
              </p>
              <p>
                Account data may be retained for administrative, legal, or
                security purposes.
              </p>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                10. Data Security
              </h2>
              <p className="mb-4">
                We implement appropriate technical and organisational measures to
                protect personal data.
              </p>
              <p className="mb-4">These include measures such as:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4 marker:text-violet-500">
                <li>Encrypted data transmission</li>
                <li>Secure authentication systems</li>
                <li>Access controls</li>
                <li>Monitoring for suspicious activity</li>
              </ul>
              <p>
                No system can guarantee absolute security, but we take
                reasonable steps to protect your information.
              </p>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                11. Your Rights
              </h2>
              <p className="mb-4">
                Under UK GDPR you have the following rights:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {[
                  "Right of access",
                  "Right to rectification",
                  "Right to erasure",
                  "Right to restrict processing",
                  "Right to data portability",
                  "Right to object",
                  "Rights relating to automated decision-making",
                ].map((right, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/5"
                  >
                    <svg
                      className="w-4 h-4 text-cyan-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">{right}</span>
                  </li>
                ))}
              </ul>
              <p>
                To exercise your rights, contact:{" "}
                <a
                  href="mailto:privacy@lilah.app"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  privacy@lilah.app
                </a>
              </p>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                12. Complaints
              </h2>
              <p className="mb-4">
                If you are not satisfied with how we handle your personal data,
                you may lodge a complaint with the{" "}
                <strong className="text-text-primary">
                  Information Commissioner’s Office (ICO)
                </strong>
                .
              </p>
              <p>
                ICO Website:{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  https://ico.org.uk
                </a>
              </p>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                13. Cookies
              </h2>
              <p className="mb-4">
                The Lilah website may use cookies and similar technologies to
                improve functionality and analyse website usage.
              </p>
              <p>
                A separate{" "}
                <strong className="text-text-primary">Cookie Policy</strong>{" "}
                explains how cookies are used and how users can manage their
                preferences.
              </p>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                14. Changes to This Policy
              </h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time to reflect
                changes in the service or legal requirements.
              </p>
              <p>
                The latest version will always be available on the Lilah
                website.
              </p>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                15. Contact
              </h2>
              <p className="mb-4">
                For privacy-related questions or requests:
              </p>
              <address className="not-italic p-4 glass rounded-xl inline-block">
                <strong className="text-text-primary block mb-2">
                  Strategic Automation Ltd
                </strong>
                Email:{" "}
                <a
                  href="mailto:privacy@lilah.app"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  privacy@lilah.app
                </a>
              </address>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
