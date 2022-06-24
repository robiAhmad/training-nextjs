import "styles/globals.css";
import LayoutSingleColumn from "@/components/layout/singleColumn";

function MyApp(props) {
    const { Component, pageProps } = props;
    console.log(props);
    return (
        <>
            <LayoutSingleColumn>
                <Component {...pageProps} />
            </LayoutSingleColumn>
        </>
    );
}

export default MyApp;
