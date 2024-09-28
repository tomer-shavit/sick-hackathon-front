import MainCardHeader from "./MainCardHeader";

interface Props {
  children: React.ReactNode;
  title?: string;
  subTitle?: string;
  customClass?: string;
  innerCustomClass?: string;
  onClick?: () => void;
}

const MainCard: React.FC<Props> = ({
  children,
  title,
  subTitle,
  customClass,
  innerCustomClass,
  onClick,
}) => {
  return (
    <div
      className={`rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card ${customClass}`}
      onClick={onClick}
    >
      {title ? (
        <MainCardHeader title={title} subTitle={subTitle}></MainCardHeader>
      ) : null}
      <div className={`${innerCustomClass}`}>{children}</div>
    </div>
  );
};

export default MainCard;
