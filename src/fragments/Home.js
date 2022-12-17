

import { useState } from "react"
import Appbar from "../components/Appbar"
import CloseModal from "../components/CloseModal"
import MoviePreview from "../components/MoviPreview"
import Timeline from "../components/Timeline"
import AplicationContext from "../context/aplication"


const Home = props => {
	const [ preview,setPreview ] = useState(null)
	const [ query,setQuery ] = useState(null)
	const [ menu,setMenu ] = useState(false)
	return(
		<AplicationContext.Provider
			value={{ 
				preview,
				setPreview,
				query,
				setQuery,
				menu,
				setMenu
			}}
		>
			<div
				style={{
					display:'flex',
					justifyContent:'center'
				}}
			>
				<Appbar/>
				<div style={{ width:'75%' }}>
					<Timeline/>
					<MoviePreview/>
					<CloseModal/>
				</div>
			</div>
		</AplicationContext.Provider>
	)
}


export default Home