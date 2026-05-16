import type { Route } from "./+types/articles";
import { useParams } from "react-router";

import ArticleCard from "../components/articleCard";
import { articlesBySection } from "../data/articlesIndex";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Articles" },
    { name: "description", content: "Latest articles" },
  ];
}

export default function Articles() {
  const { section } = useParams();
  const list =
    section && section in articlesBySection ? articlesBySection[section] : [];
  const isCompactSection = section === "crosswords";

  return (
    <main>
      <ul className="articles-grid">
        {list.map((a, i) => (
          <li key={`${a.article_link}-${i}`}>
            <ArticleCard article={a} variant={i % 6} num={list.length} compact={isCompactSection} />
          </li>
        ))}
      </ul>
    </main>
  );
}