


import rating from "../services/rating"


const useRating = props => {

	const setRating = (data,callback) => {
		rating({ id:data.id,score:data.score })
			.then(res => { callback() })
	}


	return { setRating }

}



export default useRating
