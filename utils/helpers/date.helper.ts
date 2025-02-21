import { format, subDays } from "date-fns";

export class DateHelper {
  static createdAtFormat = (dateTime: string | Date) => {
    const [now, dateFormat, timeFormat] = [Date.now(), "M/d/yy", "h:mm a"];
    let entryDateFormat = format(dateTime, dateFormat);
    let entryTimeFormat = format(dateTime, timeFormat);
    //
    if (format(now, dateFormat) === entryDateFormat) {
      return `Today at ${entryTimeFormat}`;
    } else if (format(subDays(now, 1), dateFormat) === entryDateFormat) {
      return `Yesterday at ${entryTimeFormat}`;
    } else {
      return format(dateTime, `${dateFormat} ${timeFormat}`);
    }
  };
}
