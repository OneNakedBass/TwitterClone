import Tweet from './Tweet';
import NewTweet from './NewTweet';
import { useState, useEffect } from 'react';
import { randomInfo } from '../helpers/spawnTweets';
import QueuedTweets from './QueuedTweets';


const Timeline = (props) => {

    const [tweet, setTweet] = useState(); //eslint-disable-line
    const [newRandomTweet, setNewRandomTweet] = useState();
    const [queue, setQueue] = useState({});

    function addNewTweet(tweetInfo) {
        setTweet(tweetInfo);
        props.tweets[Date.now()] = tweetInfo;
    };

    function fakeTweet(){
        let fakeTweet = {};
        fakeTweet[Date.now()] = randomInfo();
        setNewRandomTweet(fakeTweet);
    };

    function updateQueue(){
        setQueue(prevState => ({...prevState, ...newRandomTweet}));
    };

    function mergeQueue(){
        Object.keys(queue).map(key => (
            props.tweets[key] = queue[key]
        ));
        setQueue({});
    };

    useEffect(() => {
        setTimeout(() => {
            fakeTweet();
            updateQueue();
        }, Math.floor((Math.random() * 5000) + 2000));
    }, [newRandomTweet]); //eslint-disable-line


    return (
    <div className='Timeline'>
        <NewTweet mainUserInfo={props.mainUserInfo} addNewTweet={addNewTweet} />
        < QueuedTweets queue={queue} mergeQueue={mergeQueue}/>
        {Object.keys(props.tweets).reverse().map(tweet => (
            <Tweet key={tweet} info={props.tweets[tweet]} />
        ))}
    </div>
    );
}


export default Timeline;