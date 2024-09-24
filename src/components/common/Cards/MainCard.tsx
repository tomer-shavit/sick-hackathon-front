interface Props {
  children: React.ReactNode;
  title?: string;
  customClass?: string;
}

const MainCard: React.FC<Props> = ({ children, title, customClass }) => {
  return (
    <div
      className={`rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card ${customClass}`}
    >
      {title ? (
        <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
          <h3 className="font-medium text-dark dark:text-white">{title}</h3>
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default MainCard;
