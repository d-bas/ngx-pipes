import { Moment, isMoment } from 'moment';
import * as moment from 'moment';

export type ElapsedTimeArgument = string | number | Moment | Date;

export interface ElapsedTimeOptions {
  /**
   * Show milliseconds in a result
   */
  withMs?: boolean;
}

/**
 * @ignore
 */
export const elapsedTime = (start: ElapsedTimeArgument, finish: ElapsedTimeArgument, options: ElapsedTimeOptions) => {
  const o: ElapsedTimeOptions = {
    withMs: false,
    ... (options || {})
  };
  const timeFrom: Moment = start ? (!isMoment(start) ? moment(start) : start) : moment();
  const timeTo: Moment = !isMoment(finish) ? moment(finish) : finish;
  const dur = moment.duration(timeTo.diff(timeFrom));
  if (dur.asMilliseconds() < 0) return `00:00${o.withMs ? '.00' : ''}`;
  const m = dur.minutes();
  const mm = '0'.repeat(Math.max(0, 2 - `${m}`.length)) + m;
  const s = dur.seconds();
  const ss = '0'.repeat(Math.max(0, 2 - `${s}`.length)) + s;
  const h = dur.hours();
  const hh = '0'.repeat(Math.max(0, 2 - `${h}`.length)) + h;
  const ms = dur.milliseconds();
  return `${h > 0 ? `${hh}:` : ''}${mm}:${ss}${o.withMs ? `.${ms}` : ''}`;
}
