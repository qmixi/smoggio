import { getUnit } from './utils';

describe('getUnit helper', () => {

    it('returns proper default value', () => {
        expect(getUnit('')).toEqual('')
    });

    it('returns proper value for PM10 indicator', () => {
        expect(getUnit('PM10')).toEqual('µg/m³')
    });

    it('returns proper value for PM25 indicator', () => {
        expect(getUnit('PM25')).toEqual('µg/m³')
    });

    it('returns proper value for PM1 indicator', () => {
        expect(getUnit('PM1')).toEqual('µg/m³')
    });

    it('returns proper value for TEMPERATURE indicator', () => {
        expect(getUnit('TEMPERATURE')).toEqual('°C')
    });

    it('returns proper value for HUMIDITY indicator', () => {
        expect(getUnit('HUMIDITY')).toEqual('%')
    });

    it('returns proper value for PRESSURE indicator', () => {
        expect(getUnit('PRESSURE')).toEqual('hPa')
    });
});
