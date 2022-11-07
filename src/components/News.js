import { fakeNew } from "../helpers/spawnNews"

const News = () => {
    const myNew = fakeNew();

    return (
        <div className="news-wrapper">
            <div className="news-text">
                <p className="news-context">{myNew.context}</p>
                <h4 className="news-news">{myNew.news}</h4>
                <p className="news-qty">{myNew.qty}</p>
            </div>
            <div className="news-image">
                <img src={myNew.pic} alt={myNew.pic}></img>
            </div>
        </div>
    )
}

export default News;