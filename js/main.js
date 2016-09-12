$(document).ready( function() {
  if (!DicePass.HasBrowserCryptoSupport()) {
    alert("Your browser version does not support native pseudo random numbers generator.\n\nThe generated passphrase might not be cryptographically safe.\n\n Please use another newer browser.")
  }

  $("#generate-button").click( function(e) {
    e.preventDefault();
    var passphraseWords = DicePass.GeneratePassPhrase(EFF_LARGE_WORDLIST);
    $(".result").text(passphraseWords.join("    "));
    $(".result").show();
  })
});
