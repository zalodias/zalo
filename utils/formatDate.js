export const formatDate = (date) => {
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const fullDate = new Date(date);

  return fullDate.toLocaleDateString("en-US", options);
};
