import { createSlice } from '@reduxjs/toolkit'


export const componentsSlice = createSlice({
    name: 'components',

    initialState: {

        dropDown: false,
        modalToUpdate: false,
        modalToNewUrl: false,
        modalToDelete: false,

    },
    reducers: {
        openDropdown: (state,) => {
            state.dropDown = true;
        },
        closeDropdown: (state,) => {
            state.dropDown = false;
        },

        openToUpdateModal: (state,) => {
            state.modalToUpdate = true;
        },
        closeToUpdateModal: (state,) => {
            state.modalToUpdate = false;
        },
        openToNewUrlModal: (state,) => {
            state.modalToNewUrl = true;
        },
        closeToNewUrlModal: (state,) => {
            state.modalToNewUrl = false;
        },
        openToDeleteModal: (state,) => {
            state.modalToDelete = true;
        },
        closeDeleteModal: (state,) => {
            state.modalToDelete = false;
        }
    },

})

export const { openDropdown, closeDropdown,
    openToUpdateModal,
    closeToUpdateModal,
    openToNewUrlModal,
    closeToNewUrlModal,
    openToDeleteModal,
    closeDeleteModal } = componentsSlice.actions
