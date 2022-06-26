import './styles.scss'

export function Modal({ show, setShow, title, reactComponent }) {
    return (
        <>
            { 
                show && (
                    <div className="modal">
                        <div>
                            <header>
                                <h3 className='title'>{title}</h3>
                                <button type='button' className='close-button' onClick={() => setShow(false)}><i className="fa-solid fa-xmark"></i></button>
                            </header>
                            {reactComponent}
                        </div>
                    </div>
                )        
          }
        </>
    );
}