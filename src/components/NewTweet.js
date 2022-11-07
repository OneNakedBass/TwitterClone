import { Fragment, useEffect, useRef, useState } from "react";

const NewTweet = (props) => {
    
    const newTweetRef = useRef();
    const newTweetTextRef = useRef();
    const newTweetButtonRef = useRef();
    const {username, userHandle, profilePicture, isVerified} = props.mainUserInfo;
    const [focus, setFocus] = useState(false);

    const focusTweet = () => {
        newTweetRef.current.style.height = "8rem";
        newTweetTextRef.current.style.borderBottom = "0.5px solid rgba(88, 105, 109, 0.788)";
        setFocus(!focus);
    };

    const checkTweetContent = () => {
        if (newTweetTextRef.current.value.length === 0){
            newTweetButtonRef.current.disabled = true;
        } else if (newTweetTextRef.current.value.length > 0 && newTweetTextRef.current.value.length <= 280){
            newTweetButtonRef.current.disabled = false;
        } else { 
            newTweetButtonRef.current.disabled = true;
        }
    };

    const handleClick = () => {
        const tweetInfo = {
            username: username,
            userHandle: userHandle,
            profilePicture: profilePicture,
            tweetText: newTweetTextRef.current.value,
            isVerified: isVerified,
            image: null
        };

        props.addNewTweet(tweetInfo);
        newTweetTextRef.current.value = "";
        checkTweetContent();
    };

    useEffect(() => {
        checkTweetContent();
    }, []);
    
    return (
    <Fragment >
        <h3 className="home-header">Home</h3>
        <div className="NewTweet" ref={newTweetRef} onClick={focusTweet} >
            <div className="profile-picture-div">
                <img className="profile-picture" src="/default_profile.png" alt="User's profile"></img>
            </div>

            <div className="new-tweet-content-column">
                <div className="new-tweet-content">
                    <textarea className="new-tweet-text-area" onChange={checkTweetContent} ref={newTweetTextRef} placeholder="What's happening?"></textarea>
                </div>
                <div className="new-tweet-functions">
                    <button ref={newTweetButtonRef} onClick={handleClick} id="new-tweet-button">Tweet</button>
                </div>
            </div>
        </div> 
    </Fragment>
)};

export default NewTweet;