import { NextPage } from 'next';
import { EventСard } from 'components/ui/Event-card';

const Home: NextPage = () => (
  <>
    <h1>Hello, world!</h1>
    <EventСard
      img="https://images.unsplash.com/photo-1621636723658-a062df4cbb2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
      time="13:00"
      location="Площадка «8/3»"
      title="Что я узнал"
      description="Гости расскажут о своём творческом и организационном опыте."
      playwright="Ольга Казакова"
      direct="Катя Ганюшина"
    ></EventСard>
    <EventСard
      time="13:00"
      location="Площадка «8/3»"
      title="Что я узнал"
      description="Гости расскажут о своём творческом и организационном опыте."
      playwright="Ольга Казакова"
      direct="Катя Ганюшина"
    ></EventСard>
    <EventСard
      img="https://images.unsplash.com/photo-1621636723658-a062df4cbb2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
      time="13:00"
      location="Площадка «8/3»"
      title="Что я узнал"
      description="Гости расскажут о своём творческом и организационном опыте."
      playwright="Ольга Казакова"
      direct="Катя Ганюшина"
    ></EventСard>
  </>
);

export default Home;
