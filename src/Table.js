import { useState, useEffect } from "react";

export default function Table() {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://swapi.dev/api/people")
            .then((response) => response.json())
            .then((data) => {
                setInfo(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    
    if (loading) return <div className="ring">Loading<span></span></div>;

    if (error) return <div className="error">Error: Data is not available</div>;

    return (
        <>
            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>Mass</th>
                    <th>Height</th>
                    <th>Hair color</th>
                    <th>Skin color</th>
                </tr>
                {info.results.map((hero) => (
                    <tr key={hero.homeworld}>
                        <td>{hero.name !== "n/a" ? hero.name : "no information"}</td>
                        <td>{hero.mass !== "n/a" ? hero.mass : "no information"}</td>
                        <td>{hero.height !== "n/a" ? hero.height : "no information"}</td>
                        <td>{hero.hair_color !== "n/a" ? hero.hair_color : "no information"}</td>
                        <td>{hero.skin_color !== "n/a" ? hero.skin_color : "no information"}</td>
                    </tr>
                ))}
            </table>
        </>
    );
}
