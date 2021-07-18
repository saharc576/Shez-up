import {useParams} from 'react-router-dom';
import NutritionStyle from '../css/Nutrition.module.css'

const Nutrition = () => {

    return (
        <div>

            <div className={
                    NutritionStyle.container
                }
                style={
                    {
                        backgroundImage: 'linear-gradient(rgb(180,180,180,0), rgb(180,180,180,2))',
                        minHeight: '30rem'
                    }
                }
                dir="rtl">
                <div className={
                    NutritionStyle.row
                }>
                    <div className={
                        NutritionStyle.column66
                    }>
                        <h1 className={
                                NutritionStyle.xlargeFont
                            }
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
                                <section dir="rtl">
                                    <ul style={
                                        {listStyle: 'inside'}
                                    }>
                                        <li dir="rtl"
                                            style={
                                                {fontSize: '30px'}
                                        }>
                                            קצת פרטים על תזונה נכונה</li>
                                        <li dir="rtl"
                                            style={
                                                {fontSize: '30px'}
                                        }>
                                            קצת פרטים על תזונה נכונה</li>
                                        <li dir="rtl"
                                            style={
                                                {fontSize: '30px'}
                                        }>
                                            קצת פרטים על תזונה נכונה</li>
                                        <li dir="rtl"
                                            style={
                                                {fontSize: '30px'}
                                        }>
                                            קצת פרטים על תזונה נכונה</li>
                                    </ul>
                                </section>
                            </div>
                        </p>
                    </div>
                </div>
            </div>

            <div className={
                    NutritionStyle.container
                }
                style={
                    {
                        backgroundColor: '#f1f1f1',
                        minHeight: '30rem'
                    }
            }>
                <div className={
                    NutritionStyle.row
                }>

                    <div className={
                            NutritionStyle.column66
                        }
                        style={
                            {float: 'left'}
                    }>
                        <h1 className={
                                NutritionStyle.xlargeFont
                            }
                            dir="rtl">
                            <b>פחמימות, להפסיק?</b>
                        </h1>
                        <h1 className={
                                NutritionStyle.largeFont
                            }
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
            <div className={
                    NutritionStyle.container
                }
                style={
                    {backgroundColor: 'yellow'}
            }>
                <div className={
                    NutritionStyle.row
                }>
                    <div className={
                        NutritionStyle.column66
                    }>
                        <h1 className={
                                NutritionStyle.xlargeFont
                            }
                            dir="rtl">
                            <b>בואו ננפץ מיתוסים</b>
                        </h1>
                        <h1 className={
                                NutritionStyle.largeFont
                            }
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
