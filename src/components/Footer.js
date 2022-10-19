import React from 'react'
import Card from 'react-bootstrap/Card';

export const Footer = () => {
let style = {
  left: 0,
  bottom: 0,
  width: "100%",
  marginTop: "10px",
  textAlign: "center",
  position : "fixed",
  height : "40px",
}

  return (
    <footer>
      <Card className="text-center" style={style}>
        <Card.Footer className="text-muted">copyright &copy; All Rights Reserved.</Card.Footer>
      </Card>
    </footer>
  )
}