import "./FeedBacks.css"
import estrela from "../../assets/estrela.png"

const Feedbacks = () => {
  return (

    <section className="feedbacks">
        <article className="contentFeedback">
            <img src="https://fastly.picsum.photos/id/562/200/200.jpg?hmac=F4ylYRNFPH6rDzYo48_NUieJXXI2yaMl9ElwGeFQHZo" width="100px" height="100px" alt="user" />
            <img src={estrela} width="30px" height="30px" alt="stars" />

            <h1>Deixe seu feedback!</h1>
        </article>
    </section>
  )
}

export default Feedbacks