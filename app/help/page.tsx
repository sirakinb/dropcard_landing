import Link from 'next/link';
import Image from 'next/image';

export default function HelpPage() {
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
          <h1 className="text-3xl font-bold text-stone-900 mb-8">DropCard Help</h1>
          
          <div className="bg-stone-50 rounded-lg p-6 mb-8">
            <p className="text-stone-700 mb-6 text-lg">
              Need assistance with DropCard? We're here to help.
            </p>
            
            <p className="text-stone-700 mb-4">
              For any questions, technical issues, or account-related concerns, please reach out to our support team:
            </p>
            
            <div className="bg-white border border-stone-200 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-semibold">📧</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-stone-900 mb-1">Email Support</p>
                  <a 
                    href="mailto:team@dropcard.app" 
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    team@dropcard.app
                  </a>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-stone-600">
              We typically respond within a few hours
            </p>
          </div>

          {/* Additional Help Sections */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-4">Common Topics</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-stone-200 rounded-lg p-4">
                  <h3 className="font-medium text-stone-900 mb-2">Account & Billing</h3>
                  <p className="text-sm text-stone-600">
                    Questions about your account, subscription, or billing through Apple IAP.
                  </p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-4">
                  <h3 className="font-medium text-stone-900 mb-2">App Features</h3>
                  <p className="text-sm text-stone-600">
                    Help with using DropCard features like NFC cards, selfie scanning, and contact management.
                  </p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-4">
                  <h3 className="font-medium text-stone-900 mb-2">Technical Issues</h3>
                  <p className="text-sm text-stone-600">
                    Troubleshooting app crashes, sync problems, or performance issues.
                  </p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-4">
                  <h3 className="font-medium text-stone-900 mb-2">NFC Card Support</h3>
                  <p className="text-sm text-stone-600">
                    Assistance with your physical NFC card, setup, or shipping inquiries.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 mb-4">Quick Links</h2>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/terms" 
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Terms of Service
                </Link>
                <span className="text-stone-400">•</span>
                <Link 
                  href="/privacy" 
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Privacy Policy
                </Link>
                <span className="text-stone-400">•</span>
                <a 
                  href="https://www.tiktok.com/view/product/1731550078413280064" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Purchase NFC Card
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
