const BadgeCounter = ({ number }) => {
  return (
    <div className="inline-block bg-teal-500 px-2 py-3 text-xs font-semibold text-neutral-100 leading-[0] rounded-full">
      {number}
    </div>
  );
};

export default BadgeCounter;
