import { useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  const careerDetail = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career details for : {careerDetail.title}</h2>
      <p>Starting salary : {careerDetail.salary}</p>
      <p>Location : {careerDetail.location}</p>
      <div className="details">
        <p>
          If you're a proactive and experienced React Developer looking to join
          an innovative team and work on exciting projects, we invite you to
          apply. Help us shape the future of technology and create exceptional
          user experiences. Join InnovativeTech Solutions and be part of our
          journey to revolutionize the digital landscape.
        </p>
      </div>
    </div>
  );
}

// Loader Function

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("Could not find that career.");
  }

  return res.json();
};
