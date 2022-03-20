const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const getDayMonthYear = (seconds) => {
  const date = new Date(seconds);

  const [day, month, year] = [
    date.getDate(),
    monthNames[date.getMonth()],
    date.getFullYear(),
  ];

  return `${month} ${day}, ${year}`;
};
