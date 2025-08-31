"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useDimensions } from "./useDimensions";
import { useLanguage } from "./useLanguage";

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const { t, toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isOpen && !containerRef.current?.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <div className="burger" style={styles.container}>
            {isOpen && <div style={styles.overlay} />}

            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                style={styles.nav}
            >
                <motion.div
                    style={styles.centerText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                >

                </motion.div>

                {isOpen && (
                    <Navigation toggle={() => setIsOpen(false)} toggleLanguage={toggleLanguage} t={t} />
                )}

                <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            </motion.nav>
        </div>
    );
}

const Navigation = ({ toggle, toggleLanguage, t }) => {
    const navVariants = {
        open: {
            transition: { staggerChildren: 0.1, delayChildren: 0.3 },
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    };

    const menuItems = [
        { label: t('aboutb') || "About", href: "#about" },
        { label: t('projectsb') || "Projects", href: "#projects" },
        { label: t('skillsb') || "Skills", href: "#skills" },
        { label: t('contactb') || "Contact", href: "#contact" },
    ];

    return (
        <motion.ul style={styles.list} variants={navVariants} initial="closed" animate="open">
            {menuItems.map((item, i) => (
                <MenuItem key={i} item={item} onClick={toggle} />
            ))}

            <motion.li style={styles.listItem}>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleLanguage();
                    }}
                    style={styles.langButton}
                >
                    {t('langb') || "eng"}
                </button>
            </motion.li>
        </motion.ul>
    );
};

const MenuItem = ({ item, onClick }) => {
    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: { stiffness: 1000, velocity: -100 },
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: { stiffness: 1000 },
        },
    };

    return (
        <motion.li style={styles.listItem} variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href={item.href} onClick={onClick} style={styles.link}>
                {item.label}
            </a>
        </motion.li>
    );
};

const MenuToggle = ({ toggle, isOpen }) => {
    const pathVariants = {
        closed: { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        open: { d: "M 3 16.5 L 17 2.5" },
    };

    const midVariants = {
        closed: { opacity: 1 },
        open: { opacity: 0 },
    };

    const bottomVariants = {
        closed: { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        open: { d: "M 3 2.5 L 17 16.346" },
    };

    return (
        <button style={styles.toggleContainer} onClick={toggle} aria-label="Toggle menu">
            <svg width="23" height="23" viewBox="0 0 23 23">
                <motion.path
                    fill="transparent"
                    strokeWidth="3"
                    stroke="#808080"
                    strokeLinecap="round"
                    variants={pathVariants}
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                />
                <motion.path
                    d="M 2 9.423 L 20 9.423"
                    fill="transparent"
                    strokeWidth="3"
                    stroke="#808080"
                    strokeLinecap="round"
                    variants={midVariants}
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                />
                <motion.path
                    fill="transparent"
                    strokeWidth="3"
                    stroke="#808080"
                    strokeLinecap="round"
                    variants={bottomVariants}
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                />
            </svg>
        </button>
    );
};

const styles = {
    container: {
        position: "fixed",
        top: 0,
        right: 0,
        width: "100%",
        height: "100%",
        zIndex: 1000,
        pointerEvents: "none",
    },
    nav: {
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        zIndex: 999,
        pointerEvents: "none",
    },
    centerText: {
        position: "absolute",
        top: "30%",
        textAlign: "center",
        width: "100%",
    },
    list: {
        listStyle: "none",
        padding: "0 20px 0 20px",
        margin: 0,
        width: "100%",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        pointerEvents: "auto",
    },
    listItem: {
        marginBottom: 60,
    },
    link: {
        fontFamily: "header",
        color: '#ffffff',
        textDecoration: "none",
        fontSize: "2.5rem",
        fontWeight: 'bold',
        textTransform: 'uppercase',
        display: "block",
    },
    langButton: {
        padding: '5px 12px',
        position: 'relative',
        fontSize: '1.2em',
        textTransform: 'uppercase',
        lineHeight: '1',
        color: 'rgb(0, 0, 0)',
        margin: '0',

        background: 'none',
        fontFamily: "header",
        border: '1px solid rgb(255, 255, 255)',
        backgroundColor: '#ffffff',
        cursor: 'pointer',
        borderRadius: '3px',
    },
    toggleContainer: {
        position: "fixed",
        top: 9,
        right: 30,
        width: 50,
        height: 50,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        zIndex: 1001,
        pointerEvents: "auto",
    },
};
