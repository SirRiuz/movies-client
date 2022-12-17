

import { Masonry } from '@mui/lab'
import { useContext, useState } from 'react'
import AplicationContext from '../context/aplication'
import useTimeline from '../hooks/useTimeline'
import useView from '../hooks/useView'
import Card from './Card'
import '../styles/timeline.css'
import { MenuItem, Select } from '@mui/material'
import CardLoader from '../skeletons/CardLoader'


const Timeline = props => {
	const { query } = useContext(AplicationContext)
	const [ sort,setSort ] = useState(null)
	const [ showViews,setShowViews ] = useState(false)
	const { setVisualisation } = useView()
	const [ index,setIndex ] = useState(0)
	const { data,load } = useTimeline({
		query:query,
		sort:sort,
		onlyView:showViews
	})
	var BODY_DATA = null

	const onSelect = e => setSort(() => e.target.value)


	const ACTION_DATA = [
		{
			title:'Para ti',
			action:false
		},{
			title:'Visto',
			action:true
		}
	]
	
	if(load) { //return <h1>Load</h1>
		BODY_DATA = (
			<div id="timeline-container-loader">
				<Masonry columns={{md:3,sm:2,xs:1 }} spacing={2}>
					{[... new Array(3).keys()].map((x,k) => (<CardLoader/>))}
				</Masonry>
			</div>
		)
	} else {
		BODY_DATA = (
			<Masonry
				columns={{md:3,sm:2,xs:1}}
				spacing={2}
			>
				{data.map((x,k) => (<Card key={k} data={x} isView={showViews}/>))}
			</Masonry>
		)
	}

	return(
		<div id="timeline-container">
			<div id="navigation-bar">
				<div id="navigation-tabs">
					{ACTION_DATA.map((x,k) => (
						<div
							className="navigation-tab-item"
							key={k}
							onClick={() => {
								setShowViews(() => x.action)
								setIndex(() => k)
							}}
						>
							<div
							   style={{
									height:50,
									display:'flex',
									justifyContent:'center',
									alignContent:'center',
									alignItems:'center',
									borderBottom:index === k ? 'solid 3px #6E29D6':'',
									color:index === k ? '#6E29D6':'black'
								}}
							>
								<strong style={{ fontSize:18.5 }}>{x.title}</strong>
							</div>
						</div>
					))}
				</div>

					{/* <span onClick={() => setShowViews(() => false)}>[FOR YOU]</span>
					<span onClick={() => setShowViews(() => true)}>[SERIES VISTAS]</span> */}
				<div>
					<Select onChange={onSelect} value={sort} id="order-selection">
						<MenuItem value={null}>Ninguno</MenuItem>
						<MenuItem value={'score'}>Estrellas</MenuItem>
						<MenuItem value={'name'}>Nombre</MenuItem>
						<MenuItem value={'gender'}>Genero</MenuItem>
					</Select>
				</div>
			</div>
			<div>
				{ BODY_DATA }
			</div>
		</div>
	)
}



export default Timeline