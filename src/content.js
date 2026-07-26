export const whatsappUrl = 'https://wa.me/6285701461250?text=' + encodeURIComponent(`Hi OurLash 👋

I'd like to book an appointment.

Name:
Service:
Preferred Date:
Preferred Time:
Location:

Thank you.`);

export const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Programs', '#programs'],
  ['Gallery', '#home'],
  ['FAQ', '#home'],
  ['Contact', '#home'],
];

export const promiseItems = [
  ['Personal Consultation', 'We take the time to understand your natural lashes, your preferences, and the look you wish to achieve before every treatment.'],
  ['Professional Products', 'We carefully select professional products to ensure every treatment is safe, comfortable, and delivers beautiful results.'],
  ['Hygiene Standards', 'Every tool and workspace is thoroughly prepared before each appointment because your comfort and safety always come first.'],
  ['Comfortable Experience', 'We want every appointment to feel calm, relaxing, and unhurried—giving you time to simply enjoy the experience.'],
  ['Naturally Beautiful Results', "Our goal is never to create an overdone look, but to enhance the beauty that's already yours."],
  ['Aftercare Support', "You'll receive clear aftercare guidance to help maintain beautiful results long after your appointment."],
];

export const reasons = [
  ['Naturally Beautiful Results', 'Enhance your natural lashes without making them look heavy or overly dramatic.'],
  ['Personalised Consultation', 'Every client is unique, which is why every treatment is tailored to your natural lashes and personal preferences.'],
  ['Relaxing Experience', 'Enjoy a calm atmosphere, an unrushed appointment, and thoughtful attention to every detail.'],
  ['Transparent Pricing', 'Clear pricing with no hidden fees, so you always know exactly what to expect.'],
  ['Precision in Every Detail', 'We believe beautiful results come from patience, precision, and consistency throughout every step of the treatment.'],
  ['Ongoing Care', "Our service doesn't end when your appointment does.\n\nWe're here to support you with aftercare guidance and answer any questions you may have afterwards."],
];

export const services = [
  {
    name: 'Lash Lift',
    description: [
      'A Lash Lift gently lifts and curls your natural lashes from the root, creating the appearance of brighter, more open eyes without the need for eyelash extensions or an eyelash curler.',
      'The result is beautifully lifted lashes that remain lightweight, natural-looking, and effortless to maintain.',
    ],
    included: ['Personal consultation', 'Lash assessment', 'Eye cleansing', 'Professional Lash Lift treatment', 'Nourishing treatment', 'Aftercare guidance'],
    duration: 'Approximately 60 minutes',
    price: 'Rp85.000',
    cta: 'Book Lash Lift',
  },
  {
    name: 'Lash Lift + Tint',
    description: [
      'Enjoy all the benefits of a Lash Lift, enhanced with a professional lash tint to create darker, more defined lashes.',
      'Ideal for those who want naturally fuller-looking lashes without relying on mascara every day.',
    ],
    included: ['Everything included in the Lash Lift', '+', 'Professional Lash Tint'],
    duration: 'Approximately 70 minutes',
    price: 'Rp100.000',
    cta: 'Book Lash Lift + Tint',
  },
];

export const programs = [
  ['Founding Client', 'To celebrate the beginning of OurLash, our first 20 clients will enjoy a Rp20.000 discount on their appointment.\n\nOnce all 20 founding client spots have been claimed, this program will officially conclude.', 'Limited to First 20 Clients'],
  ['Welcome Offer', 'Each month, the first 10 bookings will receive a Rp10.000 discount on their selected treatment.\n\nA small welcome from us as you begin your journey with OurLash.', 'First 10 Bookings Every Month'],
  ['Loyalty Card', 'Every appointment brings you one step closer to exclusive rewards.\n\nCollect a stamp with every visit and enjoy special benefits as our way of thanking you for your continued trust and support.', 'Exclusive Member Benefit'],
  ['Ramadan Appreciation', 'During the month of Ramadan, we prepare a special appreciation program for our valued clients as a heartfelt thank you for being part of the OurLash journey.\n\nProgram details may vary each year and will be announced closer to Ramadan.', ''],
];
