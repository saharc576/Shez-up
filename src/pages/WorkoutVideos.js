import { useParams } from 'react-router-dom';


const WorkoutVideos = ({user}) => {
  const params = useParams();

  console.log(params.productId);

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
      <p>{params.productId}</p>
    </section>
  );
};

export default WorkoutVideos;