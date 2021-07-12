import { useParams } from 'react-router-dom';


const WorkoutVideos = ({validateUser}) => {
  const params = useParams();
  const userLoggedIn = validateUser();

  console.log(params.productId);

  if (userLoggedIn) {
    return (
      <div>
        you are not logged in
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