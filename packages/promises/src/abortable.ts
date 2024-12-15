import { safeRace } from './race';

export function getAbortablePromise<T>(promise: Promise<T>, abortSignal?: AbortSignal): Promise<T> {
    if (!abortSignal) {
        return promise;
    } else {
        return safeRace([
            // This promise only ever rejects if the signal is aborted. Otherwise it idles forever.
            // It's important that this come before the input promise; in the event of an abort, we
            // want to throw even if the input promise's result is ready
            new Promise<never>((_, reject) => {
                const handleReject = () => reject(new Error(String(abortSignal.reason)));
                if (abortSignal.aborted) {
                    handleReject();
                } else {
                    abortSignal.addEventListener('abort', handleReject);
                }
            }),
            promise,
        ]);
    }
}
