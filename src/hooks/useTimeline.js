

import { useEffect, useMemo, useState } from "react"
import { timeline } from "../services/timeline"



const useTimeline = props => {
	
	const [ load,setLoad ] = useState(true)
	const [ data,setData ] = useState([])

	
	useEffect(() => {
		if(props.query !== null || props.sort !== null) {
			setLoad(() => true)
			timeline({ query:props.query,sort:props.sort })
				.then(res => { setData(() => res.data.data) })
				.finally(_ => { setLoad(() => false) })
		}
	},[props.query,props.sort])

	useEffect(() => {
		setLoad(() => true)
		timeline({ onlyView:props.onlyView })
			.then(res => { setData(() => res.data.data) })
			.finally(_ => { setLoad(() => false) })
	},[props.onlyView])


	useEffect(() => {
		setLoad(() => true)
		timeline()
			.then(res => { setData(() => res.data.data) })
			.finally(_ => { setLoad(() => false) })
	},[])


	return { load,data }

}


export default useTimeline