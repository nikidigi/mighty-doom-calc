const COINS_PER_LEVEL = 150;
const TOKENS_PER_LEVEL = 2;

function calc() {
    const from = $('#level-from').val() * 1;
    const to = $('#level-to').val() * 1;
    let coins = 0;
    let tokens = 0;

    for (let i = from; i < to; i += 1) {
        coins += COINS_PER_LEVEL * i;
        tokens += TOKENS_PER_LEVEL * i;
    }

    $('#coins').val(coins);
    $('#tokens').val(tokens);
}

function copyToClipboard(button, inputId) {
    const el = document.getElementById(inputId);
    const icon = $('i', button);

    navigator.clipboard.writeText(el.value);

    icon.removeClass('bi-clipboard').addClass('bi-clipboard-check');
    
    setTimeout(() => {
        icon.removeClass('bi-clipboard-check').addClass('bi-clipboard');
    }, 500);
}

$(document).ready(() => {
    calc();
});
