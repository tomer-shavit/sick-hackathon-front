interface Props {
  children: React.ReactNode;
  customClass?: string;
}

const SubCard: React.FC<Props> = ({ children, customClass }) => {
  return (
    <div
      className={`mb-4 rounded-lg bg-white p-4 shadow-md dark:border-dark-3 dark:bg-gray-8 ${customClass}`}
    >
      {children}
    </div>
  );
};

export default SubCard;
