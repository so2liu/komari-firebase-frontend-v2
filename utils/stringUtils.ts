export const capitalizeStart = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
};
