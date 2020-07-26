import React, { Component } from 'react';
import Loading from '../includes/loading';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

var countrySlug = {};

class NewsUpdates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            articles: []
        };
    }

    componentDidMount() {
        const requestOptions = {
            headers: { 'Authorization': "Bearer 3d9383a9ea2b4ff29d98e3f8537ba7e1", "X-Requested-With": "XMLHttpRequest" ,'Content-Type':'application/json'}
        };
        const defaultNews = [
            {"source":{"id":null,"name":"NDTV News"},"author":null,"title":"UK To Unveil Obesity Plan After PM Boris Johnson's Near-Death Experience - NDTV","description":"British Prime Minister Boris Johnson is set to role out a 10 million anti-obesity campaign, including junk food advert bans, following his own brush with death that he partly blamed on his weight.","url":"https://www.ndtv.com/world-news/amid-coronavirus-pandemic-uk-to-unveil-obesity-plan-after-pm-boris-johnsons-near-death-experience-2269079","urlToImage":"https://c.ndtvimg.com/2020-05/8ldt551_boris-johnson-reuters_625x300_10_May_20.jpg","publishedAt":"2020-07-26T10:17:41Z","content":"Boris Johnson will announce his \"Better Health\" campaign on Monday.\r\nLondon, United Kingdom: British Prime Minister Boris Johnson is set to role out a 10 million anti-obesity campaign, including junk… [+1415 chars]"},{"source":{"id":null,"name":"Newsd.in"},"author":"Newsd","title":"NASA Juno captures first-ever image of Jupiter’s moon Ganymede, check details - Newsd.in","description":"The ice shell on the outside is very thick, maybe 800 km (497 miles) thick.","url":"https://newsd.in/nasa-juno-captures-first-ever-image-of-jupiters-moon-ganymede-check-details/","urlToImage":"https://newsd.in/wp-content/uploads/2020/07/jupiter.jpg","publishedAt":"2020-07-26T09:37:33Z","content":"NASA’s Juno spacecraft has captured the first images of the north pole of Jupiter’s Ganymede, which is the largest moon in the solar system. NASA’s Jet Propulsion Laboratory divisions official Twitte… [+1831 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Express Web Desk","title":"PM Modi’s Mann Ki Baat: Coronavirus is as lethal as it was in beginning - The Indian Express","description":"The Prime Minister began his address to nation by remembering the jawans who laid down their lives during the 1999 Kargil War. He also spoke about how Covid is spreading faster and that its threat is high as ever.","url":"https://indianexpress.com/article/india/mann-ki-baat-pm-modi-says-coronavirus-is-as-lethal-as-it-was-in-beginning-6524031/","urlToImage":"https://images.indianexpress.com/2020/07/Narendra-Modi-1.jpg?w=759","publishedAt":"2020-07-26T09:18:33Z","content":"PM Modi also applauded the efforts of groups in various states including Bihar, Jharkhand and northeast to promote local products during the COVID-19 pandemic.  (PTI Photo)Covid-19 is spreading faste… [+2523 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"The best true wireless earbuds and earphones 2020 - TechRadar","description":"Find the full list of the Best True Wireless Earbuds on TechRadar.com - https://www.techradar.com/uk/news/best-true-wireless-earbuds-the-best-airpod-alternat...","url":"https://www.youtube.com/watch?v=_ya2hWl1j24","urlToImage":"https://i.ytimg.com/vi/_ya2hWl1j24/maxresdefault.jpg","publishedAt":"2020-07-26T09:00:19Z","content":null},{"source":{"id":null,"name":"Hindustan Times"},"author":"hindustantimes.com | Edited by Meenakshi Ray","title":"Gehlot resends proposal for assembly session to governor, no mention of floor test - Hindustan Times","description":"Rajasthan is facing a political crisis due to a rebellion by Sachin Pilot and a section of Congress legislators supporting the former deputy chief minister.","url":"https://www.hindustantimes.com/india-news/gehlot-resends-proposal-for-assembly-session-to-governor-no-mention-of-floor-test/story-ZWojZo4esE44MFBzBQGtLO.html","urlToImage":"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/07/26/Pictures/jaipur-congress-gehlot-fairmont_7d3bca74-cf15-11ea-a892-bc0febb83d85.jpg","publishedAt":"2020-07-26T08:58:00Z","content":"Rajasthan chief minister Ashok Gehlot has requested Governor Kalraj Mishra to start a session of the state assembly to discuss bills, including one on the coronavirus pandemic, without mentioning a f… [+2196 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"After Watching Sushant Singh Rajput's Dil Bechara, Kriti Sanon Writes: \"This Broke My Heart, Again\" - NDTV","description":"\"In Manny, I saw you come alive in so many moments,\" wrote Kriti Sanon","url":"https://www.ndtv.com/entertainment/after-watching-sushant-singh-rajputs-dil-bechara-kriti-sanon-writes-this-broke-my-heart-again-2269037","urlToImage":"https://c.ndtvimg.com/2020-07/hqoi2cm8_dil-bechara-_625x300_26_July_20.jpg","publishedAt":"2020-07-26T08:21:34Z","content":"Sushant Singh Rajput in a still from Dil Bechara. (Image courtesy: YouTube)\r\nHighlights\r\n<ul><li>Kriti shared a video collage comprising the actor's stills from the film\r\n</li><li>\"Your most magical … [+2331 chars]"},{"source":{"id":null,"name":"Republic World"},"author":"Urvashi Kandpal","title":"Mahesh Bhatt to be summoned in Sushant Singh Rajput death probe: Maharashtra Home Minister - Republic World - Republic World","description":"Maharashtra's Home Minister Anil Deshmukh has called for summoning director Mahesh Bhatt for interrogation amid the probe into actor Sushant Singh's death","url":"https://www.republicworld.com/entertainment-news/bollywood-news/mahesh-bhatt-will-have-to-testiify-in-sushant-singhs-suicide-case.html","urlToImage":"https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/t1gvftxkrmcxckha_1595751440.jpeg?tr=f-jpeg","publishedAt":"2020-07-26T08:17:00Z","content":"Maharashtra state Home Minister Anil Deshmukh has declared that Bollywood filmmaker Mahesh Bhatt will be summoned by the Mumbai Police on Monday, July 27 in its probe in actor Sushant Singh Rajput's … [+3170 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"Sutirtho Patranobis | Edited by Sparshita Saxena","title":"Amid rising tension with US, China holds live-fire drills near South China Sea - Hindustan Times","description":"The US had, earlier this month, deployed two of its frontline aircraft carriers and their strike groups comprising more battleships, in the South China Sea besides flying reconnaissance aircraft in the region.","url":"https://www.hindustantimes.com/world-news/china-begins-live-fire-drills-with-powerful-ammo-near-south-china-sea/story-rtUlQhCKpIAkU5Okj1HL5O.html","urlToImage":"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/07/26/Pictures/chinese-president-xi-jinping_aaeea8d8-cf10-11ea-98f0-14dc794b6a99.jpg","publishedAt":"2020-07-26T07:59:00Z","content":"China’s People’s Liberation Army (PLA) has begun a well-publicised live-fire drill in the southern Guangdong province’s Leizhou Peninsula, considered to be the doorstep of the South China Sea (SCS), … [+1848 chars]"},{"source":{"id":null,"name":"Jagran.com"},"author":"Aalok Sensharma","title":"WATCH: World’s first-ever 4K video of Mars captured by NASA Rovers - Jagran English","description":"With scientists conducting trying to find out more about the Red Planet  British YouTubers have successfully rendered the  first time  Martian footage in 4k resolution with the help of NASA s robotic rovers named Curiosity  Spirit  and Opportunity that could …","url":"https://english.jagran.com/trending/watch-worlds-firstever-4k-video-of-mars-captured-by-nasa-rovers-10014453","urlToImage":"https://www.jagranimages.com/images/2020/jul/25_04_2019-mars-vibrate_191666531595750277408.jpg","publishedAt":"2020-07-26T07:56:11Z","content":"New Delhi | Jagran Trending Desk: Mars, which is also known as the Red Planet, has always intrigued people across the world. Scientists and researchers claim that Mars can support life and are findin… [+2972 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"Pakistan Tried To \"Backstab\" India: PM During Tribute To Kargil Heroes - NDTV","description":"Prime Minister Narendra Modi today paid tribute to the heroes of Kargil war on his monthly radio address Mann ki Baat. Kargil Diwas  is celebrated every year, marking the day the Indian Army recaptured all the Indian posts in Ladakh's Kargil that had been occ…","url":"https://www.ndtv.com/india-news/mann-ki-baat-pm-modi-pays-tribute-to-kargil-heroes-thanks-to-the-courage-of-our-armed-forces-india-showed-great-strength-in-kargil-2268975","urlToImage":"https://c.ndtvimg.com/2019-07/7kfet9sg_mann-ki-baat-pm-modi-twitter_625x300_28_July_19.jpg","publishedAt":"2020-07-26T07:17:26Z","content":"Prime Minister Narendra Modi in Mann ki Baat, paid tribute to the armed forces.\r\nNew Delhi: Pakistan tried to \"backstab\" India despite her attempts to keep friendly relations, Prime Minister Narendra… [+1989 chars]"},{"source":{"id":null,"name":"Chess.com"},"author":"Peter Doggers","title":"Legends Of Chess: Nepomniachtchi Catches Carlsen As Ivanchuk Forces Armageddon - Chess.com","description":"On Saturday GM Ian Nepomniachtchi caught GM Magnus Carlsen in first place at the chess24 Legends of Chess tournament. While Nepomniachtchi beat GM Peter Svidler 3-1, Carlsen faced stiff opposition from GM Vasyl Ivanchuk and only won in the armageddon. Meanwhi…","url":"https://www.chess.com/news/view/chess24-legends-of-chess-round-5","urlToImage":"https://images.chesscomfiles.com/uploads/v1/news/717418.5847e00c.5000x5000o.85cfc785b1f2.jpeg","publishedAt":"2020-07-26T07:15:00Z","content":"On Saturday GM Ian Nepomniachtchi caught GM Magnus Carlsen in first place at the chess24 Legends of Chess tournament. While Nepomniachtchi beat GM Peter Svidler 3-1, Carlsen faced stiff opposition fr… [+7084 chars]"},{"source":{"id":null,"name":"Moneycontrol"},"author":null,"title":"ICICI Bank Q1FY21 results: Key highlights of the earnings concall - Moneycontrol.com","description":"The bank is looking to reduce the concentration risk and improve the credit ratings in the corporate portfolio. Proposed capital raise is aimed to further strengthen capital of the bank.","url":"https://www.moneycontrol.com/news/business/markets/icici-bank-q1fy21-results-key-highlights-of-the-earnings-concall-5599681.html","urlToImage":"https://images.moneycontrol.com/static-mcnews/2020/04/ICICI-Bank-770x433.jpg","publishedAt":"2020-07-26T07:14:00Z","content":"India's second-largest private sector lender ICICI Bank on July 25 reported Q1 FY21 profit at Rs 2,599.1 crore, a growth of 36.2 percent year-on-year backed by some stake sale in general and life ins… [+4356 chars]"},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"Series win still on Kemar Roach's mind amid emotions of getting to 200 wickets | ESPNcricinfo.com - ESPNcricinfo","description":"Says going wicketless in the first Test made him \"wonder what's going on\", but now he's \"definitely back\" | ESPNcricinfo.com","url":"https://www.espncricinfo.com/story/_/id/29540211/series-win-kemar-roach-mind-amid-emotions-getting-200-wickets","urlToImage":"https://img1.hscicdn.com/image/upload/f_auto/esci/i/cricket/cricinfo/1227731_1296x729.jpg","publishedAt":"2020-07-26T07:00:05Z","content":"Becoming the first West Indies bowler to reach 200 Test wickets in 26 years is not Kemar Roach's favourite moment of his career. At least, not yet.\r\nRoach reached the landmark when he bowled Chris Wo… [+4103 chars]"},{"source":{"id":"the-hindu","name":"The Hindu"},"author":"PTI","title":"Pakistanis head terror groups ISIL-K, AQIS, TTP; not yet blacklisted, says UN report - The Hindu","description":"The report said that the group reportedly has between 150 and 200 members from Bangladesh, India, Myanmar and Pakistan.","url":"https://www.thehindu.com/news/international/pakistanis-head-terror-groups-isil-k-aqis-ttp-not-yet-blacklisted-un-report/article32195283.ece","urlToImage":"https://www.thehindu.com/news/international/2r1qsc/article31260463.ece/ALTERNATES/LANDSCAPE_615/Th05-Vijaita-AFghan-leader-heldv","publishedAt":"2020-07-26T06:03:33Z","content":"Pakistani nationals remain at the leadership levels in terror groups such as al-Qaida in the Indian Subcontinent, Islamic State in Iraq and the Levant-Khorasan and Tehrik-e-Taliban Pakistan, and many… [+2419 chars]"},{"source":{"id":"the-times-of-india","name":"The Times of India"},"author":"Rajesh Mascarenhas","title":"Aditya Puri sells shares worth Rs 843 crore in HDFC Bank - Economic Times","description":"Shares of HDFC Bank rallied 46% since its yearly low of Rs 765 touched on March 24.","url":"https://economictimes.indiatimes.com/markets/stocks/news/aditya-puri-sells-shares-worth-rs-843-crore-in-hdfc-bank/articleshow/77178810.cms","urlToImage":"https://img.etimg.com/thumb/msid-77178798,width-1070,height-580,imgsize-145038,overlay-etmarkets/photo.jpg","publishedAt":"2020-07-26T06:03:00Z","content":"MUMBAI: Aditya Puri, managing director and chief executive officer of the country's largest private sector lender HDFC Bank has sold 95% of his stake valued Rs 843 crore in the bank this week. Accord… [+1367 chars]"},{"source":{"id":null,"name":"Livemint"},"author":"PTI","title":"BPCL offers VRS to employees ahead of privatisation - Livemint","description":"BPCL, where the government is selling its entire 52.98% stake, has about 20,000 employees.All employees who have completed 45 years of age will be eligible for the scheme","url":"https://www.livemint.com/politics/policy/bpcl-offers-vrs-to-employees-ahead-of-privatisation-11595742473930.html","urlToImage":"https://images.livemint.com/img/2020/07/26/600x338/petrol_pump1--621x414_1595742683522.jpg","publishedAt":"2020-07-26T05:50:24Z","content":"State-owned BPCL has brought a voluntary retirement scheme for its employees ahead of the government privatising the country's third biggest oil refiner and second-largest fuel retailer.\"The Corporat… [+4974 chars]"},{"source":{"id":null,"name":"Thehealthsite.com"},"author":"Longjam Dineshwori","title":"Fever not a predominant symptom of COVID-19 infection: AIIMS Study - TheHealthSite","description":"Overemphasis on fever as a predominant COVID-19 symptom may lead to several being missed as many patients are asymptomatic an AIIMS study suggested.","url":"https://www.thehealthsite.com/news/fever-not-a-predominant-symptom-of-covid-19-infection-aiims-study-759320/","urlToImage":"https://st1.thehealthsite.com/wp-content/uploads/2020/04/coronavirus-1-1-655x353.jpg","publishedAt":"2020-07-26T05:41:00Z","content":"Fever was considered as the most common symptom of COVID-19, encouraging wide use of digital forehead infrared thermometer at airports, offices, hospitals, shopping centres and other public and comme… [+3731 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Express Web Desk","title":"Coronavirus India LIVE Updates: 48,661 fresh cases, 705 deaths reported; total 13.85 lakh infections in India - The Indian Express","description":"Coronavirus (Covid-19) India News Live Updates: With nearly 50,000 cases (48,661) for the third consecutive day, the total number of coronavirus infections in India rose to 13,85,522 on Sunday. The toll rose to 32,063 with 705 deaths in the last 24 hours.","url":"https://indianexpress.com/article/india/coronavirus-india-live-news-updates-covid-19-cases-tracker-deaths-lockdown-latest-news-covid-19-vaccine-6522197/","urlToImage":"https://images.indianexpress.com/2020/07/Delhi-11.jpg?w=759","publishedAt":"2020-07-26T05:39:14Z","content":"Movie-goers wearing masks to protect themselves from the coronavirus are spaced apart as they watch a movie in a newly reopened cinema in Hangzhou in eastern China. (Chinatopix via AP)\r\nWith nearly 5… [+4282 chars]"},{"source":{"id":"the-times-of-india","name":"The Times of India"},"author":"PTI","title":"Kumar Sangakkara backs Sourav Ganguly for ICC top post, says 'astute brain' makes him suitable candidate - Times of India","description":"Cricket News: Admitting that he is a big fan of Sourav Ganguly, Kumar Sangakkara said the former India captain has an international mindset which is necessary to re","url":"https://timesofindia.indiatimes.com/sports/cricket/news/kumar-sangakkara-backs-sourav-ganguly-for-icc-top-post-says-astute-brain-makes-him-suitable-candidate/articleshow/77178415.cms","urlToImage":"https://static.toiimg.com/thumb/msid-77178422,width-1070,height-580,imgsize-157863,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg","publishedAt":"2020-07-26T05:29:00Z","content":null},{"source":{"id":null,"name":"Hindustan Times"},"author":"HT Tech","title":"Samsung's Galaxy Watch 3 will let you answer calls just by clenching your fist - Hindustan Times","description":"Samsung is adding an Apple Watch-style fall detection as well to the Galaxy Watch 3’s arsenal as well.","url":"https://tech.hindustantimes.com/wearables/news/samsung-s-galaxy-watch-3-will-let-you-answer-calls-just-by-clenching-your-fist-71595739994936.html","urlToImage":"https://images.hindustantimes.com/tech/img/2020/07/26/600x338/dims_1595740219227_1595740231358.jfif","publishedAt":"2020-07-26T05:06:34Z","content":"Samsung is going to make it easier for you to answer to reject a call with the upcoming Samsung Galaxy Watch 3. According to reports, Samsungs new Galaxy Watch 3 Plugin app has a reference for suppor… [+1093 chars]"}
        ];
        fetch("https://newsapi.org/v2/top-headlines?country=in", requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        articles: result.articles
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        articles: defaultNews
                    });
                }
            );
    }

    render() {
        const { error, isLoaded, articles } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (<div>
                <Loading />
            </div>);
        } else {
            var data = [];
            return (
                <>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="row">
                                    <div className="col-12">
                                        <h1 className="p-3">Latest News Updates:</h1>
                                    </div>
                                    {
                                        articles.map((article, index) => {
                                            if ((article.title != null && article.description != null) && (article.title != null && article.title.toLowerCase().indexOf("covid") !== -1 || article.title.toLowerCase().indexOf("coronavirus") !== -1 || article.description.toLowerCase().indexOf("covid") !== -1 || article.description.toLowerCase().indexOf("coronavirus") !== -1)) {
                                                return (
                                                    <>
                                                        <div className="col-12 mb-3">
                                                            <Article article={article} />
                                                        </div>
                                                    </>
                                                );
                                            } else {
                                                return (
                                                    <>
                                                    </>
                                                );
                                            }

                                        })
                                    };
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            );
        }
    }
}

class Article extends Component {
    render() {
        const { article } = this.props;
        return (
            <>
                <Card style={{ padding: "20px" }}>
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                            <img src={article.urlToImage} style={{ height: "110px" }} />
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <Card.Body>
                                <Card.Text>
                                    <b>{article.title}</b>
                                    <p>
                                        {article.description}
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 mt-2">
                            <Button variant="link" onClick={() => { window.open(article.url, '_blank'); }}>Read more..</Button>
                        </div>

                    </div>
                </Card >


            </>
        );
    }
}

export default NewsUpdates;