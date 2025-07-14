import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);

export const localTimezone = dayjs.tz.guess();
export const offset = dayjs().utcOffset();

export const this_year = dayjs().year();
export const last_year = dayjs().year() - 1;
export const next_year = dayjs().year() + 1;
export const this_month = dayjs().month();
export const last_month = this_month === 0 ? 11 : this_month - 1;
export const next_month = this_month === 11 ? 0 : this_month + 1;
export const today = dayjs();
export const last_30_day = dayjs().subtract(30, 'day');
export const last_7_day = dayjs().subtract(7, 'day');
export const start_this_month = dayjs().startOf('month');
export const end_this_month = dayjs().endOf('month');
export const start_last_month = dayjs(
  `${this_month === 0 ? last_year : this_year}-${last_month + 1}`
).startOf('month');
export const end_last_month = dayjs(
  `${this_month === 0 ? last_year : this_year}-${last_month + 1}`
).endOf('month');
export const start_next_month = dayjs(
  `${this_month === 11 ? next_year : this_year}-${next_month + 1}`
).startOf('month');
export const end_next_month = dayjs(
  `${this_month === 11 ? next_year : this_year}-${next_month + 1}`
).endOf('month');

export const formatAsISOString = (date: Dayjs | Date): string => {
  return dayjs(date).utc(true).tz(localTimezone).toISOString();
};

export const convertToAnyTimezone = (isoString: string | Date): Dayjs => {
  return dayjs.utc(isoString).utcOffset(offset, true);
};

export function addAMPMToTimeString(timeString: string) {
  if (timeString.includes("AM") || timeString.includes("PM")) return timeString;
  let timeConvert =
    timeString.split(":")[0].length === 1 ? "0" + timeString : timeString;
  const time = new Date(`2000-01-01T${timeConvert}`);

  let hours = time.getHours();

  const minutes = time.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedTime = `${hours}:${minutes
    .toString()
    .padStart(2, "0")} ${ampm}`;

  return formattedTime;
}

export function convertTo24HourFormat(timeString: string) {
  if (!timeString.includes("AM") && !timeString.includes("PM"))
    return timeString;
  // console.log('timeString', timeString);
  const [timePart, ampmPart] = timeString.split(" ");
  const [hours, minutes] = timePart.split(":").map(Number);

  const hours24 =
    ampmPart.toLocaleUpperCase().includes("PM") && hours !== 12
      ? hours + 12
      : hours;

  const formattedTime = `${hours24.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return formattedTime;
}
