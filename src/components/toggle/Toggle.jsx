"use client";
import React, { useContext } from "react";
import styles from './toggle.module.css';
import { ThemeContext } from "@/themeContext/ThemeContext";

const Toggle = () => {
    const { toggle, theme } = useContext(ThemeContext)
    console.log(theme)
    return (
        <div className={styles.container} onClick={toggle} style={theme==="dark"?{background:"white" }:{background:"#0f172a"}
        }>
            <div className={styles.circle} style={theme === "dark" ? { left: 1, background: "#0f172a" }

                :
                { right: 1, background: "white" }}>
            </div>
        </div>
    )

}

export default Toggle;