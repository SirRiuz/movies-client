
import axios from "axios"
import SETTINGS from "../settings"



const timeline = data => {
	var URL = SETTINGS.API_URL + `/items/`
	URL = data !== undefined && data.onlyView ? SETTINGS.API_URL+`/items-views/`:URL
	URL = data !== undefined && data.query ? URL+`?q=${data.query}&`:URL
	URL = data !== undefined && data.sort ? URL+`?order_by=${data.sort}`:URL
	return axios.get(URL,{
		headers:{
            'Content-Type': 'application/json',
            'Authorization':`Token ${localStorage.getItem('token')}`
        }
	})
}


export { timeline }