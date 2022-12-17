
import axios from "axios"
import SETTINGS from "../settings"


const setView = props => {
	const URL = SETTINGS.API_URL + `/item/${props.id}/view/`
	return axios.post(URL,{},{
		headers:{
			'Content-Type': 'application/json',
			'Authorization':`Token ${localStorage.getItem('token')}`
		}
	})
}


export default setView