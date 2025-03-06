function fetchesFirstPostWithPromise() {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then((data) => {
        console.log("first post title (promises):", data[0].title);
    })
    .catch((error) => console.error("error", error));
}

fetchesFirstPostWithPromise();

async function fetchFirstPorstwithAsyncAwait() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log("first post title (async/await):", data[1].title);
    } catch (error) {
        console.error("error", error);
    }

}

fetchFirstPorstwithAsyncAwait();