"use client"
import React, { useState } from 'react';

export default function SearchFilters() {
    const [selectedFilters, setSelectedFilters] = useState<number[] | null>([]); // Use an array to store selected filter indices

    const filters = [
        { filterName: "Accepts first-year applications" },
        { filterName: "Accepts transfer applications" },
        { filterName: "Public" },
        { filterName: "Private" },
        { filterName: "Small (2,000 and under)" },
        { filterName: "Medium (2,001 to 14,999)" },
        { filterName: "Large (15,000+)" },
        { filterName: "Rural" },
        { filterName: "Suburban" },
        { filterName: "Urban" },
        { filterName: "HBCU" },
        { filterName: "Hispanic-serving institution" },
    ];

    const toggleFilter = (index: number) => {
        if (selectedFilters?.includes(index)) {
            // Filter is already selected, so deselect it
            setSelectedFilters(selectedFilters.filter((filterIndex) => filterIndex !== index));
        } else {
            // Filter is not selected, so select it
            setSelectedFilters([...selectedFilters!, index]);
        }
    };

    return (
        <div>
            <input
                name="search"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-500 placeholder:font-bold focus:outline-none block w-full rounded-full sm:text-lg"
                type="text"
                placeholder="Enter college name "
            />
            <p className={`pt-10 font-medium py-2`}>Search by filter (optional)</p>
            <div className={`flex flex-row gap-2 sm:gap-3 items-center flex-wrap`}>
                {filters.map((filter, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer rounded-full flex flex-row items-center text-xs sm:text-sm gap-1 px-4 sm:py-3 py-1 ${
                            selectedFilters?.includes(index) ? 'bg-[#2d6666] text-white' : 'bg-[#4daeae]'
                        }`}
                        onClick={() => toggleFilter(index)}
                    >
                        <div className={`${selectedFilters?.includes(index)? `flex` : `hidden`}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 draw-animation`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                        <p className={`flex items-center`}>{filter.filterName}</p>
                    </div>
                ))}
            </div>
            <div className={`block sm:flex pb-10 items-center `}>
                <button className="bg-black w-full sm:w-fit transition duration-300 ease-in-out mt-16 text-white hover:bg-opacity-80 font-semibold px-8 py-4 rounded-full">
                    start
                </button>
                <button className="sm:mt-16 flex w-full text-left text-black hover:bg-opacity-60 font-semibold px-8 py-4">
                    Or view all colleges
                    <span className="sm:flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="items-center mt-1 w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
}
