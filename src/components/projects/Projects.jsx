import "./projects.scss";
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Projects() {
  const data = [
    {
      id: 1,
      title: "Gesture Recognition",
      desc:
        "Develop a deep learning solution to recognize human's gesture.",
      featured: false,
      link:
        "https://github.com/junwenkwan/human-robot-handover"
    },
    {
      id: 2,
      title: "Honours Year Project",
      desc:
        "Explore the few-shot learning problem with different methodologies.",
      featured: true,
      link:
        "https://github.com/junwenkwan/final-year-project",
    },
    {
      id: 3,
      title: "NASA Space App",
      desc:
        "Leverage NASA data to perform prediction of wildfires across countries.",
      featured: false,
      link:
        "https://2020.spaceappschallenge.org/challenges/confront/spot-fire-3/teams/the-universe-academy/project"
    },
  ];
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <a href={d.link} target="_blank" rel="noreferrer"><GitHubIcon className='github' style={{ color: 'white' }} /></a>
            <h3>{d.title}</h3>
            <p>{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
