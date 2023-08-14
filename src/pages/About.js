import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState("hakuna");

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        At Job Portal, our mission is clear: to provide a dynamic and inclusive
        space where talent meets opportunity. We're committed to revolutionizing
        the way people navigate their careers, offering innovative tools and
        resources that enhance employability and empower growth.
      </p>
      <p>
        We're a team of passionate individuals who understand the complexities
        of the modern job market. With a blend of industry experts, tech
        enthusiasts, and creative minds, we've come together to design a
        platform that caters to job seekers and employers alike.
      </p>
      <p>
        Our vision is to become the ultimate destination for professionals and
        companies seeking excellence in their respective domains. We envision a
        world where every individual finds fulfillment in their career journey
        and every organization thrives with the right talent.
      </p>
      <button onClick={() => setUser(null)}>Log Out</button>
    </div>
  );
}
