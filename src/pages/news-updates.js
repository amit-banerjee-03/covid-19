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
            headers: { 'Authorization': "Bearer 3d9383a9ea2b4ff29d98e3f8537ba7e1",'Access-Control-Allow-Origin': '*'}
        };
        const defaultNews=[
            {"source":{"id":null,"name":"Moneycontrol"},"author":null,"title":"SC slams RBI on interest on loans in moratorium: Economic aspect not higher than health of the people - Moneycontrol","description":"The RBI had in an affidavit said lenders will lose around Rs 2 lakh crore if interest is waived during the loan moratorium.","url":"https://www.moneycontrol.com/news/india/sc-slams-rbi-on-interest-on-loans-in-moratorium-economic-aspect-not-higher-than-health-of-the-people-5357761.html","urlToImage":"https://images.moneycontrol.com/static-mcnews/2019/11/Supreme-Court-3-770x433.jpg","publishedAt":"2020-06-04T10:18:19Z","content":"The economic aspect is not higher than health of the people, the Supreme Court told the Reserve Bank of India (RBI) in the interest waiver case.\r\nThe central bank had in an affidavit said lenders wil… [+1044 chars]"},{"source":{"id":null,"name":"Republic World"},"author":"Yashika Sharma","title":"Asteroid as tall as the Empire State Building to close in on Earth, says NASA - Republic World - Republic World","description":"News sources claim that Asteroid taller than Empire State Building is said to be coming towards the Earth. NASA's information states that it is a large one.","url":"https://www.republicworld.com/technology-news/science/asteroid-as-tall-as-the-empire-state-building-to-zoom-past-earth-nasa.html","urlToImage":"https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/elmdl2i0envb6ea5_1591253741.jpeg?tr=f-jpeg","publishedAt":"2020-06-04T10:09:46Z","content":"The National Aeronautics and Space Administration (NASA) has recently shared an important piece of information about an asteroid that will soon be passing near the Earth's surface. This large asteroi… [+2677 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"Rezaul H Laskar","title":"At virtual bilateral meet, India and Australia sign seven agreement - Hindustan Times","description":"The two sides also unveiled a “shared vision for maritime cooperation in the Indo- Pacific” and signed seven agreements focused on crucial areas such as defence and rare earth minerals.","url":"https://www.hindustantimes.com/india-news/at-virtual-bilateral-meet-india-and-australia-sign-seven-agreement/story-D3h5STWDauibdDRpwzDcbO.html","urlToImage":"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/06/04/Pictures/australia-minister-narendra-virtual-speaks-during-summit_95b94ee4-a63b-11ea-99ce-29fdcc9e82d1.jpg","publishedAt":"2020-06-04T10:09:39Z","content":"India and Australia on Thursday elevated their ties to a comprehensive strategic partnership and upgraded their 2+2 foreign affairs and defence dialogue to the ministerial level during a virtual summ… [+3030 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Express Web Desk","title":"Coronavirus (Covid-19) vaccine latest update: Brazil approves Oxford vaccine trials; Moderna to start final phase in July - The Indian Express","description":"Coronavirus (Covid-19) Vaccine Latest Update: US has selected five companies as the most likely candidates to produce a vaccine; Moderna is looking to start final phase of trials as early as July.","url":"https://indianexpress.com/article/coronavirus/corona-covid-19-vaccine-update-june-oxford-moderna-pfizer-icmr-6442354/","urlToImage":"https://images.indianexpress.com/2020/05/23171e9abac941959382cec5bcef1646-982fb1bb94ac44adaa7bd55481cf3493-00c9466360cf468a86670ef9efa4ea05.jpg?w=759","publishedAt":"2020-06-04T10:08:06Z","content":"Coronavirus (Covid-19) Vaccine Latest Update: Around 120 vaccines are in the works across the world, of which at least 10 are undergoing human trials. (Reuters)Coronavirus (Covid-19) Vaccine Latest U… [+6816 chars]"},{"source":{"id":null,"name":"Livemint"},"author":"Reuters","title":"Amazon in talks to buy $2 billion stake in Bharti Airtel - Livemint","description":"The planned investment, if completed, would mean Amazon acquiring a roughly 5% stake based on the current market value of Bharti Airtel","url":"https://www.livemint.com/companies/news/amazon-in-talks-to-buy-2-billion-stake-in-bharti-airtel-11591264785458.html","urlToImage":"https://images.livemint.com/img/2020/06/04/600x338/c1d94290-e453-11e9-94e7-ad18d96ffaf5_1570682904478_1591264849694.jpg","publishedAt":"2020-06-04T10:01:58Z","content":"Amazon.com is in early-stage talks to buy a stake worth at least $2 billion in Indian mobile operator Bharti Airtel, three sources with knowledge of the matter told Reuters, underscoring the growing … [+1737 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"PTI","title":"Have battled suicidal thoughts, depression: Robin Uthappa opens up on life and cricket - The Indian Express","description":"Robin Uthappa hasn't retired yet but neither has he played for India since 2015. Uthappa said he has no regrets about how he dealt with the lows of his life.","url":"https://indianexpress.com/article/sports/cricket/have-battled-suicidal-thoughts-depression-robin-uthappa-opens-up-on-life-and-cricket-6442078/","urlToImage":"https://images.indianexpress.com/2017/04/uthappa-pti-759.jpg?w=759","publishedAt":"2020-06-04T09:52:16Z","content":"By: PTI | \r\nUpdated: June 4, 2020 3:00:26 pm\r\nRobin Uthappa is still optimistic about his comeback to the Indian side (Source: PTI)Robin Uthappa, a key member of the 2007 World T20 winning Indian tea… [+3798 chars]"},{"source":{"id":"the-times-of-india","name":"The Times of India"},"author":"Bloomberg","title":"The UK is on a collision course with China - Economic Times","description":"The more immediate anger is trained on Chinas treatment of Hong Kong. Whereas EU foreign ministers avoided any threat of sanctions and instead expressed “grave concern” at Beijings actions in regard to the territory, the UK - which did not take part in the EU…","url":"https://economictimes.indiatimes.com/news/international/world-news/the-uk-is-on-a-collision-course-with-china/articleshow/76191518.cms","urlToImage":"https://img.etimg.com/thumb/msid-76191791,width-1070,height-580,imgsize-207029,overlay-economictimes/photo.jpg","publishedAt":"2020-06-04T09:43:00Z","content":"By Alan CrawfordThe U.K. is heading for a damaging showdown with China as it takes on Beijing over Hong Kong and Huawei Technologies Co.\r\nPrime Minister Boris Johnson’s government has criticized Beij… [+4956 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"IE Online","title":"JAC Board 8th Result 2020 declared: List of websites to check results - The Indian Express","description":"JAC Jharkhand Board 8th Result 2020: Result available at jharresults.com, jac.nic.in, and jac.jharkhand.gov.in","url":"https://indianexpress.com/photos/education-gallery/jac-jharkhand-board-8th-result-2020-list-of-websites-to-check-results-www-jharresults-com-jac-nic-in-and-jac-jharkhand-gov-in-6442002/","urlToImage":"https://images.indianexpress.com/2020/06/jac-2020-759.jpg?w=759","publishedAt":"2020-06-04T09:41:49Z","content":null},{"source":{"id":null,"name":"Hindustan Times"},"author":"hindustantimes.com | Edited by: Amit Chaturvedi","title":"‘So sorry’: US envoy to India apologises over desecration of Mahatma Gandhi statue in Washington - Hindustan Times","description":"The statue of Mahatma Gandhi was dedicated by the then Prime Minister Atal Bihari Vajpayee during his visit to the US in the year 2000.","url":"https://www.hindustantimes.com/india-news/so-sorry-us-envoy-to-india-apologises-over-desecration-of-mahatma-gandhi-statue-in-washington/story-uCPRuDRFRdjPv6N0qs5P8O.html","urlToImage":"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/06/04/Pictures/_5884c9fc-a633-11ea-ad77-c76040589f9e.jpg","publishedAt":"2020-06-04T09:22:35Z","content":"The US Ambassador to India, Ken Juster, has apologised for desecration of Mahatma Gandhi’s statue in the United States. The statue was vandalised with graffiti and spray paint outside the Indian emba… [+2267 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"HT Entertainment Desk","title":"‘Thank you for those smiles’: Amitabh Bachchan, Shoojit Sircar lead Bollywood in remembering Basu C... - Hindustan Times","description":"Shoojit Sircar, Shabana Azmi, Hansal Mehta and more Bollywood personalities paid tribute to filmmaker Basu Chatterjee. He died on June 4 from age-related illness.","url":"https://www.hindustantimes.com/bollywood/thank-you-for-those-smiles-amitabh-bachchan-shoojit-sircar-lead-bollywood-in-remembering-basu-chatterjee/story-aPWjG0tLmoK2Jon6oiUT3K.html","urlToImage":"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/06/04/Pictures/_98ee6dc6-a639-11ea-b9e4-8ce809f9739c.jpg","publishedAt":"2020-06-04T09:11:00Z","content":"Filmmaker and screenplay writer Basu Chatterjee, who is remembered for Rajnigandha and Chitchor, died in Mumbai on Thursday. He was 90 and the cause of his death is cited as age-related ailments. \r\nT… [+4216 chars]"},{"source":{"id":"the-times-of-india","name":"The Times of India"},"author":"Kapil Dave","title":"Two more Gujarat Congress MLAs resign ahead of Rajya Sabha elections - Times of India","description":"Two more Gujarat Congress legislators have tendered their resignations on Thursday ahead of scheduled Rajya Sabha elections on June 19 for four seats","url":"https://timesofindia.indiatimes.com/city/ahmedabad/two-gujarat-congress-mlas-resign-ahead-of-rajya-sabha-elections/articleshow/76192678.cms","urlToImage":"https://static.toiimg.com/thumb/msid-76192684,width-1070,height-580,imgsize-342545,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg","publishedAt":"2020-06-04T09:08:54Z","content":"Gujarat: Congress MLA Axsay Patel submits his resignation to assembly speaker Rajendra Trivedi. #GujaratRajyaSabha https://t.co/nPcFzyCTnR\r\n— TOI Ahmedabad (@TOIAhmedabad) 1591258210000"},{"source":{"id":null,"name":"NDTV News"},"author":"Jagmeet Singh","title":"Samsung Galaxy A31 With Quad Rear Cameras, 5,000mAh Battery Launched in India: Price, Specifications - Gadgets 360","description":"Samsung Galaxy A31 has been launched in India. The new Samsung phone comes in a 6GB RAM and 128GB storage variant and features three distinct colour options.","url":"https://gadgets.ndtv.com/mobiles/news/samsung-a31-price-in-india-rs-21999-launch-galaxy-specifications-june-4-release-date-2240546","urlToImage":"https://i.gadgets360cdn.com/large/samsung_galaxy_a31_image_1_1591257068271.jpg","publishedAt":"2020-06-04T09:07:26Z","content":"Samsung Galaxy A31 has been launched in India as a successor to the Galaxy A30 that debuted in the country in late February last year. The new smartphone by the South Korean giant has a waterdrop-sty… [+2706 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Explained Desk","title":"Explained: The White House bunker where Trump took shelter amid George Floyd protests - The Indian Express","description":"The bunker, also known as the Presidential Emergency Operations Center (PEOC), has been used on rare occasions to secure US Presidents in times of peril.","url":"https://indianexpress.com/article/explained/explained-the-white-house-bunker-where-trump-took-shelter-amid-george-floyd-protests-6441206/","urlToImage":"https://images.indianexpress.com/2020/05/Trump-9.jpg?w=759","publishedAt":"2020-06-04T08:59:51Z","content":"US President Donald Trump arrives to speak with reporters in the James Brady Briefing Room of the White House (File/AP Photo/Alex Brandon)Amid violent protests over the death of George Floyd across U… [+3662 chars]"},{"source":{"id":"google-news","name":"Google News"},"author":null,"title":"Asteroids study: Fascinating! Scientists may have found origin and history of asteroids Bennu and Ryugu - The Financial Express","description":null,"url":"https://news.google.com/__i/rss/rd/articles/CBMioQFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9saWZlc3R5bGUvc2NpZW5jZS9hc3Rlcm9pZHMtc3R1ZHktZmFzY2luYXRpbmctc2NpZW50aXN0cy1tYXktaGF2ZS1mb3VuZC1vcmlnaW4tYW5kLWhpc3Rvcnktb2YtYXN0ZXJvaWRzLWJlbm51LWFuZC1yeXVndS8xOTgwODYzL9IBpgFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9saWZlc3R5bGUvc2NpZW5jZS9hc3Rlcm9pZHMtc3R1ZHktZmFzY2luYXRpbmctc2NpZW50aXN0cy1tYXktaGF2ZS1mb3VuZC1vcmlnaW4tYW5kLWhpc3Rvcnktb2YtYXN0ZXJvaWRzLWJlbm51LWFuZC1yeXVndS8xOTgwODYzL2xpdGUv?oc=5","urlToImage":null,"publishedAt":"2020-06-04T08:57:36Z","content":null},{"source":{"id":null,"name":"India TV News"},"author":"India TV Tech Desk","title":"Remove China Apps removed from Google Play Store: How to still download it on Android - India TV News","description":"Remove China Apps has been removed from the Google Play Store. If you still want the app, here's how you can download and install it on Android.","url":"https://www.indiatvnews.com/technology/news-remove-china-apps-removed-from-google-play-store-how-to-install-android-623335","urlToImage":"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/06/remove-china-apps-1591257809.jpg","publishedAt":"2020-06-04T08:36:04Z","content":"Image Source : DEVESH ARORARemove China Apps is not available on the Play Store anymore.\r\nRemove China Apps gained immense popularity as more people have been moving towards the anti-China sentiment.… [+1839 chars]"},{"source":{"id":"cnn","name":"CNN"},"author":"By <a href=\"/profiles/joshua-berlinger\">Joshua Berlinger</a> and <a href=\"/profiles/brett-mckeehan\">Brett McKeehan</a>, CNN","title":"Coronavirus pandemic: Updates from around the world - CNN","description":"The coronavirus pandemic has brought countries to a standstill. Here's the latest updates on Covid-19 cases, deaths, government responses and more.","url":"https://www.cnn.com/world/live-news/coronavirus-pandemic-06-04-20-intl/index.html","urlToImage":"https://cdn.cnn.com/cnnnext/dam/assets/200417125229-01-coronavirus-cdc-image-super-tease.jpg","publishedAt":"2020-06-04T08:28:00Z","content":"The US Centers for Disease Control and Prevention warns that some people may be putting off emergency care for serious health conditions during the coronavirus pandemic -- and fewer visits for critic… [+1024 chars]"},{"source":{"id":"the-times-of-india","name":"The Times of India"},"author":"TIMESOFINDIA.COM","title":"'Reopening economy herculean task,' Rajiv Bajaj tells Rahul Gandhi - Times of India","description":"India Business News: In an interaction with Congress leader Rahul Gandhi, industrialist Rajiv Bajaj stated on Thursday that getting economic growth back won't be an easy t","url":"https://timesofindia.indiatimes.com/business/india-business/reopening-economy-herculean-task-rajiv-bajaj-tells-rahul-gandhi/articleshow/76190288.cms","urlToImage":"https://static.toiimg.com/thumb/msid-76190288,width-1070,height-580,imgsize-2416106,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg","publishedAt":"2020-06-04T08:25:30Z","content":null},{"source":{"id":null,"name":"News18"},"author":"News18","title":"SpaceX Starlink Launch Adds 60 More Satellites to Musk's Worldwide Internet Plan - News18","description":"This is also the first time that SpaceX successfully used a Falcon 9 first stage booster successfully for five times.","url":"https://www.news18.com/news/tech/spacex-starlink-launch-adds-60-more-satellites-to-musks-worldwide-internet-plan-2652695.html","urlToImage":"https://images.news18.com/ibnlive/uploads/2020/06/1591257286_spacex-starlink-falcon-9.jpg","publishedAt":"2020-06-04T08:18:45Z","content":"SpaceX has pulled off its second launch in five days, successfully deploying 60 satellites into a lower Earth orbit in the wee hours of today. At 6:55AM IST today, a Falcon 9 rocket lifted off from S… [+2555 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"\"Not Indian Culture\": Minister Says Will Probe Elephant's Killing In Kerala - NDTV","description":"The death of a pregnant elephant in Kerala after it ate a pineapple stuffed with explosives will be investigated by the central government, Union Minister Prakash Javadekar said today. There has been an outpouring of rage and grief after tragic visuals of the…","url":"https://www.ndtv.com/india-news/minister-prakash-javadekar-says-will-probe-elephants-death-in-keralas-not-indian-culture-2240426","urlToImage":"https://c.ndtvimg.com/2020-06/cpa6ublo_kerala-pregnant-elephant-dies-facebook_625x300_02_June_20.jpg","publishedAt":"2020-06-04T07:53:22Z","content":"The wild elephant strayed into a village near Silent Valley National Park in Palakkad last Wednesday.\r\nHighlights\r\n<ul><li>\"Not our culture to feed fire crackers and kill\": Prakash Javadekar\r\n</li><l… [+3980 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"PTI","title":"Booze on bike: Swiggy expands alcohol delivery to Bengal after Jharkhand, Odisha - Hindustan Times","description":"Swiggy has implemented multiple safety measures to ensure safe home delivery of alcohol orders..The company is partnering with authorised retailers across major cities after validating their license and other required documents as outlined by the state govern…","url":"https://auto.hindustantimes.com/auto/news/booze-on-bike-swiggy-expands-alcohol-delivery-to-bengal-after-jharkhand-odisha-41591256563509.html","urlToImage":"https://images.hindustantimes.com/auto/img/2020/06/04/600x338/3c3f7712-9b73-11ea-a186-d9e3b4d139e4_1591256665784_1591256684972.jpg","publishedAt":"2020-06-04T07:48:36Z","content":"After Jharkhand and Odisha, food ordering and delivery platform Swiggy on Thursday started home delivery of alcohol in Kolkata and Siliguri and plans to expand to 24 other cities across West Bengal.\r… [+2054 chars]"}
        ];
        fetch("https://newsapi.org/v2/top-headlines?country=in",requestOptions)
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
                        articles:defaultNews
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