import type { Route } from "./+types/articles";
import { all_articles } from "../data/allarticles";
import ArticleCard from "../components/articleCard";
import { useParams, useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Articles" },
    { name: "description", content: "Latest articles" },
  ];
}

const sections = [
  { key: "university", label: "University", colorClass: "university" },
  { key: "city", label: "City", colorClass: "city" },
  { key: "artsCulture", label: "Arts & Culture", colorClass: "artsCulture" },
  { key: "sports", label: "Sports", colorClass: "sports" },
  { key: "spectrum", label: "Spectrum", colorClass: "spectrum" },
  { key: "video", label: "Video", colorClass: "video" },
  { key: "crosswords", label: "Crosswords", colorClass: "crosswords" },
]

const articleWrapper = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    judstifyContenet: "center",
    gap: "60px",
    listStyle: "none",
    padding: "clamp(23px, 5vw, 58px) clamp(16px, 7vw, 80px)",
  };

export default function Articles() {
  const { section } = useParams();
  const navigate = useNavigate();
  const openSection = section;

  const toggleSection = (key) => {
    if (openSection === key) {
      navigate("/articles");
    } else {
      navigate(`/articles/${key}`);
    }
  };
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