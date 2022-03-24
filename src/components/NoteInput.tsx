import PropTypes from "prop-types";
import React from "react";
interface NoteInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    set: React.Dispatch<React.SetStateAction<string>>;
}

function NoteInput(props: NoteInputProps) {
    const { set, ...rest } = props;
    return (
        <input
            type="text"
            onChange={(e) => {
                let note = e.target.value
                    .replaceAll(" ", "")
                    .replaceAll("#", "♯")
                    .replaceAll("3", "♯")
                    .toLowerCase();

                note = (note[0] || "") + note.substring(1).replace("b", "♭");
                if (note[0] === "♯" || note[0] === "♭" || note === "") {
                    props.set("");
                } else if (
                    (note[0].match(/[a-g]/g) || []).length === 1 &&
                    (note.substring(1).match(/[♯♭]/g) || []).length ===
                        note.substring(1).length
                ) {
                    note = note[0].toUpperCase() + note.substring(1);
                    props.set(note);
                }
                e.preventDefault();
            }}
            {...rest}
        />
    );
}

NoteInput.propTypes = {
    set: PropTypes.func.isRequired,
};

export default NoteInput;
