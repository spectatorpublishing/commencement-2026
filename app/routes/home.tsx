import type { Route } from "./+types/home";
import Articles from "./articles";
import { Link } from "react-router";
import Homepage from "./Homepage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Commencement 2026" },
    { name: "description", content: "Welcome to Commencement 2026!" },
  ];
}

export default function Home() {
  return <Homepage />;
}
