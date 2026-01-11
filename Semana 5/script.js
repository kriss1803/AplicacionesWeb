// Referencias
const imageUrlInput = document.getElementById("imageUrl");
const addImageBtn = document.getElementById("addImage");
const deleteImageBtn = document.getElementById("deleteImage");
const gallery = document.getElementById("gallery");

let selectedImage = null;


// AGREGAR IMAGEN NUEVA
addImageBtn.addEventListener("click", addImage);

function addImage() {
  const url = imageUrlInput.value.trim();

  if (url === "") {
    alert("Ingresa una URL válida.");
    return;
  }

  const col = document.createElement("div");
  col.className = "col-sm-6 col-md-4 col-lg-3";

  const img = document.createElement("img");
  img.src = url;
  img.className = "img-fluid gallery-img";

  // Evento de selección
  img.addEventListener("click", () => selectImage(img));

  col.appendChild(img);
  gallery.appendChild(col);

  imageUrlInput.value = "";
}


// SELECCIONAR IMAGEN
function selectImage(img) {
  if (selectedImage) {
    selectedImage.classList.remove("selected");
  }

  selectedImage = img;
  selectedImage.classList.add("selected");
}


// ELIMINAR IMAGEN SELECCIONADA
deleteImageBtn.addEventListener("click", deleteSelectedImage);

function deleteSelectedImage() {
  if (!selectedImage) {
    alert("No hay ninguna imagen seleccionada.");
    return;
  }

  // Eliminamos la columna completa (Bootstrap)
  selectedImage.parentElement.remove();
  selectedImage = null;
}


// ATAJOS DE TECLADO
document.addEventListener("keydown", (event) => {
  if (event.key === "Delete") {
    deleteSelectedImage();
  }

  if (event.key === "Enter") {
    addImage();
  }
});


// IMÁGENES POR DEFECTO
const initialImages = document.querySelectorAll(".gallery-img");

initialImages.forEach(img => {
  img.addEventListener("click", () => selectImage(img));
});
