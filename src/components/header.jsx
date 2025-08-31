import AnimatedContent from './AnimatedContent'
import '../App.css';
import SplitText from "./SplitText";
import { useLanguage } from './useLanguage';
import BurgerMenu from './BurgerMenu';

function Header() {
    const { t, toggleLanguage, lang } = useLanguage();
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (

        <header>
            <div className="header_fix">
                <div className="logo head">
                    <SplitText
                        text="ILNAZ FRONT &trade;"
                        className="text-2xl font-semibold text-center logo_name"
                        delay={150}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </div>

                <div className="menu">
                    <AnimatedContent
                        distance={50}
                        direction="vertical"
                        reverse={false}
                        duration={0.8}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity={true}
                        scale={1}
                        threshold={0.}
                        delay={0}>
                        <div className="eng_theme">
                            <button className="head space-btn "
                                onClick={toggleLanguage}
                            >{t('lang')}</button>
                        </div>
                    </AnimatedContent>
                    <a href="#about">
                        <SplitText
                            key={lang}
                            text={t('about')}
                            className="text-2xl font-semibold text-center about head link-effect green"
                            delay={150}
                            duration={1.6}
                            ease="power3.out"
                            splitType="lines"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.5}
                            rootMargin="-100px"
                            textAlign="center"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                    </a>
                    <a href="#projects">
                        <SplitText
                            key={lang}
                            text={t('projects')}
                            className="text-2xl font-semibold text-center about head link-effect green"
                            delay={150}
                            duration={1.6}
                            ease="power3.out"
                            splitType="lines"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.5}
                            rootMargin="-100px"
                            textAlign="center"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                    </a>
                    <a href="#contact">
                        <AnimatedContent
                            distance={50}
                            direction="vertical"
                            reverse={false}
                            duration={0.8}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity={true}
                            scale={1}
                            threshold={0.}
                            delay={0}>

                            <button className="contact head space-btn">{t('contact')}</button></AnimatedContent>
                    </a>
                </div>
                <BurgerMenu />
            </div>

        </header >
    );
}

export default Header;


