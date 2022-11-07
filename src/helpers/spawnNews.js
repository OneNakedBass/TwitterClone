const fakeNews = [
    {context: "Trending in Mexico", news: "It's international yell to your neighbor day!", qty: "128K Tweets", pic: '/images/yelling.jpeg'},
    {context: "Global", news: "Dog saves the day again", qty: "1M Tweets", pic: '/images/dogHero.jpeg'},
    {context: "Live", news: "Pakistan declares war against Ohio", qty: "69,420 Tweets", pic: "/images/ohio.png"},
    {context: "Global", news: "Pineapple pizza is now illegal in Italy", qty: "5k Tweets", pic: "/images/pizza.jpeg"},
    {context: "Trending", news: "Cat puts on a hat and looks very cute", qty: "200k Tweets", pic: "/images/hatCat.jpeg"},
    {context: "Now - Live", news: "Updog mines discovered in Peru", qty: "145k Tweets", pic: "/images/updog.png"},
    {context: "Trending in Mexico", news: "The simpsons get renewed for 20 more seasons", qty: "30K Tweets", pic: "/images/simpsons.jpeg"}
]

export function fakeNew() {
    return fakeNews[Math.floor(Math.random() * fakeNews.length)]
}

