class MediaHandler {
    getPermissions() {
        return new Promise((resolve, rejected) => {
            navigator.mediaDevices
                .getUserMedia({ video: true, audio: true })
                .then((stream) => {
                    resolve(stream);
                })
                .catch((error) => {
                    throw new Error(`Unable to fetch stream ${error}`);
                });
        });
    }
}
