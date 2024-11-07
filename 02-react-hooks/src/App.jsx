import {useState} from 'react'
import Header from "./components/Header.jsx";
import Movie from "./components/Movie.jsx";
import Separator from "./components/Separator.jsx";
import Headlines from "./components/Headlines.jsx";

import heartIcon from "../public/heart.svg"
import moviesList from "./movies.json"

function App() {
    return (
        <div className="bg-gradient-to-b from-gray-950 to-gray-900">
            <Header/>

            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:flex-col lg:min-h-screen">
                <div className="mx-auto max-w-3xl text-center">
                    <Headlines />

                    <div className="flex gap-8 mt-12">
                        <input
                            type="text"
                            className="grow rounded-lg border-gray-200 p-4 pe-12 sm:text-lg/relaxed shadow-sm"
                            placeholder="Buscar um filme"
                        />

                        <button
                            className="inline-block rounded-full border border-gray-800 text-center text-sm text-white hover:bg-gray-800 focus:outline-none focus:ring active:bg-gray-800 size-16"
                        >
                            <img
                                src={heartIcon}
                                alt="Favoritos"
                                title="Acessar favoritos"
                                className="inline-block"
                            />
                        </button>
                    </div>

                    <Separator text="Filmes em Destaque"/>
                </div>

                <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
                    {
                        moviesList.results.map((movie) => {
                            return (
                                <Movie key={movie.id} details={movie} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default App
