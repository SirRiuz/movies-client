

import { Modal, Rating } from "@mui/material"
import { useContext, useState } from "react"
import ViewSvg from "../assets/svg/view"
import AplicationContext from "../context/aplication"
import useItem from "../hooks/useItem"
import useRating from "../hooks/useRating"
import useView from "../hooks/useView"
import SETTINGS from "../settings"
import '../styles/moviePreview.css'
import { motion } from "framer-motion"



const MoviePreview = props => {
	const { preview,setPreview } = useContext(AplicationContext)
	const { setVisualisation } = useView()
	const { setRating } = useRating()
	const { load,data } = useItem(preview !== null ? preview.data.id:null)
	var MODAL_BODY = null

	const onSetView = e => {
		setVisualisation(preview !== null ? preview.data.id:null)
		alert('Se añadio a la lista de visualizaciones')
	}
	const onRate = (e,v) => {
		setRating({
			id:preview !== null ? preview.data.id:null,
			score:v
		},() => {
			alert(`Acabas de puntuar con ${v} estrellas`)
		})
	}


	if(preview === null) { return }
	
	if(!load) {
		MODAL_BODY = (
			<>
				<div
					className="modal-preview preview-picture"
					style={{
						backgroundImage:`url(${data.preview !== null ? SETTINGS.MEDIA_URL+data.preview:null})`
					}}
				/>
				<div className="modal-preview preview-content">
					<div>
						<div id="preview-content-title">
							<strong>{data.name}</strong>
							<div id="preview-content-subtitle">
								<span>{data.gender}</span>
							</div>
						</div>
						<div id="preview-content-meta">
							<div className="stats">
								<div><strong>{data.views}</strong></div>
								<div><span>Views</span></div>
							</div>
							<div className="stats">
								<div><strong>{data.rate}</strong></div>
								<div><span>Score</span></div>
							</div>
							<div id="type-indicator">
								{data.item_type}
							</div>
						</div>
						{preview.isView ? null:(
						<div id="view-btn" onClick={onSetView}>
							<div><ViewSvg></ViewSvg></div>
							<div><strong>Visto</strong></div>
						</div>
						)}
					</div>
					<div id="preview-content-footer">
						<div style={{ paddingRight:20 }}>
						{ data['my-rate'] !== null ? (<div id="rate-preview"><Rating defaultValue={data['my-rate'].score} readOnly/> <span id="messege">(Tu puntuacion)</span></div>):(<Rating onChange={onRate}/>) }
							{/* { data['my-rate'] !== null ? (<Rating defaultValue={data['my-rate'].score} readOnly/>):(<Rating onChange={onRating} readOnly={readOnly} />) } */}
						</div>
					</div>
				</div>
			</>
		)
	}
	

	return(
		<Modal
			id="modal-preview"
			open={Boolean(preview)}
			onClose={() => { setPreview(() => null) }}
		>
			<motion.div
				id="modal-preview-container"
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.2 }}
			>
				{ MODAL_BODY }
			</motion.div>
		</Modal>
	)
}


export default MoviePreview



