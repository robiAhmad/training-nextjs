import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Custom404 = () => {
    const Router = useRouter();
    const goPrevious = () => {
        Router.back();
    };

    useEffect(() => {
        setTimeout(() => {
            goPrevious();
        }, 5000);
    }, []);

    return (
        <>
            <div>
                <h2>There is nothing here</h2>
                <h3>
                    Please go{" "}
                    <label
                        style={{ color: "green", cursor: "pointer" }}
                        onClick={() => goPrevious()}
                    >
                        Back
                    </label>
                </h3>
            </div>
        </>
    );
};
export default Custom404;
