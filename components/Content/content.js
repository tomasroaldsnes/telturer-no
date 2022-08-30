import hero from "./Content.module.scss";
export default function Content({ headline, text }) {
  return (
    <div className={hero.content}>
      <h2 className={hero.headline}>{headline}</h2>
      <p className={hero.text}>{text}</p>
    </div>
  );
}
