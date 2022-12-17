

import { useContext } from 'react'
import SearchSvg from '../assets/svg/search'
import UserSvg from '../assets/svg/user'
import AplicationContext from '../context/aplication'
import '../styles/appbar.css'



const Appbar = props => {
	const { query,setQuery,setMenu } = useContext(AplicationContext)
	const onChange = e => { setQuery(() => e.target.value) }
	const openMenu = e => { setMenu(() => true) }

	return(
		<div id="app-bar-root">
			<div style={{ visibility:'hidden' }}>x</div>
			<div id="search-bar-container">
				<input
					placeholder="Buscar serie"
					onChange={onChange}
				/>
				<div id="icon-con">
					<SearchSvg></SearchSvg>
				</div>
			</div>
			<div
				onClick={openMenu}
				style={{
					display:'flex',
					justifyContent:'center',
					alignItems:'center',
					alignContent:'center',
					cursor:'pointer'
				}}
			>
				<UserSvg></UserSvg>
			</div>
		</div>
	)
}




export default Appbar

