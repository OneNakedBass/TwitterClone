import Menu from './Menu';
import Timeline from './Timeline';
import RightBar from './RightBar';
import { useEffect, useState } from 'react';
import { randomTweets } from '../helpers/spawnTweets';

function App() {

  const mainUserInfo = {
    username: "MainUser",
    userHandle: "JustMyself",
    profilePicture: "/default_profile.png",
    isVerified: false
  };

  const [tweets, setTweets] = useState({});

  const initialTweets = () => {
    const newTweets = randomTweets();
    setTweets(newTweets); 
  };

  useEffect(() => {
    if (Object.keys(tweets).length === 0) {
      initialTweets();
    } else {  
    }
    
  }, []) //eslint-disable-line


  return (
    <div className='flex-wrapper'>
      <Menu />
      <Timeline mainUserInfo={mainUserInfo} tweets={tweets}/>
      <RightBar />
    </div>
  )
}

export default App;