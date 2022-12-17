

import axios from "axios"
import SETTINGS from "../settings"


const item = props => {
	const URL = SETTINGS.API_URL + `/item/${props.id}/`
	return axios.get(URL,{
		headers:{
			'Content-Type': 'application/json',
			'Authorization':`Token ${localStorage.getItem('token')}`
		}
	})
}


export default item