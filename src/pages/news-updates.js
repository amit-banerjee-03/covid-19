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
        fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=3d9383a9ea2b4ff29d98e3f8537ba7e1")
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
                        error
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
                                            if (article.title.toLowerCase().indexOf("covid") !== -1 || article.title.toLowerCase().indexOf("coronavirus") !== -1 || article.description.toLowerCase().indexOf("covid") !== -1 || article.description.toLowerCase().indexOf("coronavirus") !== -1) {
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