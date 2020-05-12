import { combineReducers } from "redux"

var characterData = (preData = [], action) => {
	switch (action.type) {
		case "FULL_DATA": {
			return action.payload
		}
		default: {
			return preData
		}
	}
}

var listOne = (preData = [], action) => {
	switch (action.type) {
		case "EPLIST_ONE": {
			return action.payload
		}
		default: {
			return preData
		}
	}
}

var listTwo = (preData = [], action) => {
	switch (action.type) {
		case "EPLIST_TWO": {
			return action.payload
		}
		default: {
			return preData
		}
	}
}

var finalList = (preData = [], action) => {
	switch (action.type) {
		case "LIST": {
			return action.payload
		}
		default: {
			return preData
		}
	}
}

var allReducers = combineReducers({
	character: characterData,
	listOne: listOne,
	listTwo: listTwo,
	finalList: finalList,
})
export default allReducers
