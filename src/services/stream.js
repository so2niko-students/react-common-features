const UPLOAD_URL = 'http://localhost:3000/stream';

export const uploadFile = (file) => {
    const stream = file.stream();

    return fetch(UPLOAD_URL, {
        method: 'POST',
        body: stream,
        duplex: 'half',
        headers: {
            "Content-Type": "application/octet-stream",
            "X-Filename": file.name,
        },
    }).then(r => r.json());
}