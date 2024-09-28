interface MainCardHeaderProps {
  title: string;
  subTitle?: string;
}
const MainCardHeader: React.FC<MainCardHeaderProps> = ({ title, subTitle }) => {
  return (
    <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
      <h3 className="text-xl font-semibold text-dark dark:text-white">
        {title}
      </h3>
      {subTitle ? (
        <p className="text-md font-normal text-dark-2 dark:text-white">
          {subTitle}
        </p>
      ) : null}
    </div>
  );
};

export default MainCardHeader;
