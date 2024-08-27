window.bootstrap = require("bootstrap/dist/js/bootstrap.min.js") 
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/js/all.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
import './css/style.css';

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))