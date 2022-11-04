import React from 'react'

function Aleart(props) {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {props.aleart.type}:{props.aleart.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Aleart
