import dayjs from 'dayjs'; // Import thư viện dayjs

interface DateProps {
  dateString: string;
}

const DateComponent: React.FC<DateProps> = ({ dateString }) => {
  const date = dayjs(dateString);
  return <time dateTime={dateString}>{date.format('MMM DD, YYYY')}</time>;
};

export default DateComponent;
