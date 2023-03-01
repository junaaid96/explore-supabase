import React from "react";
import { Link } from "react-router-dom";
import "./DataCard.css";

const DataCard = ({ singleData }) => {
    const { id, title, writer, rating } = singleData;
    return (
        <div className="card">
            <p>{title}</p>
            <p>{writer}</p>
            <p>{rating}</p>
            <Link className="button" to={`/${id}`}>
                Update
            </Link>
        </div>
    );
};

export default DataCard;
