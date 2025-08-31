import React from 'react';
import '../App.css';
import BlurText from "./BlurText";
import AnimatedContent from './AnimatedContent';
import FadeUp from './AnimatedSection';
import FlowingMenu from './Skills';
import MagicBento from './Clients';
import SlideInBlocks from './SlideBlocks';
import GradientText from './GradientText';
import { TbMailFilled } from "react-icons/tb";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";
import { useLanguage } from './useLanguage';

function Main() {

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    const { t, lang } = useLanguage();

    const skillColumns = [
        [
            { text: t('skillsFrontend') },
            { text: 'HTML5' },
            { text: 'CSS3' },
            { text: 'JS' },
            { text: 'React' },
            { text: 'TypeScript' }
        ],
        [
            { text: t('skillsDevTools') },
            { text: 'API' },
            { text: 'Git' },
            { text: 'MySQL' },
            { text: 'GitHub' },
            { text: 'Postman' }
        ],
        [
            { text: t('skillsBestPractices') },
            { text: 'a11y' },
            { text: 'Responsive Design' },
            { text: 'Lazy loading' },
            { text: 'BEM' },
            { text: 'Semantics' }
        ],
        [
            { text: t('skillsDesignTools') },
            { text: 'Figma' },
            { text: 'GSAP' },
            { text: 'Photoshop' },
            { text: 'Premiere Pro' }
        ]
    ];

    return (
        <main>
            <section className="front">
                <div className="front_class">
                    <BlurText
                        text="FRONTEND DEVELOPER"
                        delay={250}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-2xl mb-8 front_class"
                    />
                </div>

                <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity={true}
                    scale={1}
                    threshold={0.}
                    delay={0}>
                    <div className="gif-container">
                        <img className="gif"
                            src="/goma.gif"
                            alt="Описание анимации"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </AnimatedContent>
            </section>
            <AnimatedContent
                distance={250}
                direction="vertical"
                reverse={false}
                duration={1.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity={true}
                scale={1}
                threshold={0.}
                delay={0}>
                <section className="hero">
                    <div className="main_image">
                        <img className="hero_image"
                            src="/main.jpg"
                            alt="image-devoloper"
                            loading="lazy"
                        />
                    </div>
                </section>
            </AnimatedContent>
            <section id="projects" className="project">

                <BlurText
                    key={lang}
                    text={t('Projects')}
                    delay={250}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-2xl mb-8 h3 myproject project"
                />

                <div className="blocks-proj">
                    <FadeUp
                        start="top 15%"
                        rootMargin="50px"
                        duration={3}
                        ease="power3.out"
                        fromY={150}

                    >
                        <div className="container">
                            <a
                                href="https://iln4z.github.io/SCAN-Publications-Finder-React-API-page/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Open the project in a new tab"
                            >
                                <img className="container-image"
                                    src="/скан.jpg"
                                    alt="image-project"
                                    loading="lazy"
                                />
                                <div className="name-proj">
                                    <p className="hashtag">
                                        #React #TypeScript #RestApi #CSSModules
                                    </p>
                                </div>
                            </a>
                        </div>
                    </FadeUp>
                    <FadeUp
                        start="top 15%"
                        rootMargin="50px"
                        duration={3}
                        ease="power3.out"
                        fromY={150}

                    >
                        <div className="container">
                            <a
                                href="https://iln4z.github.io/slider/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Open the project in a new tab"
                            >
                                <img className="container-image"
                                    src="/слайдер.jpg"
                                    alt="image-project"
                                    loading="lazy"
                                />
                                <div className="name-proj">
                                    <p className="hashtag">
                                        #HTML #CSS #JavaScript
                                    </p>
                                </div>
                            </a>
                        </div>
                    </FadeUp>
                    <FadeUp
                        start="top 5%"
                        rootMargin="50px"
                        duration={3}
                        ease="power3.out"
                        fromY={150}
                    >
                        <div className="container">
                            <a
                                href="https://iln4z.github.io/Flight-Ticket-Filter-React-Vite-pages/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Open the project in a new tab"
                            >
                                <img className="container-image"
                                    src="/авиа.jpg"
                                    alt="image-project"
                                    loading="lazy"
                                />
                                <div className="name-proj">
                                    <p className="hashtag">
                                        #React #Vite #TypeScript #CSS
                                    </p>
                                </div>
                            </a>
                        </div>
                    </FadeUp>
                    <FadeUp
                        start="top 5%"
                        rootMargin="50px"
                        duration={3}
                        ease="power3.out"
                        fromY={150}
                    >
                        <div className="container">
                            <a
                                href="https://iln4z.github.io/kanban-board-pages-react/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Open the project in a new tab"
                            >
                                <img className="container-image"
                                    src="/канбан.jpg"
                                    alt="image-project"
                                    loading="lazy"
                                />
                                <div className="name-proj">
                                    <p className="hashtag">
                                        #React #TS #CSS #localStorage
                                    </p>
                                </div>
                            </a>
                        </div>
                    </FadeUp>
                    <FadeUp
                        start="top 5%"
                        rootMargin="-50px"
                        duration={3}
                        ease="power3.out"
                        fromY={150}
                    >
                        <div className="container">
                            <a
                                href="https://iln4z.github.io/blog_youtalk-html-css/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Open the project in a new tab"
                            >
                                <img className="container-image"
                                    src="/ютолк.jpg"
                                    alt="image-project"
                                    loading="lazy"
                                />
                                <div className="name-proj">
                                    <p className="hashtag">
                                        #HTML #CSS
                                    </p>
                                </div>
                            </a>
                        </div>
                    </FadeUp>
                </div>
            </section>
            <section id="skills" className="skills">
                <BlurText
                    key={lang}
                    text={t('Skills')}
                    delay={250}
                    animateBy="lends"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-2xl mb-8 h3 myproject"
                />
                <FadeUp
                    start="top 15%"
                    rootMargin="-50px"
                    duration={3}
                    ease="power3.out"
                    fromY={150}
                >
                    <div style={{ height: '500px', position: 'relative', padding: '10px 0' }}>
                        <FlowingMenu columns={skillColumns} />
                    </div>
                </FadeUp>

            </section>
            <section className="reviews">
                <BlurText
                    key={lang}
                    text={t('Clients')}
                    delay={250}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-2xl mb-8 h3 myreviews"
                />

                <FadeUp
                    start="top 25%"
                    rootMargin="-50px"
                    duration={3}
                    ease="power3.out"
                    fromY={150}
                >
                    <MagicBento
                        textAutoHide={false}
                        enableStars={false}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={false}
                        enableMagnetism={false}
                        clickEffect={true}
                        spotlightRadius={300}
                        particleCount={12}
                        glowColor="133, 238, 0"
                    />
                </FadeUp>
            </section>
            <section id="about" className="about">
                <BlurText
                    key={lang}
                    text={t('About')}
                    delay={250}
                    animateBy="lends"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-2xl mb-8 h3 about-name "
                />

                <div className="about-block" >
                    <SlideInBlocks
                        key={lang}
                        leftContent={
                            <div className="about-image">
                                <img
                                    className="about-img"
                                    src="/about.jpg"
                                    alt="Ilnaz Kalimullin"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        }
                        rightContent={
                            <div className="about-text">
                                <h3 className='h3'>{t('aboutname')}</h3>

                                <p>{t('abouttext1')}</p>

                                <p>{t('abouttext2')}</p>

                                <p>{t('abouttext3')}</p>

                                <p>{t('abouttext4')}</p>

                                <p>{t('abouttext5')}</p>
                            </div>
                        }
                    />

                </div>
            </section>
            <section className="whyme">
                <BlurText
                    key={lang}
                    text={t('Why')}
                    delay={250}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-2xl mb-8 h3 about-name"
                />
                <div className="whyme-slider">
                    <AnimatedContent
                        distance={32}
                        direction="horizontal"
                        reverse={true}
                        duration={1.2}
                        ease="bounce.out"
                        initialOpacity={0.5}
                        animateOpacity={true}
                        scale={1}
                        threshold={0.41}
                        delay={0}>

                        <div className="slide-container">
                            <img className="slide-image"
                                src="/clean.png"
                                alt="image-project"
                                loading="lazy"
                            />
                            <div className="slide-content">
                                <h3 className='h3'>{t('clean')}</h3>
                            </div>

                        </div>
                    </AnimatedContent>
                    <AnimatedContent
                        distance={32}
                        direction="horizontal"
                        reverse={false}
                        duration={1.2}
                        ease="bounce.out"
                        initialOpacity={0.5}
                        animateOpacity={true}
                        scale={1}
                        threshold={0.41}
                        delay={0}>
                        <div className="slide-container">
                            <img className="slide-image"
                                src="/always.jpg"
                                alt="image-project"
                                loading="lazy"
                            />

                            <div className="slide-content">
                                <h3 className='h3'>{t('Always')}</h3>
                            </div>
                        </div>
                    </AnimatedContent>
                    <AnimatedContent
                        distance={32}
                        direction="horizontal"
                        reverse={true}
                        duration={1.2}
                        ease="bounce.out"
                        initialOpacity={0.5}
                        animateOpacity={true}
                        scale={1}
                        threshold={0.41}
                        delay={0}>
                        <div className="slide-container">
                            <img className="slide-image"
                                src="/budget.png"
                                alt="image-project"
                                loading="lazy"
                            />
                            <div className="slide-content">
                                <h3 className='h3'>{t('budget')}</h3>
                            </div>
                        </div>
                    </AnimatedContent>
                    <AnimatedContent
                        distance={32}
                        direction="horizontal"
                        reverse={false}
                        duration={1.2}
                        ease="bounce.out"
                        initialOpacity={0.5}
                        animateOpacity={true}
                        scale={1}
                        threshold={0.41}
                        delay={0}>
                        <div className="slide-container">
                            <img className="slide-image"
                                src="/ux.png"
                                alt="image-project"
                                loading="lazy"
                            />
                            <div className="slide-content">
                                <h3 className='h3'>{t('UX')}</h3>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </section>
            <section id="contact" className="contact">
                <div className="contact-block">

                    <div className="contact-text">
                        <GradientText
                            key={lang}
                            colors={["#3c5f56", "#b6d3c1", "#0f1e1a", "#3c5f56", "#0f1e1a"]}

                            animationSpeed={4.5}
                            showBorder={false}
                        >
                            <h2>{t('together')}</h2>
                            <h3>{t('start')}</h3>
                        </GradientText>
                    </div>


                    <div className="contact-input">
                        <a
                            href="mailto:ilnaz.calimullin2000@yandex.ru"
                            className="mail"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Написать на email"
                        >
                            <TbMailFilled />
                        </a>

                        <a
                            href="https://t.me/fon1k"
                            className="mail"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Написать в Telegram"
                        >
                            <FaTelegramPlane />
                        </a>

                        <a
                            href="https://github.com/iln4z"
                            className="mail"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Перейти на GitHub"
                        >
                            <FaGithubSquare />
                        </a>

                        <a
                            href="https://vk.com/ilnaz.calimullin"
                            className="mail"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Перейти во ВКонтакте"
                        >
                            <FaVk />
                        </a>
                    </div>

                </div>
            </section>
        </main>
    );
}

export default Main;