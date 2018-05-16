import React from 'react';
import {BrowserRouter, Switch, Route, NavLink, Link} from 'react-router-dom';
const Header = () => (
    <div>
        <h1>
            Portfolio
        </h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>
            Home
        </NavLink>
        <NavLink to="/portfolio" activeClassName="is-active">
            Portfolio
        </NavLink>
    </div>
);
const HomePage = () => (
    <div>
        <h3>
            Welcome
        </h3>
        <p>
            lorem ipsum dollor
        </p>
    </div>
);
const Portfolio = (props) => (
    <div>
        <h3>
            My portfolio
        </h3>
        {props
            .items
            .map((item,i) => (
                <NavLink to={'/item/'+i} key={item}>{item}</NavLink>
            ))
}
    </div>
);
const PortfolioItem = (props) => (
    <div>
        showing item number {props.match.params.id}
    </div>
)
Portfolio.defaultProps = {
    items: ["item1", "item2", "item3"]
};
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/item/:id" component={PortfolioItem}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;