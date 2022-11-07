const QueuedTweets = (props) => {

    const queueBar = (
        <div className="QueuedTweets" onClick={props.mergeQueue}>
            {`Show ${Object.keys(props.queue).length} Tweets`}
        </div>
    );

    return (Object.keys(props.queue).length > 1 ? queueBar : null)
}

export default QueuedTweets;