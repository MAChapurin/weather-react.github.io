import React from 'react';
import './CloseBtn.css'

export function CloseBtn({handlerClose}) {
  return (
    <button onClick={()=> {
      handlerClose(false);
    }} className="close">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
      >
        <path
          d="M26 2.61857L23.3814 0L13 10.3814L2.61857 0L0 2.61857L10.3814 13L0 23.3814L2.61857 26L13 15.6186L23.3814 26L26 23.3814L15.6186 13L26 2.61857Z"
          fill="none"
        />
      </svg>
    </button>
  )
}
