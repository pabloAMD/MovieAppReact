import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from '../../public/components/Loading';
import { MovieDetail } from '../../public/components/MovieDetail';
import { getById } from '../../controller/getById';
import { NavBarPrivate } from '../components/NavBarPrivate';
import { deleteMovieApi } from '../../hooks/useFetchApi';
import { openToDeleteModal, openToUpdateModal,closeDeleteModal } from '../../../store/slice/componentsSlice';
import { ModalUpdateMovie } from '../components/modalUpdateMovie';
import { Footer } from '../../public/components/Footer';


export const MovieDetailPrivate = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { modalToUpdate, modalToDelete } = useSelector(state => state.componentState);

    const navigate = useNavigate();



    const [isLoading, setIsLoading] = useState(true);
    const [movieById, setMovieById] = useState(0);
    



    useEffect(() => {
        getById(id).then((data) => {
            setMovieById(data);
            setIsLoading(false);
            
        });
    }, [isLoading])



    const onDeleteMovie = () => {

        dispatch(closeDeleteModal()),

        deleteMovieApi(id).then(navigate("/"));

    }


    return (
        <>
            <NavBarPrivate />

            {
                isLoading && (<Loading />)
            }

            <MovieDetail movieById={movieById} isLoading={isLoading} />


            <div>
                <h1 className='mx-16'>Actions</h1>

                <div className='py-5 mx-16 flex justify-center'>
                    <button type="button" onClick={() => { dispatch(openToUpdateModal()) }} className=" block w-96 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-3.5 py-6 text-center mr-2 mb-2">Update</button>
                    <button type="button" onClick={() => { dispatch(openToDeleteModal()) }} className="lock w-96 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xl px-3.5 py-6 text-center mr-2 mb-2">Delete</button>
                </div>



                {modalToUpdate ? (

                    <ModalUpdateMovie movieById={movieById}  />
                ) : null}

                {modalToDelete ? (

                            <>
                                <div tabIndex="-1" className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-full h-full max-w-md md:h-auto">

                                        <div className="relative bg-slate-200 rounded-lg shadow dark:bg-gray-700">

                                            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                                    Warnig !!!
                                                </h3>

                                            </div>

                                            <div className="p-6 space-y-6">
                                                <h3>Are you sure that delete this movie? </h3>
                                            </div>

                                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                <button onClick={ onDeleteMovie } type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Yes</button>
                                                <button onClick={() => { dispatch(closeDeleteModal()) }} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : null}



            </div>

            <Footer />


        </>
    )
}
