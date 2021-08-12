import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onHideCart} />;
};
const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			{" "}
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const Modal = (props) => {
	const portalDOMNode = document.getElementById("overlays");
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onHideCart={props.onHideCart} />,
				portalDOMNode
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalDOMNode
			)}
		</>
	);
};

export default Modal;
