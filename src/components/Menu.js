

const Menu = () => {
    
    const buttonClickHandler = (event) => {
        console.log(`This is the button for ${event.target.textContent}`);
    };

    const backToTheTop = () => {
        window.location.href="#";
    };
    
    return (
    <div className="Menu">
        <label className="menu-label" htmlFor="TwitterButton"><img id="TwitterButton" onClick={backToTheTop} alt={"Just the twitter icon"} src='/twitter-icon.png'></img></label>
        <label className="menu-label" htmlFor="Home"><button id="Home" onClick={backToTheTop}>Home</button></label>
        <label className="menu-label" htmlFor="Explore"><button id="Explore" onClick={buttonClickHandler}>Explore</button></label>
        <label className="menu-label" htmlFor="Notifications"><button id="Notifications" onClick={buttonClickHandler}>Notifications</button></label>
        <label className="menu-label" htmlFor="Messages"><button id="Messages" onClick={buttonClickHandler}>Messages</button></label>
        <label className="menu-label" htmlFor="Bookmarks"><button id="Bookmarks" onClick={buttonClickHandler}>Bookmarks</button></label>
        <label className="menu-label" htmlFor="Lists"><button id="Lists" onClick={buttonClickHandler}>Lists</button></label>
        <label className="menu-label" htmlFor="Profile"><button id="Profile" onClick={buttonClickHandler}>Profile</button></label>
        <label className="menu-label" htmlFor="More"><button id="More" onClick={buttonClickHandler}>More</button></label>
        <button id="tweet-button">Tweet</button>
    </div>
)};

export default Menu;