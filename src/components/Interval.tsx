import { useState, useEffect } from "react";
import { INTERVALS, toHalfSteps } from "../utils";
import NoteInput from "./NoteInput";

export function Interval() {
    const [note1, setNote1] = useState("");
    const [note2, setNote2] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        if (note1 && note2) {
            const note1Index = toHalfSteps(note1);
            let note2Index = toHalfSteps(note2);

            if (note2Index < note1Index) {
                note2Index += 12;
            }

            const interval = Math.abs(note2Index - note1Index) % 12;
            setResult(INTERVALS[interval]);
        }
    }, [note1, note2]);

    return (
        <div id="Interval">
            <h2>Interval Identifier</h2>
            <label htmlFor="note1">Note #1 (Lower Note): </label>
            <NoteInput name="note1" value={note1} set={setNote1} />

            <br />
            <label htmlFor="note2">Note #2 (Higher Note): </label>
            <NoteInput name="note2" value={note2} set={setNote2} />

            {note1 !== "" && note2 !== "" && result !== "" && (
                <h3>
                    {note1} to {note2} is a
                    {["a", "e", "i", "o", "u"].includes(result[0].toLowerCase())
                        ? "n"
                        : ""}{" "}
                    {result}
                </h3>
            )}
        </div>
    );
}
