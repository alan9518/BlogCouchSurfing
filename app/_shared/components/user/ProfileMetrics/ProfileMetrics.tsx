export const ProfileMetrics = () => {
  return (
    <section className="w-full flex items-center justify-center gap-2">
      <ProfileMetric label="40" metric="Posts" />{' '}
      <span className="text-gray-300">|</span>
      <ProfileMetric label="2.8k" metric="Followers" />
      <span className="text-gray-300">|</span>
      <ProfileMetric label="526" metric="Following" />
    </section>
  );
};

const ProfileMetric = ({
  label,
  metric,
}: {
  label: string;
  metric: string;
}) => {
  return (
    <article
      className={`flex flex-col items-center p-2 text-center min-w-16  `}
    >
      <span className="text-black">{label}</span>
      <span className="text-gray-500 text-xs">{metric}</span>
    </article>
  );
};
