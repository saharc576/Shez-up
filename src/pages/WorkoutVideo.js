import { useParams } from 'react-router-dom';

const WorkoutDetail = () => {
  const params = useParams();

  console.log(params.productId);

  return (
    <section>
      <h1>Workout Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default WorkoutDetail;