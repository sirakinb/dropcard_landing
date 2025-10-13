import Link from 'next/link';
import Image from 'next/image';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
            <Image src="/card/dc_logo.png" alt="DropCard logo" width={48} height={48} className="h-12 w-12" />
            <span>DropCard</span>
          </Link>
          <Link href="/" className="text-sm text-stone-600 hover:text-stone-900">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <div className="prose prose-stone max-w-none">
          <h1 className="text-3xl font-bold text-stone-900 mb-8">DropCard Terms of Service</h1>
          
          <div className="bg-stone-50 rounded-lg p-4 mb-8">
            <p className="text-sm text-stone-600 mb-2"><strong>Last Updated:</strong> October 11, 2025</p>
            <p className="text-sm text-stone-600 mb-2"><strong>Operated by:</strong> Pentridge Media LLC (Pennsylvania, United States)</p>
            <p className="text-sm text-stone-600"><strong>Contact:</strong> team@dropcard.app</p>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">1. Overview</h2>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>DropCard (the "App") is a digital business card and contact management application that lets you exchange contact information, scan business cards, share a QR code, and take or attach selfies to remember who you met.</li>
              <li>The App is provided by Pentridge Media LLC ("DropCard," "we," "us," or "our").</li>
              <li>By downloading or using the App, you agree to these Terms.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">2. Eligibility</h2>
            <p className="text-stone-700">
              You must be at least 13 years old (or the age of digital consent in your region) to use the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">3. Accounts & Security</h2>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>You register with a valid email and are responsible for safeguarding your login.</li>
              <li>You agree that your account information is accurate and you won't impersonate others or use the App for unlawful purposes.</li>
              <li>We may suspend or terminate accounts that violate these Terms.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">4. Free & Pro Features</h2>
            <div className="bg-white border border-stone-200 rounded-lg p-4 mb-4">
              <p className="text-stone-700 mb-2"><strong>Free:</strong> Limited usage of features.</p>
              <p className="text-stone-700 mb-4"><strong>Pro:</strong> $4.99/month or $49.99/year (auto-renewing).</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-stone-300 text-sm">
                  <thead>
                    <tr className="bg-stone-100">
                      <th className="border border-stone-300 px-4 py-2 text-left font-semibold">Feature</th>
                      <th className="border border-stone-300 px-4 py-2 text-left font-semibold">Free</th>
                      <th className="border border-stone-300 px-4 py-2 text-left font-semibold">Pro</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-stone-300 px-4 py-2">Selfie Scans</td>
                      <td className="border border-stone-300 px-4 py-2">5 total</td>
                      <td className="border border-stone-300 px-4 py-2">Unlimited</td>
                    </tr>
                    <tr>
                      <td className="border border-stone-300 px-4 py-2">AIChat (coming soon)</td>
                      <td className="border border-stone-300 px-4 py-2">–</td>
                      <td className="border border-stone-300 px-4 py-2">Included</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-stone-700 mt-4 text-sm">We may change plan names, features, or limits with notice.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">5. Subscriptions, Billing & Refunds</h2>
            <p className="text-stone-700 mb-4">Payments are processed through Apple In-App Purchase (IAP) via our Superwall paywall.</p>
            
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>Your Apple ID is charged at confirmation.</li>
              <li>Subscriptions auto-renew unless canceled at least 24 hours before the end of the current period.</li>
              <li>Renewal charges occur within 24 hours before the current period ends.</li>
              <li>Manage or cancel subscriptions under: Settings → [your name] → Subscriptions on your device.</li>
              <li>Refunds for Apple IAP are governed by Apple's policies and must be requested directly from Apple.</li>
            </ul>

            <p className="text-stone-700 mt-4">We may offer free trials, which convert to paid unless you cancel before the trial ends.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">6. Acceptable Use</h2>
            <p className="text-stone-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>Post or transmit unlawful, harmful, harassing, hateful, obscene, infringing, or deceptive content.</li>
              <li>Spam, scrape, harvest data, or interfere with others' use of the App.</li>
              <li>Attempt to reverse-engineer, bypass security, or misuse APIs/SDKs.</li>
            </ul>
            <p className="text-stone-700 mt-4">We may remove content or restrict accounts that violate these rules.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">7. Your Content & License</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium text-stone-900 mb-2">Ownership:</h3>
                <p className="text-stone-700">You retain ownership of photos, text, and other content you upload ("User Content").</p>
              </div>
              <div>
                <h3 className="font-medium text-stone-900 mb-2">License to Us:</h3>
                <p className="text-stone-700">You grant us a non-exclusive, worldwide license to host, store, reproduce, and display your User Content solely to provide and improve the App.</p>
              </div>
              <p className="text-stone-700">You represent that you have the rights to your content and that it doesn't violate third-party rights.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">8. Our Intellectual Property</h2>
            <p className="text-stone-700">
              The App, including its software, features, branding, logos, and other materials, is owned by Pentridge Media LLC and protected by law. Except for your User Content and rights expressly granted, no licenses are granted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">9. Third-Party Services</h2>
            <p className="text-stone-700">
              We integrate services such as Firebase and Apple IAP. Your use of those services may be subject to their own terms and privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">10. Beta & AI Features</h2>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>Some features (e.g., AIChat) may be labeled beta or "coming soon" and could change, be rate-limited, or discontinued.</li>
              <li>Results from AI features may be imperfect; use discretion.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">11. Availability; Changes</h2>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>We may modify, suspend, or discontinue features or plans with notice where practical.</li>
              <li>We are not liable for outages, data loss, or changes to the App.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">12. Disclaimer; Limitation of Liability</h2>
            <p className="text-stone-700 mb-4">The App is provided "as is" and "as available." To the fullest extent permitted by law, we disclaim all warranties and limit our total liability to the greater of:</p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>(a) $100, or</li>
              <li>(b) the amount you paid to us for the App in the 12 months before the claim.</li>
            </ul>
            <p className="text-stone-700 mt-4">Some jurisdictions do not allow certain limitations; in those cases, the limits apply to the maximum extent permitted.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">13. Indemnity</h2>
            <p className="text-stone-700">
              You agree to defend, indemnify, and hold harmless Pentridge Media LLC from any claims, damages, or expenses arising from your misuse of the App or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">14. Governing Law; Venue</h2>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>These Terms are governed by the laws of the Commonwealth of Pennsylvania, USA, without regard to conflict of law principles.</li>
              <li>Where permitted, exclusive venue for disputes is in the courts located in Pennsylvania.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">15. Changes to Terms</h2>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>We may update these Terms at any time.</li>
              <li>Material changes will be posted in the App or on our website.</li>
              <li>Continued use means you accept the updated Terms.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">16. Contact</h2>
            <p className="text-stone-700 mb-2">Questions about these Terms:</p>
            <ul className="list-disc pl-6 text-stone-700 space-y-1">
              <li>Email: team@dropcard.app</li>
              <li>Address: Philadelphia, Pennsylvania, USA</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">17. Apple App Store Additional Terms (EULA)</h2>
            <p className="text-stone-700 mb-4">If you download or access DropCard through the Apple App Store, the following additional terms apply:</p>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-stone-900 mb-2">Acknowledgement</h3>
                <p className="text-stone-700">You and Pentridge Media LLC acknowledge that this agreement is between you and Pentridge Media LLC only, not with Apple. Pentridge Media LLC, not Apple, is solely responsible for the DropCard App and its content.</p>
              </div>

              <div>
                <h3 className="font-medium text-stone-900 mb-2">Scope of License</h3>
                <p className="text-stone-700">The license granted to you for DropCard is a limited, non-transferable license to use the App on any Apple-branded device you own or control and as permitted by the Usage Rules in the Apple Media Services Terms and Conditions. The App may also be accessed and used by other accounts associated with you via Family Sharing or volume purchasing.</p>
              </div>

              <div>
                <h3 className="font-medium text-stone-900 mb-2">Maintenance and Support</h3>
                <p className="text-stone-700">Pentridge Media LLC is solely responsible for providing maintenance and support for the App, as specified in these Terms or as required by applicable law. Apple has no obligation whatsoever to furnish any maintenance or support services for the App.</p>
              </div>

              <div>
                <h3 className="font-medium text-stone-900 mb-2">Warranty</h3>
                <p className="text-stone-700">To the maximum extent permitted by law, the App is provided "as is." If the App fails to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any). To the extent permitted by law, Apple has no other warranty obligation, and any other claims, losses, liabilities, or expenses attributable to any failure to conform are the sole responsibility of Pentridge Media LLC.</p>
              </div>

              <div>
                <h3 className="font-medium text-stone-900 mb-2">Product Claims</h3>
                <p className="text-stone-700 mb-2">You acknowledge that Pentridge Media LLC, not Apple, is responsible for addressing any claims by you or a third party relating to the App or your possession or use of the App, including but not limited to:</p>
                <ul className="list-disc pl-6 text-stone-700 space-y-1">
                  <li>(i) product liability claims;</li>
                  <li>(ii) any claim that the App fails to conform to legal or regulatory requirements; and</li>
                  <li>(iii) claims arising under consumer protection or similar laws.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-stone-900 mb-2">Intellectual Property Rights</h3>
                <p className="text-stone-700">In the event of any third-party claim that the App or your use of it infringes that third party's intellectual property rights, Pentridge Media LLC will be solely responsible for the investigation, defense, settlement, and discharge of such claim.</p>
              </div>

              <div>
                <h3 className="font-medium text-stone-900 mb-2">Legal Compliance</h3>
                <p className="text-stone-700">You represent and warrant that (i) you are not located in a country subject to a U.S. Government embargo or designated as a "terrorist supporting" country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties.</p>
              </div>

              <div>
                <h3 className="font-medium text-stone-900 mb-2">Developer Contact Information</h3>
                <p className="text-stone-700">Pentridge Media LLC</p>
                <p className="text-stone-700">Philadelphia, Pennsylvania, USA</p>
                <p className="text-stone-700">Email: team@dropcard.app</p>
              </div>

              <div>
                <h3 className="font-medium text-stone-900 mb-2">Third-Party Terms</h3>
                <p className="text-stone-700">You must comply with applicable third-party terms when using the App (for example, your wireless data service agreement).</p>
              </div>

              <div>
                <h3 className="font-medium text-stone-900 mb-2">Third-Party Beneficiary</h3>
                <p className="text-stone-700">You and Pentridge Media LLC acknowledge and agree that Apple and its subsidiaries are third-party beneficiaries of these Terms, and that, upon your acceptance of the Terms, Apple will have the right (and be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary.</p>
              </div>
            </div>
          </section>

          <div className="border-t border-stone-200 pt-8 mt-12">
            <p className="text-sm text-stone-500 text-center">
              Last Updated: October 11, 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
