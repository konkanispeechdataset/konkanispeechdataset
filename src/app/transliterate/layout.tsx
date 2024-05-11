import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Konkani Speech Dataset Review Page",
    description: "Here the users will review the Konkani sentences in Roman and Devanagari scripts and its translation in English done by the other users.",
};

export default function TransliterateLayout() {
    return (<p>
        <h1>Transliterate from Devanagari to Roman!</h1>
        <h1>Transliterate from Roman to Devanagari!</h1>
    </p>)
}