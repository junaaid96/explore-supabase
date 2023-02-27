import React from "react";
import "./DataCard.css";

const DataCard = ({ singleData }) => {
    const { title, writer, rating } = singleData;
    return (
        <div className="card">
            <p>{title}</p>
            <p>{writer}</p>
            <p>{rating}</p>
        </div>
    );
};

export default DataCard;
