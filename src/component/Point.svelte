<script>
	import OrangePoint from '/assets/OrangePoint.svg';
	import GreenPoint from '/assets/GreenPoint.svg';
	import BluePoint from '/assets/BluePoint.svg';


	export let variant = 'blue';
	export let text = '';
	export let link = '#';

	let color = {
		blue: {
			background: '#CEF2FF',
			border: '1px solid #E4F8FF',
			img: BluePoint
		},
		green: {
			background: '#EAFCF5',
			border: '1px solid #B8F2DB',
			img: GreenPoint
		},
		orange: {
			background: '#FFE8E2',
			border: '1px solid #FFE4C4',
			img: OrangePoint
		}
	};
	let selectedColor = color[variant];
</script>

<a class="card-point" href={link} target="_blank">
	<span
		class="card-point-image"
		style={`background: ${selectedColor.background}; border: ${selectedColor.border};`}
	>
		<img src={selectedColor.img} alt="Points" />
	</span>
	<p class="card-point-description">{text}</p>
</a>
