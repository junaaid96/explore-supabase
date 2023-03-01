import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../../supabase/supabaseClient";

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [writer, setWriter] = useState("");
    const [rating, setRating] = useState("");
    const [formError, setFormError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !writer || !rating) {
            setFormError("Fields can not be empty!");
            return;
        }

        const { data, error } = await supabase
            .from("all_data")
            .update([{ title, writer, rating }])
            .eq("id", id);

        if (error) {
            console.log(error);
            setFormError(error);
        }
        console.log(data);
        setFormError("");
        navigate("/");
    };

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from("all_data")
                .select()
                .eq("id", id)
                .single();

            if (error) {
                navigate("/", { replace: true });
            }
            setTitle(data.title);
            setWriter(data.writer);
            setRating(data.rating);
        };

        fetchData();
    }, [id, navigate]);

    return (
        <div className="page update">
            <h2>Update {id}</h2>
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

                <button>Update</button>

                {formError && <p className="error">{formError}</p>}
            </form>
        </div>
    );
};

export default Update;
