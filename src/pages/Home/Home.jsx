import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import img from "../../assets/tristana-1.jpg";


function Home() {
    const el0 = useRef(null);
    const el1 = useRef(null);

    useEffect(() => {
        const string0 = ["Hello, I'm <strong>Joaquín Ortiz</strong>",
            "I'm a <strong>Full Stack Web Developer</strong>"]
        const string1 = ["I'm a <strong>Front End Developer</strong>",
            "I'm a <strong>Back End Developer</strong>"]
        const options0 = {
            strings: string0,
            typeSpeed: 50,
            backSpeed: 0,
            loop: true,
            backDelay: 1800,
            loopCount: Infinity,
            showCursor: false,
        };
        const typed = new Typed(el0.current, options0);

        const options1 = {
            strings: string1,
            typeSpeed: 40,
            backSpeed: 0,
            loop: true,
            backDelay: 2200,
            loopCount: Infinity,
            showCursor: false,
        };
        const typed1 = new Typed(el1.current, options1);

        return () => {
            typed.destroy();
            typed1.destroy();
        };
    }, []);


    return (
        <>
            <Box
                width="80vw"
                justifyContent="initial"
                alignItems="initial"
                margin="5% 0 0 2.2%"
            >
                <p style={{ margin: '9px 0 0 9px', fontSize: '2.2rem' }} ref={el0}></p>
                <br />
                <p style={{ margin: '9px 0 0 9px', fontSize: '2.2rem' }} ref={el1}></p>
            </Box >
        </>
    );
};
export default Home;