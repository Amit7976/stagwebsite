"use client";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


export default function RootMainLayout({
    children,
}: {
    children: ReactNode;
}) {
    const [isMounted, setIsMounted] = useState(false);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    useEffect(() => {
        setTimeout(() => {
            setIsMounted(true);
        }, 1000);
    }, []);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 50;
        const end = 100;
        const duration = 1000;
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, stepTime);

        return () => clearInterval(timer);
    }, []);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //TURN OFF INSPECT
    // useEffect(() => {
    //     const printConsoleWarning = () => {
    //         console.clear();
    //         console.log(
    //             "%cSTOP!",
    //             "color:red;font-size:80px;font-family:monospace;font-weight:bold;background:transparent;padding:25px 0px;border-radius:15px;"
    //         );
    //         console.log(
    //             "%cThis section is only for Hirebie developers.\nDo NOT paste anything here. It may compromise your account or data security!\n©Hirebie Pvt Ltd - All Rights Reserved.",
    //             "color:red;font-family:monospace;font-size:18px;padding:10px 0px;"
    //         );
    //     };

    //     // ------------------------------------------------------------------------------------------------------

    //     const interval = setInterval(printConsoleWarning, 3000);

    //     // ------------------------------------------------------------------------------------------------------

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <>
            {!isMounted &&
                <>
                    <div className="flex items-center justify-center w-full h-screen">
                        <div className="relative animate-scale-one-time">
                            <Image
                                // src="/images/logo_icons/icon.svg"
                                src="/images/logo/logo.svg"
                                alt="Logo"
                                width={200}
                                height={200}
                            />
                            <Image
                                // src="/images/logo_icons/icon.svg"
                                src="/images/logo/logo.svg"
                                alt="Logo"
                                width={200}
                                height={200}
                                className="logo h-full w-full object-cover object-right opacity-90 brightness-40 absolute top-0 right-0 z-10"
                            />
                        </div>
                        <div className="text-[5vw] font-light z-10 absolute bottom-0 right-2 font-sans2">{count}%</div>
                    </div>
                </>
            }
            <main className={isMounted ? "static" : "hidden"}>
                {children}
            </main>

        </>
    );
}
