const ActiveFilter = ({ text }: { text: string }) => {
  return (
    <p className="border text-sm text-gray-400 h-full grid place-content-center px-3 rounded-lg capitalize">
      {text}
    </p>
  );
};

export default ActiveFilter;
