import SWRFetcher from "./SWRFetcher";

const SWRConfigObj = {
    shouldRetryOnError: false,
    revalidateOnFocus : false,
    revalidateOnReconnect : false,
    revalidateIfStale: false,
    fetcher: SWRFetcher
}

export default SWRConfigObj