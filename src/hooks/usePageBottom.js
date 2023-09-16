import useIntersectionObserver from "./useIntersectionObserver";

function usePageBottom() {
    const {intersectElement : lastElementRef} = useIntersectionObserver(() => {
        console.log('Page bottom reached')
    });
    return lastElementRef;
}

export default usePageBottom;