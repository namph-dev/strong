import { OrderStatus } from '@/types/enum';
const orderStatus = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  DEPOSITED: 'deposited',
  CANCELLED: 'cancelled',
  REFUND: 'refund',
};
export const colorStatus = (status: OrderStatus) => {
  let color = '';
  switch (status) {
    case orderStatus.PENDING:
      color = 'bg-emerald-400';
      break;
    case orderStatus.CONFIRMED:
      color = 'bg-blue-400';
      break;
    case orderStatus.DEPOSITED:
      color = 'bg-red-500';
      break;
    case orderStatus.CANCELLED:
      color = 'bg-red-500';
      break;
    case orderStatus.REFUND:
      color = 'bg-red-500';
      break;
    default:
      color = 'bg-primary';
  }
  return color;
};

export const ReviewStatus = {
  pending: {
    color: 'text-white',
    status: 'pending',
    bgColor: 'bg-[#2db7f5]',
  },
  approved: {
    color: 'text-white',
    status: 'approved',
    bgColor: 'bg-[#87d068]',
  },
};
