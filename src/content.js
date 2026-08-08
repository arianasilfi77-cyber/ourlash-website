export const whatsappUrl =
  'https://wa.me/6285701461250?text=' +
  encodeURIComponent(`Hi OurLash 👋

I'd like to book an appointment.

Name:
Service:
Preferred Date:
Preferred Time:
Location:

Thank you.`);

export const checkLocationUrl =
  'https://wa.me/6285701461250?text=' +
  encodeURIComponent(`Hi OurLash 👋

I'd like to check whether my location is within the OurLash home service area.

My location:

Thank you.`);

export const languages = {
  id: 'Indonesia',
  en: 'English',
};

export const content = {
  id: {
    navItems: [
  ['Beranda', '#home'],
  ['Tentang', '#about'],
  ['Layanan', '#services'],
  ['Galeri', '#gallery'],
  ['Programs', '#programs'],
  ['FAQ', '#faq'],
  ['Kontak', '#contact'],
  ['Aftercare', '/aftercare'],
],
    book: 'Book Now',
    hero: {
      label: 'Premium Lash Studio',
      title: 'Wake Up to Naturally Beautiful Lashes.',
      subtitle: 'Natural. Elegant. Effortlessly You.',
      body: 'Perawatan bulu mata profesional yang dirancang untuk menonjolkan kecantikan alami Anda dengan presisi dan perhatian. Setiap appointment disesuaikan dengan cermat untuk menciptakan hasil elegan, tahan lama, nyaman, dan terlihat effortless.',
      secondary: 'Lihat Layanan',
      imageLabel: 'Hasil Nyata. Cantik Alami.',
    },
    about: {
      label: 'About OurLash',
      title: 'Enhancing Your Natural Beauty, Never Overpowering It.',
      body: [
        'Di OurLash, kami percaya perawatan kecantikan terbaik tidak mengubah siapa diri Anda—melainkan menonjolkan kecantikan yang sudah ada.',
        'Setiap appointment dimulai dengan konsultasi personal untuk memahami bulu mata alami, bentuk mata, dan hasil yang ingin Anda capai. Dengan menyesuaikan setiap treatment pada fitur Anda, kami menciptakan hasil yang natural, nyaman, dan uniquely yours.',
        'Dari konsultasi hingga aftercare, setiap langkah dilakukan secara profesional, higienis, dan penuh perhatian pada detail.',
        'Tujuan kami sederhana: membantu Anda pulang dengan lashes yang Anda suka dan rasa percaya diri yang terbawa setiap hari.',
      ],
    },
    promiseIntro: 'Hasil yang istimewa tidak pernah terjadi secara kebetulan.\n\nSemua dibangun melalui persiapan yang penuh perhatian pada detail, dan komitmen untuk memberikan pengalaman yang konsisten dan menyenangkan bagi setiap klien.',
    promiseItems: [
      ['Konsultasi Personal', 'Kami meluangkan waktu untuk memahami bulu mata alami, preferensi, dan tampilan yang Anda inginkan sebelum setiap treatment.'],
      ['Produk Profesional', 'Kami memilih produk profesional dengan cermat agar setiap treatment aman, nyaman, dan memberikan hasil yang indah.'],
      ['Standar Higienis', 'Setiap alat dan area kerja disiapkan dengan bersih sebelum appointment karena kenyamanan dan keamanan Anda selalu utama.'],
      ['Pengalaman yang Nyaman', 'Kami ingin setiap appointment terasa tenang, relaks, dan tidak terburu-buru—memberi Anda waktu untuk menikmati pengalaman.'],
      ['Hasil Cantik Alami', 'Tujuan kami bukan membuat tampilan yang berlebihan, tetapi menonjolkan kecantikan alami Anda.'],
      ['Dukungan Aftercare', 'Anda akan mendapatkan panduan aftercare yang jelas untuk menjaga hasil tetap indah setelah appointment.'],
    ],
    reasons: [
      ['Hasil Cantik Alami', 'Menonjolkan bulu mata alami tanpa membuatnya terlihat berat atau terlalu dramatis.'],
      ['Konsultasi Personal', 'Setiap klien itu unik, sehingga setiap treatment disesuaikan dengan bulu mata alami dan preferensi pribadi.'],
      ['Pengalaman Relaks', 'Nikmati suasana yang tenang, appointment tanpa terburu-buru, dan penuh perhatian pada setiap detail.'],
      ['Harga Transparan', 'Harga jelas tanpa biaya tersembunyi, sehingga Anda selalu tahu apa yang perlu disiapkan.'],
      ['Presisi di Setiap Detail', 'Kami percaya hasil yang indah datang dari kesabaran, ketelitian, dan konsistensi di setiap tahap treatment.'],
      ['Perawatan Berkelanjutan', 'Layanan kami tidak berhenti saat appointment selesai.\n\nKami siap mendukung Anda dengan panduan aftercare dan menjawab pertanyaan setelahnya.'],
    ],
    services: [
      {
        name: 'Lash Lift',
        description: ['Lash Lift mengangkat dan melentikkan bulu mata alami dari akar, menciptakan tampilan mata yang lebih terbuka tanpa eyelash extension atau penjepit bulu mata.', 'Hasilnya adalah bulu mata terangkat yang tetap ringan, natural-looking, dan effortless untuk dirawat.'],
        included: ['Konsultasi personal', 'Analisis bulu mata', 'Pembersihan area mata', 'Treatment Lash Lift profesional', 'Nourishing treatment', 'Panduan aftercare'],
        duration: 'Sekitar 60 menit',
        price: 'Rp85.000',
        cta: 'Book Lash Lift',
      },
      {
        name: 'Lash Lift + Tint',
        description: ['Nikmati semua manfaat Lash Lift, dilengkapi tint profesional untuk membuat bulu mata terlihat lebih gelap dan defined.', 'Ideal untuk Anda yang ingin bulu mata tampak lebih penuh secara natural tanpa bergantung pada mascara setiap hari.'],
        included: ['Semua yang termasuk dalam Lash Lift', '+', 'Professional Lash Tint'],
        duration: 'Sekitar 70 menit',
        price: 'Rp100.000',
        cta: 'Book Lash Lift + Tint',
      },
    ],
    comingSoon: {
  label: 'Segera Hadir',
  title: 'Lash Extension',
  body: 'Kami sedang mempersiapkan layanan Lash Extension dengan komitmen yang sama terhadap kualitas, kenyamanan, dan perhatian pada setiap detail yang menjadi ciri khas setiap treatment di OurLash.',
  cta: 'Nantikan kehadirannya.',
},
    serviceArea: {
  label: 'Area Layanan',
  title: 'Perawatan Lash Profesional, Di Mana Pun Anda Merasa Nyaman.',
  intro: 'Nikmati kenyamanan perawatan bulu mata profesional langsung dari lokasi pilihan Anda.\n\nLayanan home service kami tersedia di area tertentu di Yogyakarta dengan biaya perjalanan yang transparan, sehingga Anda dapat mengetahui total biaya sebelum mengonfirmasi appointment.',
  areasTitle: 'Area Layanan Kami',
  areas: ['Sleman', 'Kota Yogyakarta', 'Bantul'],
  travelFeeTitle: 'Biaya Perjalanan',
  travelFees: [
    ['0–5 km', 'Gratis'],
    ['6–10 km', 'Rp15.000'],
    ['11–15 km', 'Rp25.000'],
  ],
  note: 'Biaya perjalanan dihitung berdasarkan jarak antara lokasi OurLash dan alamat appointment Anda.\n\nJika lokasi Anda berada di luar area layanan kami, silakan hubungi kami terlebih dahulu agar kami dapat mengecek ketersediaan layanan.',
  button: 'Cek Lokasi Saya',
},
    programs: [
      ['Founding Client', 'Untuk merayakan awal perjalanan OurLash, 20 klien pertama akan mendapatkan diskon Rp20.000 untuk appointment mereka.\n\nSetelah seluruh 20 slot founding client terpenuhi, program ini akan resmi berakhir.', '20 Klien Pertama'],
      ['Welcome Offer', 'Setiap bulan, 10 booking pertama dari klien baru akan mendapatkan diskon Rp10.000 untuk treatment pilihan.\n\nSambutan kecil dari kami untuk memulai perjalanan Anda bersama OurLash.', '10 Booking Pertama / Bulan'],
      ['Loyalty Card', 'Setiap appointment membawa Anda selangkah lebih dekat dengan reward eksklusif.\n\nKumpulkan stamp setiap kunjungan dan nikmati benefit spesial sebagai ucapan terima kasih atas kepercayaan Anda.', 'Member Benefit'],
      ['Ramadan Appreciation', 'Selama bulan Ramadan, kami menyiapkan program apresiasi khusus untuk klien tersayang sebagai ucapan terima kasih telah menjadi bagian dari perjalanan OurLash.\n\nDetail program dapat berbeda setiap tahun dan akan diumumkan menjelang Ramadan.', 'Special Appreciation',],
    ],

    programsIntro: 'Di OurLash, kami percaya bahwa hubungan yang bermakna dibangun melalui pengalaman yang selalu memuaskan, bukan sekadar melalui potongan harga.\n\nProgram-program spesial kami dirancang sebagai bentuk apresiasi tulus untuk setiap klien yang telah mempercayakan perawatan bulu matanya kepada OurLash.',

    programsOutro: 'Perjalanan Anda bersama OurLash tidak berhenti setelah satu kali appointment.\n\nKami berharap setiap kunjungan menjadi awal dari hubungan jangka panjang yang dibangun atas dasar kepercayaan, kualitas yang konsisten, dan hasil yang cantik secara natural.',

gallery: {
  label: 'Real Results',
  title: 'Beautiful Lashes. Real Clients.',
  intro: 'Setiap transformasi yang ditampilkan di sini adalah hasil nyata dari klien OurLash, tanpa false lashes atau mascara. Hanya bulu mata yang terangkat secara natural dan terlihat lebih sehat.',
  before: 'Before',
  after: 'After',
  transformationTitle: 'Lash Lift Transformation',
  transformationDescription: 'Natural lift. No extensions. No mascara.',
},
    faq: {
      label: 'FAQ',
      title: 'Frequently Asked Questions.',
      items: [
        ['Berapa lama hasil Lash Lift bertahan?', 'Umumnya 4–6 minggu, tergantung siklus bulu mata alami dan kebiasaan aftercare Anda.'],
        ['Apakah Lash Lift aman untuk bulu mata alami?', 'Ya, treatment dilakukan dengan produk profesional, waktu proses yang tepat, dan analisis bulu mata terlebih dahulu.'],
        ['Bolehkah memakai mascara setelah treatment?', 'Boleh setelah 24 jam pertama. Untuk hasil lebih tahan lama, pilih mascara yang ringan dan mudah dibersihkan.'],
        ['Apakah tersedia home service?', 'Ya, home service tersedia di area tertentu di Yogyakarta dengan biaya perjalanan transparan berdasarkan jarak.'],
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Ready For Naturally Beautiful Lashes?',
      intro: 'Hubungi kami untuk booking, konsultasi layanan, atau mengecek ketersediaan home service.',
      details: [['WhatsApp', '+62 857-0146-1250'], ['Instagram', '@ourlash.studio'], ['Jam Operasional', 'Senin–Sabtu, 09.00–18.00 WIB'], ['Area Layanan', 'Sleman, Kota Yogyakarta, Bantul']],
    },
    footer: 'Premium lash care yang natural, nyaman, dan penuh perhatian di Yogyakarta.',
    aftercare: {
      label: 'Aftercare Guide',
      title: 'Keep Your Lash Lift Beautiful for Longer.',
      intro: 'Ikuti panduan sederhana ini setelah appointment agar hasil tetap rapi, nyaman, dan tahan lama.',
      tips: [['24 Jam Pertama', 'Hindari air, uap panas, mascara, dan menggosok area mata.'], ['Rutinitas Harian', 'Sisir bulu mata dengan spoolie bersih dan bersihkan area mata secara lembut.'], ['Produk yang Disarankan', 'Gunakan pembersih ringan bebas minyak di area mata untuk membantu menjaga hasil lift.'], ['Kapan Booking Ulang', 'Jadwalkan appointment berikutnya setelah 4–6 minggu sesuai kondisi bulu mata alami.']],
    },
  },
};

content.en = {
  ...content.id,

 navItems: [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Gallery', '#gallery'],
  ['Programs', '#programs'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
  ['Aftercare', '/aftercare'],
],

  book: 'Book Now',

  hero: {
    label: 'Premium Lash Studio',
    title: 'Wake Up to Naturally Beautiful Lashes.',
    subtitle: 'Natural. Elegant. Effortlessly You.',
    body: 'Professional lash treatments designed to enhance your natural beauty with precision and care. Every appointment is thoughtfully tailored to create elegant, long-lasting results that feel comfortable and look effortlessly beautiful.',
    secondary: 'View Services',
    imageLabel: 'Real Results. Beautifully Natural.',
  },

  about: {
    label: 'About OurLash',
    title: 'Enhancing Your Natural Beauty, Never Overpowering It.',
    body: [
      'At OurLash, we believe the best beauty treatments do not change who you are—they simply enhance what is already beautiful.',
      'Every appointment begins with a personal consultation to understand your natural lashes, eye shape, and the look you want to achieve. By tailoring each treatment to your individual features, we create results that feel natural, comfortable, and uniquely yours.',
      'From consultation to aftercare, every step is carried out with professionalism, high hygiene standards, and genuine attention to detail.',
      'Our goal is simple: to help you leave with lashes you will love and confidence you will carry with you every day.',
    ],
  },

  promiseIntro:
    'Exceptional results are never accidental.\n\nThey are built through thoughtful preparation, attention to detail, and a commitment to delivering a consistently enjoyable experience for every client.',

  promiseItems: [
    [
      'Personal Consultation',
      'We take the time to understand your natural lashes, preferences, and the look you want before every treatment.',
    ],
    [
      'Professional Products',
      'We carefully select professional products to ensure every treatment is safe, comfortable, and beautifully performed.',
    ],
    [
      'Hygiene Standards',
      'Every tool and workspace is thoroughly prepared before each appointment because your comfort and safety always come first.',
    ],
    [
      'Comfortable Experience',
      'We want every appointment to feel calm, relaxing, and unrushed, giving you time to simply enjoy the experience.',
    ],
    [
      'Naturally Beautiful Results',
      'Our goal is not to create an overly dramatic look, but to enhance your natural beauty.',
    ],
    [
      'Aftercare Support',
      'You will receive clear aftercare guidance to help maintain your results beautifully after your appointment.',
    ],
  ],

  reasons: [
    [
      'Naturally Beautiful Results',
      'Enhancing your natural lashes without making them look heavy or overly dramatic.',
    ],
    [
      'Personal Consultation',
      'Every client is unique, so each treatment is tailored to their natural lashes and personal preferences.',
    ],
    [
      'Relaxing Experience',
      'Enjoy a calm atmosphere, unrushed appointments, and thoughtful attention to every detail.',
    ],
    [
      'Transparent Pricing',
      'Clear pricing with no hidden fees, so you always know what to prepare for.',
    ],
    [
      'Precision in Every Detail',
      'We believe beautiful results come from patience, precision, and consistency throughout every step of the treatment.',
    ],
    [
      'Ongoing Care',
      'Our service does not end when your appointment does.\n\nWe are here to support you with aftercare guidance and answer any questions afterward.',
    ],
  ],

  services: [
    {
      name: 'Lash Lift',
      description: [
        'Lash Lift lifts and curls your natural lashes from the root, creating a more open-looking eye without eyelash extensions or an eyelash curler.',
        'The result is beautifully lifted lashes that remain lightweight, natural-looking, and effortless to maintain.',
      ],
      included: [
        'Personal consultation',
        'Lash assessment',
        'Eye area cleansing',
        'Professional Lash Lift treatment',
        'Nourishing treatment',
        'Aftercare guidance',
      ],
      duration: 'Approximately 60 minutes',
      price: 'Rp85,000',
      cta: 'Book Lash Lift',
    },
    {
      name: 'Lash Lift + Tint',
      description: [
        'Enjoy all the benefits of a Lash Lift, enhanced with a professional tint to make your natural lashes appear darker and more defined.',
        'Ideal for anyone who wants their lashes to look naturally fuller without relying on mascara every day.',
      ],
      included: [
        'Everything included in Lash Lift',
        'Professional Lash Tint',
      ],
      duration: 'Approximately 70 minutes',
      price: 'Rp100,000',
      cta: 'Book Lash Lift + Tint',
    },
  ],
comingSoon: {
  label: 'Coming Soon',
  title: 'Lash Extension',
  body: 'We are currently preparing our Lash Extension service with the same commitment to quality, comfort, and attention to detail that defines every OurLash treatment.',
  cta: 'Stay tuned.',
},
serviceArea: {
  label: 'Service Area',
  title: 'Professional Lash Care, Wherever You Feel Most Comfortable.',
  intro: 'Enjoy professional lash treatments from the comfort of your preferred location.\n\nOur home service is available in selected areas across Yogyakarta with transparent travel fees, so you know the total cost before confirming your appointment.',
  areasTitle: 'Areas We Serve',
  areas: ['Sleman', 'Yogyakarta City', 'Bantul'],
  travelFeeTitle: 'Travel Fee',
  travelFees: [
    ['0–5 km', 'Free'],
    ['6–10 km', 'Rp15,000'],
    ['11–15 km', 'Rp25,000'],
  ],
  note: 'Travel fees are calculated based on the distance between the OurLash location and your appointment address.\n\nIf your location is outside our service area, please contact us first so we can check service availability.',
  button: 'Check My Location',
},
  programs: [
    [
      'Founding Client',
      'To celebrate the beginning of OurLash, the first 20 clients will receive Rp20,000 off their appointment.\n\nOnce all 20 founding client slots are filled, the program will officially end.',
      'Limited to the First 20 Clients',
    ],
    [
      'Welcome Offer',
      'Every month, the first 10 bookings from new clients will receive Rp10,000 off their selected treatment.\n\nA small welcome from us as you begin your journey with OurLash.',
      'First 10 Bookings Every Month',
    ],
    [
      'Loyalty Card',
      'Every appointment brings you one step closer to an exclusive reward.\n\nCollect a stamp with every visit and enjoy special benefits as our way of saying thank you for your continued trust.',
      'Exclusive Member Benefit',
    ],
    [
      'Ramadan Appreciation',
      'During Ramadan, we prepare a special appreciation program for our valued clients as a thank you for being part of the OurLash journey.\n\nProgram details may vary each year and will be announced closer to Ramadan.',
      'Special Appreciation',
    ],
  ],

  programsIntro: 'At OurLash, we believe meaningful relationships are built through consistently satisfying experiences, not simply through discounts.\n\nOur special programs are designed as a genuine way to appreciate every client who has trusted OurLash with their lash care.',

  programsOutro: 'Your journey with OurLash does not end after a single appointment.\n\nWe hope every visit becomes the beginning of a long-term relationship built on trust, consistent quality, and naturally beautiful results.',

 gallery: {
  label: 'Real Results',
  title: 'Beautiful Lashes. Real Clients.',
  intro: 'Every transformation shown here is a real OurLash client with no false lashes or mascara. Just naturally lifted, healthier-looking lashes.',
  before: 'Before',
  after: 'After',
  transformationTitle: 'Lash Lift Transformation',
  transformationDescription: 'Natural lift. No extensions. No mascara.',
},

  faq: {
    label: 'FAQ',
    title: 'Frequently Asked Questions.',
    items: [
      [
        'How long does a Lash Lift last?',
        'Usually 4–6 weeks, depending on your natural lash cycle and aftercare habits.',
      ],
      [
        'Is Lash Lift safe for natural lashes?',
        'Yes, the treatment uses professional products, proper processing time, and a lash assessment first.',
      ],
      [
        'Can I wear mascara after treatment?',
        'Yes, after the first 24 hours. For longer-lasting results, choose a lightweight mascara that is easy to remove.',
      ],
      [
        'Is home service available?',
        'Yes, home service is available in selected areas across Yogyakarta with transparent travel fees based on distance.',
      ],
    ],
  },

  contact: {
    label: 'Contact',
    title: 'Ready for Naturally Beautiful Lashes?',
    intro:
      'Contact us to book, consult about services, or check home service availability.',
    details: [
      ['WhatsApp', '+62 857-0146-1250'],
      ['Instagram', '@ourlash.studio'],
      ['Operating Hours', 'Monday–Saturday, 09.00–18.00 WIB'],
      ['Service Area', 'Sleman, Yogyakarta City, Bantul'],
    ],
  },

  footer:
    'Premium lash care that feels natural, comfortable, and thoughtful in Yogyakarta.',

  aftercare: {
    label: 'Aftercare Guide',
    title: 'Keep Your Lash Lift Beautiful for Longer.',
    intro:
      'Follow these simple steps after your appointment to keep results neat, comfortable, and long-lasting.',
    tips: [
      [
        'First 24 Hours',
        'Avoid water, steam, mascara, and rubbing the eye area.',
      ],
      [
        'Daily Routine',
        'Brush lashes with a clean spoolie and cleanse the eye area gently.',
      ],
      [
        'Recommended Products',
        'Use a gentle oil-free cleanser around the eyes to help maintain your lift.',
      ],
      [
        'When to Rebook',
        'Schedule your next appointment after 4–6 weeks depending on your natural lash condition.',
      ],
    ],
  },
};