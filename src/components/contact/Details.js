import React, { Component } from 'react';
import './Details.css'
import { Linking } from 'react-native';


const Details = () => {

    const phoneNumber = "972537171929";


    const sendMsgHandler = () => {
        const msg = `https://wa.me/${phoneNumber}`;
        Linking.openURL(msg);
    }
    return ( 
        <div className="div">
        <section dir="rtl" className="section">
            <header>לא מצאתם את מה שחיפשתם? צריכים עזרה / רוצים להתייעץ? </header>
            <header> מוזמנים ליצור קשר באחת מהדרכים הבאות: </header>
            <a className="whatsapp_float" onClick={sendMsgHandler}></a>

        </section>
      </div>
     );
}
 
export default Details;
