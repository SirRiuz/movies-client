

import { Modal } from "@mui/material"
import { useContext } from "react"
import AplicationContext from "../context/aplication"
import '../styles/settingsmodal.css'
import { motion } from "framer-motion"


const CloseModal = props => {
	const { menu,setMenu } = useContext(AplicationContext)
	const onCloseSesion = e => {
		localStorage.removeItem('token')
		window.location = '/'
	}

	return(
		<Modal
			open={menu}
			id="settings-modal-container"
			onClose={() => { setMenu(() => false) }}
		>
			<motion.div
				id="settings-modal"
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.2 }}
			>
				<div id="settings-item" onClick={onCloseSesion}>
					<p>Cerrar sesion</p>
				</div>
			</motion.div>
		</Modal>
	)
}


export default CloseModal
