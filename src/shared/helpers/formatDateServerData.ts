export const formatDate = (i: string) => new Date(i).toLocaleDateString('ru-Ru', { timeZone: 'Europe/Moscow', month: 'long', day:'numeric' });
export const formatTime = (i: string) => new Date(i).toLocaleTimeString('ru-Ru', { timeZone: 'Europe/Moscow', hour:'numeric', minute:'numeric' });
