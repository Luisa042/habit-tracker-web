import './Habit.css';

interface HabitProps {
  title: string;
}

export function Habit(props: HabitProps) {
  return (
    <div className='habit'>
      <h3>{props.title}</h3>
      <p>count</p>
    </div>
  );
}
