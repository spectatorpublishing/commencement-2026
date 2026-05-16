import './articleCard.css';

type Article = {
    image_url: string;
    article_title: string;
    article_authors: string;
    article_link: string;
  };

const iconMap = [
  "/angleTape.png",
  "/bluePin.png",
  "/flatTape.png",
  "/whitePin.png",
  "/flatTape.png",
  "/whitePin.png",
];

export default function ArticleCard(props: { article: Article; variant: number; num: number; compact?: boolean}) {
  return (
      <a
        href={props.article.article_link}
        target="_blank"
        rel="noopener noreferrer"
        className={`article-card ${props.compact ? 'article-card--compact' : ''}`}
      >
        {props.num > 1 && (
          <img className={`icon variant-${props.variant}`} src={iconMap[props.variant]} />
        )}
          <div className="image-wrapper">
          <div className="image-box">
            <img className="image" src={props.article.image_url} alt={props.article.article_title} />
          </div>
          </div>
        <div className="content">
          <h2>{props.article.article_title}</h2>
          <p className="author">By {props.article.article_authors}</p>
        </div>
      </a>
  );
}