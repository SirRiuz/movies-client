

import setView from "../services/views"


const useView = props => {

	const setVisualisation = id => {
		setView({ id:id })
			.then(res => {
				console.log(res.data)
			})
	}

	return { setVisualisation }

}


export default useView