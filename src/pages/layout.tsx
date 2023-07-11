import "global.css";
import Header from "components/header";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    const [isDark, setIsDark] = useState(false);
    
    document.body.className = isDark ? "dark" : "";
    
    return (
        <div className="bg-slate-50 dark:bg-gray-950">
            <Header
                themeChanged={setIsDark}
                isDark={isDark}
            />
            <div className={`max-w-5xl p-1 md:p-2 mx-auto
                          min-h-[calc(100vh-theme(space.14))]
                          text-slate-800 dark:text-slate-200
                          h-14`}>
                <Outlet />
            </div>
        </div>
    );
}
