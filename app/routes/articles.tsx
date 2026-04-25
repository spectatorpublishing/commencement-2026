import type { Route } from "./+types/articles";
import { all_articles } from "../data/allarticles";
import ArticleCard from "../components/articleCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Articles" },
    { name: "description", content: "Latest articles" },
  ];
}

const articleWrapper = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(333px, 1fr))",
    judstifyContenet: "center",
    gap: "35px",
    listStyle: "none",
    padding: "20px 40px",
    alignItems: "stretch"
};

export default function Articles() {
  return (
    <main>
      <ul style={articleWrapper}>
        {all_articles.map((a, i) => (
          <li key={a.article_title}>
            <ArticleCard article={a} variant={i%6} />
          </li>
        ))}
      </ul>
    </main>
  );
}