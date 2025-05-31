import dayjs from "dayjs";

export function formatTime(date) {
  return dayjs(date).format('YYYY-MM-DD');
}