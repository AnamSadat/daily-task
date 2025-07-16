import Swal from "sweetalert2"

const urlInput = document.querySelector('#img_url') as HTMLInputElement
const skorInput = document.querySelector('#skor') as HTMLInputElement

skorInput?.addEventListener("input", () => {
  skorInput.value = skorInput.value.replace(/\D/g, '').slice(0, 10)
})

urlInput.addEventListener("change", () => {
  const url = urlInput.value.trim()
  try {
    const parsedUrl = new URL(url)

    if (parsedUrl.hostname !== 'https://4kwallpapers.com/') {
      Swal.fire({
        title: "Warning",
        text: "URL hanya boleh domain 4kwallpapers.com!",
        icon: "warning",
      })
      urlInput.value = ''
    }
  } catch (error) {
    Swal.fire({
      title: "Failed",
      text: "URL tidak valid!",
      icon: "error",
    })
    console.log("Url tidak valid: ", error)
    urlInput.value = ''
  }
})