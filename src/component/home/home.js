import React from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import img1 from "../slider1.jpg";
import MyCard from "./card";

export const Home = (props) => {
  const [data, setData] = useState([]);
  const [isModal, setModal] = useState(false);
  const [user, setUser] = useState({userId:'',date:''})


  
  const handleShow = () => {
    setModal(true);
  };

  const handleDelete = () => {
    setModal(false);
  };

  const submitData=(e)=>{
      e.preventDefault();
      try {
        axios({
            method:'post',
            url:'https://fakestoreapi.com/carts',
            data:{
                userId:user.userId,
                date:user?.date,
               category: user.category
            }
        }).then((res)=>{
            console.log(res?.data);
        },(error)=>{
            console.log(error)
        })
        // console.log('successful')
      } catch (error) {
          console.log('error')
      }
     
  }

  const toggleData = (e)=>{
        setUser({...user,[e.target.name]:e.target.value});
  }
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/carts")
      .then((res) => {
        console.log("Getting from :::", (res.data).length);
        setData(res.data);
       
      })
      .catch((err) => console.log(err));
  }, []);
 

  // console.log(arr);

  return (
    <div>
      <section
        id="section1"
        className="d-flex justify-content-between "
        style={{ backgroundColor: "white" }}
      >
        <h6 className="  p-3 mx-3 ">
          My Cart <sup></sup>
        </h6>

        {/* Add a modal to this button */}
        <Button
          className=" m-3 mx-4 px-4"
          backdrop="static"
          variant="outline-dark"
          size="sm"
          onClick={handleShow}
        >
          Add Cart
        </Button>

        <Modal show={isModal}>
          <Modal.Header>
            <Modal.Title>ADD CART</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={submitData}>
  <Form.Group className="mb-3" controlId="formBasicTitle">
    <Form.Label>user Id</Form.Label>
    <Form.Control type="text" name="userId" placeholder="Enter ID" onChange={toggleData}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPrice">
    <Form.Label>date</Form.Label>
    <Form.Control type="date" name="date" onChange={toggleData}/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleDelete}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
      <h4>THis is about page</h4>
      <div className="row">
      {data?.length ?
       (data?.map((data2, index) => {
           return(
            <div className="col-md-4" key={index}>
            <MyCard img={img1} title={index + 1} text={data2.date} />
          </div>
           )
          
  })):("No data")
  }
      </div>
    </div>
  );
};
