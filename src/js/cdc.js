import { copyElementToClipboard } from './clipboard.js';
document.addEventListener('DOMContentLoaded', function(e) {
    Array.from(document.querySelectorAll('.clipboard')).forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            copyElementToClipboard(btn.parentNode.nextElementSibling);
        })
    })
})