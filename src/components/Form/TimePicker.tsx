import React from 'react';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import { useTranslations } from 'next-intl';

type Ttime = {
  id: number;
  time: string;
};
// let data: Ttime[] = [];
// for (let i = 1; i <= 24; i++) {
//   let hour = Math.floor((i - 1) / 2);
//   if (i === 1 || i === 2) {
//     hour += 12;
//   }
//   const minute = i % 2 === 0 ? '30' : '00';

//   data.push({
//     id: i,
//     time: `${hour}:${minute}`,
//   });
// }

let data: Ttime[] = [];
for (let i = 0; i <= 11; i++) {
  if (i === 0) {
    data.push({
      id: i,
      time: `12:00`,
    });
  } else {
    data.push({
      id: i,
      time: `${i}:00`,
    });
  }
}

interface Props {
  className?: string;
  name?: string;
  control?: any;
  children?: React.ReactNode;
  value?: string | undefined;
  placeholder?: string;
  clear?: boolean;
  handleSelect?: (time: string) => void;
  // Rest properties
  [key: string]: any;
}
export function MyTimePicker({ handleSelect, value }: Props) {
  const t = useTranslations('tour');
  const [open, setOpen] = React.useState<boolean>(false);
  const [time, setTime] = React.useState<string>(value || '');
  const onOpenChange = (value: boolean) => {
    setOpen(value);
  };

  const handleSelectTime = (value: string) => {
    setTime(value.toLocaleUpperCase());
    handleSelect && handleSelect(value.toLocaleUpperCase());
  };

  const handleApllyTime = () => {
    // setValue(value.toLocaleUpperCase());
    handleSelect && handleSelect(time);
    setOpen(false);
  };
  // console.log(time);
  return (
    <div>
      <Popover open={open} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={`justify-between w-auto ${
              value ? 'bg-primary text-white' : 'border-primary text-text1'
            }`}>
            {value ? value : t('select_time')}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-[250px] p-0">
          <Command>
            <CommandGroup>
              <div className="grid grid-cols-2 mb-2">
                <div className="max-h-[200px] overflow-y-auto z-20">
                  {data.map((item) => (
                    <CommandItem
                      key={item.id}
                      value={`${item.time} AM`}
                      onSelect={handleSelectTime}
                      className={`pr-5 ${
                        time === `${item.time} AM` && 'bg-slate-300'
                      }`}>
                      {`${item.time} AM`}
                    </CommandItem>
                  ))}
                </div>
                <div className="max-h-[200px] overflow-y-auto z-20">
                  {data.map((item) => (
                    <CommandItem
                      key={item.id}
                      value={`${item.time} PM`}
                      onSelect={handleSelectTime}
                      className={`pr-5 ${
                        time === `${item.time} PM` && 'bg-slate-300'
                      }`}>
                      {`${item.time} PM`}
                    </CommandItem>
                  ))}
                </div>
              </div>
              <Button className="w-full text-white" onClick={handleApllyTime}>
                {t('apply')}
              </Button>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
