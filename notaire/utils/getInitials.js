export const getInitials = (fullName) => {
  if (!fullName) return "";

  const words = fullName.trim().split(" ");

  if (words.length < 2) return words[0].charAt(0).toUpperCase();

  const initials =
    words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase();

  return initials;
};
