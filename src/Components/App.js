import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import {
	getCharacterData,
	getEpisodeListOne,
	getEpisodeListTwo,
} from "../Redux/Actions"
import { connect } from "react-redux"
import "../RickNMorty.css"
import Navigation from "./Navigation"
import Characters from "./Characters"
import Episodes from "./Episodes"
import FullPageCharacter from "./FullPageCharacter"
import gsap from "gsap"

class App extends React.Component {
	homePage = () => {
		gsap.to(".homeLink", { duration: 0, color: "coral" })
		gsap.to(".charLink", { duration: 0, color: "white" })
		gsap.to(".epiLink", { duration: 0, color: "white" })

		return <div className="homeSweetHome">RICK AND MORTY</div>
	}

	componentDidMount() {
		this.props.getEpisodeListOne()
		this.props.getCharacterData()
		this.props.getEpisodeListTwo()
	}
	render() {
		return (
			<BrowserRouter>
				<div className="app">
					<Navigation />
					<Route path="/" component={this.homePage} exact />
					<Route component={Characters} path="/characters" exact />
					<Route component={Episodes} path="/episodes" />
					<Route component={FullPageCharacter} path="/characters/:id" />
				</div>
			</BrowserRouter>
		)
	}
}

var mapStateToProps = (state) => {
	return state
}
export default connect(mapStateToProps, {
	getCharacterData: getCharacterData,
	getEpisodeListOne: getEpisodeListOne,
	getEpisodeListTwo: getEpisodeListTwo,
})(App)
