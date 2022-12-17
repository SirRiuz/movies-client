

import { useContext, useState } from "react"
import StatsSvg from "../assets/svg/stats"
import AplicationContext from "../context/aplication"
import SETTINGS from "../settings"
import '../styles/card.css'


const Card = props => {
	const { setPreview } = useContext(AplicationContext)
	const [ hover,setHover ] = useState(false)
	var URL = SETTINGS.MEDIA_URL+props.data.preview

	const onHover = e => { setHover(() => !hover) }
	console.log(props.data)

	return(
		<div
			{...props}
			className="card-picture-movie"
			onMouseEnter={onHover}
			onMouseLeave={onHover}
			onClick={() => {
				setPreview(() => ({ isView:props.isView,data:props.data }))
			}}
			style={{ backgroundImage:`url(${URL})` }}
		>
			{ hover ? (
				<div id="score-container">
					<div style={{ marginBottom:10 }}><strong>{props.data.name}</strong></div>
					<div style={{ display:'flex',gap:5 }}>
						<div><StatsSvg/></div>
						<div><span>{props.data.rate}</span></div>
					</div>
				</div>
			):null }
		</div>
	)
}



export default Card
