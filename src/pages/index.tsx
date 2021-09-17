import { NextPage } from 'next';
import { EventСard } from 'components/ui/Event-card';
const image = 'https://images.unsplash.com/photo-1621636723658-a062df4cbb2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80';
const time = '13:00';
const location = 'Площадка «8/3»';
const title = 'Что я узнал';  
const description = 'Гости расскажут о своём творческом и организационном опыте.';
const playwright = 'Ольга Казакова';
const direct = 'Катя Ганюшина';
const Home: NextPage = () => (
  <>
    <h1>Hello, world!</h1>
    <EventСard img={image} time={time} location={location} title={title} description={description} playwright={playwright} direct={direct}></EventСard>
    <EventСard /* img={image} */ time={time} location={location} title={title} description={description} playwright={playwright} direct={direct}></EventСard>
    <EventСard img={image} time={time} location={location} title={title} description={description} playwright={playwright} direct={direct}></EventСard>
  </>
);

export default Home;
