import { useState, useEffect } from "react";
import "./Interval.css";
import NoteInput from "./NoteInput";

const NOTES: { [note: string]: number } = {
    a: 0,
    b: 2,
    c: 3,
    d: 5,
    e: 7,
    f: 8,
    g: 10,
};

const INTERVALS: { [delta: number]: string } = {
    0: "Perfect Unison/Perfect Octave",
    1: "Augmented Unison/Minor Second",
    2: "Major Second",
    3: "Minor Third",
    4: "Major Third",
    5: "Perfect Fourth",
    6: "Tritone/Diminished Fifth",
    7: "Perfect Fifth",
    8: "Augmented Fifth/Minor Sixth",
    9: "Major Sixth",
    10: "Augmented Sixth",
    11: "Minor Seventh",
};

export function Interval() {
    const [note1, setNote1] = useState("");
    const [note2, setNote2] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        if (note1 && note2) {
            const note1Index =
                NOTES[note1[0].toLowerCase()] +
                (note1.match(/♯/g) || []).length -
                (note1.substring(1).match(/♭/g) || []).length;
            let note2Index =
                NOTES[note2[0].toLowerCase()] +
                (note2.match(/♯/g) || []).length -
                (note2.substring(1).match(/♭/g) || []).length;

            if (note2Index < note1Index) {
                note2Index += 12;
            }

            const interval = Math.abs(note2Index - note1Index) % 12;
            setResult(INTERVALS[interval]);
        }
    }, [note1, note2]);

    return (
        <div id="Intervals">
            <h2>Interval Calculator</h2>
            <label htmlFor="note1">Note #1: </label>
            <NoteInput name="note1" value={note1} set={setNote1} />

            <br />

            <label htmlFor="note2">Note #2: </label>
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
