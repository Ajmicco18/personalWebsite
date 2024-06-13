import { Box } from "@mui/material";
import React, { useEffect, useState } from "react"
const words = ["Student", "Software Developer"]

export default function Typewriter() {

    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(type, isDeleting ? 100 : 200);

        return () => clearTimeout(timer);
    });

    function type() {
        const currentWord = words[wordIndex];

        const shouldDelete = isDeleting ? 1 : -1;

        setText(current => currentWord.substring(0, current.length - shouldDelete))

        if (!isDeleting && text === currentWord) {
            setTimeout(() => setIsDeleting(true), 500);
        } else if (isDeleting && text === "") {
            setIsDeleting(false);

            setWordIndex((current) => (current + 1) % words.length);
        }
    }

    return (
        <Box component="h2"
            sx={{
                fontSize: { xs: "30px", sm: "50px" },
                textAlign: { xs: "center", sm: "left" },
                color: "white"
            }}>
            {text}
        </Box>
    )
}