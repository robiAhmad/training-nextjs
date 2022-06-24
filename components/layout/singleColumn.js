import Image from "next/image";
import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";
import Avatars from "@/components/navigation/avatars";

const SingleColumn = ({ children }) => {
    return (
        <>
            <div className="content">
                <Head>
                    <title>Single Column</title>
                    <meta name="description" content="Single Cloumn Layout" />
                </Head>
                <main>
                    <div className="header">
                        <Avatars />
                    </div>
                    <div className="main-content">{children}</div>
                    <footer className={styles.footer}>
                        <a
                            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Powered by Icube 2022
                            <span className={styles.logo}>
                                <Image
                                    src="/vercel.svg"
                                    alt="Vercel Logo"
                                    width={72}
                                    height={16}
                                />
                            </span>
                        </a>
                    </footer>
                </main>
            </div>
        </>
    );
};

export default SingleColumn;
