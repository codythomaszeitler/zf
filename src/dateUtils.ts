export function addHours(date: Date, hours: number): Date {
	date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
	return date;
}