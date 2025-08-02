export const storage = {
    get<T = any>(key: string): T | null {
        const item = localStorage.getItem(key);

        return item ? JSON.parse(item) : null;
    },

    set<T = any>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    },

    remove(key: string): void {
        localStorage.removeItem(key);
    },
}