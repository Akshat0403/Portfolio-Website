import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const SkillsSection = () => {
  return (
    <Container id="skills" className="relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-mesh opacity-60" />

      <div className="relative flex flex-col items-center gap-3">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="h3" className="text-center text-gray-900 dark:text-gray-100">
          My Tech Stack
        </Typography>
        <Typography variant="subtitle" className="max-w-xl text-center text-gray-500 dark:text-gray-400">
          The tools, technologies, and languages I work with every day to build exceptional products.
        </Typography>
      </div>

      <div className="relative grid grid-cols-3 gap-4 md:grid-cols-5 md:gap-5 lg:grid-cols-5 lg:gap-6">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;
