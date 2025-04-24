import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Getaways" }];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <h1>Hello from home route</h1>;
}
