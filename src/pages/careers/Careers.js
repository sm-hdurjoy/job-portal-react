import { useLoaderData, Link } from "react-router-dom";

export default function Careers() {
  const careersData = useLoaderData();

  return (
    <div className="careers">
      {careersData.map((careersData) => (
        <Link to={careersData.id.toString()} key={careersData.id}>
          <p>{careersData.title}</p>
          <p>Based in {careersData.location}</p>
        </Link>
      ))}
    </div>
  );
}

// Loader Function
export const careersLoader = async () => {
  const response = await fetch("http://localhost:4000/careers");

  if (!response.ok) {
    throw Error("Could not fetch careers!");
  }
  return response.json();
};
