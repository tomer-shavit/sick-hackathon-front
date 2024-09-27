import MainCardHeader from "./MainCardHeader";

interface Props {
  children: React.ReactNode;
  title?: string;
  subTitle?: string;
  customClass?: string;
}

const MainCard: React.FC<Props> = ({
  children,
  title,
  subTitle,
  customClass,
}) => {
  return (
    <div
      className={`rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card ${customClass}`}
    >
      {title ? (
        <MainCardHeader title={title} subTitle={subTitle}></MainCardHeader>
      ) : null}

      {children}
    </div>
  );
};

export default MainCard;
