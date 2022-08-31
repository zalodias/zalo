import Card from "../components/Card";
import CardGrid from "../components/CardGrid";

const Projects = () => {
  return (
    <div className="flex flex-col gap-8 overflow-x-hidden">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl text-stone-100 font-semibold">
          Featured Projects
        </h1>
        <h4 className="text-lg">
          I enjoy putting my ideas to practice. Here are some projects I'm proud
          of.
        </h4>
      </header>
      <CardGrid>
        <Card
          title="Laboratório Onírico"
          description="Art generated by code."
        />
      </CardGrid>
    </div>
  );
};

export default Projects;
