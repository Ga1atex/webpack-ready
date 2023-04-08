
import imagemin from "imagemin";
import webp from "imagemin-webp";

imagemin(['src/img/*.{jpg,png}'], {
  destination: 'src/img',
  plugins: [
    webp({ quality: 60 })
  ]
});
