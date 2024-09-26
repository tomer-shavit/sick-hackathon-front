interface MainCardHeaderProps {
  title: string;
}
const MainCardHeader: React.FC<MainCardHeaderProps> = ({ title }) => {
  return (
    <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
      <h3 className="font-medium text-dark dark:text-white">{title}</h3>
    </div>
  );
};

export default MainCardHeader;
