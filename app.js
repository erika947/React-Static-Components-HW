class Aside extends React.Component {
    render() {
        return (
            <aside>
                <nav>
                    <a>Dashboard</a>
                    <a> Widget</a>
                    <a> Reviews</a>
                    <a> Customers</a>
                    <a> Online Analysis</a>
                    <a> Setting</a>
                </nav>

            </aside>
        )
    }
}


class Reviews extends React.Component {
    render() {
        return (
            <section>

                <div >Reviews</div>
                <div className="boxes">1281</div>

            </section>
        )
    }
}

class AvgRating extends React.Component {
    render() {
        return <section>
            <div>Average Rating</div>
            <div className="boxes">4.6</div>
        </section>
    }
}
class Sentiment extends React.Component {
    render() {
        return <section>
            <div>Sentiment Analysis</div>
            <ul className="noPoints">
            <li className="boxes">960</li>
            <li className="boxes">122</li>
            <li className="boxes">321</li>
            </ul>
            
            <div className="boxes"></div>
        </section>
    }
}

class WebVisitors extends React.Component {
    render() {
      return (
        <section id='large'>
          <p>Website Visitors</p>
          <p class='num'>821</p>
          <div></div>
        </section>
      );
    }
  }

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <Aside />
                <div id="container">
                    <div id="top">
                        <Reviews />
                        <AvgRating />
                        <Sentiment />
                    </div>
                    <WebVisitors />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('main')
);
