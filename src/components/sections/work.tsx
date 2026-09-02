import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const WorkSection = () => {
  return (
    <Container id="work" className="bg-gradient-to-b from-gray-50 to-gray dark:from-gray-900 dark:to-gray">
      <div className="flex flex-col items-center gap-3">
        <div className="self-center">
          <Tag label="Work" />
        </div>
        <Typography variant="h3" className="text-center text-gray-900 dark:text-gray-100">
          Featured Projects
        </Typography>
        <Typography variant="subtitle" className="max-w-xl text-center text-gray-500 dark:text-gray-400">
          A selection of the noteworthy projects I&apos;ve built — from AI-powered platforms to real-time collaboration tools.
        </Typography>
      </div>

      <div className="flex flex-col gap-8 md:gap-12">
        {PROJECTS?.map((project, index) => (
          <ProjectDetails
            key={index}
            {...project}
            layoutType={index % 2 === 0 ? 'default' : 'reverse'}
          />
        ))}
      </div>
    </Container>
  );
};

export default WorkSection;
