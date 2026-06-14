// ─────────────────────────────────────────────
//  IDI Auto — Translations  (EN / RU)
// ─────────────────────────────────────────────
const translations = {
  en: {
    /* ── NAV ── */
    'nav.menu':        'Menu',
    'nav.close':       'Close',
    'nav.home':        'Home',
    'nav.cars':        'Automobiles',
    'nav.order':       'Import',
    'nav.services':    'Services',
    'nav.about':       'About',
    'nav.contact':     'Contact',

    /* ── MARQUEE ── */
    'marquee.scroll':  'Scroll',

    /* ── INDEX — HERO ── */
    'hero.title':      'Exporting Luxury<br>Cars Worldwide',
    'hero.desc':       'We source and deliver the world\'s most exclusive vehicles — Rolls&#8209;Royce, Bentley, Maybach, Ferrari, Lamborghini. From any country. To your door.',
    'hero.cta':        'Discover Our Exclusive Options',

    /* ── INDEX — MISSION ── */
    'mission.eyebrow': 'About IDI Auto',
    'mission.title':   'Exclusivity Without Borders',
    'mission.text':    'IDI Auto is a premium vehicle import service specialising in the world\'s most exclusive automobiles. We work directly with dealerships, auctions and private collections across Europe, the UAE and the USA to source vehicles that are rarely available through conventional channels.<br><br>Every order is handled personally. We do not sell from stock. We find exactly what you are looking for.',

    /* ── INDEX — FLEET ── */
    'fleet.title':     'Our Fleet',
    'fleet.sub':       'Exclusive Selection',
    'fleet.viewall':   'View All Available Vehicles →',
    'fleet.rr.tag':    'Ultra Luxury',
    'fleet.bentley.tag':'Grand Touring',
    'fleet.maybach.tag':'Ultimate Comfort',
    'fleet.ferrari.tag':'Performance',
    'fleet.lambo.tag': 'Supercar',
    'fleet.porsche.tag':'Precision',
    'fleet.mclaren.tag':'Hypercar',
    'fleet.bugatti.tag':'Exclusive',
    'fleet.aston.tag': 'British Grand Tourer',

    /* ── INDEX — PROCESS ── */
    'process.eyebrow':  'How We Work',
    'process.title':    'Global Export Process',
    'process.1.n':      '01',
    'process.1.title':  'Initial Consultation',
    'process.1.text':   'We discuss your vision, preferences and budget. Every detail matters — colour, spec, destination.',
    'process.2.n':      '02',
    'process.2.title':  'Global Sourcing',
    'process.2.text':   'We locate the exact vehicle worldwide — auctions, private sales, dealerships across Europe, UAE and USA.',
    'process.3.n':      '03',
    'process.3.title':  'Door-to-Door Delivery',
    'process.3.text':   'Full documentation, customs clearance and direct delivery. You receive the keys. Nothing else to worry about.',

    /* ── CONTACT FORM ── */
    'form.eyebrow':     'Get In Touch',
    'form.title':       'Contact<br>Form',
    'form.desc':        'Tell us what vehicle you are looking for. We will get back to you within 24 hours.',
    'form.name':        '*Name',
    'form.email':       '*Email',
    'form.phone':       '*Phone Number',
    'form.via':         '*Contact Me Via',
    'form.request':     '*Your Request',
    'form.send':        'Send Form',

    /* ── SOCIALS ── */
    'socials.title':    'Contact Us Directly',

    /* ── FOOTER ── */
    'footer.copy':      '© 2025 IDI Auto. All rights reserved.',
    'footer.legal':     'Legal Notice',
    'footer.privacy':   'Privacy Policy',
    'footer.cookie':    'Cookie Policy',
    'footer.terms':     'Terms of Service',

    /* ── CARS PAGE ── */
    'cars.eyebrow':     'Our Collection',
    'cars.title':       'Exclusive<br>Automobiles',
    'cars.intro':       'We do not maintain a fixed stock. Each vehicle is sourced specifically for the client. Below are the brands we regularly work with. Contact us for current availability and pricing.',
    'cars.cta.text':    'Don\'t see the brand or model you\'re looking for? We source any vehicle on request.',
    'cars.cta.btn':     'Request a Specific Vehicle',

    /* ── ORDER PAGE ── */
    'order.eyebrow':    'Start Your Order',
    'order.title':      'Import a<br>Vehicle',
    'order.h2':         'How to place an order',
    'order.intro':      'Fill in the form and we will contact you within 24 hours. There is no obligation — the first consultation is free.',
    'order.s1.title':   'Submit Your Request',
    'order.s1.text':    'Tell us the brand, model, specification and your budget. The more detail, the better.',
    'order.s2.title':   'We Search & Confirm',
    'order.s2.text':    'We locate the vehicle from our global network and confirm pricing and availability within 24–48 hours.',
    'order.s3.title':   'Agreement & Deposit',
    'order.s3.text':    'Once agreed, we sign a simple contract and collect a deposit to begin the sourcing process.',
    'order.s4.title':   'Delivery',
    'order.s4.text':    'We handle all documentation, customs and logistics. You receive the keys at your location.',
    'order.form.eyebrow':'Your Request',
    'order.form.brand': '*Brand & Model (e.g. Rolls-Royce Ghost)',
    'order.form.colour':'Preferred Colour / Specification',
    'order.form.dest':  'Delivery Country / City',
    'order.form.budget':'Budget (approximate)',
    'order.form.notes': 'Additional notes',

    /* ── SERVICES PAGE ── */
    'services.eyebrow': 'What We Offer',
    'services.title':   'Our<br>Services',
    'services.1.title': 'Vehicle Sourcing',
    'services.1.text':  'We search auctions, private sales and dealer networks worldwide to find the exact vehicle you want — including rare and limited-edition models.',
    'services.2.title': 'Pre-Purchase Inspection',
    'services.2.text':  'Every vehicle is independently inspected before purchase. We verify the history, condition and documentation so you buy with full confidence.',
    'services.3.title': 'Export Documentation',
    'services.3.text':  'We prepare all necessary paperwork — title transfer, export certificates, apostilles and any country-specific documents required for import.',
    'services.4.title': 'Customs Clearance',
    'services.4.text':  'We handle customs procedures for Russia, Kazakhstan, UAE and other destinations. Full legal compliance and duty transparency.',
    'services.5.title': 'International Logistics',
    'services.5.text':  'Door-to-door shipping by container, RoRo or enclosed transport. Full insurance included.',
    'services.6.title': 'Personal Manager',
    'services.6.text':  'Each client is assigned a dedicated manager who handles the entire process and provides updates at every stage.',
    'services.pay.eyebrow':  'Payment Options',
    'services.pay.title':    'Flexible payment.<br>Full transparency.',
    'services.pay.text':     'We accept bank transfers in USD, EUR, RUB and KZT. Cryptocurrency available for UAE and international orders. All pricing disclosed upfront — no hidden fees.',
    'services.time.eyebrow': 'Delivery Timeline',
    'services.time.title':   'From sourcing<br>to your door.',
    'services.time.text':    'Typical delivery time is 3–8 weeks depending on source country and destination. Express delivery from UAE to Kazakhstan from 2 weeks.',
    'services.cta':          'Start Your Order',

    /* ── ABOUT PAGE ── */
    'about.eyebrow':    'Our Story',
    'about.title':      'About<br>IDI Auto',
    'about.who.eyebrow':'Who We Are',
    'about.who.title':  'Exclusivity<br>Without Borders',
    'about.who.text':   'IDI Auto is a premium vehicle import service specialising in the world\'s most exclusive automobiles. We connect clients in Russia, Kazakhstan, the UAE and beyond with rare vehicles sourced from Europe, the USA and Asia.',
    'about.how.eyebrow':'Our Approach',
    'about.how.title':  'Personal.<br>Transparent.<br>Reliable.',
    'about.how.text':   'We do not operate a showroom or maintain stock. Every vehicle we source is found specifically for the client. Each client receives a personal manager and direct communication throughout the process.',
    'about.why.eyebrow':'Why IDI Auto',
    'about.a1.title':   'Global Network',
    'about.a1.text':    'Direct access to dealerships, private sellers and auction houses in Germany, UK, Italy, UAE, USA and Japan.',
    'about.a2.title':   'Full Legal Compliance',
    'about.a2.text':    'Every transaction is handled with complete documentation. We manage customs, duties and registration paperwork in full.',
    'about.a3.title':   'No Hidden Costs',
    'about.a3.text':    'All fees are disclosed upfront. The price you agree is the price you pay. No surprises at delivery.',
    'about.cta':        'Get in Touch',

    /* ── CONTACT PAGE ── */
    'contact.eyebrow':  'Get In Touch',
    'contact.title':    'Contact<br>Us',
    'contact.direct':   'Direct Contacts',
    'contact.response.label': 'Response Time',
    'contact.response.text':  'We respond to all enquiries within 24 hours. For urgent requests, please contact us via WhatsApp or Telegram.',
  },

  ru: {
    /* ── NAV ── */
    'nav.menu':        'Меню',
    'nav.close':       'Закрыть',
    'nav.home':        'Главная',
    'nav.cars':        'Автомобили',
    'nav.order':       'Заказать',
    'nav.services':    'Услуги',
    'nav.about':       'О нас',
    'nav.contact':     'Контакты',

    /* ── MARQUEE ── */
    'marquee.scroll':  'Вниз',

    /* ── INDEX — HERO ── */
    'hero.title':      'Эксклюзивные<br>Автомобили в Любую Точку',
    'hero.desc':       'Мы находим и доставляем самые редкие автомобили мира — Rolls&#8209;Royce, Bentley, Maybach, Ferrari, Lamborghini. Из любой страны. До вашей двери.',
    'hero.cta':        'Смотреть Автомобили',

    /* ── INDEX — MISSION ── */
    'mission.eyebrow': 'О компании IDI Auto',
    'mission.title':   'Эксклюзивность без Границ',
    'mission.text':    'IDI Auto — премиальный сервис по пригону и доставке самых эксклюзивных автомобилей в мире. Мы работаем напрямую с дилерами, аукционами и частными коллекциями в Европе, ОАЭ и США, находя автомобили, которых нет в обычных салонах.<br><br>Каждый заказ ведётся персонально. Мы не продаём со склада. Мы находим именно то, что вы ищете.',

    /* ── INDEX — FLEET ── */
    'fleet.title':     'Наш Парк',
    'fleet.sub':       'Эксклюзивная Подборка',
    'fleet.viewall':   'Смотреть Все Автомобили →',
    'fleet.rr.tag':    'Ультра Люкс',
    'fleet.bentley.tag':'Гранд Туризм',
    'fleet.maybach.tag':'Максимальный Комфорт',
    'fleet.ferrari.tag':'Производительность',
    'fleet.lambo.tag': 'Суперкар',
    'fleet.porsche.tag':'Точность',
    'fleet.mclaren.tag':'Гиперкар',
    'fleet.bugatti.tag':'Эксклюзив',
    'fleet.aston.tag': 'Британский GT',

    /* ── INDEX — PROCESS ── */
    'process.eyebrow':  'Как мы работаем',
    'process.title':    'Процесс Пригона',
    'process.1.n':      '01',
    'process.1.title':  'Консультация',
    'process.1.text':   'Обсуждаем ваши пожелания, бюджет и место доставки. Каждая деталь важна — цвет, комплектация, марка.',
    'process.2.n':      '02',
    'process.2.title':  'Поиск Автомобиля',
    'process.2.text':   'Находим нужный автомобиль по всему миру — аукционы, частные продажи, дилеры в Европе, ОАЭ и США.',
    'process.3.n':      '03',
    'process.3.title':  'Доставка До Двери',
    'process.3.text':   'Полное оформление документов, таможня и прямая доставка. Вы получаете ключи — и больше ни о чём не думаете.',

    /* ── CONTACT FORM ── */
    'form.eyebrow':     'Написать нам',
    'form.title':       'Форма<br>Заявки',
    'form.desc':        'Расскажите, какой автомобиль вы ищете. Мы свяжемся с вами в течение 24 часов.',
    'form.name':        '*Имя',
    'form.email':       '*Email',
    'form.phone':       '*Номер телефона',
    'form.via':         '*Способ связи',
    'form.request':     '*Ваш запрос',
    'form.send':        'Отправить',

    /* ── SOCIALS ── */
    'socials.title':    'Связаться Напрямую',

    /* ── FOOTER ── */
    'footer.copy':      '© 2025 IDI Auto. Все права защищены.',
    'footer.legal':     'Правовая информация',
    'footer.privacy':   'Политика конфиденциальности',
    'footer.cookie':    'Политика Cookie',
    'footer.terms':     'Условия использования',

    /* ── CARS PAGE ── */
    'cars.eyebrow':     'Наша Коллекция',
    'cars.title':       'Эксклюзивные<br>Автомобили',
    'cars.intro':       'Мы не держим фиксированный склад. Каждый автомобиль подбирается под конкретного клиента. Ниже — бренды, с которыми мы работаем. Свяжитесь с нами для уточнения наличия и цен.',
    'cars.cta.text':    'Не нашли нужную марку или модель? Мы пригоняем любой автомобиль под запрос.',
    'cars.cta.btn':     'Запросить Конкретный Автомобиль',

    /* ── ORDER PAGE ── */
    'order.eyebrow':    'Оформить Заказ',
    'order.title':      'Пригнать<br>Автомобиль',
    'order.h2':         'Как сделать заказ',
    'order.intro':      'Заполните форму — мы свяжемся в течение 24 часов. Первая консультация бесплатна и ни к чему не обязывает.',
    'order.s1.title':   'Отправьте Запрос',
    'order.s1.text':    'Укажите марку, модель, комплектацию и бюджет. Чем больше деталей — тем точнее подбор.',
    'order.s2.title':   'Поиск и Подтверждение',
    'order.s2.text':    'Находим автомобиль в нашей глобальной сети и подтверждаем цену и наличие в течение 24–48 часов.',
    'order.s3.title':   'Договор и Аванс',
    'order.s3.text':    'После согласования подписываем договор и принимаем аванс для начала работы.',
    'order.s4.title':   'Доставка',
    'order.s4.text':    'Берём на себя всю документацию, таможню и логистику. Вы получаете ключи.',
    'order.form.eyebrow':'Ваш Запрос',
    'order.form.brand': '*Марка и модель (например, Rolls-Royce Ghost)',
    'order.form.colour':'Цвет / Комплектация',
    'order.form.dest':  'Страна / Город доставки',
    'order.form.budget':'Бюджет (приблизительно)',
    'order.form.notes': 'Дополнительные пожелания',

    /* ── SERVICES PAGE ── */
    'services.eyebrow': 'Что мы предлагаем',
    'services.title':   'Наши<br>Услуги',
    'services.1.title': 'Поиск Автомобиля',
    'services.1.text':  'Ищем по аукционам, частным продажам и дилерам по всему миру — включая редкие и лимитированные модели.',
    'services.2.title': 'Проверка перед покупкой',
    'services.2.text':  'Каждый автомобиль проходит независимую проверку до покупки. Верифицируем историю, состояние и документы.',
    'services.3.title': 'Экспортная документация',
    'services.3.text':  'Оформляем все необходимые документы — ПТС, экспортные сертификаты, апостили и страновые документы.',
    'services.4.title': 'Таможенное оформление',
    'services.4.text':  'Берём на себя таможню для России, Казахстана, ОАЭ и других стран. Полная прозрачность по пошлинам.',
    'services.5.title': 'Международная Логистика',
    'services.5.text':  'Доставка до двери контейнером, RoRo или закрытым транспортом. Полное страхование включено.',
    'services.6.title': 'Личный Менеджер',
    'services.6.text':  'Каждому клиенту назначается персональный менеджер, который ведёт весь процесс и держит вас в курсе.',
    'services.pay.eyebrow':  'Способы оплаты',
    'services.pay.title':    'Гибкая оплата.<br>Полная прозрачность.',
    'services.pay.text':     'Принимаем переводы в USD, EUR, RUB и KZT. Криптовалюта доступна для заказов из ОАЭ и международных клиентов. Все расходы озвучиваются заранее.',
    'services.time.eyebrow': 'Сроки доставки',
    'services.time.title':   'От подбора<br>до ваших рук.',
    'services.time.text':    'Стандартный срок — 3–8 недель в зависимости от страны и направления. Экспресс-доставка из ОАЭ в Казахстан — от 2 недель.',
    'services.cta':          'Оформить Заказ',

    /* ── ABOUT PAGE ── */
    'about.eyebrow':    'Наша История',
    'about.title':      'Об<br>IDI Auto',
    'about.who.eyebrow':'Кто мы',
    'about.who.title':  'Эксклюзивность<br>без Границ',
    'about.who.text':   'IDI Auto — премиальный сервис по пригону самых эксклюзивных автомобилей в мире. Мы работаем для клиентов в России, Казахстане, ОАЭ и за их пределами, подбирая редкие автомобили из Европы, США и Азии.',
    'about.how.eyebrow':'Наш Подход',
    'about.how.title':  'Персонально.<br>Прозрачно.<br>Надёжно.',
    'about.how.text':   'Мы не держим шоурум и не работаем со склада. Каждый автомобиль подбирается конкретно для клиента. Каждый клиент получает персонального менеджера и прямую коммуникацию на всех этапах.',
    'about.why.eyebrow':'Почему IDI Auto',
    'about.a1.title':   'Глобальная Сеть',
    'about.a1.text':    'Прямой доступ к дилерам, частным продавцам и аукционным домам в Германии, Великобритании, Италии, ОАЭ, США и Японии.',
    'about.a2.title':   'Полное Соответствие Законодательству',
    'about.a2.text':    'Каждая сделка сопровождается полным пакетом документов. Берём на себя таможню, пошлины и регистрацию.',
    'about.a3.title':   'Никаких Скрытых Платежей',
    'about.a3.text':    'Все расходы озвучиваются заранее. Цена, которую вы согласовали — это цена, которую вы платите.',
    'about.cta':        'Связаться с Нами',

    /* ── CONTACT PAGE ── */
    'contact.eyebrow':  'Связаться с нами',
    'contact.title':    'Контакты',
    'contact.direct':   'Прямые Контакты',
    'contact.response.label': 'Время ответа',
    'contact.response.text':  'Отвечаем на все запросы в течение 24 часов. Для срочных вопросов — WhatsApp или Telegram.',
  }
};

// ─────────────────────────────────────────────
//  Language Engine
// ─────────────────────────────────────────────
let currentLang = localStorage.getItem('idi_lang') || 'ru';

function t(key) {
  return translations[currentLang][key] || translations['ru'][key] || key;
}

function applyTranslations() {
  // text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key] !== undefined) {
      el.textContent = translations[currentLang][key];
    }
  });

  // innerHTML (for <br> tags etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[currentLang][key] !== undefined) {
      el.innerHTML = translations[currentLang][key];
    }
  });

  // placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[currentLang][key] !== undefined) {
      el.placeholder = translations[currentLang][key];
    }
  });

  // Lang switcher shows the OTHER language — click to switch to it
  const otherLang = currentLang === 'ru' ? 'en' : 'ru';
  document.querySelectorAll('.lang-btn').forEach(el => {
    el.textContent = otherLang.toUpperCase();
    el.setAttribute('onclick', `switchLang('${otherLang}')`);
  });

  // Update html lang attribute
  document.documentElement.lang = currentLang;
}

function switchLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  localStorage.setItem('idi_lang', lang);
  applyTranslations();
}

// Run on page load
document.addEventListener('DOMContentLoaded', applyTranslations);
