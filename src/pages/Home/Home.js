import { useEffect } from "react";
import { useState } from "react";
import DataCard from "../../components/DataCard/DataCard";
import supabase from "../../supabase/supabaseClient";
import "./Home.css";

const Home = () => {
    const [fetchError, setFetchError] = useState(null);
    const [allData, setAllData] = useState(null);
    const [orderBy, setOrderBy] = useState("created_at");

    const handleDelete = (id) => {
        setAllData((prevAllData) => {
            return prevAllData.filter((ad) => ad.id !== id);
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from("all_data")
                .select()
                .order(orderBy, { ascending: false });

            if (error) {
                setFetchError("Could not fetch data");
                setAllData(null);
                console.log(error);
            }
            setAllData(data);
            setFetchError(null);
        };

        fetchData();
    }, [orderBy]);

    return (
        <div className="page home">
            {fetchError && <p>{fetchError}</p>}
            {allData && (
                <>
                    <div className="flex">
                        <p>Sort:</p>
                        <button onClick={() => setOrderBy("created_at")}>
                            Time Created
                        </button>
                        <button onClick={() => setOrderBy("title")}>
                            Title
                        </button>
                        <button onClick={() => setOrderBy("rating")}>
                            Rating
                        </button>
                    </div>
                    <div className="flex">
                        {allData.map((singleData) => (
                            <DataCard
                                key={singleData.id}
                                singleData={singleData}
                                onDelete={handleDelete}
                            ></DataCard>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
