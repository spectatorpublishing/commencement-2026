import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Articles from "./articles";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Commencement 2026" },
    { name: "description", content: "Welcome to Commencement 2026!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Commencement 2026</h1>
      <Link to="/articles">View Articles</Link>
    </div>
  );
}