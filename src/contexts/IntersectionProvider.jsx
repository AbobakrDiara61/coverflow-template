import IntersectionContext from './IntersectionContext'

const IntersectionProvider = ({children}) => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting)
                console.log(entry);
        });  
    }, {
        threshold: 0.5,
        rootMargin: "-20px",
    })

    const addEntry = (entry) => observer.observe(entry);
    
    const removeEntry = (entry) => observer.unobserve(entry);
    
    const obj = {
        addEntry,
        removeEntry,
    };
    return <IntersectionContext.Provider value={obj} >
        {children}
    </IntersectionContext.Provider>
}

export default IntersectionProvider