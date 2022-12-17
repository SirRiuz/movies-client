

import axios from "axios"
import SETTINGS from "../settings"


const rating = props => {
	const URL = SETTINGS.API_URL + `/item/${props.id}/rating/`
    const DATA = JSON.stringify({ score:props.score })

	return axios.post(URL,DATA,{
		headers:{
			'Content-Type': 'application/json',
			'Authorization':`Token ${localStorage.getItem('token')}`
		}
	})
}


export default rating


