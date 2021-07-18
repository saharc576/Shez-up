import React from 'react'
import Card from '../components/card/Card'
import PricesStyle from '../components/card/Prices.module.css'
import { Linking } from 'react-native';

const Prices = () => {
    const imgPersonalTraining = ["https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/shorti.png?alt=media&token=8cd009d2-c309-4273-b7b8-57f292f9b890",
    "אימון אישי איתי",
    "120", String.fromCharCode(0x20aa)]
    const imgGroupTraining = ["https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/shorti.png?alt=media&token=8cd009d2-c309-4273-b7b8-57f292f9b890",
    "אימון קבוצתי לפחות 3 באימון",
    "80", String.fromCharCode(0x20aa)]
    const imgPackageTraining = ["https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/shorti.png?alt=media&token=8cd009d2-c309-4273-b7b8-57f292f9b890",
    "מנוי אישי, 10 אימונים",
    "1000", String.fromCharCode(0x20aa)]


    const phoneNumber = "972544825068";

    const createMsg = (workoutName) => {
      const baseStrBeginig = "היי, אני מעוניינ/ת ";
      const baseStrEnd = "אשמח לפרטים נוספים";
      const workout = workoutName === 'personal training' ? "באימון אישי " :
                            workoutName === 'group training'  ? "באימון קבוצתי " :
                                            "במנוי ";
        return baseStrBeginig.concat(workout).concat(baseStrEnd);
    }
    
    const sendMsgHandler = (workoutName) => {
        const msg = `whatsapp://send?text=${createMsg(workoutName)}&phone=${phoneNumber}`;
        Linking.openURL(msg);
    }


    return (
        <div className={PricesStyle.imgGrid}>

            <Card onClick={() => sendMsgHandler('personal training')} imgURL={imgPersonalTraining[0]} title={imgPersonalTraining[1]} content={imgPersonalTraining[3] + " " + imgPersonalTraining[2]}/>
            <Card onClick={() => sendMsgHandler('group training')} imgURL={imgGroupTraining[0]} title={imgGroupTraining[1]} content={imgGroupTraining[3] + " " + imgGroupTraining[2]}/>
            <Card onClick={() => sendMsgHandler('package deal training')} imgURL={imgPackageTraining[0]} title={imgPackageTraining[1]} content={imgPackageTraining[3] + " " + imgPackageTraining[2]}/>
                
        </div>
    );
};

export default Prices;
