export default function Modal({ id,header,body,footer}) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
            <span className="close-modal-icon">&times;</span>
            <h2>{header?header:'Header'}</h2>
        </div>
        <div className="body">
            {body?(body):(
                <div>
                    <p>This is our bodey Modal</p>
                </div>
            )}
        </div>
        <div className="footer">
        {footer?(footer):(
                <div>
                    <h3>This is our Footer Modal</h3>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
