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

    if (loading)
        return (
            <div className="ring">
                Loading<span></span>
            </div>
        );

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
                    <tr key={hero.url}>
                        <td>{hero.name}</td>
                        <td>{hero.mass}</td>
                        <td>{hero.height}</td>
                        <td>{hero.hair_color}</td>
                        <td>{hero.skin_color}</td>
                    </tr>
                ))}
            </table>
        </>
    );
}
