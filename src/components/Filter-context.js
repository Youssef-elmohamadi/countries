import React, {useContext ,useState} from "react";

const FilterContext = React.createContext();

export function useFilter() {
    return useContext(FilterContext);
}   

export function FilterProvider({children}) {
    const [filter, setFilter] = useState("");
    const [search , setSearch] = useState("");

    return (
        <FilterContext.Provider value={{filter, setFilter , search , setSearch}}>
            {children}
        </FilterContext.Provider>
    );
}