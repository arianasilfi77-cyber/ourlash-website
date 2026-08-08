import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { languages, whatsappUrl } from './content';

export function Fade({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Button({
  children,
  outline = false,
  href = whatsappUrl,
}) {
  return (
    <a
      href={href}
      className={
        (outline
          ? 'border border-navy text-navy hover:bg-navy hover:text-white'
          : 'bg-navy text-white hover:-translate-y-1 hover:shadow-soft') +
        ' inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300 active:scale-98'
      }
    >
      {children}
    </a>
  );
}

function NavLink({ href, children, onClick }) {
  const classes = 'text-sm text-muted transition hover:text-navy';

  return href.startsWith('/') ? (
    <Link onClick={onClick} to={href} className={classes}>
      {children}
    </Link>
  ) : (
    <a onClick={onClick} href={href} className={classes}>
      {children}
    </a>
  );
}

export function LanguageSwitch({ language, setLanguage }) {
  return (
    <div
      className="flex rounded-full border border-divider bg-white p-1"
      aria-label="Language switch"
    >
      {Object.entries(languages).map(([code, label]) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          className={
            (language === code
              ? 'bg-navy text-white'
              : 'text-muted hover:text-navy') +
            ' rounded-full px-3 py-2 text-xs font-semibold transition'
          }
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function Navigation({
  navItems,
  language,
  setLanguage,
  bookLabel,
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={
        (scrolled
          ? 'bg-white/90 border-divider backdrop-blur'
          : 'bg-transparent border-transparent') +
        ' fixed inset-x-0 top-0 z-50 border-b transition duration-300'
      }
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8"
      >
        <Link
          to="/"
          className="text-xl font-bold tracking-[.18em] text-navy"
        >
          OURLASH
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, href]) => (
            <NavLink key={label} href={href}>
              {label}
            </NavLink>
          ))}

          <LanguageSwitch
            language={language}
            setLanguage={setLanguage}
          />

          <Button>{bookLabel}</Button>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="text-navy lg:hidden"
          aria-label="Open menu"
        >
          Menu
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white p-8 lg:hidden"
        >
          <button
            onClick={() => setOpen(false)}
            className="float-right text-navy"
            aria-label="Close menu"
          >
            Close
          </button>

          <div className="mt-20 grid gap-8 text-2xl text-navy">
            {navItems.map(([label, href]) => (
              <NavLink
                onClick={() => setOpen(false)}
                key={label}
                href={href}
              >
                {label}
              </NavLink>
            ))}

            <LanguageSwitch
              language={language}
              setLanguage={setLanguage}
            />

            <Button>{bookLabel}</Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export function Section({
  id,
  label,
  title,
  children,
  cream = false,
}) {
  return (
    <section
      id={id}
      className={
        (cream ? 'bg-cream' : 'bg-white') +
        ' scroll-mt-24 px-5 py-20 md:px-8 md:py-28'
      }
    >
      <Fade className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[.24em] text-navy">
          {label}
        </p>

        <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-navy md:text-5xl">
          {title}
        </h2>

        <div className="mt-8">{children}</div>
      </Fade>
    </section>
  );
}