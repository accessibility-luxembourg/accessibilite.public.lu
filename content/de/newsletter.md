<script type="module" src="../js/newsletter.js"></script>

<p>Sie können unsere Neuigkeiten über unseren Newsletter, unsere Konten auf <a href="https://www.linkedin.com/company/accessibility-lu/">LinkedIn</a>, <a href="https://mas.to/@accessibilityLu">Mastodon</a> und <a href="https://bsky.app/profile/accessibilite.public.lu">Bluesky</a> sowie unseren <a href="./news/feed.xml">RSS-Feed</a> verfolgen.</p>

<p>Abonnieren Sie unseren Newsletter gerne über das untenstehende Formular:</p>

<h3>Newsletter-Abonnement</h3>
<p id="output" role="alert"></p>

<form class="newsletter" id="newsletter" method="POST"> 
<p>Alle Felder sind Pflichtfelder</p> 
<div> 
<label id="sip_email_label" for="sip_email">E-Mail-Adresse (Beispiel&thinsp;: vorname.nachname@domain.com)</label> 
<input type="email" 
maxlength="100" 
id="sip_email" 
name="sip_email"
autocomplete="email"
required 
title="Bitte geben Sie eine E-Mail-Adresse ein (Beispiel: jean.reuter@etat.lu)"> 
</div> 
<div> 
<input type="checkbox" id="sip_consent" required> 
<label for="sip_consent">Ich bin damit einverstanden, E-Mails und/oder SMS-Nachrichten zu erhalten, mit der Maßgabe, dass ich diese Mitteilungen jederzeit nach der Registrierung problemlos abbestellen kann.</label> 
</div> 
<button type="button" id="submitbtn">Abonnieren</button>
</form>