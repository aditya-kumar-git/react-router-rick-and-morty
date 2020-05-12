import Axios from "axios"

export var getCharacterData = () => {
	return async (dispatch) => {
		var output = await Axios({
			url: `https://rickandmortyapi.com/api/character/?page=${
				Math.floor(Math.random() * 21) + 1
			}`,
		})

		dispatch({ type: "FULL_DATA", payload: output.data.results })
	}
}

export var getEpisodeListOne = () => {
	return async (dispatch) => {
		var output = await Axios({
			url: "https://rickandmortyapi.com/api/episode/?page=1",
		})

		dispatch({ type: "EPLIST_ONE", payload: output })
	}
}

export var getEpisodeListTwo = () => {
	return async (dispatch) => {
		var output = await Axios({
			url: "https://rickandmortyapi.com/api/episode/?page=2",
		})

		dispatch({
			type: "EPLIST_TWO",
			payload: output,
		})
	}
}

export var combineEpisodeList = (x, y) => {
	return {
		type: "LIST",
		payload: [...x, ...y],
	}
}
