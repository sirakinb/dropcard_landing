import Image from 'next/image';
import Link from 'next/link';
import { Camera, IdCard, ScanLine, Globe2 } from 'lucide-react';
import CTAForm from '../components/CTAForm';
import Section from '../components/Section';
import DeviceFrame from '../components/DeviceFrame';
import HeroVisual from '../components/HeroVisual';
import StepItem from '../components/StepItem';
import PageviewPing from '../components/PageviewPing';

const navItems = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#card', label: 'NFC Card' },
  { href: '#faq', label: 'FAQ' },
];

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageviewPing />
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/75 bg-white/90 border-b border-stone-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-3 font-semibold tracking-tight">
            <Image src="/card/dc_logo.png" alt="DropCard logo" width={48} height={48} className="h-12 w-12" />
            <span>DropCard</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-stone-700">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-stone-900">
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#hero-cta" className="ml-4 rounded-xl px-4 py-2 text-sm font-medium text-white accent-gradient shadow-sm">Join the waitlist</a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <Section id="hero" className="pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs text-stone-600 shadow-sm">
                <span className="relative inline-flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                Now in beta
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Your Networking. Upgraded.</h1>
              <p className="text-stone-600 max-w-prose">Instantly exchange contact info, remember who you meet, and keep your network organized.</p>
              <div id="hero-cta">
                <CTAForm formLocation="hero" />
              </div>
            </div>
            <div className="lg:pl-6">
              <HeroVisual src="/screens/hero-profile-contacts.png" alt="DropCard profile and contacts" priority />
            </div>
          </div>
        </Section>

        {/* How It Works */}
        <Section id="how-it-works">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Meet people. Stay connected. Never forget.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map((step) => (
              <StepItem key={step} delay={step * 0.05} className="space-y-4">
                
                {step === 1 && (
                  <DeviceFrame src="/screens/how-cards.png?v=2" alt="Create your digital card" />
                )}
                {step === 2 && (
                  <DeviceFrame src="/screens/how-share.png" alt="Share in seconds" />
                )}
                {step === 3 && (
                  <DeviceFrame src="/screens/how-selfie.png?v=2" alt="Remember every connection" />
                )}
                <div>
                  <h3 className="font-medium">
                    {step === 1 && 'Create your digital card'}
                    {step === 2 && 'Share in seconds'}
                    {step === 3 && 'Remember every connection'}
                  </h3>
                  <p className="text-sm text-stone-600 mt-1">{step === 1 && 'Design a modern profile with your details and links.'}{step === 2 && 'Let them scan your QR or share via link.'}{step === 3 && 'Capture context with photos and notes so you never forget.'}</p>
                </div>
              </StepItem>
            ))}
          </div>
        </Section>

        {/* Features */}
        <Section id="features">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Everything you need to network smarter</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-0">
              <DeviceFrame src="/screens/scan.png" alt="AI business card capture" />
              <p className="text-center text-sm text-stone-600">AI business card capture</p>
            </div>
            <div className="grid grid-cols-2 gap-6 items-stretch content-stretch grid-rows-2 min-h-[560px] md:min-h-[680px] lg:min-h-[760px]">
              <Feature icon={ScanLine} title="AI-Powered Card Capture" desc="Snap a paper card; AI fills the details." />
              <Feature icon={Camera} title="Selfie Contact Memory" desc="Take a photo with who you meet." />
              <Feature icon={IdCard} title="Multiple Business Cards" desc="Switch profiles for work, side hustles, events." />
              <Feature icon={Globe2} title="Customizable Web Profile" desc="Share only what you choose." />
            </div>
          </div>
        </Section>

        {/* NFC Card */}
        <Section id="card">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="rounded-3xl bg-stone-50 ring-1 ring-stone-200 shadow-sm p-4 sm:p-6">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                <Image src="/card/card-lifestyle.png" alt="Tap card to phone" fill sizes="(max-width: 1024px) 90vw, 640px" className="object-contain" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Networking at the speed of a tap</h3>
              <p className="text-stone-600 max-w-prose">Complement your mobile experience with an NFC-powered DropCard and share your profile with just a tap. Available on TikTok Shop.</p>
              
              {/* Early Access CTA */}
              <div className="rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 p-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-900">Get Early Access</h4>
                  <p className="text-sm text-purple-700">Purchase the physical NFC card and get exclusive early access to DropCard before public launch.</p>
                  <div>
                    <a
                      href="https://www.tiktok.com/view/product/1731550078413280064?_svg=3&checksum=3fce788791f5c4dbbd7f2e1d471083c6475da0747c47bec5b37bc317b1f9e8ee&encode_params=MIIBUQQM_gqry86S78Tu50VzBIIBLVLSi6-ejcWCLchtfmOMuR_FEzyYfy4BAqaB-471S-cexm8cA4DDNZ_AUOxwaogwmCb3l8aLNMbFOuigUoDt4MTMm4r9CW4uMvSDE_hnt6F0zS3hdP_xE5BO781wHO6CN4-iC9L9f43BGCuoQaMhFqAp5Ny_KGy76BGZYQl-VJ28rxwglkq6nVrabluVsDMRkzJLl0wZ559sckWvSEUQfMncPjw_uSM_XK9pApXPP9D_MfrSXRV8-ic31CkOxBCAQcfA-iat_vMXBbHY4EPW8-bYigtGqjBTviqjsqg-4MRbYzPJh6-9RB_fYxs1DuzZamgpaZ_rsdstqxVn9pydcsrILZqqLvh7i_6PmxVzjI4Io-rB_3KFzvlJQbYL_06pMsZV2sdDvA-6uQxjS1UEENbefkPzQvCmHmvycxFLbsM%3D&og_info=%7B%22title%22%3A%22Drop+Card+Digital+Business+Card+-+Smart+Networking+Card+-+Tap+to+Share+-+iPhone+-+NFC-Powered+Instant+Sharing+%26+Contact+Management+-+Modern+Professional+Tool%22%2C%22image%22%3A%22https%3A%5C%2F%5C%2Fp16-oec-general-useast5.ttcdn-us.com%5C%2Ftos-useast5-i-omjb5zjo8w-tx%5C%2F219e840c2bb642c886f0c280091d71ca~tplv-fhlh96nyum-resize-webp%3A260%3A260.webp%3Fdr%3D12185%26t%3D555f072d%26ps%3D933b5bde%26shp%3D7745054a%26shcp%3D9b759fb9%26idc%3Duseast5%26from%3D2001012042%22%7D&sec_user_id=MS4wLjABAAAASYq6d_Y00mzY6y8B4JX7f_omLlnSuVVQ13p2VJRkdjrdPR0HcUN3pNWx_Vzze_Ez&share_app_id=1233&share_link_id=E8592454-3E62-4A6A-8044-6BC98DD80EB5&social_share_type=15&timestamp=1755134816&trackParams=%7B%22enter_from_info%22%3A%22product_share_outside%22%2C%22source_page_type%22%3A%22product_share%22%2C%22device_id%22%3A%227241647867314718254%22%2C%22enable_shop_tab_popup%22%3A1%7D&tt_from=sms&u_code=EKJJLJJ2D3DGM0&ug_btm=b0%2Cb6661&unique_id=dropcard.ai&user_id=7513731422051419182&utm_campaign=client_share&utm_medium=ios&utm_source=sms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-xl px-4 py-2 text-sm font-medium border border-stone-300 text-stone-800 hover:bg-stone-50"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="-mt-16 sm:-mt-24 md:-mt-28 lg:-mt-36">
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-white">
                  <Image src="/card/card-solo.png" alt="DropCard — solo card" fill sizes="(max-width: 1024px) 90vw, 640px" className="object-contain rotate-90" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        

        {/* FAQ */}
        <Section id="faq">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">FAQs</h2>
          </div>
          <div className="mx-auto max-w-3xl divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
            {faqItems.map((item, idx) => (
              <details key={idx} className="group p-5" aria-label={item.q}>
                <summary className="cursor-pointer list-none flex items-center justify-between font-medium text-stone-800">
                  {item.q}
                  <span className="ml-4 text-stone-500">+</span>
                </summary>
                <p className="mt-2 text-stone-600 text-sm">{item.a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* Final CTA */}
        <section aria-labelledby="final-cta" className="cta-gradient">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="relative isolate overflow-hidden rounded-3xl bg-white/10 p-8 sm:p-12 text-center text-white ring-1 ring-white/20 shadow-xl">
              <h2 id="final-cta" className="text-2xl sm:text-3xl font-semibold">Ready to upgrade your networking?</h2>
              <p className="mt-2 text-white/90">Join the DropCard beta and start connecting smarter today.</p>
              <div className="mx-auto mt-6 max-w-xl">
                <div className="rounded-2xl bg-white p-4 shadow-lg ring-1 ring-stone-200">
                  <CTAForm formLocation="final-cta" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-600">
          <div className="font-medium text-stone-800 flex items-center gap-2">
            <span>Built with</span>
            <span aria-label="heart" role="img" className="align-middle">🖤</span>
            <a href="https://pentridgemedia.com/" target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">by Pentridge Media</a>
          </div>
          <nav className="flex items-center gap-4">
            <a href="#features" className="hover:text-stone-800">Features</a>
            <a href="#how-it-works" className="hover:text-stone-800">How it works</a>
            <a href="#card" className="hover:text-stone-800">NFC Card</a>
            <a href="#faq" className="hover:text-stone-800">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-stone-500">© 2025 DropCard</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm flex flex-col justify-center">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-xl accent-gradient text-white flex items-center justify-center shadow-sm">
          <Icon size={22} />
        </div>
        <div className="font-medium text-base sm:text-lg">{title}</div>
      </div>
      <p className="mt-2 text-sm sm:text-base text-stone-600">{desc}</p>
    </div>
  );
}

const faqItems = [
  {
    q: 'Is the app free?',
    a: 'Yes. The core app is free to use. There’s also a Pro version that includes advanced features such as AI chat and increased usage of the selfie contact memory feature.',
  },
  {
    q: 'Do recipients need the app?',
    a: 'No, recipients don’t need the app to view your profile. However, you must download the DropCard app in order to activate the physical NFC card if you choose to get one.',
  },
  {
    q: 'iOS/Android?',
    a: 'DropCard is currently built for iOS. If there’s enough demand, we plan to build it for Android in the future.',
  },
  {
    q: 'How do I scan paper cards?',
    a: 'Use the built-in Scan feature to capture business cards. AI will extract the details for you automatically.',
  },
  {
    q: 'Can I make multiple cards?',
    a: 'Yes. You can create multiple profiles and switch between them depending on the context.',
  },
];


