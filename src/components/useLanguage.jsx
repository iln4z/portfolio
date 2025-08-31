import { useState, createContext, useContext } from 'react';

const translations = {
  en: {
    about: "< ABOUT ME >",
    projects: "< PROJECTS >",
    contact: "CONTACT",
    lang: "rus",
    Projects: "Featured Projects",
    Skills: "Skills",
    Clients: "What My Clients Say",
    About: "About me",
    Why: "Why work with me?",
    clean: "Writing clean, well-structured code",
    Always: "Always available and open to discussing your project",
    budget: "Delivering smart, budget-friendly solutions",
    UX: "Helping you enhance your product’s UX/UI",
    together: "Let's work together!",
    start: "Great things start with a conversation. Let’s create something people will remember.",
    skillsFrontend: 'Frontend Stack',
    skillsDevTools: 'Dev Tools',
    skillsBestPractices: 'Best Practices',
    skillsDesignTools: 'Design Tools',
    title4: "Dmitry O.",
    title5: "Elena F.",
    title6: "Artyom L.",
    title7: "Svetlana K.",
    title8: "Kirill V.",
    title9: "Marina P.",
    description1: "I needed a landing page for my startup in 48 hours. Ilnaz delivered a stunning, fully responsive site with smooth animations and perfect performance. He even optimized the SEO. The client loved it. You're a lifesaver!",
    description2: "Our website crashed during a major product launch. I contacted Ilnaz at midnight — he responded in 10 minutes, found the bug, and fixed it within an hour. The site was back online instantly. Fast, reliable, and brilliant under pressure.",
    description3: "I had an old website that was slow and not mobile-friendly. Ilnaz rebuilt the frontend from scratch — now it's fast, modern, and looks amazing on all devices. He also improved the UX. I get more conversions now. Highly recommend!",
    description4: "I hired Ilnaz to build the frontend for our SaaS platform. He implemented complex UI with React, TypeScript, and GSAP animations. Code is clean, responsive, and bug-free. He met all deadlines. A true professional.",
    description5: "My site was loading in 5 seconds. He optimized images, lazy-loaded components, and refactored CSS. Now it loads in under 1 second. Performance improved dramatically. He also fixed accessibility issues. Perfect work!",
    description6: "Our database query was breaking the frontend. Ilnaz found the issue, fixed the backend logic, and updated the API. The site now works flawlessly.",
    description7: "I wanted a website that feels alive. Ilnaz added subtle hover effects, smooth transitions, and micro-interactions. The animations are smooth, not distracting. The design is modern and elegant. Clients keep complimenting it.",
    description8: "24 hours before investor pitch — our dashboard was broken. He fixed the UI, added real-time data, and made it mobile-friendly. He worked non-stop. The presentation went perfectly. He saved our funding round.",
    description9: "I needed a landing page with a contact form and CRM integration. Ilnaz built it in 3 days: responsive, fast, with smooth animations. Form works perfectly, data goes straight to our system. Clean code, no issues. 10/10!",
    aboutname: "Hi, I’m Ilnaz Kalimullin.",
    abouttext1: "I’ve been friends with computers for over two-thirds of my life — what started as curiosity has turned into a lifelong passion for creating things that are not just functional, but beautiful.",
    abouttext2: "Over the years, I’ve built skills in photo editing, video production, and programming, always driven by a deep attention to detail. I’m the kind of person who can spend hours fine-tuning a single animation or debugging a layout pixel by pixel — because I care about getting it just right.",
    abouttext3: "If I don’t know something, I won’t pretend I do. Instead, I’ll learn it — thoroughly. That mindset keeps me growing and helps me stay on top of the ever-evolving web.",
    abouttext4: "I aim to be not just good, but one of the best in frontend development. I embrace new technologies with excitement and constantly look for ways to improve my craft.",
    abouttext5: "When I’m not coding, you’ll find me swimming, playing basketball, exploring nature, travelling to new places, or simply enjoying meaningful conversations with friends. Balance, curiosity, and persistence — that’s what drives me.",
    aboutb: "< About >",
    projectsb: "< Projects >",
    skillsb: "< Skills >",
    contactb: "< Contact >",
    langb: "rus",
    menuTitle: "Main Menu"
  },
  ru: {
    about: "< ОБО МНЕ >",
    projects: "< ПРОЕКТЫ >",
    contact: "КОНТАКТЫ",
    lang: "eng",
    Projects: "Мои проекты",
    Skills: "Мои навыки",
    Clients: "Отзывы клиентов",
    About: "Обо мне",
    Why: "Почему стоит работать со мной?",
    clean: "Пишу чистый, хорошо структурированный код",
    Always: "Всегда на связи и открыт к обсуждению проекта",
    budget: "Предлагаю умные решения, укладывающиеся в ваш бюджет",
    UX: "Помогаю улучшить UX/UI вашего продукта",
    together: "Давайте работать вместе!",
    start: "Великие дела начинаются с разговора. Давайте создадим что-то, что запомнится надолго.",
    skillsFrontend: 'Фронтенд-стек',
    skillsDevTools: 'Инструменты разработки',
    skillsBestPractices: 'Подход',
    skillsDesignTools: 'Дизайн-инструменты',
    title4: "Дмитрий O.",
    title5: "Елена Ф.",
    title6: "Артем Л.",
    title7: "Светлана К.",
    title8: "Кирилл В.",
    title9: "Марина П.",
    description1: 'Мне нужен был лендинг для стартапа за 48 часов. Он сдал потрясающий, полностью адаптивный сайт с плавными анимациями и отличной производительностью. Он даже настроил SEO. Клиент был в восторге. Ты настоящий спаситель!',
    description2: "Наш сайт упал во время крупного запуска продукта. Я написал Ильназу в полночь — он ответил через 10 минут, нашёл ошибку и починил её за час. Сайт мгновенно заработал. Быстро, надёжно и без паники.",
    description3: "У меня был старый, медленный сайт, неадаптированный под мобильные. Ильназ переписал фронтенд с нуля — теперь он быстрый, современный и отлично выглядит на всех устройствах. Ещё и UX улучшил. Конверсии выросли. Однозначно рекомендую!",
    description4: "Я хотел разработать фронтенд для нашей SaaS-платформы. Он реализовал сложный интерфейс на React, TypeScript и GSAP. Код чистый, адаптивный и без багов. Все дедлайны соблюдены. Настоящий профессионал.",
    description5: "Мой сайт грузился 5 секунд. Ильназ оптимизировал изображения, внедрил ленивую загрузку и переписал CSS. Теперь загрузка — меньше секунды. Производительность выросла кардинально. Ещё и проблемы с доступностью починил. Работа на 10/10!",
    description6: "Запрос к базе данных ломал фронтенд. Ильназ нашёл проблему, исправил логику бэкенда и обновил API. После этого сайт заработал без сбоев.",
    description7: "Я хотела, чтобы сайт ощущался живым. Добавил плавные эффекты при наведении, микровзаимодействия и анимации. Всё работает плавно и не отвлекает. Дизайн стал современным и элегантным. Клиенты постоянно хвалят.",
    description8: "За 24 часа до презентации инвесторам дашборд сломался. Ильназ починил интерфейс, добавил данные в реальном времени и сделал его адаптивным. Работал без остановок. Презентация прошла идеально — он буквально спас наш раунд финансирования.",
    description9: "Мне нужен был лендинг с формой. Ильназ сделал его за 3 дня: адаптивный, быстрый, с плавными анимациями. Форма работает идеально, данные уходят в систему. Код чистый, багов нет. Оценка — 5 из 5!",
    aboutname: "Ильназ Калимуллин. Не хакер, но почти.",
    abouttext1: "Я дружу с компьютерами большую часть своей жизни. То, что начиналось как простое любопытство, превратилось в настоящую страсть — создавать не просто рабочие решения, а по-настоящему красивые вещи.",
    abouttext2: "За эти годы я освоил обработку фото, видеомонтаж и программирование. Всегда стремлюсь к деталям: могу часами отлаживать одну анимацию или выравнивать макет пиксель в пиксель, потому что для меня важно сделать не «просто работает», а «идеально».",
    abouttext3: "Если чего-то не знаю — не притворяюсь. Я изучаю. Досконально. Такой подход помогает мне расти и идти в ногу с быстро меняющимся миром веба.",
    abouttext4: "Я не стремлюсь быть просто хорошим, я хочу быть одним из лучших в frontend-разработке. С интересом осваиваю новые технологии и постоянно ищу способы для совершенствования.",
    abouttext5: "Когда не за кодом — плаваю, играю в баскетбол, исследую природу, путешествую или провожу время в живых разговорах с друзьями. Баланс, любознательность и упорство — вот, что меня вдохновляет.",
    aboutb: "< Обо мне >",
    projectsb: "< проекты >",
    skillsb: "< Мои навыки> ",
    contactb: "< Контакты> ",
    langb: "eng",
    menuTitle: "Главная страница"
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const savedLang = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
  const initialLang = savedLang || 'ru';

  const [lang, setLang] = useState(initialLang);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ru' : 'en';
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', newLang);
    }
  };

  const t = (key) => {
    return translations[lang]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);