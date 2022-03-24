import { useState, useEffect } from "react";
import { identifyTriad, toHalfSteps } from "../utils";
import NoteInput from "./NoteInput";

export function Triad() {
    const [note1, setNote1] = useState("");
    const [note2, setNote2] = useState("");
    const [note3, setNote3] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        if (note1 && note2 && note3) {
            let [note1Index, note2Index, note3Index] = [
                toHalfSteps(note1),
                toHalfSteps(note2),
                toHalfSteps(note3),
            ];
            if (note2Index < note1Index) {
                note2Index += 12;
            }
            if (note3Index < note2Index) {
                note3Index += 12;
            }
            setResult(identifyTriad(note1Index, note2Index, note3Index));
        }
    }, [note1, note2, note3]);

    return (
        <div id="Triad">
            <h2>Triad Identifier</h2>
            <label htmlFor="note1">Note #1 (Lowest Note): </label>
            <NoteInput name="note1" value={note1} set={setNote1} />

            <br />
            <label htmlFor="note2">Note #2 (Higher Note): </label>
            <NoteInput name="note2" value={note2} set={setNote2} />

            <br />
            <label htmlFor="note3">Note #3 (Highest Note): </label>
            <NoteInput name="note3" value={note3} set={setNote3} />

            {note1 !== "" && note2 !== "" && note3 !== "" && result !== "" && (
                <h3>
                    {note1}, {note2}, {note3} is a
                    {["a", "e", "i", "o", "u"].includes(result[0].toLowerCase())
                        ? "n"
                        : ""}{" "}
                    {result}
                </h3>
            )}
        </div>
    );
}
