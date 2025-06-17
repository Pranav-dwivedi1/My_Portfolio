const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'src', 'assets', 'home');
const images = ['project_img1.avif', 'project_img2.avif', 'project_img3.avif'];

async function convertImages() {
    for (const image of images) {
        const inputPath = path.join(sourceDir, image);
        const outputPath = path.join(sourceDir, image.replace('.avif', '.webp'));

        try {
            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);
            console.log(`Converted ${image} to WebP format`);
        } catch (error) {
            console.error(`Error converting ${image}:`, error);
        }
    }
}

convertImages(); 