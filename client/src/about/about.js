import { Typography } from 'antd';
import React from 'react'
const { Title, Paragraph, Text } = Typography;


export default function About() {
  return (
    <div style={{padding : " 20px 20px "}}>
    <Typography>
      <Title>Vimation</Title>
      <Paragraph>
        Vimation is a transaction simulator. It features include simulated users and the ability to create money transactions 
        between each user. This application was built with node, express and react js and ant design. The goal
        of this project is to show a full stack application that utilizes different web frameworks with a beautiful UI. 
      </Paragraph>
      <Title level={2}>Web Technologies</Title>
      <Paragraph>
        Here are the different technologies used.
      </Paragraph>

      <Paragraph>
        <ul>
          <li>
            <a href="https://nodejs.org/en/">node</a>
          </li>
          <li>
            <a href="https://expressjs.com/">express</a>
          </li>
          <li>
            <a href="https://reactjs.org/">react</a>
          </li>
          <li>
            <a href="https://ant.design/components/typography/">ant design</a>
          </li>
        </ul>
      </Paragraph>

    </Typography>
    </div>
  )
}