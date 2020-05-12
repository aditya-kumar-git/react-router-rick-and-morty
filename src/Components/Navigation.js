import React from "react"
import { Link } from "react-router-dom"

class Navigation extends React.Component {
	render() {
		return (
			<div className="nav">
				<div className="navContainer">
					<Link to="/">
						<div className="homeLink">HOME</div>
					</Link>
					<Link to="/characters">
						<div className="charLink">CHARACTERS</div>
					</Link>
					<Link to="/episodes">
						<div className="epiLink">EPISODES</div>
					</Link>
				</div>
			</div>
		)
	}
}
export default Navigation
