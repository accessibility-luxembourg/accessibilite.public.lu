<script src="../../js/newsletter.js"></script>

<p>Vous pouvez suivre nos actualités via notre lettre d'information, notre présence sur les réseaux sociaux <a href="https://www.linkedin.com/company/accessibility-lu/">LinkedIn</a>, <a href="https://mas.to/@accessibilityLu">Mastodon</a> et <a href="https://twitter.com/accessibilityLu">Twitter</a>, ainsi que via notre <a href="./news/feed.xml">fil RSS</a>.</p>

<p>N'hésitez pas à vous inscrire à notre lettre d'information via le formulaire ci-dessous&nbsp;:</p>

<h3>Inscription à la lettre d'information</h3>
<p id="output" role="alert"></p>

<form class="newsletter" id="newsletter" method="POST">
    <p>Le champ et la case à cocher sont obligatoires</p>
    <div>
        <label id="sip_email_label" for="sip_email">Adresse e-mail (exemple&thinsp;: nom.prenom@domaine.com)</label>
        <input type="email" 
                maxlength="100"
                id="sip_email" 
                name="sip_email" 
                autocomplete="email" 
                required 
                title="Veuillez renseigner une adresse e-mail (exemple : jean.reuter@etat.lu)">
    </div>
    <div>
        <input type="checkbox" id="sip_consent" required>
        <label for="sip_consent">J'accepte de recevoir des courriers électroniques et/ou des SMS, étant entendu que je peux facilement me désinscrire de ces communications à tout moment après mon inscription.</label>    
    </div>
    <button type="button" id="submitbtn">Je m'inscris</button>
</form>
