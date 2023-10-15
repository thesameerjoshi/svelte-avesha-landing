import KubeSlice from '/src/assets/KubeSlice.svg';
import KubeSliceManager from '/src/assets/KubeSliceManager.svg';
import SamartScaler from '/src/assets/SmartScaler.svg';
import STD from '/src/assets/STD.svg';

const cards = [
	{
		title: 'Kubeslice',
		image: {
			url: KubeSlice,
			alt: 'Kubeslice'
		},
		description: 'This section provides a high-level introduction and understanding of Kubeslice,',
		link: 'https://docs.kubeslice.io',
		points: [
			{ point: 'What is kubeslice', link: 'https://docs.kubeslice.io' },
			{ point: 'High level architecture', link: 'https://docs.kubeslice.io' },
			{ point: 'Kubeslice components', link: 'https://docs.kubeslice.io' },
			{ point: 'Key features', link: 'https://docs.kubeslice.io' }
		],
		variant: 'orange'
	},
	{
		title: 'KubeSlice Manager',
		image: {
			url: KubeSliceManager,
			alt: 'Kubeslice Manager'
		},
		description: 'This section provides a high-level introduction and understanding of Kubeslice,',
		link: 'https://docs.kubeslice.io',
		points: [
			{ point: 'What is kubeslice', link: 'https://docs.kubeslice.io' },
			{ point: 'High level architecture', link: 'https://docs.kubeslice.io' },
			{ point: 'Kubeslice components', link: 'https://docs.kubeslice.io' },
			{ point: 'Key features', link: 'https://docs.kubeslice.io' }
		],
		variant: 'orange'
	},
	{
		title: 'Smart Scaler',
		image: {
			url: SamartScaler,
			alt: 'Smart Scaler'
		},
		description: 'This section provides a high-level introduction and understanding of Kubeslice,',
		link: 'https://docs.kubeslice.io',
		points: [
			{ point: 'What is kubeslice', link: 'https://docs.kubeslice.io' },
			{ point: 'High level architecture', link: 'https://docs.kubeslice.io' },
			{ point: 'Kubeslice components', link: 'https://docs.kubeslice.io' },
			{ point: 'Key features', link: 'https://docs.kubeslice.io' }
		],
		variant: 'green'
	},
	{
		title: 'Smart Traffic Director',
		image: {
			url: STD,
			alt: 'Smart Traffic Director'
		},
		description: 'This section provides a high-level introduction and understanding of Kubeslice,',
		link: 'https://docs.kubeslice.io',
		points: [
			{ point: 'What is kubeslice', link: 'https://docs.kubeslice.io' },
			{ point: 'High level architecture', link: 'https://docs.kubeslice.io' },
			{ point: 'Kubeslice components', link: 'https://docs.kubeslice.io' },
			{ point: 'Key features', link: 'https://docs.kubeslice.io' }
		],
		variant: 'green'
	}
];

const points = [
	{ point: 'What is kubeslice', link: 'https://docs.kubeslice.io' },
	{ point: 'High level architecture', link: 'https://docs.kubeslice.io' },
	{ point: 'Kubeslice components', link: 'https://docs.kubeslice.io' },
	{ point: 'Key features', link: 'https://docs.kubeslice.io' }
];

export { cards, points };
