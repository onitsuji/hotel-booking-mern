import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div>
      <header>
        <nav>Navigation</nav>
      </header>
      <Outlet />
    </div>
  );
}
