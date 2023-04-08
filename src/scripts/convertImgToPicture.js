var images = document.querySelectorAll('img');
function __setAttribute(source, img, attr, newAttr) {
  var value = img.getAttribute(attr);
  if (value) {
    source.setAttribute(
      newAttr || attr,
      value.replace(/\.(jpe?g|png|gif)$/i, '.webp')
    );
  }
}

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  if (img.parentElement && img.parentElement.tagName === 'PICTURE' || !(/(jpe?g|png|gif)$/i).test(img.getAttribute('src'))) {
    continue;
  }
  var picture = document.createElement('picture');
  var source = document.createElement('source');
  source.setAttribute('type', 'image/webp');
  __setAttribute(source, img, 'sizes');
  __setAttribute(source, img, 'srcset');
  __setAttribute(source, img, 'media');



  if (!source.hasAttribute('srcset')) {
    __setAttribute(source, img, 'src', 'srcset');
  }

  img.parentElement.insertBefore(picture, img);
  picture.appendChild(source);
  picture.appendChild(img);
}

// let styleImages = document.querySelectorAll('[style*=png], [style*=jpeg], [style*=jpg], [style*=gif]');
// styleImages.forEach(function (item) {
//   let attr = item.getAttribute('style');
//   item.setAttribute('style', attr.replace(/\.(jpe?g|png|gif)/i, '.webp'));
// });