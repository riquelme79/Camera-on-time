const botao = document.getElementById("btnLigar");
const video = document.getElementById("videoElemento");

botao.addEventListener("click", function() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            video.srcObject = stream;
        })
        .catch(function() {
            alert("Não foi possível acessar a câmera.");
        });
});