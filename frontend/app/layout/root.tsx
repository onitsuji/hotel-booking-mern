import { Link } from "react-router";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div>
      <header className="bg-blue-500 text-white">
        <nav className="flex justify-between py-4 items-center container">
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
      <Hero />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-blue-500 pb-20">
      <div className="text-white space-y-1 container mx-auto">
        <h1 className="text-5xl">Find your next getaway</h1>
        <p className="text-lg">
          Search our low prices for your next holiday destination
        </p>
      </div>
    </div>
  );
}
