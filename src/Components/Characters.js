import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import gsap from "gsap"

class Characters extends React.Component {
	componentDidMount() {
		gsap.to(".charLink", { duration: 0, color: "coral" })
		gsap.to(".homeLink", { duration: 0, color: "white" })
		gsap.to(".epiLink", { duration: 0, color: "white" })

		gsap.from(".characterBlock", {
			duration: 0.5,
			opacity: 0,
			y: "30%",
			stagger: 0.1,
		})
	}
	renderingBlocks = () => {
		if (this.props.character[0]) {
			return this.props.character.map((ele) => {
				return (
					<Link key={ele.id} to={`/characters/${ele.id}`}>
						<div className="characterBlock">
							<div className="cbContainer">
								<div
									style={{ backgroundImage: `url("${ele.image}")` }}
									className="cbcImage"
								>
									<div className="cbciName">{ele.name}</div>
								</div>
								<div className="cbcInfo">
									<div className="ci">
										<div>STATUS</div>
										<div className="ciData">{ele.status}</div>
									</div>
									<div className="ci">
										<div>SPECIES</div>
										<div className="ciData">{ele.species}</div>
									</div>
									<div className="ci">
										<div>GENDER</div>
										<div className="ciData">{ele.gender}</div>
									</div>
									<div className="ci">
										<div>ORIGIN</div>
										<div className="ciData">{ele.origin.name}</div>
									</div>
									<div className="ci">
										<div>LOCATION</div>
										<div className="ciData">{ele.location.name}</div>
									</div>
								</div>
							</div>
						</div>
					</Link>
				)
			})
		} else {
			return <div>Loading...</div>
		}
	}

	render() {
		return <div className="characters">{this.renderingBlocks()}</div>
	}
}
var mapStateToProps = (state) => {
	return state
}
export default connect(mapStateToProps)(Characters)
