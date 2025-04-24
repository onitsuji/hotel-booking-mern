import { Link } from "react-router";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div>
      <header className="bg-blue-500 text-white">
        <nav className="flex justify-between container mx-auto py-4 items-center px-2 md:px-0">
          <div>
            <Link to="/" className="text-2xl font-bold">
              Getaways
            </Link>
          </div>
          <div>
            <Link
              to="/sign-in"
              className="text-blue-500 bg-white px-3 py-1 rounded-md"
            >
              Sign in
            </Link>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
