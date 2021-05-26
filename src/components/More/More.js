import './More.css';

function More (props) {
  return (
    <section className={props.more ? "more page__more" : "more page__more more_unactive"}>
      <button className="more__button" onClick={props.onClickMore} >Ещё</button>
    </section>
  )
}

export default More;