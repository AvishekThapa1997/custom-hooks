function useThrottle(func,delay) {
    const throttler = (() => {
        let prevCalledTimeOfFunc = 0;
        return (...args) => {
                const now = Date.now();
                if( now-prevCalledTimeOfFunc > delay) {
                    prevCalledTimeOfFunc = now;
                    func(...args);
                }
            }
        })()
    return throttler;
}

export default useThrottle;