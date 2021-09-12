const infamousHashtags = [
    "#producersofinstagram ",
    "#productiontips ",
    "#upcomingsinger ",
    "#newmusicalert🚨 ",
    "#newmusicartist ",
    "#newsinglealert ",
    "#musicbloggers ",
    "#coolmusic ",
    "#musicpage ",
    "#nicemusic ",
    "#musicdiscovery ",
    "#newmusician ",
    "#newmusicontheway ",
    "#newmusiccomingsoon ",
    "#newmusicdaily ",
];

const midfamousHashtags = [
    "#imakebeats ",
    "#musicrelease ",
    "#musicianofinstagram ",
    "#dailymusic ",
    "#edmaddict ",
    "#newrap ",
    "#gymmusic ",
    "#newmusiccoming ",
    "#musicartists ",
    "#discovermusic ",
    "#musiceverywhere ",
    "#mymusic ",
    "#freshmusic ",
    "#musiclabel ",
    "#englishsong ",
];

const famousHashtags = [
    "#soundcloudmusic ",
    "#independentmusic ",
    "#musicproducers ",
    "#newsongs ",
    "#undergroundmusic ",
    "#musicblog ",
    "#newmusicvideo ",
    "#underrated ",
    "#musicband ",
    "#musicoftheday ",
    "#musicforlife ",
    "#newtrack ",
    "#greatmusic ",
    "#spotifyartist ",
    "#youtubemusic ",
];

const niche = [
    "#findnewmusic ",
    "#newmusiceveryday ",
    "#musicpromotion ",
    "#musicpromotions ",
    "#underratedmusic ",
    "#newmusicdaily ",
    "#discovernewmusic ",
    "#helpmusicians ",
    "#musicbusiness ",
    "#musicpromo ",
    "#lovenewmusic ",
    "#songsuggestions ",
    "#copyrightfreemusic ",
    "#vlogmusic ",
    "#spotifyplaylists ",
];

const first = [
    "#edmaddicts ",
    "#musiclover ",
    "#unsignedtalent ",
    "#indierap ",
    "#unsignedartists ",
    "#musicislife ",
    "#underratedartists ",
    "#goodmusic ",
    "#musicvideo ",
    "#musicismylife ",
    "#music ",
    "#musicartist ",
    "#musically ",
    "#musicals ",
    "#musicians ",
    "#musicindustry ",
    "#musiclovers ",
    "#musician ",
    "#musicproducer ",
    "#musicproduction ",
    "#reggaemusic ",
    "#musiclife ",
    "#musicvideos ",
    "#bestmusic ",
    "#sharemusic ",
    "#trackoftheday ",
    "#edmmusic ",
    "#edmvibes ",
    "#newmusicfriday ",
    "#freemusic ",
];

const btn = document.getElementById("btn");
const demo = document.getElementById("demo");
const copy = document.getElementById("copy");

// Functions

function getRandomNumber1() {
    return Math.floor(Math.random() * niche.length);
}

function getRandomNumber2() {
    return Math.floor(Math.random() * first.length);
}

function copyToClipboard() { // Function to copy text in the demo element.
    let text = demo.innerText;
    const elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}

copy.addEventListener("click", copyToClipboard);

btn.addEventListener("click", function () {
    let hashtags = "";
    for (let i = 0; i < 5; i++) {
        hashtags += infamousHashtags[getRandomNumber1()];
    }
    for (let i = 0; i < 5; i++) {
        hashtags += midfamousHashtags[getRandomNumber1()];
    }
    for (let i = 0; i < 5; i++) {
        hashtags += famousHashtags[getRandomNumber1()];
    }
    for (let i = 0; i < 5; i++) {
        hashtags += niche[getRandomNumber1()];
    }
    for (let i = 0; i < 10; i++) {
        hashtags += first[getRandomNumber2()];
    }

    demo.innerHTML = hashtags;

    
});
