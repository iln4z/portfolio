
"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") {
            setIsDark(false);
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            setIsDark(true);
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark";
        setIsDark(!isDark);

        document.body.classList.toggle("light");
        document.body.classList.toggle("dark");

        localStorage.setItem("theme", newTheme);
    };
    const styles = {
        container: {
            position: "fixed",
            bottom: "50px",
            left: "50%",
            height: "60px",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            zIndex: 2000,
            padding: 0,
            transform: "translateX(-50%)",
            width: "68px",
        },
        track: {
            width: "64px",
            height: "32px",
            borderRadius: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            position: "relative",
            overflow: "hidden",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        },
        thumb: {
            position: "absolute",
            top: "4px",
            left: "4px",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: "white",
            transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.4, 1)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        },
    };
    return (
        <button
            onClick={toggleTheme}
            style={styles.container}
            aria-label="Toggle theme"
            className="theme-toggle"
        >
            <div style={styles.track}>
                <div
                    style={{
                        ...styles.thumb,
                        transform: isDark ? "translateX(0)" : "translateX(32px)",
                        backgroundColor: isDark ? "black" : "white",
                    }}
                />
            </div>
        </button>
    );


}

