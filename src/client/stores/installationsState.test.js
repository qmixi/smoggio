import InstallationsState from './installationsState';
import { installation, installations } from '../../helpers/mocks';

const initialState = {
    installations: {
        installation,
        installations,
        favs: installations
    }
}

describe('installationsState', () => {

    it('sets proper initial value', () => {
        const store = new InstallationsState(initialState);

        expect(store.installations.length).toEqual(3)
        expect(store.favs.length).toEqual(3)
        expect(store.installation.id).toEqual(337)
    });

    it('sets installations properly', () => {
        const store = new InstallationsState();

        expect(store.installations.length).toEqual(0);
        store.setInstallations(installations);
        expect(store.installations.length).toEqual(3);
        expect(store.installations[1].id).toEqual(332);
    });

    it('sets installation properly', () => {
        const store = new InstallationsState();

        expect(store.installation).toEqual({});
        store.setActiveInstallation(installation);
        expect(store.installation.id).toEqual(337);
        expect(store.installation.address.street).toEqual('Droga Wojewódzka 719');
    });

    it('sets favs installations properly', () => {
        const store = new InstallationsState();

        expect(store.favs.length).toEqual(0);
        store.setFavInstallations(installations);
        expect(store.favs.length).toEqual(3);
        expect(store.favs[1].id).toEqual(332);
        expect(store.favs[2].id).toEqual(335);
        expect(store.favs[2].elevation).toEqual(154.11);
        expect(store.favs[2].address.street).toEqual('Krynicka');
    });

    it('sets and removes loading flag in a proper way', () => {
        const store = new InstallationsState();

        expect(store.isLoading).toEqual(false);
        store.setLoadingValue(true);
        expect(store.isLoading).toEqual(true);
        store.setLoadingValue(false);
        expect(store.isLoading).toEqual(false);
    });

    it('returns state object correctly', () => {
        const store = new InstallationsState();

        store.setActiveInstallation(installation);
        store.setFavInstallations(installations);
        store.setInstallations(installations);

        const state = store.toJson();

        expect(store.installation.id).toEqual(337);
        expect(store.installation.address.street).toEqual('Droga Wojewódzka 719');
        expect(store.installations.length).toEqual(3);
        expect(store.installations[1].id).toEqual(332);
        expect(state.favs[1].id).toEqual(332);
        expect(state.favs[2].id).toEqual(335);
        expect(state.favs[2].elevation).toEqual(154.11);
    });
});