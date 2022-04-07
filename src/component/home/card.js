import React from "react";
import { Card, Button } from "react-bootstrap";


import styles from "./card.module.css";

const MyCard = (props) => {
    
  

  
  return (
    <div>
      <Card className={styles.card1}>
        <Card.Img
          className="overflow"
          variant="top"
          src={props.img}
          alt="image1"
        />
        <Card.Body className={styles.bodycard}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className={styles.textcard}>{props.text}</Card.Text>
          <Button className="mx-1" size="sm" variant="dark" >
            -
          </Button>
          <Button  className="mx-1" size="sm" variant="dark">
            +
          </Button>
        </Card.Body>
      </Card>
      <table>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>Body</th>
          </tr>
          <tr>
          
          <td></td>
          
        </tr>
        </table>
    </div>
  );
};

export default MyCard;
