import MainCardHeader from "./MainCardHeader";

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
      {title ? <MainCardHeader title={title}></MainCardHeader> : null}
      {children}
    </div>
  );
};

export default MainCard;
