import Link from "next/link";
import React from "react";

const Avatars = () => {
    return (
        <div>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link
                    href={{
                        pathname: "/",
                    }}
                >
                    Home
                </Link> | {" "}
                <Link
                    href={{
                        pathname: "/avatar",
                    }}
                >
                    Avatar
                </Link>
            </nav>
        </div>
    );
};
export default Avatars;
