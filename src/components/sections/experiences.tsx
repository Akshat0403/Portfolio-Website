import { EXPERIENCES } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const ExperienceSection = () => {
  return (
    <Container id="experience" className="bg-gray-50 dark:bg-gray-900/50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Experience" />
        </div>
        <Typography variant="h3" className="text-center text-gray-900 dark:text-gray-100">
          Work Experience
        </Typography>
        <Typography variant="subtitle" className="max-w-xl text-center text-gray-600 dark:text-gray-400">
          Here is a quick summary of my most recent professional experience:
        </Typography>
      </div>

      <div className="flex flex-col gap-6">
        {EXPERIENCES?.map((experience, index) => (
          <ExperienceDetails {...experience} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default ExperienceSection;
