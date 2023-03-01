import { useEffect } from "react";
import { useParams } from "react-router-dom";
import supabase from "../../supabase/supabaseClient";

const Update = () => {
    const { id } = useParams();

    useEffect(() => {
        const fecthData = async () => {
            const { data, error } = supabase.from("all_data").select();
        };
    }, []);

    return (
        <div className="page update">
            <h2>Update {id}</h2>
        </div>
    );
};

export default Update;
