import React from 'react'
import Card from '../components/card/Card'
import '../components/card/Prices.css'

const Prices = () => {
    const imgPersonalTraining = ["https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/shorti.png?alt=media&token=8cd009d2-c309-4273-b7b8-57f292f9b890",
    "אימון אישי איתי, שורטי הדגול",
    "120", String.fromCharCode(0x20aa)]

    return (
        <div className="img-grid">
            <Card imgURL={imgPersonalTraining[0]} title={imgPersonalTraining[1]} content={imgPersonalTraining[3] + " " + imgPersonalTraining[2]}/>
            <Card imgURL={imgPersonalTraining[0]} title={imgPersonalTraining[1]} content={imgPersonalTraining[3] + " " + imgPersonalTraining[2]}/>
            <Card imgURL={imgPersonalTraining[0]} title={imgPersonalTraining[1]} content={imgPersonalTraining[3] + " " + imgPersonalTraining[2]}/>
        </div>
    );
};

export default Prices;
