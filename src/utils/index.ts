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
const NOTES: { [note: string]: number } = {
    a: 0,
    b: 2,
    c: 3,
    d: 5,
    e: 7,
    f: 8,
    g: 10,
};

function toHalfSteps(note: string): number {
    return (
        NOTES[note[0].toLowerCase()] +
        (note.match(/♯/g) || []).length -
        (note.substring(1).match(/♭/g) || []).length
    );
}

function identifyTriad(note1: number, note2: number, note3: number): string {
    const interval1 = note2 - note1;
    const interval2 = note3 - note2;

    if (interval1 === 4 && interval2 === 4) {
        return "Augmented Triad";
    } else if (interval1 === 4 && interval2 === 3) {
        return "Major Triad";
    } else if (interval1 === 3 && interval2 === 4) {
        return "Minor Triad";
    } else if (interval1 === 3 && interval2 === 3) {
        return "Diminished Triad";
    }
    return "Invalid";
}

export { INTERVALS, NOTES, toHalfSteps, identifyTriad };
