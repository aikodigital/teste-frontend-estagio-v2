import './Popup.css'

export default function PopUp( props ){
    return (props.trigger) ? (
        <div className="popup-container">
            <div className="popup-content">
                <button className="close-btn" onClick={ () => props.closeTrigger(false)}> &times; </button>
                {props.children}
            </div>
        </div>
    ): ''
  }
  