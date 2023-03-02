import React from "react";
import { Link } from "react-router-dom";
import supabase from "../../supabase/supabaseClient";
import "./DataCard.css";

const DataCard = ({ singleData, onDelete }) => {
    const { id, title, writer, rating } = singleData;

    const handleDelete = async () => {
        const { data, error } = await supabase
            .from("all_data")
            .delete()
            .eq("id", id);

        if (error) {
            console.log(error);
        }
        console.log(data);
        onDelete(id);
    };

    return (
        <div className="card">
            <p>{title}</p>
            <p>{writer}</p>
            <p>{rating}</p>
            <div className="action">
                <Link to={`/${id}`}>
                    <button>Update</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default DataCard;
