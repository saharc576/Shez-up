import {useParams} from 'react-router-dom';


const Nutrition = ({user}) => {

    if (!user) {
        return (
            <div>
                <header style={{fontSize:'70px'}}>אנא התחבר כדי לצפות בתוכן העמוד</header>
                <header style={{fontSize:'70px'}}>אם אתה מחובר, צור קשר עם התמיכה</header>
            </div>
        );
    }
    return (
        <section>
            <h1>Workout Detail</h1>

        </section>
    );
};

export default Nutrition;
