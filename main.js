document.addEventListener('DOMContentLoaded', function () {
    var imageModal = document.getElementById('imageModal');
    imageModal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget;
        var imgSrc = button.getAttribute('data-bs-img');
        var modalImage = document.getElementById('modalImage');
        modalImage.src = imgSrc;
    });
});