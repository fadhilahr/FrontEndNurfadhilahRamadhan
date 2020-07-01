export async function filteredFetch(url, options) {
    return await fetch(
        url, options
    ).then(response => {
        if (!response.ok) {
            throw new Error('Unknown Error');
        }
        // console.log("======================"+response.json);
        return response.json();
    }).then(json => {
        if (json.message != "Get contacts") {
            throw new Error(json.message || 'Unknown error');   
        }
        return json.data;
    });
}
