import {useParams} from 'react-router-dom';
import '../css/Nutrition.css'

const Nutrition = () => {

    return (
        <div>

            <div className="container"
                style={
                    {backgroundImage: 'linear-gradient(rgb(180,180,180,0.1), rgb(180,180,180,0.6))'}
                }
                dir="rtl">
                <div className="row">
                    <div className="column-66"
                        style={
                            {
                                position: 'absolute',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }
                    }>
                        <h1 className="xlarge-font"
                            style={
                                {color: 'black'}
                        }>
                            <b>אז מה אוכלים?</b>
                        </h1>
                        <p>
                            <div style={
                                {
                                    backgroundColor: 'transparent',
                                    color: 'black'
                                }
                            }>
                                <section dir="rtl" className="section">
                                    <ul style={
                                        {listStyle: 'none'}
                                    } >
                                        <li dir="rtl">
                                            קצת פרטים על תזונה נכונה</li>
                                        <li dir="rtl">
                                            קצת פרטים על תזונה נכונה</li>
                                        <li>
                                            קצת פרטים על תזונה נכונה</li>
                                        <li>
                                            קצת פרטים על תזונה נכונה</li>
                                    </ul>
                                </section>
                            </div>
                        </p>
                    </div>
                    <div className="column-33">
                        <img src="https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/Nutrition.png?alt=media&token=d2585576-b841-41c1-8a03-b1a265f93c7b"
                            style={
                                {filter:"grayscale(100%)", zIndex:"-1"}
                            }/>
                    </div>
                </div>
            </div>

            <div className="container"
                style={
                    {backgroundColor: '#f1f1f1'}
            }>
                <div className="row">
                    <div className="column-33"></div>
                    <div className="column-66">
                        <h1 className="xlarge-font" dir="rtl">
                            <b>פחמימות, להפסיק?</b>
                        </h1>
                        <h1 className="large-font"
                            style={
                                {color: 'red'}
                        }>
                            <b>Pixels, who?</b>
                        </h1>
                        <p>
                            <span style={
                                {fontSize: '24px'}
                            }>A revolution in resolution.</span>
                            Sharp and clear photos with the world's best photo engine, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                       
                    </div>
                </div>
            </div>
            <div className="container"
                style={
                    {backgroundColor: 'yellow'}
            }>
                <div className="row">
                    <div className="column-33"></div>
                    <div className="column-66">
                        <h1 className="xlarge-font" dir="rtl">
                            <b>בואו ננפץ מיתוסים</b>
                        </h1>
                        <h1 className="large-font"
                            style={
                                {color: 'red'}
                        }>
                            <b>Pixels, who?</b>
                        </h1>
                        <p>
                            <span style={
                                {fontSize: '24px'}
                            }>A revolution in resolution.</span>
                            Sharp and clear photos with the world's best photo engine, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Nutrition;
