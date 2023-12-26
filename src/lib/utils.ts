type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string,dateStyle:DateStyle = 'medium'): string {
    return Intl.DateTimeFormat('en-GB', {dateStyle}).format(new Date(date));
}