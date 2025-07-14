export interface Filter {
  page: number;
  limit: number;
  keyword?: string;
  order_by: string | 'id';
  order_dir: 'ASC' | 'DESC';
  filter_name?: string[];
  filter_value?: any[];
  [key: string]: string | number | undefined | string[] | any[];
}

export interface DataFilter<T> {
  page: number;
  limit: number;
  total: number;
  data: Array<T>;
  extra?: any;
}

export interface DurationItem {
  duration: number;
  duration_unit: 'hour' | 'day';
}

export interface ToursFilter<T> {
  duration: Array<T>;
}

export interface ToursFilterProps {

  duration: Array<DurationItem>;

}

