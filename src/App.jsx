import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Fade, Navigation, Section } from './components';
import { content, checkLocationUrl } from './content';

function HomePage({ t }) {
  return <main id="home">
    <section className="min-h-screen bg-cream px-5 pt-32 md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_.82fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[.24em] text-navy">{t.hero.label}</p>
          <h1 className="text-5xl font-semibold leading-[1.04] text-navy md:text-7xl">{t.hero.title}</h1>
          <p className="mt-6 text-2xl text-navy/80">{t.hero.subtitle}</p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{t.hero.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button>{t.book}</Button><Button outline href="#services">{t.hero.secondary}</Button></div>
        </motion.div>
        <Fade delay={0.2}><div className="aspect-[4/5] rounded-[2rem] bg-white p-4 shadow-soft" aria-label={t.hero.imageLabel}><img src="/images/hero.jpeg" alt="OurLash Lash Lift Result" className= "h-full w-full rounded-[1.5rem] object-cover" /></div></Fade>
      </div>
    </section>
    <Section id="about" label={t.about.label} title={t.about.title}><div className="grid gap-6 text-lg leading-8 text-muted lg:grid-cols-2">{t.about.body.map((p) => <p key={p}>{p}</p>)}</div></Section>
    <Section id="promise" cream label="Our Promise" title="Every Appointment Follows the Same High Standard."><p className="max-w-2xl whitespace-pre-line text-lg leading-8 text-muted">{t.promiseIntro}</p><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{t.promiseItems.map(([h, d], i) => <Fade delay={i * 0.04} key={h} className="rounded-3xl bg-white p-7 shadow-soft"><span className="text-2xl text-navy">✦</span><h3 className="mt-5 text-xl font-semibold text-navy">{h}</h3><p className="mt-3 leading-7 text-muted">{d}</p></Fade>)}</div></Section>
    <Section id="why-choose-ourlash" label="Why Choose OurLash" title="More Than Just a Lash Appointment."><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{t.reasons.map(([h, d]) => <article key={h} className="rounded-3xl border border-divider p-7"><h3 className="text-xl font-semibold text-navy">{h}</h3><p className="mt-3 whitespace-pre-line leading-7 text-muted">{d}</p></article>)}</div></Section>
    <Section id="services" cream label="Our Services" title="Thoughtfully Designed Treatments for Naturally Beautiful Lashes."><div className="mt-12 grid gap-6 lg:grid-cols-2">{t.services.map((s) => <article className="rounded-[2rem] bg-white p-8 shadow-soft" key={s.name}><h3 className="text-3xl font-semibold text-navy">{s.name}</h3>{s.description.map((p) => <p key={p} className="mt-5 leading-8 text-muted">{p}</p>)}<div className="my-7 h-px bg-divider" /><p className="text-sm uppercase tracking-[.2em] text-muted">Duration</p><p className="mt-1 font-semibold text-navy">{s.duration}</p><p className="mt-5 text-sm uppercase tracking-[.2em] text-muted">Price</p><p className="mt-1 text-2xl font-semibold text-navy">{s.price}</p><h4 className="mt-7 font-semibold text-navy">What's Included</h4><ul className="mt-3 grid gap-2 text-muted">{s.included.map((x) => <li key={x}>✓ {x}</li>)}</ul><div className="mt-8"><Button>{s.cta}</Button></div></article>)}</div><article className="mt-6 rounded-[2rem] border border-navy/15 bg-white p-8"><span className="rounded-full bg-cream px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-navy">{t.comingSoon.label}</span><h3 className="mt-6 text-3xl font-semibold text-navy">{t.comingSoon.title}</h3><p className="mt-5 max-w-3xl leading-8 text-muted">{t.comingSoon.body}<br /><br />{t.comingSoon.cta}</p></article></Section>
    <Gallery t={t} />
 <Section
  id="service-area"
  label={t.serviceArea.label}
  title={t.serviceArea.title}
>
  <p className="max-w-3xl whitespace-pre-line text-lg leading-8 text-muted">
    {t.serviceArea.intro}
  </p>

  <div className="mt-10 grid gap-6 lg:grid-cols-2">
    <div className="rounded-3xl bg-cream p-8">
      <h3 className="text-xl font-semibold text-navy">
        {t.serviceArea.areasTitle}
      </h3>

      <ul className="mt-5 grid gap-3 text-muted">
        {t.serviceArea.areas.map((area) => (
          <li key={area}>• {area}</li>
        ))}
      </ul>
    </div>

    <div className="rounded-3xl border border-divider p-8">
      <h3 className="text-xl font-semibold text-navy">
        {t.serviceArea.travelFeeTitle}
      </h3>

      {t.serviceArea.travelFees.map(([distance, fee]) => (
        <div
          className="mt-5 flex justify-between border-b border-divider pb-3"
          key={distance}
        >
          <span>{distance}</span>
          <strong className="text-navy">{fee}</strong>
        </div>
      ))}
    </div>
  </div>

  <p className="mt-8 max-w-3xl whitespace-pre-line leading-8 text-muted">
    {t.serviceArea.note}
  </p>

  <div className="mt-8">
    <Button href={checkLocationUrl}>
      {t.serviceArea.button}
    </Button>
  </div>
</Section>

   <Section id="programs" cream label="Exclusive Privileges" title="A Small Thank You for Your Trust."><p className="max-w-3xl whitespace-pre-line text-lg leading-8 text-muted">{t.programsIntro}</p><div className="mt-12 grid gap-6 md:grid-cols-2">{t.programs.map(([h, d, b]) => <article key={h} className="rounded-3xl bg-white p-8 shadow-soft">{b && <span className="rounded-full bg-cream px-3 py-2 text-xs font-bold uppercase tracking-[.16em] text-navy">{b}</span>}<h3 className="mt-5 text-2xl font-semibold text-navy">{h}</h3><p className="mt-4 whitespace-pre-line leading-8 text-muted">{d}</p></article>)}</div><p className="mt-12 max-w-3xl whitespace-pre-line text-xl leading-9 text-navy">{t.programsOutro}</p></Section>
    <FAQ t={t} />
    <Contact t={t} />
    <Footer t={t} />
   </main>
}

function Gallery({ t }) {
  return (
    <Section
      id="gallery"
      label={t.gallery.label}
      title={t.gallery.title}
    >
      <p className="max-w-3xl text-lg leading-8 text-muted">
        {t.gallery.intro}
      </p>

      <div className="mt-12 flex justify-center">
        <article className="max-w-3xl rounded-[2rem] border border-divider bg-white p-5 shadow-soft">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img
                src="/images/before-1.jpeg"
                alt="Before Lash Lift"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              />

              <p className="mt-3 text-center text-sm font-semibold uppercase tracking-[.15em] text-muted">
                {t.gallery.before}
              </p>
            </div>

            <div>
              <img
                src="/images/after-1.jpeg"
                alt="After Lash Lift"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              />

              <p className="mt-3 text-center text-sm font-semibold uppercase tracking-[.15em] text-muted">
                {t.gallery.after}
              </p>
            </div>
          </div>

          <h3 className="mt-6 text-center text-2xl font-semibold text-navy">
            {t.gallery.transformationTitle}
          </h3>

          <p className="mt-3 text-center text-muted">
            {t.gallery.transformationDescription}
          </p>
        </article>
      </div>
    </Section>
  );
}
function FAQ({ t }) { return <Section id="faq" cream label={t.faq.label} title={t.faq.title}><div className="grid gap-4">{t.faq.items.map(([q, a]) => <details key={q} className="group rounded-3xl bg-white p-6 shadow-soft"><summary className="cursor-pointer list-none text-lg font-semibold text-navy">{q}<span className="float-right transition group-open:rotate-45">＋</span></summary><p className="mt-4 leading-8 text-muted">{a}</p></details>)}</div></Section>; }

function Contact({ t }) { return <Section id="contact" label={t.contact.label} title={t.contact.title}><p className="max-w-3xl text-lg leading-8 text-muted">{t.contact.intro}</p><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{t.contact.details.map(([h, d]) => <article key={h} className="rounded-3xl border border-divider p-6"><h3 className="font-semibold text-navy">{h}</h3><p className="mt-3 text-muted">{d}</p></article>)}</div><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button>{t.book}</Button><Button outline href="https://instagram.com/ourlash.studio">Instagram</Button></div></Section>; }

function Footer({ t }) { return <footer className="bg-navy px-5 py-12 text-white md:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><p className="text-xl font-bold tracking-[.18em]">OURLASH</p><p className="mt-3 max-w-xl text-white/70">{t.footer}</p></div><p className="text-sm text-white/60">© 2026 OurLash Studio. All rights reserved.</p></div></footer>; }

function AftercarePage({ t }) { return <main id="home" className="bg-cream pt-32"><Section id="aftercare" cream label={t.aftercare.label} title={t.aftercare.title}><p className="max-w-3xl text-lg leading-8 text-muted">{t.aftercare.intro}</p><div className="mt-12 grid gap-6 md:grid-cols-2">{t.aftercare.tips.map(([h, d]) => <article key={h} className="rounded-3xl bg-white p-8 shadow-soft"><h3 className="text-2xl font-semibold text-navy">{h}</h3><p className="mt-4 leading-8 text-muted">{d}</p></article>)}</div><div className="mt-10"><Button>{t.book}</Button></div></Section><Footer t={t} /></main>; }

export default function App() {
  const [language, setLanguage] = useState('id');
  const t = content[language];
  return <BrowserRouter>
    <Navigation navItems={t.navItems} language={language} setLanguage={setLanguage} bookLabel={t.book} />
    <Routes>
      <Route path="/aftercare" element={<AftercarePage t={t} />} />
      <Route path="*" element={<HomePage t={t} />} />
    </Routes>
  </BrowserRouter>;
}
