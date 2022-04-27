import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="default-container">
      <div className="main-box">
        <Outlet />
      </div>
    </div>
  );
}
