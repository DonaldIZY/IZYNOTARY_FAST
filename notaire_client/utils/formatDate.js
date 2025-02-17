export const formatDate = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  return date
    .toLocaleString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // Format 24h
    })
    .replace(",", "");
};

export const formatDateWithoutTime = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  return date
    .toLocaleString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(",", "");
};
