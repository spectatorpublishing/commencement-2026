import type { Route } from "./+types/articles";
import { all_articles } from "../data/allarticles";
import ArticleCard from "../components/articleCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Articles" },
    { name: "description", content: "Latest articles" },
  ];
}

export default function Articles() {

  return (
    <main>
      {/* <h1>Articles</h1> */}
      <ul>
        {all_articles.map((a) => (
          <li key={a.article_title}>
            <ArticleCard article={a} />
          </li>
        ))}
      </ul>
    </main>
  );
}