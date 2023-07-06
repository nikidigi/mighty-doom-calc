function calc() {
    const coinsPerLevel = 150;
    const tokensPerLevel = $('#tokens-per-level').val() * 1;
    const from = $('#level-from').val() * 1;
    const to = $('#level-to').val() * 1;
    let coins = 0;
    let tokens = 0;

    for (let i = from; i < to; i += 1) {
        coins += coinsPerLevel * i;
        tokens += tokensPerLevel * i;
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
    }, 333);
}

$(document).ready(() => {
    calc();
});
