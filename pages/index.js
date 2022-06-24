import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

import { Suspense, useState } from "react";

const HelloWorld = dynamic(
    () => import("../components/customComponent/hello"),
    { suspense: true }
);

const HelloWorldSsr = dynamic(
    () => import("../components/customComponent/helloSSR"),
    { ssr: true }
);
const HelloWorldNoSsr = dynamic(
    () => import("../components/customComponent/hello"),
    { ssr: false }
);

const Home = () => {
    let [loadHello, setLoadHello] = useState(false);
    return (
        <div className={styles.container}>
            <Head>
                <title>Training Next App</title>
                <meta name="description" content="Icube Training Next JS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
                <div className="content">
                    <div className="dynamic-loading">
                        <button onClick={() => setLoadHello(!loadHello)}>
                            Load Component
                        </button>
                        <div>
                            {loadHello && (
                                <Suspense fallback={`Loading...`}>
                                    <HelloWorld />
                                </Suspense>
                            )}
                            <div>
                                <spa>with SSR</spa>
                                <HelloWorldSsr />
                            </div>
                            <div>
                                <spa>No SSR</spa>
                                <HelloWorldNoSsr />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
export default Home;
