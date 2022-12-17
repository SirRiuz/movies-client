
import { useEffect, useState } from "react"
import item from "../services/item"



const useItem = id => {
	const [ data,setData ] = useState()
	const [ load,setLoad ] = useState(true)

	useEffect(() => {
		// setLoad(() => true)
		// if(props !== null) {
		// 	item({ id:props})
		// 		.then(res => { setData(() => res.data.data) })
		// 		.finally(() => { setLoad(() => false) })
		// }
		if(id !== null) {
			setLoad(() => true)
			item({ id:id })
				.then(res => { setData(() => res.data.data) })
				.finally(() => { setLoad(() => false) })
		}
	},[id])


	return { load,data }

}


export default useItem





