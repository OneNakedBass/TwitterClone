import { useEffect, useState } from "react";

const Tweet = (props) => {

    const { username, userHandle, profilePicture, tweetText, isVerified } = props.info;
    const [petImage, setPetImage] = useState();

    const fetchPetImage = async () => {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const json = await res.json();
        setPetImage(json.message);
    };

    useEffect(() => {
        if (userHandle === "CuteDogs"){
        fetchPetImage();
    }}, [userHandle]);

    return (
        <div className="Tweet">
            <div className="profile-picture-div">
                <img className="profile-picture" src={profilePicture} alt={username}></img>
            </div>
            <div className="tweet-content">
                <div className="user-info">
                    <p className="username">{username}</p>
                    {isVerified ? <img className="verified-badge" src="/verified_badge.png" alt="Twitter verified badge"></img> : null}
                    <p className="user-handle">@{userHandle}</p>
                </div>
                <p className="tweet-text">{tweetText}</p>
                { petImage ? <img className="tweet-image" src={petImage} alt=""></img> : null}
            </div>
        </div>

        
    );
};

export default Tweet;