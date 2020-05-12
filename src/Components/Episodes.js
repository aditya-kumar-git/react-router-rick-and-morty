import React from "react"
import gsap from "gsap"
import { connect } from "react-redux"
import { combineEpisodeList } from "../Redux/Actions"

class Episodes extends React.Component {
	componentDidUpdate(preState) {
		if (preState.finalList !== this.props.finalList) {
			gsap.from(".epiBlock", {
				duration: 0.5,
				y: "50%",
				stagger: 0.1,
				opacity: 0,
			})
		}
	}
	episodeListBlock = () => {
		if (this.props.finalList[0]) {
			return this.props.finalList.map((ele) => {
				return (
					<div key={ele.id} className="epiBlock">
						<div className="ebContainer">
							<div className="ebcName">{ele.name}</div>
							<div className="ebcEpi">{ele.episode}</div>
							<div className="ebcAir">{ele.air_date}</div>
						</div>
					</div>
				)
			})
		} else {
			return <div>Can't</div>
		}
	}

	componentDidMount() {
		gsap.to(".homeLink", { duration: 0, color: "white" })
		gsap.to(".charLink", { duration: 0, color: "white" })
		gsap.to(".epiLink", { duration: 0, color: "coral" })

		if (this.props.listOne.data && this.props.listTwo.data) {
			var x = this.props.listOne.data.results
			var y = this.props.listTwo.data.results

			this.props.combineEpisodeList(x, y)
		}
	}

	render() {
		return <div className="episodeLisT">{this.episodeListBlock()}</div>
	}
}
var mapStateToProps = (state) => {
	return state
}
export default connect(mapStateToProps, {
	combineEpisodeList: combineEpisodeList,
})(Episodes)
