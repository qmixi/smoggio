export const getUnit = name => {
    if (['PM10', 'PM25', 'PM1',].includes(name)) {
        return 'µg/m³';
    } else if (['TEMPERATURE'].includes(name)) {
        return '°C';
    } else if (['HUMIDITY'].includes(name)) {
        return '%';
    } else if (['PRESSURE'].includes(name)) {
        return 'hPa';
    } else {
        return '';
    }
}