import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="displayFlex flexColumn alignItemsCenter justifyContentCenter vh100">
        <h1>Страница не найдена</h1>
        <p>По данному запросу нет данных. </p>
        <Link className="linkNotFound" href="/">Вы можете вернуться на главную</Link>
      </div>
    </>
  );
}