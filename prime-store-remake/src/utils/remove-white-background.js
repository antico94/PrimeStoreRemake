export async function removeWhiteBackgroundFromUrl(imageUrl, threshold = 200) {
    try {
        const image = await new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = imageUrl;
        });

        const { width, height } = image;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(image, 0, 0);

        const imageData = ctx.getImageData(0, 0, width, height);
        const { data } = imageData;

        // Apply thresholding
        for (let i = 0; i < data.length; i += 4) {
            const grayValue = 0.2989 * data[i] + 0.5870 * data[i + 1] + 0.1140 * data[i + 2];
            data[i + 3] = grayValue < threshold ? data[i + 3] : 0;
        }

        ctx.putImageData(imageData, 0, 0);

        return canvas.toDataURL('image/png');
    } catch (error) {
        console.error(error);
        return imageUrl;
    }
}
