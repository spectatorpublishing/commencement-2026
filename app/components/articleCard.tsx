import './articleCard.css';

type Article = {
    image_url: string;
    article_title: string;
    article_authors: string;
    article_link: string;
  };

export default function ArticleCard(props: { article: Article }) {
  return (
    // <div className="articleCard">
      <a
        href={props.article.article_link}
        target="_blank"
        rel="noopener noreferrer"
        className="article-card"
      >
        <img src={props.article.image_url} alt={props.article.article_title} />
        <div className="content">
          <h2>{props.article.article_title}</h2>
          <p className="author">By {props.article.article_authors}</p>
        </div>
      </a>
    // </div>
  );
}