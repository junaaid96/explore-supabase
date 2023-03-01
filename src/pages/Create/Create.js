import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabase/supabaseClient";
import "./Create.css";

const Create = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [writer, setWriter] = useState("");
    const [rating, setRating] = useState("");
    const [formError, setFormError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !writer || !rating) {
            setFormError("Fields can not be empty!");
            return;
        }

        const { data, error } = await supabase
            .from("all_data")
            .insert([{ title, writer, rating }]);

        if (error) {
            console.log(error);
            setFormError(error);
        }
        console.log(data);
        setFormError("");
        navigate("/");
    };

    return (
        <div className="page create">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="writer">Writer:</label>
                <textarea
                    id="writer"
                    value={writer}
                    onChange={(e) => setWriter(e.target.value)}
                />

                <label htmlFor="rating">Rating:</label>
                <input
                    type="number"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />

                <button>Create</button>

                {formError && <p className="error">{formError}</p>}
            </form>
        </div>
    );
};

export default Create;
