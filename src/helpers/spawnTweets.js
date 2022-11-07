const part1 = ["They think it's a good idea", "Hopefully by tomorrow", "I just went to do some laundry", "Christmas is almost here",
               "So today I realized something very weird", "I woke up today", "Not everyday you get to see this kind of thing"];

const part2 = ["solving mysteries", "the kids will stop going searching for bugs", "the leaves are almost turning red",
               "which means that I need to buy gifts", "eating pancakes with mustard is not great", "and the first thing that I saw was my dog eating my homework",
               "just when I thought things couldn't get weirder"];

const part3 = ["but they don't realize", ", it's always a tough decision,", "memory is just our experiences colliding", "and running out of money",
               "there's something new to learn everyday,", "my parents were right,", "I almost got rick-rolled at walmart,"];

const part4 = ["the longer the shrimps stay in the freezer the badder they're gonna get", "but we don't really care about it",
               "and I shouldn't have taken it for granted", " guess some make good choices, some don't", " but I never learn, do I.",
               "Pepsi and Coca-cola will never be the same, though they're similar", " knowing theory doesn't mean you actually know how to do it"];


const randomUsers = {
    bobRoss: {
        profilePicture: '/images/bobRoss.jpeg',
        username: "Happy accidents dude",
        userHandle: "bobRoss",
        isVerified: true,
        image: null
    },
    cristiano: {
        profilePicture: '/images/cristiano.jpeg',
        username: 'CR7 Siuuuuuuu',
        userHandle: "CR7",
        isVerified: true,
        image: null
    },
    cuteDogs: {
        profilePicture: '/images/cuteDogs.jpeg',
        username: "Little Puppy Paws",
        userHandle: "CuteDogs",
        isVerified: false,
        image: null
    },
    lilNas: {
        profilePicture: '/images/lilNas.jpeg',
        username: "Montero",
        userHandle: "LilNasX",
        isVerified: false,
        image: null
    },
    michelleObama: {
        profilePicture: '/images/michelleObama.jpeg',
        username: "Mrs. Obama",
        userHandle: "MichelleObama",
        isVerified: true,
        image: null
    },
    netflix: {
        profilePicture: '/images/netflix.jpeg',
        username: "Netflix",
        userHandle: "Netflix",
        isVerified: true,
        image: null
    },
    shakira: {
        profilePicture: '/images/shakira.jpeg',
        username: "Shakira",
        userHandle: "ShakiraOfficial",
        isVerified: true,
        image: null
    },
    zuckerberg: {
        profilePicture: '/images/zuckerberg.jpeg',
        username: "META Avatars NOW",
        userHandle: "MarkZuckerberg",
        isVerified: true,
        image: null
    },
}

export function randomInfo(){

    let one = part1[Math.floor(Math.random() * part1.length)];
    let two = part2[Math.floor(Math.random() * part2.length)];
    let three = part3[Math.floor(Math.random() * part3.length)];
    let four = part4[Math.floor(Math.random() * part4.length)];
    
    let keys =  Object.keys(randomUsers);
    let user =  randomUsers[keys[Math.floor(Math.random() * keys.length)]];

    const randomInfo = {
    username:  user.username,
    userHandle:  user.userHandle,
    profilePicture:  user.profilePicture,
    tweetText:  `${one} ${two} ${three} ${four}`,
    isVerified: user.isVerified,
    image: null
    };

    if (randomInfo.userHandle === "CuteDogs"){
        randomInfo.tweetText = null;
    };

    return (
     randomInfo
    );
};

let numberOfRandomTweets = Math.floor(Math.random() * 30 + 20);

export function randomTweets(){
    const tweets = {};

    for (let i = 0; i < numberOfRandomTweets; i++){
        tweets[Math.floor(Math.random() * 1000000)] = randomInfo();
    };

    return tweets;
};