import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        At CareerConnect, we're dedicated to providing you with the assistance
        you need to navigate our platform effectively. Whether you have
        questions about using our features, need clarification on our services,
        or simply want to get in touch, we're here to help. Choose from the
        following options to get the support you need
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact US</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
