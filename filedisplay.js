import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";
import {useEffect} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
var responseData={};
const FileDisplay= () =>{
  useEffect( ()=> {
      const SendingRequest = async () => {
        try{
          const response = await fetch('/doctor/displayPrescription', {
            headers: {
              // 'Content-Type': 'application/json',
              "x-access-token": localStorage.getItem('jwtToken')
              // "Authorization": localStorage.getItem("accessToken")
            },
          });
           responseData = await response.json();
          console.log(responseData.images);
          
        } catch (err) {
          console.log(err);
        }
      }
      SendingRequest();
    },[]);
  
   
  const renderCard = (card, index) => {
    return (
    
      <Card style={{ width: "15rem" ,height:"60vh" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/60px100" src={responseData.images.img} />
        <Card.Body>
          <Card.Title>{responseData.images.patient_name}</Card.Title>
          <Card.Text>{responseData.images.patient_id}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{responseData.map(renderCard)}</div>;
};

export default FileDisplay;
