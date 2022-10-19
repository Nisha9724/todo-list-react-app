import React from 'react'
import Card from 'react-bootstrap/Card';

export const About = () => {
  return (
    <div>
        <Card style={{ width: '97%', margin: "20px" }}>
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Get to know more about the team maintaining Todo List.</Card.Subtitle>
        <Card.Text>
        Todo List is maintained by a team of developers. We have a growing team and if you are interested in re-building the most popular front-end framework with React we would love to hear from you.
        </Card.Text>
        <Card.Link href="#">Know More</Card.Link>
      </Card.Body>
    </Card>
    </div>
  )
}
