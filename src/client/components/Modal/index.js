import React, { Component, createContext } from 'react';

import Modal from './Modal';

const ModalContext = createContext();

export const ModalConsumer = ModalContext.Consumer;

export class ModalProvider extends Component {
    state = {
        modalContent: null,
        show: this.show
    };

    show = (modalContent) => {
        this.setState({
            modalContent
        });
    };

    hide = () => {
        this.setState({
            modalContent: null
        });
    };

    render() {
        console.log("modalContent", this.state.modalContent)
        const ContentComponent = this.state.modalContent;
        // const ContentComponent = true;
        return (
            <ModalContext.Provider value={{
                modalContent: this.state.modalContent,
                showModal: this.show
            }}>
                {this.props.children}
                {ContentComponent ? <Modal Content={ContentComponent} hideModal={this.hide} /> : ""}
            </ModalContext.Provider>
        );
    }
}