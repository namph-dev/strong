"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { ITourCalendarPrice } from "@/types";
import dayjs from "dayjs";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;
export type CustomCalendarProps = CalendarProps & {
  prices?: ITourCalendarPrice[];
};

function Calendar({
  className,
  classNames,
  initialFocus,
  locale,
  prices,
  showOutsideDays = false,
  ...props
}: CustomCalendarProps) {
  const validDates =
    prices?.map((price) => dayjs(price.date).format("YYYY-MM-DD")) || [];

  const isDateValid = (date: Date) => {
    if (prices && prices.length > 0) {
      const dateKey = dayjs(date).format("YYYY-MM-DD");
      return validDates.includes(dateKey);
    }
    if (props.disabled) {
      return props.disabled;
    }
    const today = new Date();
    return (
      date >= new Date(today.getFullYear(), today.getMonth(), today.getDate())
    );
  };

  const CustomDayButton = (props: any): JSX.Element => {
    const { day, modifiers, ...rest } = props;
    const dateKey = dayjs(day.date).format("YYYY-MM-DD");
    const priceObject = prices?.find((p) => p.date === dateKey);

    if (modifiers.disabled) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            margin: 0,
            lineHeight: 1.1,
            backgroundColor: "inherit",
            color: "gray", // Style for disabled days
            borderRadius: "50%",
            cursor: "not-allowed", // Prevent interaction
          }}
        >
          <div style={{ fontWeight: "normal", color: "inherit" }}>
            {day.date.getDate()}
          </div>
          {priceObject?.adult_price && (
            <small
              style={{ fontSize: "0.7rem", marginTop: "4px", color: "#ccc" }}
            >
              ${priceObject.adult_price}
            </small>
          )}
        </div>
      );
    }

    return (
      <div
        {...rest}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          margin: 0,
          lineHeight: 1.1,
          backgroundColor: modifiers.selected
            ? "var(--primary-color)"
            : "inherit",
          color: modifiers.selected ? "white" : "inherit",
          borderRadius: "50%",
          cursor: "pointer", // Interactive for valid dates
        }}
      >
        <div
          style={{
            fontWeight: modifiers.today ? "bold" : "normal",
            color: modifiers.today ? "var(--primary-color)" : "inherit",
          }}
        >
          {day.date.getDate()}
        </div>
        {priceObject?.adult_price && (
          <small
            style={{ fontSize: "0.7rem", marginTop: "4px", color: "#fabf08" }}
          >
            ${priceObject.adult_price}
          </small>
        )}
      </div>
    );
  };

  return (
    <DayPicker
      mode="single"
      locale={locale}
      showOutsideDays={showOutsideDays}
      className={"px-1 py-3"}
      classNames={{
        months: "relative flex flex-wrap justify-center gap-8",
        month_caption:
          "flex items-center font-medium mb-3 justify-center text-lg h-9 px-2 text-gray-800",
        nav: "absolute inset-x-0 flex justify-between items-center h-9 gap-2 ",
        button_next:
          "relative inline-flex items-center justify-center size-9 hover:bg-gray-100 rounded",
        button_previous:
          "relative inline-flex items-center justify-center size-9 hover:bg-gray-100 rounded",
        chevron: "inline-block size-7 fill-gray-400",
        week: "grid grid-cols-7",
        weekdays: "grid grid-cols-7",
        weekday: "size-9 flex items-center justify-center text-gray-500",
        day: "w-12 h-12 inline-flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-200 hover:text-gray-900 size-9 font-normal aria-selected:opacity-100 cursor-pointer",
        day_button: "w-full h-full",
        today: "bg-gray-300 text-white font-semibold", // Use global primary color for today
        selected:
          "bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white",
        outside: "text-gray-500 opacity-50",
        disabled: "text-gray-500 opacity-50 cursor-not-allowed", // Style for disabled days
        range_middle:
          "aria-selected:bg-blue-50 aria-selected:text-gray-900 aria-selected:hover:bg-blue-200 rounded-none",
        hidden: "invisible",
      }}
      modifiers={{
        disabled: (date) => !isDateValid(date), // Disable dates not in the price list
      }}
      components={{
        DayButton: (props) => <CustomDayButton {...props} />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
