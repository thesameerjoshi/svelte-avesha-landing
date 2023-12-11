<script>
	import Avesha from '/assets/logo/Avesha-L.svg';
	import X from '/assets/logo/X.svg';
	import LInkedIn from '/assets/logo/Linkedin.svg';
	import Slack from '/assets/logo/Slack.svg';
	import YT from '/assets/logo/YT.svg';
	import { footerData } from '@/pages/home/constant';
	import FooterNav from '@/component/FooterNav.svelte';
</script>

<footer>
	<div class="footer-container">
		<div class="footer-head">
			<div class="footer-typography">
				<a href="https://avesha.io" target="_blank">
					<img src={Avesha} alt="Avesha Logo" />
				</a>
				<p class="footer-brand-text">Simplifying Kubernetes Operations with AI</p>
			</div>
			<div class="footer-navigation">
				{#each footerData as item}
					<FooterNav navData={item} />
				{/each}
			</div>
		</div>
		<div class="footer-links">
			<p class="copyright-text">
				Copyright © Avesha {new Date().getFullYear()}. All rights reserved.
			</p>
			<div class="footer-tcp">
				<div class="terms-c">
					<a href="https://avesha.io/terms-and-condition" target="_blank">
						<p class="tcp-link">Terms and Conditions</p>
					</a>
				</div>
				<div class="privacy-policy">
					<a href="https://avesha.io/privacy-policy" target="_blank">
						<p class="tcp-link">Privacy Policy</p>
					</a>
				</div>
			</div>
			<div class="footer-logo">
				<a href="https://x.com/AveshaSystems" target="_blank">
					<img src={X} alt="X.com Logo" />
				</a>
				<a href="https://www.linkedin.com/company/avesha" target="_blank">
					<img src={LInkedIn} alt="LinkedIn Logo" />
				</a>
				<a
					href="https://aveshaio.slack.com/join/shared_invite/zt-14xe5bixi-GwaCGVLE5VRs0o0ATGW4hQ#/shared-invite/email"
					target="_blank"
				>
					<img src={Slack} alt="Slack Logo" />
				</a>
				<a href="https://www.youtube.com/channel/UCtMSqfUzbv33CasQ8mzlSPw" target="_blank">
					<img src={YT} alt="Youtube Logo" />
				</a>
			</div>
		</div>
	</div>
</footer>

<style>
	@import './footer.css';
</style>
