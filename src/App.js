//Libraries
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import HomePage from './Components/HomePage';
import CarInsurance from './Components/CarInsurance';
import LifeInsurance from './Components/LifeInsurance';
import BurialInsurance from './Components/BurialInsurance';
import HealthInsurance from './Components/HealthInsurance';
import AccidentInsurance from './Components/AccidentInsurance';
import HomeInsurance from './Components/HomeInsurance';
import RequestInsurance from './Components/Contact/RequestInsurane';
import ContactCarInsurance from './Components/Contact/ContactCarInsurance';
import ContactHomeInsurance from './Components/Contact/ContactHomeInsurance';
import ThankYou from './Components/ThankYou';
import { TitleComponent } from './Components/TitleComponent';

//Components Data
import {
	HomePageData,
	CarInsuranceData,
	LifeInsuranceData,
	BurialInsuranceData,
	HealthInsuranceData,
	AccidentInsuranceData,
	HomeInsuranceData,
	RequestInsuranceData,
	ContactCarInsuranceData,
	ContactHomeInsuranceData,
	ThankYouData
} from './utils/data';

// withTitle function
const withTitle = ({ component: Component, title }) => {
	return class Title extends Component {
		render() {
			return (
				<React.Fragment>
					<TitleComponent title={title} />
					<Component />
				</React.Fragment>
			);
		}
	};
};

//Adding title
const CarInsuranceComponent = withTitle({ component: CarInsurance, title: CarInsuranceData.title });
const LifeInsuranceComponent = withTitle({ component: LifeInsurance, title: LifeInsuranceData.title });
const BurialInsuranceComponent = withTitle({ component: BurialInsurance, title: BurialInsuranceData.title });
const HealthInsuranceComponent = withTitle({ component: HealthInsurance, title: HealthInsuranceData.title });
const AccidentInsuranceComponent = withTitle({ component: AccidentInsurance, title: AccidentInsuranceData.title });
const HomeInsuranceComponent = withTitle({ component: HomeInsurance, title: HomeInsuranceData.title });
const RequestInsuranceComponent = withTitle({ component: RequestInsurance, title: RequestInsuranceData.title });
const ContactCarInsuranceComponent = withTitle({ component: ContactCarInsurance, title: ContactCarInsuranceData.title });
const ContactHomeInsuranceComponent = withTitle({ component: ContactHomeInsurance, title: ContactHomeInsuranceData.title });
const ThankYouComponent = withTitle({ component: ThankYou, title: ThankYouData.title });
const HomePageComponent = withTitle({ component: HomePage, title: HomePageData.title });


class App extends Component {
	componentDidMount() {
        window.AOS.init({
			easing: 'ease-in-out-sine'
		});  
    }

	render() {
		return (
			<Router>
				<Route exact path='/' component={HomePageComponent} />
				<Route path='/seguro-de-auto' component={CarInsuranceComponent} />
				<Route path='/seguro-de-vida' component={LifeInsuranceComponent} />
				<Route path='/seguro-de-sepelio' component={BurialInsuranceComponent} />
				<Route path='/seguro-de-salud' component={HealthInsuranceComponent} />
				<Route path='/seguro-de-accidentes-personales' component={AccidentInsuranceComponent} />
				<Route path='/seguro-del-hogar' component={HomeInsuranceComponent} />
				<Route path='/contacto-vida-salud-sepelio-accidentes' component={RequestInsuranceComponent} />
				<Route path='/contacto-auto' component={ContactCarInsuranceComponent} />
				<Route path='/contacto-hogar' component={ContactHomeInsuranceComponent} />
				<Route path='/gracias' component={ThankYouComponent} />
			</Router>
		);
	}
}

export default App;