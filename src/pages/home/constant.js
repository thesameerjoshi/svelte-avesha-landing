import KubeSlice from '../../assets/KubeSlice.svg';
import KubeSliceManager from '../../assets/KubeSliceManager.svg';
import SamartScaler from '../../assets/SmartScaler.svg';
import STD from '../../assets/STD.svg';

const cards = [
	{
		title: 'Kubeslice',
		image: KubeSlice,
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
		image: KubeSliceManager,
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
		image: SamartScaler,
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
		image: STD,
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

const opensourcePoints = [
	{ point: 'What is kubeslice', link: 'https://docs.kubeslice.io' },
	{ point: 'High level architecture', link: 'https://docs.kubeslice.io' },
	{ point: 'Kubeslice components', link: 'https://docs.kubeslice.io' },
	{ point: 'Key features', link: 'https://docs.kubeslice.io' }
];

export { cards, opensourcePoints as points };
