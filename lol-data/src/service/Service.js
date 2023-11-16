export function makeHTTPRequest(url, request, success, failure) {
    fetch(url, request)
        .then(res => res.json())
        .then(res => success(res))
        .catch(err => failure(err.message));
}
