<script  type="module" src="../js/newsletter.js"></script>

<p>You can follow our news via our newsletter, our accounts on <a href="https://www.linkedin.com/company/accessibility-lu/">LinkedIn</a>, <a href="https://mas.to/@accessibilityLu">Mastodon</a> and <a href="https://twitter.com/accessibilityLu">Twitter</a>, and our <a href="./news/feed.xml">RSS feed</a>.</p>

<p>Feel free to subscribe to our newsletter via the form below:</p>

<h3>Newsletter subscription</h3>
<p id="output" role="alert"></p>

<form class="newsletter" id="newsletter" method="POST">
    <p>All the fields are mandatory</p>
    <div>
        <label id="sip_email_label" for="sip_email">E-mail address (example&thinsp;: firstname.lastname@domain.com)</label>
        <input type="email" 
                maxlength="100"
                id="sip_email" 
                name="sip_email"           
                required 
                title="Please enter an email address (example: jean.reuter@etat.lu)">
    </div>
    <div>
        <input type="checkbox" id="sip_consent" required>
        <label for="sip_consent">I agree to receive emails and/or SMS messages, with the understanding that I can easily unsubscribe from these communications at any time after registering.</label>    
    </div>
    <button type="button" id="submitbtn">Subscribe</button>
</form>
