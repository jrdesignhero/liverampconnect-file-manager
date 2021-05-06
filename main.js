import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'
import './main.scss' // Import our scss file


$('.record').on('click', function (event) {
    $(this).next('tr.record-detail').slideToggle();
});