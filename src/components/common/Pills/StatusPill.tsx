interface StatusPillProps {
  status: "Active" | "Pending";
}
const StatusPill: React.FC<StatusPillProps> = ({ status }) => {
  return (
    <div className="my-2 flex items-center space-x-2">
      <span
        className={`rounded-full px-2 py-1 text-sm ${
          status === "Active"
            ? "bg-green-200 text-green-800"
            : "bg-yellow-200 text-yellow-800"
        }`}
      >
        {status}
      </span>
    </div>
  );
};

export default StatusPill;
